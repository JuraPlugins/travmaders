// ==========================================================================
// PSYC 4115: The Psychology of Trauma - Master Interactive Application Logic
// Features: Quiz Engine, Flashcards, Clinical Case Simulator, Comparison Matrices,
//           Option-by-Option Analysis, Keyboard Shortcuts, Timer, Strikethrough, Bookmarks
// ==========================================================================

const APP_STATE = {
  currentTab: 'overview',
  theme: localStorage.getItem('trauma_theme') || 'dark',
  soundEnabled: localStorage.getItem('trauma_sound') !== 'false',
  
  // Concept search & filter states
  conceptFilters: {
    source1: { category: 'all', search: '' },
    source2: { category: 'all', search: '' },
    source3: { category: 'all', search: '' },
    source4: { category: 'all', search: '' }
  },

  // Active subtab per module: 'concepts' or 'quiz'
  subTabs: {
    source1: 'concepts',
    source2: 'concepts',
    source3: 'concepts',
    source4: 'concepts',
    final: 'quiz'
  },

  // Quiz navigation states
  quizStates: {
    source1: { currentIndex: 0, filterMode: 'all' },
    source2: { currentIndex: 0, filterMode: 'all' },
    source3: { currentIndex: 0, filterMode: 'all' },
    source4: { currentIndex: 0, filterMode: 'all' },
    final: { 
      currentIndex: 0, 
      filterMode: 'all', 
      examMode: false, // true = test simulation, false = instant learning
      examSubmitted: false,
      timerSeconds: 40 * 60, // 40 minutes
      timerInterval: null,
      timerRunning: false
    }
  },

  // Eliminated options (strikethroughs): { [sourceKey]: { [qId]: Set(optionIndices) } }
  eliminatedOptions: {},

  // Bookmarked questions: { [sourceKey]: Set(questionIds) }
  bookmarkedQuestions: JSON.parse(localStorage.getItem('trauma_bookmarks') || '{}'),

  // Saved answers: { [sourceKey]: { [questionId]: { selectedIndex, isCorrect, timestamp } } }
  userAnswers: JSON.parse(localStorage.getItem('trauma_answers') || '{}'),

  // Flashcards state
  flashcards: {
    currentDeck: 'all',
    currentIndex: 0,
    isFlipped: false,
    learnedIds: JSON.parse(localStorage.getItem('trauma_fc_learned') || '[]'),
    reviewIds: JSON.parse(localStorage.getItem('trauma_fc_review') || '[]')
  },

  // Clinical Case Simulator state
  clinicalCases: {
    activeCaseId: 'case_1',
    userDecisions: JSON.parse(localStorage.getItem('trauma_case_decisions') || '{}')
  },

  // Active comparison matrix key
  activeMatrixKey: 'asb_vs_tssb'
};

// Map source keys to their respective data sets
const SOURCE_MAP = {
  source1: {
    key: 'source1',
    name: 'Kaynak 1',
    title: 'Giriş, Travma Türleri & Çocukluk Çağı',
    slidesFile: 'ABUtrauma1ve2_Engl.pptx',
    concepts: CONCEPTS_DATA.source1.concepts,
    questions: QUESTIONS_SOURCE1
  },
  source2: {
    key: 'source2',
    name: 'Kaynak 2',
    title: 'Travma Tepkileri, TSSB, Büyüme (PTG) & Riskler',
    slidesFile: 'ABUtrauma3.pptx',
    concepts: CONCEPTS_DATA.source2.concepts,
    questions: QUESTIONS_SOURCE2
  },
  source3: {
    key: 'source3',
    name: 'Kaynak 3',
    title: 'Otonom Regülasyon, HPA, ASB & Tarihçe',
    slidesFile: 'ABUtrauma4.pptx',
    concepts: CONCEPTS_DATA.source3.concepts,
    questions: QUESTIONS_SOURCE3
  },
  source4: {
    key: 'source4',
    name: 'Kaynak 4',
    title: 'DSM-5-TR Kriterleri, Disosiasyon & Ölçekler',
    slidesFile: 'ABUtrauma5.pptx',
    concepts: CONCEPTS_DATA.source4.concepts,
    questions: QUESTIONS_SOURCE4
  },
  final: {
    key: 'final',
    name: 'Final Sınavı',
    title: 'Kapsamlı Bütünleşik Sınav (Orta-Zor)',
    slidesFile: 'Tüm Kaynaklar',
    concepts: [],
    questions: QUESTIONS_FINAL
  }
};

// Initialize structures
['source1', 'source2', 'source3', 'source4', 'final'].forEach(k => {
  if (!APP_STATE.userAnswers[k]) APP_STATE.userAnswers[k] = {};
  if (!APP_STATE.bookmarkedQuestions[k]) APP_STATE.bookmarkedQuestions[k] = [];
  if (!APP_STATE.eliminatedOptions[k]) APP_STATE.eliminatedOptions[k] = {};
});

// ==========================================================================
// Web Audio API Synthesis for Sound Effects
// ==========================================================================
let audioCtx = null;

