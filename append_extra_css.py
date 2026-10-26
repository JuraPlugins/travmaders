extra_css = """
/* ==========================================================================
   PSYC 4115: The Psychology of Trauma - Enhanced Interactive Styles
   Flashcards, Case Simulator, Comparison Matrices, Timer & Pro Quiz Tools
   ========================================================================== */

/* --------------------------------------------------------------------------
   3D Flashcard Carousel
   -------------------------------------------------------------------------- */
.flashcard-section-wrapper {
  max-width: 820px;
  margin: 0 auto;
}

.flashcard-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.flashcard-deck-select {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  outline: none;
  cursor: pointer;
}

.flashcard-container {
  perspective: 1200px;
  width: 100%;
  min-height: 380px;
  cursor: pointer;
  margin-bottom: 1.5rem;
  user-select: none;
}

.flashcard-inner {
  position: relative;
  width: 100%;
  min-height: 380px;
  text-align: center;
  transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
  transform-style: preserve-3d;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.flashcard-inner.is-flipped {
  transform: rotateY(180deg);
}

.flashcard-face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: var(--bg-card);
  border: 2px solid var(--border-color);
  backdrop-filter: blur(12px);
}

.flashcard-face.flashcard-front {
  border-color: rgba(99, 102, 241, 0.35);
  background: linear-gradient(145deg, rgba(19, 27, 46, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%);
}

[data-theme="light"] .flashcard-face.flashcard-front {
  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
  border-color: rgba(99, 102, 241, 0.3);
}

.flashcard-face.flashcard-back {
  transform: rotateY(180deg);
  border-color: rgba(16, 185, 129, 0.4);
  background: linear-gradient(145deg, rgba(13, 31, 35, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%);
}

[data-theme="light"] .flashcard-face.flashcard-back {
  background: linear-gradient(145deg, #f0fdf4 0%, #ffffff 100%);
  border-color: rgba(16, 185, 129, 0.35);
}

.flashcard-meta-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

.flashcard-badge {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.75rem;
}

.flashcard-body-text {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;
  color: var(--text-primary);
  margin: auto 0;
  max-width: 680px;
}

.flashcard-hint-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.flashcard-controls-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.flashcard-btn-action {
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--border-color);
  background: var(--bg-card);
  color: var(--text-primary);
}

.flashcard-btn-action:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.flashcard-btn-action.btn-learned {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--correct-border);
  color: var(--correct-text);
}

.flashcard-btn-action.btn-review {
  background: rgba(245, 158, 11, 0.15);
  border-color: #f59e0b;
  color: #fbbf24;
}

/* --------------------------------------------------------------------------
   Clinical Case Lab (Vaka Simülatörü)
   -------------------------------------------------------------------------- */
.case-simulator-wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.case-card-hero {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.case-card-hero::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background: var(--accent-gradient);
}

.case-patient-profile {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin: 1rem 0 1.5rem;
  padding: 0.85rem 1.25rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  font-size: 0.875rem;
}

.profile-item strong {
  color: var(--accent-cyan);
}

.case-vignette-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  background: rgba(0, 0, 0, 0.15);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  border-left: 3px solid var(--accent-primary);
  margin-bottom: 1.5rem;
}

[data-theme="light"] .case-vignette-text {
  background: rgba(0, 0, 0, 0.02);
}

.case-step-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin-bottom: 1.25rem;
  transition: var(--transition-fast);
}

.case-step-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--accent-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.case-step-question {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  line-height: 1.5;
}

.case-feedback-box {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid var(--correct-border);
  border-radius: var(--radius-sm);
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--text-primary);
  animation: fadeIn 0.3s ease;
}

/* --------------------------------------------------------------------------
   Comparison Matrices & Organ Tables
   -------------------------------------------------------------------------- */
.matrix-tabs-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.matrix-nav-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.55rem 1.15rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition-fast);
}

.matrix-nav-btn:hover {
  background: var(--bg-card-hover);
  color: var(--text-primary);
}

.matrix-nav-btn.active {
  background: var(--accent-primary);
  color: #ffffff;
  border-color: var(--accent-primary);
  box-shadow: 0 2px 10px rgba(99, 102, 241, 0.35);
}

.comparison-table-wrapper {
  overflow-x: auto;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  background: var(--bg-card);
  margin-bottom: 2rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.9rem;
}

.comparison-table th {
  background: rgba(255, 255, 255, 0.04);
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
}

.comparison-table td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
  vertical-align: top;
  line-height: 1.55;
}

.comparison-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}

.badge-tag-col1 {
  color: var(--accent-cyan);
  font-weight: 700;
}

.badge-tag-col2 {
  color: var(--accent-rose);
  font-weight: 700;
}

.badge-tag-col3 {
  color: var(--accent-emerald);
  font-weight: 700;
}

/* High-Yield Pearls Accordion */
.pearls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.pearl-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-fast);
}

.pearl-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-glow);
}

.pearl-card h4 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #fbbf24;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.pearl-card p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

/* --------------------------------------------------------------------------
   Enhanced Pro Quiz Features (Bookmark, Strike-through, Timer)
   -------------------------------------------------------------------------- */
.quiz-top-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quiz-icon-action-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-sm);
  font-size: 0.775rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: var(--transition-fast);
}

.quiz-icon-action-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
}

.quiz-icon-action-btn.bookmarked {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border-color: #f59e0b;
}

.palette-btn.has-bookmark::after {
  content: '★';
  position: absolute;
  top: 1px;
  right: 2px;
  font-size: 0.65rem;
  color: #fbbf24;
}

.palette-btn {
  position: relative;
}

/* Strikethrough eliminated option */
.option-btn.eliminated {
  opacity: 0.35;
  text-decoration: line-through;
  background: rgba(0, 0, 0, 0.15);
}

.opt-strike-trigger {
  margin-left: auto;
  opacity: 0.4;
  font-size: 0.75rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.15s;
  background: rgba(255, 255, 255, 0.05);
}

.option-btn:hover .opt-strike-trigger {
  opacity: 1;
}

.opt-strike-trigger:hover {
  color: var(--incorrect-text);
  background: rgba(244, 63, 94, 0.2);
}

/* Keyboard hint tag */
kbd {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 0.1rem 0.35rem;
  font-family: inherit;
  font-size: 0.7rem;
  color: var(--text-muted);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Countdown Timer Badge */
.exam-timer-bar {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-color);
  padding: 0.45rem 0.95rem;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 800;
}

.exam-timer-bar.timer-warning {
  border-color: #f43f5e;
  color: #f43f5e;
  animation: pulseWarning 1s infinite alternate;
}

@keyframes pulseWarning {
  from { box-shadow: 0 0 5px rgba(244, 63, 94, 0.3); }
  to { box-shadow: 0 0 15px rgba(244, 63, 94, 0.8); }
}

/* Exam Simulation Mode Results Card */
.exam-score-modal {
  background: var(--bg-card);
  border: 2px solid var(--border-glow);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.score-badge-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: var(--accent-gradient);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: #ffffff;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.score-badge-circle .score-grade {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.score-badge-circle .score-sub {
  font-size: 0.7rem;
  font-weight: 600;
}
"""

with open('css/style.css', 'a', encoding='utf-8') as f:
    f.write('\n' + extra_css + '\n')

print('Extra CSS successfully appended to css/style.css!')
