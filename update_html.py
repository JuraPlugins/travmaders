# update_html.py
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update header actions
old_header_actions = '''      <div class="header-actions">
        <button class="action-icon-btn" id="sound-btn" onclick="toggleSound()" title="Ses Efektlerini Aç/Kapat">
          <span id="sound-icon">🔔</span>
        </button>'''

new_header_actions = '''      <div class="header-actions">
        <button class="btn-fast-pass" id="pass-all-btn" onclick="passAllQuizzes()" title="Tüm 105 Testi ve Final Sınavını %100 Çözerek Geç">
          <span>⚡</span> Testleri Geç (%100)
        </button>
        <button class="btn-booklet-trigger" onclick="openStudyBooklet()" title="105 Sorunun Açıklamalı Çözüm Kitapçığını Aç">
          <span>📖</span> Soru Kitapçığı
        </button>
        <button class="action-icon-btn" id="sound-btn" onclick="toggleSound()" title="Ses Efektlerini Aç/Kapat">
          <span id="sound-icon">🔔</span>
        </button>'''

if old_header_actions in content:
    content = content.replace(old_header_actions, new_header_actions)
    print('Header actions replaced.')
else:
    print('Warning: old_header_actions not found exactly!')

# 2. Add quick-pass-banner to tab-overview
old_hero_end = '''            <button class="btn-primary" style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);" onclick="switchTab('final')">
              <span>🏆</span> Final Sınavına Gir
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Study Tools Row -->'''

new_hero_end = '''            <button class="btn-primary" style="background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);" onclick="switchTab('final')">
              <span>🏆</span> Final Sınavına Gir
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Pass & Exam Readiness Alert Banner -->
      <div class="quick-pass-banner">
        <div class="quick-pass-info">
          <div class="quick-pass-icon">⚡</div>
          <div>
            <h4>Hızlı Sınav Hazırlığı: Testleri Otomatik Geç (%100 Başarı)</h4>
            <p>
              105 sorunun tamamını tek tıkla %100 doğru olarak çözebilir, tüm şık gerekçelerini ve çeldirici analizlerini anında açabilir ya da kapsamlı Soru & Çözüm Kitapçığında listeleyebilirsiniz.
            </p>
          </div>
        </div>
        <div class="quick-pass-actions">
          <button class="btn-primary" style="background: #10b981; color: white; border: none; font-weight: 700;" onclick="passAllQuizzes()">
            ⚡ Tüm Testleri Geç (%100)
          </button>
          <button class="btn-secondary" style="font-weight: 700;" onclick="openStudyBooklet()">
            📖 Soru & Çözüm Kitapçığı
          </button>
        </div>
      </div>

      <!-- Quick Study Tools Row -->'''

if old_hero_end in content:
    content = content.replace(old_hero_end, new_hero_end)
    print('Quick pass banner added to overview.')
else:
    print('Warning: old_hero_end not found exactly!')

# 3. Add passQuiz buttons to sidebar cards
for sk in ['source1', 'source2', 'source3', 'source4', 'final']:
    old_sb = f'''<button class="btn-secondary" style="font-size: 0.725rem; padding: 0.2rem 0.45rem;" onclick="filterMistakesOnly('{sk}')" title="Yalnızca yanlışları göster">⚠️ Yanlışlar</button>'''
    new_sb = f'''<button class="btn-secondary" style="font-size: 0.725rem; padding: 0.2rem 0.45rem; color: #10b981; font-weight: 700;" onclick="passQuiz('{sk}')" title="Bu testi %100 doğru çözerek geç">⚡ Testi Geç</button>\n                  <button class="btn-secondary" style="font-size: 0.725rem; padding: 0.2rem 0.45rem;" onclick="filterMistakesOnly('{sk}')" title="Yalnızca yanlışları göster">⚠️ Yanlışlar</button>'''
    if old_sb in content:
        content = content.replace(old_sb, new_sb)
        print(f'Added pass button for {sk}.')
    else:
        print(f'Warning: old_sb for {sk} not found.')