function playAudioFeedback(isCorrect) {
  if (!APP_STATE.soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (isCorrect) {
      // Pleasant high double chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else {
      // Gentle lower chord
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(261.63, now); // C4
      osc.frequency.setValueAtTime(220.00, now + 0.1); // A3
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (e) {
    // Audio unsupported or blocked
  }
}

// ==========================================================================
// Save State to LocalStorage
// ==========================================================================
function saveAnswers() {
  localStorage.setItem('trauma_answers', JSON.stringify(APP_STATE.userAnswers));
  updateGlobalBadgeStats();
}

function saveBookmarks() {
  localStorage.setItem('trauma_bookmarks', JSON.stringify(APP_STATE.bookmarkedQuestions));
}

function saveFlashcards() {
  localStorage.setItem('trauma_fc_learned', JSON.stringify(APP_STATE.flashcards.learnedIds));
  localStorage.setItem('trauma_fc_review', JSON.stringify(APP_STATE.flashcards.reviewIds));
}

function saveCaseDecisions() {
  localStorage.setItem('trauma_case_decisions', JSON.stringify(APP_STATE.clinicalCases.userDecisions));
}

// ==========================================================================
// Main Tab Navigation
// ==========================================================================
function switchTab(tabId) {
  APP_STATE.currentTab = tabId;
  
  // Update header nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Update tab pane visibility
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabId}`);
  });

  // Render contents
  if (['source1', 'source2', 'source3', 'source4'].includes(tabId)) {
    renderConceptCards(tabId);
    renderQuizQuestion(tabId);
  } else if (tabId === 'final') {
    renderQuizQuestion('final');
  } else if (tabId === 'flashcards') {
    renderFlashcards();
  } else if (tabId === 'cases') {
    renderClinicalCases();
  } else if (tabId === 'matrices') {
    renderComparisonMatrix(APP_STATE.activeMatrixKey);
  } else if (tabId === 'stats') {
    renderStats();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// Subtab Navigation within Module (Concepts vs Quiz)
// ==========================================================================
function switchSubTab(sourceKey, subtabKey) {
  APP_STATE.subTabs[sourceKey] = subtabKey;
  
  const pane = document.getElementById(`tab-${sourceKey}`);
  if (!pane) return;

  pane.querySelectorAll('.subtab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.subtab === subtabKey);
  });

  const conceptsSection = pane.querySelector('.module-concepts-view');
  const quizSection = pane.querySelector('.module-quiz-view');

  if (conceptsSection) conceptsSection.style.display = subtabKey === 'concepts' ? 'block' : 'none';
  if (quizSection) quizSection.style.display = subtabKey === 'quiz' ? 'block' : 'none';

  if (subtabKey === 'quiz') {
    renderQuizQuestion(sourceKey);
  } else {
    renderConceptCards(sourceKey);
  }
}

// ==========================================================================
// Concept Table Rendering & Filtering
// ==========================================================================
function renderConceptCards(sourceKey) {
  const container = document.getElementById(`concepts-grid-${sourceKey}`);
  if (!container) return;

  const source = SOURCE_MAP[sourceKey];
  if (!source || !source.concepts) return;

  const filter = APP_STATE.conceptFilters[sourceKey];
  const query = (filter.search || '').toLowerCase().trim();
  const category = filter.category || 'all';

  const filtered = source.concepts.filter(item => {
    const matchesCat = category === 'all' || item.category === category;
    const matchesQuery = !query || 
      item.term.toLowerCase().includes(query) ||
      (item.englishTerm && item.englishTerm.toLowerCase().includes(query)) ||
      item.definition.toLowerCase().includes(query) ||
      (item.details && item.details.toLowerCase().includes(query)) ||
      (item.examTip && item.examTip.toLowerCase().includes(query));
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">🔍 Eşleşen kavram bulunamadı</p>
        <p style="font-size: 0.85rem;">Farklı bir arama terimi deneyin veya kategori filtresini sıfırlayın.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="concept-card" id="${item.id}">
      <div class="concept-card-top">
        <h4 class="concept-term">${item.term}</h4>
        <span class="concept-category-tag">${item.category}</span>
      </div>
      ${item.englishTerm ? `<div class="concept-en-term">${item.englishTerm}</div>` : ''}
      <div class="concept-def">${item.definition}</div>
      ${item.details ? `<div class="concept-details-box">${item.details}</div>` : ''}
      ${item.examTip ? `
        <div class="concept-exam-tip">
          <span>💡</span>
          <div><strong>Sınav İpucu:</strong> ${item.examTip}</div>
        </div>
      ` : ''}
      <div class="concept-card-bottom">
        <span class="concept-authors">📚 ${item.authors || 'Ders Notu'}</span>
        <span class="concept-slides">📍 ${item.slides}</span>
      </div>
    </div>
  `).join('');
}

function handleConceptSearch(sourceKey, query) {
  APP_STATE.conceptFilters[sourceKey].search = query;
  renderConceptCards(sourceKey);
}

function handleConceptCategory(sourceKey, category) {
  APP_STATE.conceptFilters[sourceKey].category = category;
  
  const pane = document.getElementById(`tab-${sourceKey}`);
  if (pane) {
    pane.querySelectorAll('.cat-chip').forEach(chip => {
      chip.classList.toggle('active', chip.dataset.cat === category);
    });
  }
  renderConceptCards(sourceKey);
}

