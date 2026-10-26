# travmaders

# PSYC 4115: Travma Psikolojisi | Kapsamlı Ders & İnteraktif Sınav Portalı

> **Ders Sorumluları:** Dr. Cansu Aykaç Kemik & Dr. Ömer Orhun Ercan  
> **Konu:** Psikolojik Travma, Otonom Sinir Sistemi, HPA Ekseni, DSM-5-TR Tanı Kriterleri, Klinik Ölçekler ve Ayırıcı Tanı

Bu platform; **PSYC 4115: The Psychology of Trauma** lisans ve lisansüstü dersinin 4 ana sunumunun (*ABUtrauma 1-2, 3, 4 ve 5*) eksiksiz senteziyle geliştirilmiş, modern cam efektli (glassmorphism), duyarlı ve tam etkileşimli bir eğitim portalıdır.

---

## 🌟 Öne Çıkan Özellikler

### 1. 📑 Kapsamlı Kavram Tabloları (50+ Akademik Terim)
- 4 ana kaynak için hazırlanmış; Türkçe-İngilizce terminoloji, kategori rozetleri, klinik açıklamalar, literatür atıfları ve sınav ipuçları.
- Anlık canlı arama ve kategori filtreleme.

### 2. 📝 105 Ayrıntılı Açıklamalı Soru Bankası
- **Kaynak 1 (Hafta 1-2):** Kriter A, kolektif/ikincil travma, McLaughlin boyutları, nörobiyoloji (20 Soru)
- **Kaynak 2 (Hafta 3):** O'Leary seyirleri, ASB-TSSB %83 geçiş riski, Tedeschi & Calhoun PTG boyutları, riskler (20 Soru)
- **Kaynak 3 (Hafta 4):** Otonom regülasyon (Sempatik vs Parasempatik), HPA ekseni, ASB 9/14 kuralı, tarihçe (20 Soru)
- **Kaynak 4 (Hafta 5):** DSM-5-TR B-C-D-E kriterleri, disosiyatif alt tip, PDEQ, LEC-5, CTQ ölçekleri (20 Soru)
- **Final Sınavı:** 4 kaynağın sentezi 25 adet orta-zor düzeyde klinik vaka ve ayırıcı tanı sorusu.
- **Her Şıkkın Mantığı:** Yalnızca doğru cevap değil; A, B, C, D ve E seçeneklerinin her birinin neden doğru veya çeldirici olduğu ayrıntılı olarak açıklanır.

### 3. ⚡ Hızlı Çözüm ("Testleri Geç") & Soru Kitapçığı
- **⚡ Testleri Geç (%100):** Tek tıkla tüm soruları çözüp notlandırma (105/105 - AA Notu), anında tüm çözümleri ve çeldirici analizlerini açma imkânı.
- **📖 105 Soru & Çözüm Kitapçığı:** Tüm soruları tek bir kaydırılabilir ekranda filtreleme, arama ve `Yazdır / PDF` olarak kaydetme özelliği.

### 4. 🗂️ 60 Akıllı 3D Çevirmeli Bilgi Kartı (Flashcards)
- Kriter A, HPA hormonsal kaskadı, O'Leary eğrileri, ölçek kesme puanları ve tarihsel vakalar.
- Leitner tarzı *Öğrenildi* / *Tekrar Et* işaretleme sistemi.

### 5. 🩺 İnteraktif Klinik Vaka Laboratuvarı
- 3 farklı gerçekçi anamnez (6 Şubat deprem kazazedesinde derealizasyon, olay yeri inceleme polisinde ikincil travma, kronik çocukluk istismarında Karmaşık TSSB).
- 3 aşamalı klinik karar verme ve ayırıcı tanı gerekçelendirmesi.

### 6. 📑 Karşılaştırma Matrisleri & Kritik Sınav Notları
- ASB vs TSSB karşılaştırma tablosu.
- DSM-5-TR vs ICD-11 tanı kriterleri farklılıkları.
- Sempatik vs Parasempatik organ etki haritası.
- Sınavda kesin çıkacak 10 altın hap bilgi (High-Yield Pearls).

---

## 🚀 Yerel Çalıştırma

Projeyi yerel bilgisayarınızda açmak için ek bir derleme (build) gerekmez:

```bash
# Depoyu klonlayın
git clone https://github.com/JuraPlugins/travmaders.git
cd travmaders

# Python basit sunucu ile çalıştırın
python -m http.server 8080
```

Ardından tarayıcınızdan **`http://localhost:8080/index.html`** adresine gidin.

---

## 📂 Proje Yapısı

```
travmaders/
├── index.html                  # Ana tek sayfa uygulama (SPA)
├── css/
│   └── style.css               # Modern glassmorphic tasarım sistemi & karanlık tema
├── js/
│   ├── app.js                  # Temel durum yönetimi, ses sentezleyici, filtreler & kitapçık
│   ├── data_concepts.js        # 4 kaynağın 50+ akademik kavramı
│   ├── data_q1.js              # Kaynak 1: 20 soru & şık analizleri
│   ├── data_q2.js              # Kaynak 2: 20 soru & şık analizleri
│   ├── data_q3.js              # Kaynak 3: 20 soru & şık analizleri
│   ├── data_q4.js              # Kaynak 4: 20 soru & şık analizleri
│   ├── data_final.js           # Final Sınavı: 25 zorlu vaka sorusu & şık analizleri
│   ├── data_flashcards.js      # 60 adet 3D çevirmeli bilgi kartı
│   ├── data_clinical_cases.js  # 3 aşamalı klinik vaka simülatörü
│   └── data_summaries.js       # Karşılaştırma matrisleri ve kritik notlar
├── README.md                   # Proje dokümantasyonu
└── .gitignore                  # Git hariç tutma kuralları
```

---

## 📜 Lisans & Akademik Not

Bu çalışma **Antalya Bilim Üniversitesi / Akdeniz Üniversitesi** bünyesindeki **PSYC 4115: The Psychology of Trauma** dersi müfredatına ve DSM-5-TR / ICD-11 klinik kılavuzlarına sadık kalınarak hazırlanmıştır.