# 4. Add passQuiz button to Final Exam header banner
old_final_header = '''              <button class="toggle-switch-btn exam-mode-btn" data-mode="exam" onclick="toggleFinalExamMode(true)">
                ⏱️ Gerçek Sınav Simülasyonu (40 Dk Süreli)
              </button>
            </div>'''

new_final_header = '''              <button class="toggle-switch-btn exam-mode-btn" data-mode="exam" onclick="toggleFinalExamMode(true)">
                ⏱️ Gerçek Sınav Simülasyonu (40 Dk Süreli)
              </button>
              <button class="btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.85rem; color: #10b981; border-color: rgba(16, 185, 129, 0.4); font-weight: 700;" onclick="passQuiz('final')">
                ⚡ Final Sınavını Geç (%100 Çöz)
              </button>
            </div>'''

if old_final_header in content:
    content = content.replace(old_final_header, new_final_header)
    print('Added pass button to Final header.')
else:
    print('Warning: old_final_header not found.')

# 5. Add Booklet Modal before </body>
modal_html = '''
  <!-- ========================================================================
       MASTER STUDY BOOKLET MODAL (105 Soru & Ayrıntılı Çözüm Kitapçığı)
       ======================================================================== -->
  <div class="booklet-modal" id="booklet-modal" style="display: none;">
    <div class="booklet-backdrop" onclick="closeStudyBooklet()"></div>
    <div class="booklet-dialog">
      <div class="booklet-header">
        <div class="booklet-title-group">
          <span class="source-pill pill-final">📖 Akredite Çalışma Kitapçığı</span>
          <h3>PSYC 4115: 105 Soru, Çözüm & Çeldirici Analiz Kitapçığı</h3>
          <p>Dört ders sunumu ve Final Sınavının tüm soruları, doğru şıkları ve her seçeneğin bilimsel mantıksal gerekçeleri.</p>
        </div>
        <div class="booklet-header-btns">
          <button class="btn-secondary" onclick="window.print()" title="Yazdır veya PDF olarak kaydet">🖨️ Yazdır / PDF</button>
          <button class="action-icon-btn" onclick="closeStudyBooklet()" title="Kapat (Esc)" style="font-size: 1.25rem;">✕</button>
        </div>
      </div>

      <div class="booklet-toolbar">
        <div class="booklet-filters">
          <button class="booklet-filter-btn active" data-src="all" onclick="filterBookletSource('all')">Tüm Sorular (105)</button>
          <button class="booklet-filter-btn" data-src="source1" onclick="filterBookletSource('source1')">Kaynak 1 (20)</button>
          <button class="booklet-filter-btn" data-src="source2" onclick="filterBookletSource('source2')">Kaynak 2 (20)</button>
          <button class="booklet-filter-btn" data-src="source3" onclick="filterBookletSource('source3')">Kaynak 3 (20)</button>
          <button class="booklet-filter-btn" data-src="source4" onclick="filterBookletSource('source4')">Kaynak 4 (20)</button>
          <button class="booklet-filter-btn" data-src="final" onclick="filterBookletSource('final')">Final Sınavı (25)</button>
        </div>
        <div class="booklet-search-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" id="booklet-search-input" placeholder="Soru metni, kavram veya şıklarda ara..." oninput="handleBookletSearch(this.value)">
        </div>
        <span class="booklet-counter-pill" id="booklet-match-count">105 Soru Listeleniyor</span>
      </div>

      <div class="booklet-body" id="booklet-questions-list"></div>
    </div>
  </div>
'''

if '<!-- MASTER STUDY BOOKLET MODAL' not in content:
    content = content.replace('</body>', modal_html + '\n</body>')
    print('Booklet modal HTML inserted.')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('index.html successfully updated!')