// ==========================================================================
// Quiz Engine & Interactive Question Rendering
// ==========================================================================
function renderQuizQuestion(sourceKey) {
  const source = SOURCE_MAP[sourceKey];
  if (!source) return;

  const quizState = APP_STATE.quizStates[sourceKey];
  const questions = source.questions;
  const currentIndex = quizState.currentIndex;
  const currentQ = questions[currentIndex];

  const cardContainer = document.getElementById(`question-card-container-${sourceKey}`);
  const paletteContainer = document.getElementById(`palette-grid-${sourceKey}`);
  const statsContainer = document.getElementById(`quiz-stats-${sourceKey}`);

  if (!cardContainer || !currentQ) return;

  // Retrieve user's saved answer for this question
  const savedAnswer = APP_STATE.userAnswers[sourceKey][currentQ.id];
  const hasAnswered = savedAnswer !== undefined;

  // Bookmark state
  const isBookmarked = (APP_STATE.bookmarkedQuestions[sourceKey] || []).includes(currentQ.id);

  // Strikethrough set for this question
  const eliminatedSet = (APP_STATE.eliminatedOptions[sourceKey] && APP_STATE.eliminatedOptions[sourceKey][currentQ.id]) || new Set();

  // Final Exam specific modes
  const isExamMode = sourceKey === 'final' && quizState.examMode;
  const isExamSubmitted = sourceKey === 'final' && quizState.examSubmitted;

  // Render Question Stem & Options
  const optionLetters = ['A', 'B', 'C', 'D', 'E'];
  const optionsHtml = currentQ.options.map((optText, optIdx) => {
    let btnClass = 'option-btn';
    let isDisabled = '';
    const isEliminated = eliminatedSet.has(optIdx);
    if (isEliminated) btnClass += ' eliminated';

    if (hasAnswered) {
      if (isExamMode && !isExamSubmitted) {
        // In exam mode before submission: only show selected
        if (optIdx === savedAnswer.selectedIndex) {
          btnClass += ' selected-exam-choice';
        }
      } else {
        // Normal learning mode or exam submitted: show correct/incorrect
        isDisabled = 'disabled';
        if (optIdx === currentQ.correct) {
          btnClass += ' selected-correct';
        } else if (optIdx === savedAnswer.selectedIndex) {
          btnClass += ' selected-incorrect';
        }
      }
    }

    return `
      <div class="${btnClass}" ${isDisabled ? 'style="pointer-events: none;"' : ''} onclick="handleOptionClick('${sourceKey}', ${optIdx})">
        <span class="opt-prefix">${optionLetters[optIdx]}</span>
        <span class="opt-text">${optText.replace(/^[A-E]\)\s*/, '')}</span>
        <span class="opt-strike-trigger" title="Şıkkı ele / üzerini çiz" onclick="toggleOptionEliminate(event, '${sourceKey}', '${currentQ.id}', ${optIdx})">
          ${isEliminated ? '↩︎' : '✕'}
        </span>
      </div>
    `;
  }).join('');

  // Render Detailed Option-by-Option Analysis Panel if Answered (and allowed by mode)
  let explanationHtml = '';
  if (hasAnswered && (!isExamMode || isExamSubmitted)) {
    const isUserCorrect = savedAnswer.isCorrect;
    const badgeClass = isUserCorrect ? 'badge-correct' : 'badge-incorrect';
    const badgeText = isUserCorrect ? '✓ Doğru Yanıt' : '✕ Yanlış Yanıt';

    // Option by option breakdown
    let optionBreakdownsHtml = '';
    if (currentQ.optionAnalysis) {
      optionBreakdownsHtml = optionLetters.map((letter, idx) => {
        if (!currentQ.optionAnalysis[letter]) return '';
        const isThisCorrect = idx === currentQ.correct;
        const itemClass = isThisCorrect ? 'is-correct-choice' : 'is-wrong-choice';
        return `
          <div class="opt-breakdown-item ${itemClass}">
            <span class="opt-breakdown-letter">${letter} Şıkkı:</span>
            <span>${currentQ.optionAnalysis[letter]}</span>
          </div>
        `;
      }).join('');
    }

    explanationHtml = `
      <div class="explanation-panel">
        <div class="expl-header">
          <div class="expl-title">
            <span>🧠 Çözüm Mantığı & Şık Analizleri</span>
          </div>
          <span class="expl-badge ${badgeClass}">${badgeText}</span>
        </div>

        <div class="expl-core-logic">
          <strong>💡 Temel Çözüm İlkesi:</strong><br>
          ${currentQ.explanation}
        </div>

        <div class="option-analysis-section">
          <h4>🔍 Her Şıkkın Detaylı Analizi</h4>
          <div class="option-breakdown-list">
            ${optionBreakdownsHtml}
          </div>
        </div>

        <div class="expl-footer-ref">
          <span>📖 <strong>Ders & Slayt Referansı:</strong> ${currentQ.sourceRef || 'İlgili Ders Sunumu'}</span>
          <span style="font-size: 0.725rem; color: var(--accent-cyan);">PSYC 4115 Akredite Analiz</span>
        </div>
      </div>
    `;
  }

  // Header with bookmark and keyboard hints
  cardContainer.innerHTML = `
    <div class="question-header">
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="question-counter-badge">Soru ${currentIndex + 1} / ${questions.length}</span>
        <button class="quiz-icon-action-btn ${isBookmarked ? 'bookmarked' : ''}" onclick="toggleBookmark('${sourceKey}', '${currentQ.id}')" title="Bu soruyu işaretle / yıldızla">
          <span>${isBookmarked ? '★' : '☆'}</span> ${isBookmarked ? 'İşaretlendi' : 'İşaretle'}
        </button>
      </div>

      <div style="display: flex; align-items: center; gap: 0.65rem;">
        <span style="font-size: 0.75rem; color: var(--text-muted);">Kısayol: <kbd>A</kbd>-<kbd>E</kbd> şık, <kbd>←</kbd><kbd>→</kbd> soru</span>
        <span class="question-source-ref">📌 ${currentQ.sourceRef ? currentQ.sourceRef.split('&')[0] : source.name}</span>
      </div>
    </div>

    <div class="question-stem">${currentQ.question}</div>

    <div class="options-list">
      ${optionsHtml}
    </div>

    ${explanationHtml}

    <div class="quiz-action-bar">
      <button class="quiz-nav-btn" onclick="navigateQuestion('${sourceKey}', -1)" ${currentIndex === 0 ? 'disabled' : ''}>
        ← Önceki Soru
      </button>

      <div style="display: flex; gap: 0.5rem;">
        ${hasAnswered && (!isExamMode || isExamSubmitted) ? `
          <button class="quiz-nav-btn" onclick="retryQuestion('${sourceKey}', '${currentQ.id}')" title="Bu soruyu tekrar dene">
            🔄 Tekrar Çöz
          </button>
        ` : ''}
      </div>

      <button class="quiz-nav-btn btn-accent" onclick="navigateQuestion('${sourceKey}', 1)" ${currentIndex === questions.length - 1 ? 'disabled' : ''}>
        Sonraki Soru →
      </button>
    </div>
  `;

  // Render Palette Pills
  if (paletteContainer) {
    const bookmarks = APP_STATE.bookmarkedQuestions[sourceKey] || [];
    paletteContainer.innerHTML = questions.map((q, idx) => {
      let pClass = 'palette-btn';
      if (idx === currentIndex) pClass += ' current';
      if (bookmarks.includes(q.id)) pClass += ' has-bookmark';
      
      const a = APP_STATE.userAnswers[sourceKey][q.id];
      if (a) {
        if (isExamMode && !isExamSubmitted) {
          pClass += ' answered-correct'; // Just mark as answered in exam mode
        } else {
          pClass += a.isCorrect ? ' answered-correct' : ' answered-incorrect';
        }
      }

      return `
        <button class="${pClass}" onclick="jumpToQuestion('${sourceKey}', ${idx})">
          ${idx + 1}
        </button>
      `;
    }).join('');
  }

  // Render Quiz Sidebar Statistics
  if (statsContainer) {
    const total = questions.length;
    const answeredCount = Object.keys(APP_STATE.userAnswers[sourceKey]).length;
    let correctCount = 0;
    let incorrectCount = 0;

    Object.values(APP_STATE.userAnswers[sourceKey]).forEach(ans => {
      if (ans.isCorrect) correctCount++;
      else incorrectCount++;
    });

    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    statsContainer.innerHTML = `
      <div class="q-stat-item">
        <div class="q-stat-num correct-num">${correctCount}</div>
        <div class="q-stat-lbl">Doğru</div>
      </div>
      <div class="q-stat-item">
        <div class="q-stat-num incorrect-num">${incorrectCount}</div>
        <div class="q-stat-lbl">Yanlış</div>
      </div>
      <div class="q-stat-item">
        <div class="q-stat-num">${total - answeredCount}</div>
        <div class="q-stat-lbl">Kalan</div>
      </div>
      <div class="q-stat-item">
        <div class="q-stat-num" style="color: var(--accent-primary);">%${accuracy}</div>
        <div class="q-stat-lbl">Başarı</div>
      </div>
    `;
  }

  updateGlobalBadgeStats();
}

// Option Click Handler
function handleOptionClick(sourceKey, optionIndex) {
  selectOption(sourceKey, optionIndex);
}

// Option Strikethrough Elimination Toggle
function toggleOptionEliminate(event, sourceKey, questionId, optionIndex) {
  event.stopPropagation();
  if (!APP_STATE.eliminatedOptions[sourceKey]) APP_STATE.eliminatedOptions[sourceKey] = {};
  if (!APP_STATE.eliminatedOptions[sourceKey][questionId]) APP_STATE.eliminatedOptions[sourceKey][questionId] = new Set();
  
  const set = APP_STATE.eliminatedOptions[sourceKey][questionId];
  if (set.has(optionIndex)) {
    set.delete(optionIndex);
  } else {
    set.add(optionIndex);
  }
  renderQuizQuestion(sourceKey);
}

// Bookmark / Flag Question Toggle
function toggleBookmark(sourceKey, questionId) {
  if (!APP_STATE.bookmarkedQuestions[sourceKey]) APP_STATE.bookmarkedQuestions[sourceKey] = [];
  const list = APP_STATE.bookmarkedQuestions[sourceKey];
  const idx = list.indexOf(questionId);
  if (idx > -1) {
    list.splice(idx, 1);
  } else {
    list.push(questionId);
  }
  saveBookmarks();
  renderQuizQuestion(sourceKey);
}

// Option Selection Handler
function selectOption(sourceKey, optionIndex) {
  const source = SOURCE_MAP[sourceKey];
  if (!source) return;

  const currentQ = source.questions[APP_STATE.quizStates[sourceKey].currentIndex];
  if (!currentQ) return;

  const isExamMode = sourceKey === 'final' && APP_STATE.quizStates.final.examMode;
  const isExamSubmitted = sourceKey === 'final' && APP_STATE.quizStates.final.examSubmitted;

  // In learning mode or after submission, if already answered, don't re-select
  if (APP_STATE.userAnswers[sourceKey][currentQ.id] && (!isExamMode || isExamSubmitted)) return;

  const isCorrect = optionIndex === currentQ.correct;

  // Save to state
  APP_STATE.userAnswers[sourceKey][currentQ.id] = {
    selectedIndex: optionIndex,
    isCorrect: isCorrect,
    timestamp: Date.now()
  };

  saveAnswers();
  if (!isExamMode) {
    playAudioFeedback(isCorrect);
  }
  renderQuizQuestion(sourceKey);
}

// Retry a specific question
function retryQuestion(sourceKey, questionId) {
  delete APP_STATE.userAnswers[sourceKey][questionId];
  saveAnswers();
  renderQuizQuestion(sourceKey);
}

// Question Navigation
function navigateQuestion(sourceKey, delta) {
  const source = SOURCE_MAP[sourceKey];
  if (!source) return;

  const quizState = APP_STATE.quizStates[sourceKey];
  const newIndex = quizState.currentIndex + delta;

  if (newIndex >= 0 && newIndex < source.questions.length) {
    quizState.currentIndex = newIndex;
    renderQuizQuestion(sourceKey);
  }
}

function jumpToQuestion(sourceKey, index) {
  const source = SOURCE_MAP[sourceKey];
  if (!source) return;

  if (index >= 0 && index < source.questions.length) {
    APP_STATE.quizStates[sourceKey].currentIndex = index;
    renderQuizQuestion(sourceKey);
  }
}

function resetQuiz(sourceKey) {
  if (confirm(`${SOURCE_MAP[sourceKey].name} testindeki tüm yanıtlarınızı sıfırlamak istediğinize emin misiniz?`)) {
    APP_STATE.userAnswers[sourceKey] = {};
    APP_STATE.quizStates[sourceKey].currentIndex = 0;
    if (sourceKey === 'final') {
      APP_STATE.quizStates.final.examSubmitted = false;
      stopExamTimer();
      APP_STATE.quizStates.final.timerSeconds = 40 * 60;
    }
    saveAnswers();
    renderQuizQuestion(sourceKey);
  }
}

// Filter to review only wrong answers
function filterMistakesOnly(sourceKey) {
  const source = SOURCE_MAP[sourceKey];
  if (!source) return;
  const wrongQIndex = source.questions.findIndex(q => {
    const a = APP_STATE.userAnswers[sourceKey][q.id];
    return a && !a.isCorrect;
  });

  if (wrongQIndex > -1) {
    APP_STATE.quizStates[sourceKey].currentIndex = wrongQIndex;
    renderQuizQuestion(sourceKey);
  } else {
    alert('Tebrikler! Bu modülde hiç yanlışınız bulunmuyor veya henüz test çözmediniz.');
  }
// Auto-pass/solve quiz with 100% correct answers
function passQuiz(sourceKey) {
  const source = SOURCE_MAP[sourceKey];
  if (!source) return;
  if (!APP_STATE.userAnswers[sourceKey]) {
    APP_STATE.userAnswers[sourceKey] = {};
  }
  source.questions.forEach(q => {
    APP_STATE.userAnswers[sourceKey][q.id] = {
      selectedIndex: q.correct,
      isCorrect: true,
      timestamp: Date.now()
    };
  });
  if (sourceKey === 'final') {
    APP_STATE.quizStates.final.examSubmitted = true;
    stopExamTimer();
  }
  saveAnswers();
  updateGlobalBadgeStats();
  if (APP_STATE.currentTab === 'stats') {
    renderStats();
  } else {
    renderQuizQuestion(sourceKey);
  }
  playAudioFeedback(true);
  showToast(`⚡ ${source.name} testi başarıyla geçildi! (${source.questions.length}/${source.questions.length} Doğru - %100)`);
}

// Auto-pass all quizzes in the portal (all 105 questions across 4 modules & Final Exam)
function passAllQuizzes() {
  ['source1', 'source2', 'source3', 'source4', 'final'].forEach(key => {
    const src = SOURCE_MAP[key];
    if (src) {
      if (!APP_STATE.userAnswers[key]) APP_STATE.userAnswers[key] = {};
      src.questions.forEach(q => {
        APP_STATE.userAnswers[key][q.id] = {
          selectedIndex: q.correct,
          isCorrect: true,
          timestamp: Date.now()
        };
      });
      if (key === 'final') {
        APP_STATE.quizStates.final.examSubmitted = true;
        stopExamTimer();
      }
    }
  });
  saveAnswers();
  updateGlobalBadgeStats();
  if (APP_STATE.currentTab === 'stats') {
    renderStats();
  } else if (['source1', 'source2', 'source3', 'source4', 'final'].includes(APP_STATE.currentTab)) {
    renderQuizQuestion(APP_STATE.currentTab);
  }
  playAudioFeedback(true);
  showToast('⚡ TÜM 105 TEST SORUSU BAŞARIYLA GEÇİLDİ! (%100 Doğru - Not: AA). Tüm şık açıklamaları açıldı.');
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size:1.15rem;">🎉</span> <span>${message}</span>`;
  toast.classList.add('show');
  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3800);
}

// Master Study Booklet Logic (105 Soru & Çözüm Kitapçığı)
const BOOKLET_STATE = {
  currentSource: 'all',
  searchQuery: ''
};

function openStudyBooklet() {
  const modal = document.getElementById('booklet-modal');
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  renderBookletContent();
}

function closeStudyBooklet() {
  const modal = document.getElementById('booklet-modal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

function filterBookletSource(sourceKey) {
  BOOKLET_STATE.currentSource = sourceKey;
  const filterBtns = document.querySelectorAll('.booklet-filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.src === sourceKey);
  });
  renderBookletContent();
}

function handleBookletSearch(query) {
  BOOKLET_STATE.searchQuery = (query || '').toLowerCase().trim();
  renderBookletContent();
}

function renderBookletContent() {
  const container = document.getElementById('booklet-questions-list');
  if (!container) return;

  const sourcesToInclude = BOOKLET_STATE.currentSource === 'all'
    ? ['source1', 'source2', 'source3', 'source4', 'final']
    : [BOOKLET_STATE.currentSource];

  const query = BOOKLET_STATE.searchQuery;
  const optionLetters = ['A', 'B', 'C', 'D', 'E'];
  let matchedQuestions = [];

  sourcesToInclude.forEach(key => {
    const src = SOURCE_MAP[key];
    if (!src) return;
    src.questions.forEach((q, idx) => {
      const fullText = (q.question + ' ' + (q.explanation || '') + ' ' + q.options.join(' ')).toLowerCase();
      if (!query || fullText.includes(query)) {
        matchedQuestions.push({
          sourceKey: key,
          sourceName: src.name,
          question: q,
          indexInSource: idx + 1
        });
      }
    });
  });

  const countEl = document.getElementById('booklet-match-count');
  if (countEl) {
    countEl.innerText = `${matchedQuestions.length} Soru Listeleniyor`;
  }

  if (matchedQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <p>Arama kriterinize uygun soru bulunamadı.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matchedQuestions.map((item, globalIdx) => {
    const q = item.question;
    const optionsHtml = q.options.map((optText, optIdx) => {
      const isCorrect = optIdx === q.correct;
      const letter = optionLetters[optIdx];
      const optReason = q.optionAnalysis && q.optionAnalysis[letter] ? q.optionAnalysis[letter] : '';

      return `
        <div class="booklet-option-row ${isCorrect ? 'booklet-opt-correct' : 'booklet-opt-distractor'}">
          <div class="booklet-opt-stem">
            <span class="booklet-opt-letter">${letter}</span>
            <span class="booklet-opt-text">${optText.replace(/^[A-E]\)\s*/, '')}</span>
            ${isCorrect ? '<span class="booklet-correct-tag">✓ Doğru Yanıt</span>' : ''}
          </div>
          ${optReason ? `<div class="booklet-opt-reason"><strong>${letter} Açıklaması:</strong> ${optReason}</div>` : ''}
        </div>
      `;
    }).join('');

    return `
      <div class="booklet-question-card">
        <div class="booklet-q-header">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="source-pill pill-${item.sourceKey}">${item.sourceName} • Soru ${item.indexInSource}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Genel No: #${globalIdx + 1}</span>
          </div>
          <span class="booklet-ref-badge">📍 ${q.sourceRef || 'Ders Sunumu'}</span>
        </div>

        <div class="booklet-q-stem">${q.question}</div>

        <div class="booklet-options-container">
          ${optionsHtml}
        </div>

        <div class="booklet-logic-box">
          <strong>💡 Temel Çözüm Mantığı:</strong> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');
}


// ==========================================================================
// Final Exam Modes (Exam Simulation vs Instant Learning)
// ==========================================================================
function toggleFinalExamMode(isExam) {
  APP_STATE.quizStates.final.examMode = isExam;
  const timerBar = document.getElementById('final-exam-timer-bar');
  const submitBtn = document.getElementById('final-submit-btn');

  if (isExam) {
    if (timerBar) timerBar.style.display = 'flex';
    if (submitBtn) submitBtn.style.display = 'inline-flex';
    startExamTimer();
  } else {
    if (timerBar) timerBar.style.display = 'none';
    if (submitBtn) submitBtn.style.display = 'none';
    stopExamTimer();
  }

  const toggleBtns = document.querySelectorAll('.exam-mode-btn');
  toggleBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === (isExam ? 'exam' : 'learning'));
  });

  renderQuizQuestion('final');
}

function startExamTimer() {
  if (APP_STATE.quizStates.final.timerRunning) return;
  APP_STATE.quizStates.final.timerRunning = true;
  APP_STATE.quizStates.final.timerInterval = setInterval(() => {
    if (APP_STATE.quizStates.final.timerSeconds > 0) {
      APP_STATE.quizStates.final.timerSeconds--;
      updateTimerDisplay();
    } else {
      stopExamTimer();
      alert('Süre doldu! Final sınavınız otomatik olarak tamamlanıyor.');
      submitFinalExam();
    }
  }, 1000);
}

function stopExamTimer() {
  APP_STATE.quizStates.final.timerRunning = false;
  if (APP_STATE.quizStates.final.timerInterval) {
    clearInterval(APP_STATE.quizStates.final.timerInterval);
    APP_STATE.quizStates.final.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const display = document.getElementById('final-timer-clock');
  const timerBar = document.getElementById('final-exam-timer-bar');
  if (!display) return;

  const sec = APP_STATE.quizStates.final.timerSeconds;
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  display.innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

  if (timerBar) {
    timerBar.classList.toggle('timer-warning', sec < 300); // warning when < 5 mins
  }
}

function submitFinalExam() {
  APP_STATE.quizStates.final.examSubmitted = true;
  stopExamTimer();

  const questions = QUESTIONS_FINAL;
  const total = questions.length;
  let correct = 0;
  questions.forEach(q => {
    const a = APP_STATE.userAnswers.final[q.id];
    if (a && a.isCorrect) correct++;
  });

  const percent = Math.round((correct / total) * 100);
  let grade = 'FF';
  if (percent >= 90) grade = 'AA';
  else if (percent >= 80) grade = 'BA';
  else if (percent >= 70) grade = 'BB';
  else if (percent >= 60) grade = 'CB';
  else if (percent >= 50) grade = 'CC';

  const modalHtml = `
    <div class="exam-score-modal">
      <div class="score-badge-circle">
        <span class="score-grade">${grade}</span>
        <span class="score-sub">%${percent}</span>
      </div>
      <h3>Final Sınavı Tamamlandı!</h3>
      <p style="color: var(--text-secondary); margin: 0.5rem 0 1.25rem;">
        Toplam <strong>${total}</strong> sorudan <strong>${correct}</strong> doğru ve <strong>${total - correct}</strong> yanlış yaptınız.
      </p>
      <div style="display: flex; justify-content: center; gap: 0.75rem;">
        <button class="btn-primary" onclick="renderQuizQuestion('final')">Soruları İncele & Çözüm Mantığını Gör</button>
        <button class="btn-secondary" onclick="resetQuiz('final')">Sınavı Tekrar Başlat</button>
      </div>
    </div>
  `;

  const banner = document.querySelector('.exam-banner');
  if (banner) {
    banner.insertAdjacentHTML('afterend', modalHtml);
  }

  renderQuizQuestion('final');
}

// ==========================================================================
// Interactive Flashcards Controller
// ==========================================================================
function getAllFlashcards() {
  const deckKey = APP_STATE.flashcards.currentDeck;
  if (deckKey === 'all') {
    return [
      ...FLASHCARDS_DATA.source1,
      ...FLASHCARDS_DATA.source2,
      ...FLASHCARDS_DATA.source3,
      ...FLASHCARDS_DATA.source4
    ];
  }
  return FLASHCARDS_DATA[deckKey] || [];
}

function renderFlashcards() {
  const container = document.getElementById('flashcard-render-container');
  if (!container) return;

  const cards = getAllFlashcards();
  if (cards.length === 0) {
    container.innerHTML = '<p>Bu destede kart bulunmuyor.</p>';
    return;
  }

  if (APP_STATE.flashcards.currentIndex >= cards.length) {
    APP_STATE.flashcards.currentIndex = 0;
  }

  const card = cards[APP_STATE.flashcards.currentIndex];
  const isFlipped = APP_STATE.flashcards.isFlipped;
  const learnedCount = APP_STATE.flashcards.learnedIds.length;
  const reviewCount = APP_STATE.flashcards.reviewIds.length;

  container.innerHTML = `
    <div class="flashcard-section-wrapper">
      <div class="flashcard-toolbar">
        <div>
          <label style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); margin-right: 0.5rem;">Deste Seçimi:</label>
          <select class="flashcard-deck-select" onchange="changeFlashcardDeck(this.value)">
            <option value="all" ${APP_STATE.flashcards.currentDeck === 'all' ? 'selected' : ''}>Tüm Kaynaklar (60 Kart)</option>
            <option value="source1" ${APP_STATE.flashcards.currentDeck === 'source1' ? 'selected' : ''}>Kaynak 1: Giriş & Çocukluk (15 Kart)</option>
            <option value="source2" ${APP_STATE.flashcards.currentDeck === 'source2' ? 'selected' : ''}>Kaynak 2: Tepkiler & Büyüme (15 Kart)</option>
            <option value="source3" ${APP_STATE.flashcards.currentDeck === 'source3' ? 'selected' : ''}>Kaynak 3: Nöral & ASB (15 Kart)</option>
            <option value="source4" ${APP_STATE.flashcards.currentDeck === 'source4' ? 'selected' : ''}>Kaynak 4: Kriterler & Ölçekler (15 Kart)</option>
          </select>
        </div>

        <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary);">
          Kart <span style="color: var(--accent-primary);">${APP_STATE.flashcards.currentIndex + 1}</span> / ${cards.length}
        </div>
      </div>

      <div class="flashcard-container" onclick="toggleFlipFlashcard()">
        <div class="flashcard-inner ${isFlipped ? 'is-flipped' : ''}">
          <!-- Front Face -->
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-meta-bar">
              <span class="flashcard-badge">${card.category}</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">${card.difficulty}</span>
            </div>

            <div class="flashcard-body-text">${card.front}</div>

            <div class="flashcard-hint-text">
              <span>🔄 Çevirmek için tıkla veya</span> <kbd>Space</kbd>
            </div>
          </div>

          <!-- Back Face -->
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-meta-bar">
              <span class="flashcard-badge" style="background: rgba(16, 185, 129, 0.2); color: var(--correct-text);">Cevap & Açıklama</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">${card.slideRef}</span>
            </div>

            <div class="flashcard-body-text" style="font-size: 1.1rem; white-space: pre-line; text-align: left;">
              ${card.back}
            </div>

            <div class="flashcard-hint-text">
              <span>📖 Slayt: ${card.slideRef}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flashcard-controls-row">
        <button class="flashcard-btn-action" onclick="navigateFlashcard(-1)" ${APP_STATE.flashcards.currentIndex === 0 ? 'disabled' : ''}>
          ← Önceki
        </button>

        <button class="flashcard-btn-action btn-review" onclick="markFlashcardReview('${card.id}')">
          🔄 Tekrar Et (${reviewCount})
        </button>

        <button class="flashcard-btn-action btn-learned" onclick="markFlashcardLearned('${card.id}')">
          ✓ Öğrendim (${learnedCount})
        </button>

        <button class="flashcard-btn-action" onclick="navigateFlashcard(1)" ${APP_STATE.flashcards.currentIndex === cards.length - 1 ? 'disabled' : ''}>
          Sonraki →
        </button>
      </div>
    </div>
  `;
}

function toggleFlipFlashcard() {
  APP_STATE.flashcards.isFlipped = !APP_STATE.flashcards.isFlipped;
  const inner = document.querySelector('.flashcard-inner');
  if (inner) inner.classList.toggle('is-flipped', APP_STATE.flashcards.isFlipped);
}

function navigateFlashcard(delta) {
  const cards = getAllFlashcards();
  const next = APP_STATE.flashcards.currentIndex + delta;
  if (next >= 0 && next < cards.length) {
    APP_STATE.flashcards.currentIndex = next;
    APP_STATE.flashcards.isFlipped = false;
    renderFlashcards();
  }
}

function changeFlashcardDeck(deck) {
  APP_STATE.flashcards.currentDeck = deck;
  APP_STATE.flashcards.currentIndex = 0;
  APP_STATE.flashcards.isFlipped = false;
  renderFlashcards();
}

function markFlashcardLearned(cardId) {
  if (!APP_STATE.flashcards.learnedIds.includes(cardId)) {
    APP_STATE.flashcards.learnedIds.push(cardId);
  }
  const rIdx = APP_STATE.flashcards.reviewIds.indexOf(cardId);
  if (rIdx > -1) APP_STATE.flashcards.reviewIds.splice(rIdx, 1);
  saveFlashcards();
  playAudioFeedback(true);
  navigateFlashcard(1);
}

function markFlashcardReview(cardId) {
  if (!APP_STATE.flashcards.reviewIds.includes(cardId)) {
    APP_STATE.flashcards.reviewIds.push(cardId);
  }
  const lIdx = APP_STATE.flashcards.learnedIds.indexOf(cardId);
  if (lIdx > -1) APP_STATE.flashcards.learnedIds.splice(lIdx, 1);
  saveFlashcards();
  playAudioFeedback(false);
  navigateFlashcard(1);
}

// ==========================================================================
// Interactive Clinical Case Simulator Controller
// ==========================================================================
function renderClinicalCases() {
  const container = document.getElementById('clinical-cases-render-container');
  if (!container) return;

  const activeCase = CLINICAL_CASES_DATA.find(c => c.id === APP_STATE.clinicalCases.activeCaseId) || CLINICAL_CASES_DATA[0];

  const caseTabsHtml = CLINICAL_CASES_DATA.map(c => `
    <button class="matrix-nav-btn ${c.id === activeCase.id ? 'active' : ''}" onclick="selectCase('${c.id}')">
      ${c.title}
    </button>
  `).join('');

  // Render Steps
  const stepsHtml = activeCase.steps.map(step => {
    const saved = APP_STATE.clinicalCases.userDecisions[`${activeCase.id}_step_${step.stepNumber}`];
    const hasChosen = saved !== undefined;

    const optHtml = step.options.map((optText, optIdx) => {
      let optClass = 'option-btn';
      if (hasChosen) {
        if (optIdx === step.correct) optClass += ' selected-correct';
        else if (optIdx === saved) optClass += ' selected-incorrect';
      }
      return `
        <div class="${optClass}" onclick="selectCaseStep('${activeCase.id}', ${step.stepNumber}, ${optIdx})" style="${hasChosen ? 'pointer-events: none;' : ''}">
          <span class="opt-prefix">${['A', 'B', 'C', 'D'][optIdx]}</span>
          <span class="opt-text">${optText}</span>
        </div>
      `;
    }).join('');

    let feedbackHtml = '';
    if (hasChosen) {
      feedbackHtml = `
        <div class="case-feedback-box">
          <strong>🩺 Klinik Değerlendirme & Tanı Gerekçesi:</strong><br>
          ${step.clinicalFeedback}
        </div>
      `;
    }

    return `
      <div class="case-step-card">
        <div class="case-step-header">
          <span>Adım ${step.stepNumber}</span> • Klinik Değerlendirme Sorusu
        </div>
        <div class="case-step-question">${step.question}</div>
        <div class="options-list">${optHtml}</div>
        ${feedbackHtml}
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="case-simulator-wrapper">
      <div class="matrix-tabs-row" style="margin-bottom: 1.5rem;">
        ${caseTabsHtml}
      </div>

      <div class="case-card-hero">
        <span class="hero-badge">🩺 İnteraktif Klinik Vaka Simülatörü</span>
        <h2 style="margin: 0.5rem 0;">${activeCase.title}</h2>

        <div class="case-patient-profile">
          <div class="profile-item"><strong>Hasta:</strong> ${activeCase.patientName}</div>
          <div class="profile-item"><strong>Yaş:</strong> ${activeCase.age}</div>
          <div class="profile-item"><strong>Meslek:</strong> ${activeCase.occupation}</div>
          <div class="profile-item"><strong>Başvuru Zamanı:</strong> ${activeCase.presentationDay}</div>
        </div>

        <div class="case-vignette-text">
          <strong>📋 Anamnez & Vaka Özeti:</strong><br><br>
          ${activeCase.vignette.replace(/\n/g, '<br>')}
        </div>

        <h3 class="section-title" style="margin-top: 2rem;">Adım Adım Tanı ve Müdahale Kararları</h3>
        ${stepsHtml}
      </div>
    </div>
  `;
}

function selectCase(caseId) {
  APP_STATE.clinicalCases.activeCaseId = caseId;
  renderClinicalCases();
}

function selectCaseStep(caseId, stepNumber, optionIndex) {
  const key = `${caseId}_step_${stepNumber}`;
  if (APP_STATE.clinicalCases.userDecisions[key] !== undefined) return;

  APP_STATE.clinicalCases.userDecisions[key] = optionIndex;
  saveCaseDecisions();

  const c = CLINICAL_CASES_DATA.find(x => x.id === caseId);
  const step = c && c.steps.find(s => s.stepNumber === stepNumber);
  if (step) {
    playAudioFeedback(optionIndex === step.correct);
  }
  renderClinicalCases();
}

// ==========================================================================
// Interactive Comparison Matrices & High-Yield Pearls Controller
// ==========================================================================
function renderComparisonMatrix(matrixKey) {
  APP_STATE.activeMatrixKey = matrixKey;
  const container = document.getElementById('matrices-render-container');
  if (!container) return;

  const navHtml = `
    <div class="matrix-tabs-row">
      <button class="matrix-nav-btn ${matrixKey === 'asb_vs_tssb' ? 'active' : ''}" onclick="renderComparisonMatrix('asb_vs_tssb')">
        ASB vs TSSB Karşılaştırması
      </button>
      <button class="matrix-nav-btn ${matrixKey === 'dsm5_vs_icd11' ? 'active' : ''}" onclick="renderComparisonMatrix('dsm5_vs_icd11')">
        DSM-5-TR vs ICD-11 Karşılaştırması
      </button>
      <button class="matrix-nav-btn ${matrixKey === 'sns_vs_pns' ? 'active' : ''}" onclick="renderComparisonMatrix('sns_vs_pns')">
        Sempatik vs Parasempatik Organ Haritası
      </button>
      <button class="matrix-nav-btn ${matrixKey === 'pearls' ? 'active' : ''}" onclick="renderComparisonMatrix('pearls')">
        ⭐ Sınavda Çıkacak 10 Kritik Nokta
      </button>
    </div>
  `;

  let contentHtml = '';

  if (matrixKey === 'pearls') {
    const pearlsHtml = HIGH_YIELD_PEARLS.map(p => `
      <div class="pearl-card">
        <h4>${p.title}</h4>
        <p>${p.content}</p>
      </div>
    `).join('');

    contentHtml = `
      <div style="margin-bottom: 1.5rem;">
        <h2>Sınavda %100 Çıkacak 10 Kritik Nokta (High-Yield Pearls)</h2>
        <p style="color: var(--text-secondary);">Dr. Cansu Aykaç Kemik'in vize/final hazırlık slaytlarında en çok üzerinde durduğu sınav soruları.</p>
      </div>
      <div class="pearls-grid">${pearlsHtml}</div>
    `;
  } else if (matrixKey === 'sns_vs_pns') {
    const data = COMPARISON_DATA.sns_vs_pns;
    const rowsHtml = data.rows.map(r => `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${r.organ}</td>
        <td class="badge-tag-col2">${r.sns}</td>
        <td class="badge-tag-col3">${r.pns}</td>
      </tr>
    `).join('');

    contentHtml = `
      <div style="margin-bottom: 1.5rem;">
        <h2>${data.title}</h2>
        <p style="color: var(--text-secondary);">${data.description}</p>
      </div>
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th style="width: 25%;">Hedef Organ / Sistem</th>
              <th style="width: 37.5%; color: var(--accent-rose);">Sempatik (Savaş ya da Kaç)</th>
              <th style="width: 37.5%; color: var(--accent-emerald);">Parasempatik (Dinlen ve Sindir)</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  } else {
    const data = COMPARISON_DATA[matrixKey];
    const isAsb = matrixKey === 'asb_vs_tssb';
    const col1Header = isAsb ? 'Akut Stres Bozukluğu (ASB)' : 'DSM-5-TR';
    const col2Header = isAsb ? 'TSSB (PTSD)' : 'ICD-11 (WHO)';

    const rowsHtml = data.rows.map(r => `
      <tr>
        <td style="font-weight: 700; color: var(--text-primary);">${r.feature}</td>
        <td class="badge-tag-col1">${isAsb ? r.asb : r.dsm5}</td>
        <td class="badge-tag-col2">${isAsb ? r.tssb : r.icd11}</td>
        <td style="font-size: 0.8rem; color: var(--text-muted);">${r.clinicalNote}</td>
      </tr>
    `).join('');

    contentHtml = `
      <div style="margin-bottom: 1.5rem;">
        <h2>${data.title}</h2>
        <p style="color: var(--text-secondary);">${data.description}</p>
      </div>
      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th style="width: 22%;">Kriter / Özellik</th>
              <th style="width: 32%; color: var(--accent-cyan);">${col1Header}</th>
              <th style="width: 32%; color: var(--accent-rose);">${col2Header}</th>
              <th style="width: 14%;">Klinik İpucu</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  }

  container.innerHTML = navHtml + contentHtml;
}

// ==========================================================================
// Keyboard Shortcuts Listener (A-E to answer, arrows to navigate, Space to flip)
// ==========================================================================
window.addEventListener('keydown', (e) => {
  // If typing in an input, don't intercept
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

  const key = e.key.toUpperCase();
  const currentTab = APP_STATE.currentTab;

  // Flashcards shortcut
  if (currentTab === 'flashcards') {
    if (e.code === 'Space') {
      e.preventDefault();
      toggleFlipFlashcard();
    } else if (e.key === 'ArrowRight') {
      navigateFlashcard(1);
    } else if (e.key === 'ArrowLeft') {
      navigateFlashcard(-1);
    }
    return;
  }

  // Quiz shortcuts for active quiz views
  if (['source1', 'source2', 'source3', 'source4', 'final'].includes(currentTab)) {
    const isQuizSubtab = currentTab === 'final' || APP_STATE.subTabs[currentTab] === 'quiz';
    if (!isQuizSubtab) return;

    if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
      const idx = ['A', 'B', 'C', 'D', 'E'].indexOf(key);
      selectOption(currentTab, idx);
    } else if (['1', '2', '3', '4', '5'].includes(key)) {
      const idx = parseInt(key) - 1;
      selectOption(currentTab, idx);
    } else if (e.key === 'ArrowRight') {
      navigateQuestion(currentTab, 1);
    } else if (e.key === 'ArrowLeft') {
      navigateQuestion(currentTab, -1);
    }
  }
});

// ==========================================================================
// Global Statistics & Performance Dashboard
// ==========================================================================
function updateGlobalBadgeStats() {
  const sources = ['source1', 'source2', 'source3', 'source4', 'final'];
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalQuestions = 0;

  sources.forEach(key => {
    const qCount = SOURCE_MAP[key].questions.length;
    totalQuestions += qCount;
    const answers = Object.values(APP_STATE.userAnswers[key] || {});
    totalAnswered += answers.length;
    totalCorrect += answers.filter(a => a.isCorrect).length;

    // Update individual module card progress text on overview page
    const cardProgress = document.getElementById(`overview-progress-${key}`);
    if (cardProgress) {
      cardProgress.innerText = `${answers.length}/${qCount} Soru Çözüldü`;
    }
  });

  const heroProgress = document.getElementById('hero-total-progress');
  if (heroProgress) {
    heroProgress.innerText = `${totalAnswered}/${totalQuestions}`;
  }

  const heroAccuracy = document.getElementById('hero-total-accuracy');
  if (heroAccuracy) {
    const acc = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    heroAccuracy.innerText = `%${acc}`;
  }
}

function renderStats() {
  const container = document.getElementById('stats-content-container');
  if (!container) return;

  const sources = ['source1', 'source2', 'source3', 'source4', 'final'];
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;

  const moduleStats = sources.map(key => {
    const source = SOURCE_MAP[key];
    const qCount = source.questions.length;
    totalQuestions += qCount;

    const answers = Object.values(APP_STATE.userAnswers[key] || {});
    const answeredCount = answers.length;
    totalAnswered += answeredCount;

    const correct = answers.filter(a => a.isCorrect).length;
    totalCorrect += correct;

    const incorrect = answeredCount - correct;
    totalIncorrect += incorrect;

    const percent = qCount > 0 ? Math.round((correct / qCount) * 100) : 0;
    const answeredPercent = qCount > 0 ? Math.round((answeredCount / qCount) * 100) : 0;

    return {
      key,
      name: source.name,
      title: source.title,
      qCount,
      answeredCount,
      correct,
      incorrect,
      percent,
      answeredPercent
    };
  });

  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const overallCompletion = totalQuestions > 0 ? Math.round((totalAnswered / totalQuestions) * 100) : 0;

  let modulesHtml = moduleStats.map(m => `
    <div class="progress-summary-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <div>
          <h4>${m.name}</h4>
          <div style="font-size: 0.95rem; font-weight: 700;">${m.title}</div>
        </div>
        <span class="source-pill pill-${m.key}">${m.answeredCount}/${m.qCount}</span>
      </div>

      <div style="display: flex; gap: 1rem; margin: 1rem 0; font-size: 0.85rem;">
        <span style="color: var(--correct-text);">✓ <strong>${m.correct}</strong> Doğru</span>
        <span style="color: var(--incorrect-text);">✕ <strong>${m.incorrect}</strong> Yanlış</span>
        <span style="color: var(--text-muted);">⏳ <strong>${m.qCount - m.answeredCount}</strong> Kalan</span>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${m.answeredPercent}%;"></div>
      </div>
      <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
        <span>Tamamlanma: %${m.answeredPercent}</span>
        <span>Başarı Oranı: %${m.answeredCount > 0 ? Math.round((m.correct / m.answeredCount) * 100) : 0}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="hero-card" style="margin-bottom: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="hero-badge">📊 Genel Akademik Performans</span>
          <h2>Öğrenme Analitikleri & İlerleme Raporu</h2>
          <p class="hero-desc">Dört kaynak sunum ve Final Sınavı genelindeki 105 soruluk soru bankasındaki kümülatif başarınız.</p>
        </div>
        <button class="btn-secondary" onclick="resetAllProgress()">
          🗑️ Tüm İlerlemeyi Sıfırla
        </button>
      </div>

      <div class="hero-stats-row" style="margin-top: 1.5rem;">
        <div class="stat-chip">
          <span class="stat-chip-icon">📝</span>
          <div class="stat-chip-text">
            <div class="stat-num">${totalAnswered} / ${totalQuestions}</div>
            <div class="stat-lbl">Çözülen Soru</div>
          </div>
        </div>
        <div class="stat-chip">
          <span class="stat-chip-icon">🎯</span>
          <div class="stat-chip-text">
            <div class="stat-num" style="color: var(--correct-text);">${totalCorrect}</div>
            <div class="stat-lbl">Toplam Doğru</div>
          </div>
        </div>
        <div class="stat-chip">
          <span class="stat-chip-icon">⚠️</span>
          <div class="stat-chip-text">
            <div class="stat-num" style="color: var(--incorrect-text);">${totalIncorrect}</div>
            <div class="stat-lbl">Toplam Yanlış</div>
          </div>
        </div>
        <div class="stat-chip">
          <span class="stat-chip-icon">🏆</span>
          <div class="stat-chip-text">
            <div class="stat-num" style="color: var(--accent-primary);">%${overallAccuracy}</div>
            <div class="stat-lbl">Genel Başarı Oranı</div>
          </div>
        </div>
      </div>
    </div>

    <h3 class="section-title">Modül Bazlı İlerleme</h3>
    <div class="progress-card-grid">
      ${modulesHtml}
    </div>
  `;
}

function resetAllProgress() {
  if (confirm('TÜM modüllerdeki ve Final Sınavındaki yanıtlarınızı sıfırlamak istediğinize emin misiniz?')) {
    APP_STATE.userAnswers = {
      source1: {}, source2: {}, source3: {}, source4: {}, final: {}
    };
    saveAnswers();
    renderStats();
    alert('Tüm ilerlemeniz başarıyla sıfırlandı.');
  }
}

// ==========================================================================
// Theme & Sound Toggle
// ==========================================================================
function toggleTheme() {
  const newTheme = APP_STATE.theme === 'dark' ? 'light' : 'dark';
  APP_STATE.theme = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('trauma_theme', newTheme);
  
  const icon = document.getElementById('theme-icon');
  if (icon) icon.innerText = newTheme === 'dark' ? '🌙' : '☀️';
}

function toggleSound() {
  APP_STATE.soundEnabled = !APP_STATE.soundEnabled;
  localStorage.setItem('trauma_sound', APP_STATE.soundEnabled);
  
  const icon = document.getElementById('sound-icon');
  if (icon) icon.innerText = APP_STATE.soundEnabled ? '🔔' : '🔕';
}

// ==========================================================================
// App Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply theme
  document.documentElement.setAttribute('data-theme', APP_STATE.theme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) themeIcon.innerText = APP_STATE.theme === 'dark' ? '🌙' : '☀️';

  // Apply sound
  const soundIcon = document.getElementById('sound-icon');
  if (soundIcon) soundIcon.innerText = APP_STATE.soundEnabled ? '🔔' : '🔕';

  // Initial render of all module concepts
  ['source1', 'source2', 'source3', 'source4'].forEach(key => {
    renderConceptCards(key);
  });

  // Update badge stats
  updateGlobalBadgeStats();
});
