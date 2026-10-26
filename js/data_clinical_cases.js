// ==========================================================================
// PSYC 4115: The Psychology of Trauma - İNTERAKTİF KLİNİK VAKA LABORATUVARI
// Gerçekçi Klinik Vakalar, Adım Adım Tanı Algoritmaları & Karar Simülasyonu
// ==========================================================================

const CLINICAL_CASES_DATA = [
  {
    id: "case_1",
    title: "Vaka 1: 6 Şubat Depremi Sonrası Gecikmiş Başvuru",
    patientName: "Ahmet B.",
    age: 38,
    occupation: "Mühendis",
    presentationDay: "Depremin 50. Günü",
    vignette: `Ahmet Bey, 6 Şubat depreminde Hatay'da göçük altında kalmış ve 8 saat sonra canlı olarak kurtarılmıştır. Eşini aynı binada kaybetmiştir. Depremin üzerinden 50 gün geçtikten sonra yakınlarının ısrarıyla psikiyatri kliniğine başvurmuştur. 
    
    Görüşmede; gece uykuya dalmakta çok zorlandığını, uyuduğunda sürekli betonların üzerine çöktüğü kabuslarla sıçradığını, gündüzleri ise inşaat veya kamyon sesleri duyduğunda kalbinin göğsünden fırlayacak gibi çarptığını ve soğuk terler döktüğünü belirtmektedir. Depremi andıran hiçbir haber programını açmamakta, Hatay kelimesi geçtiğinde odayı terk etmektedir. Kendini 'Eşimi kurtaramadım, ben yaşamayı hak etmiyorum' diyerek suçlamaktadır. Son olarak, 'Bazen kendime yukarıdan bakıyor gibiyim, bedenim bana yabancı bir ceset gibi hissettiriyor' ifadesini kullanmıştır.`,
    steps: [
      {
        stepNumber: 1,
        question: "Ahmet Bey'in yaşadığı deneyim DSM-5-TR Kriter A (Travmatik Maruziyet) açısından nasıl değerlendirilir?",
        options: [
            "A) Göçük altında kaldığı için doğrudan maruziyet (Kriter A1) ve eşinin ölümü nedeniyle öğrenme/tanıklık (Kriter A2/A3) açısından Kriter A fazlasıyla karşılanmıştır.",
            "B) Kendisi hayatta kaldığı için Kriter A kesinlikle karşılanmamıştır.",
            "C) Yalnızca televizyondan izlemiş gibi kabul edilir.",
            "D) Kriter A sadece çocuklarda değerlendirilir."
        ],
        correct: 0,
        clinicalFeedback: "Ahmet Bey hem gerçek ölüm tehdidine doğrudan maruz kalmış (göçük altı) hem de eşinin şiddet/kaza sonucu vefatına tanık olmuştur. Kriter A net bir şekilde mevcuttur."
      },
      {
        stepNumber: 2,
        question: "Belirtilerin süre penceresi (50. gün) göz önüne alındığında, birincil tanı Akut Stres Bozukluğu (ASB) olabilir mi?",
        options: [
            "A) Evet, semptomlar 1 yıl dolana kadar her zaman ASB olarak adlandırılır.",
            "B) HAYIR, olamaz. ASB belirtileri en fazla 1 ay sürebilir. 50. günde olunduğu için süre kriteri (>1 ay) aşılmıştır ve tanı TSSB kapsamındadır.",
            "C) Evet, depremzedelerin tamamı ömür boyu ASB tanısı alır.",
            "D) Süre tanı için hiçbir önem taşımaz."
        ],
        correct: 1,
        clinicalFeedback: "ASB zaman penceresi 3 gün ile 1 ay arasındadır. Ahmet Bey 50. gündedir (Kriter F: Süre > 1 ay karşılanmıştır), dolayısıyla ASB elenir ve primer tanı TSSB yönündedir."
      },
      {
        stepNumber: 3,
        question: "Ahmet Bey'in 'Bazen kendime yukarıdan bakıyor gibiyim, bedenim yabancı bir ceset gibi' ifadesi DSM-5-TR'de hangi klinik belirteci (specifier) gerektirir?",
        options: [
            "A) Geç Başlangıçlı Tip",
            "B) Disosiyatif Alt Tip (Depersonalizasyon Belirtileri İle)",
            "C) Katatonik Alt Tip",
            "D) Bipolar Manik Geçiş"
        ],
        correct: 1,
        clinicalFeedback: "Kişinin kendi bedenine dışarıdan bir gözlemci gibi bakması ve bedeninden kopması prototipik Depersonalizasyondur. DSM-5-TR'de tanıya 'Disosiyatif Belirtiler İle' alt tipi eklenmelidir."
      },
      {
        stepNumber: 4,
        question: "Bu hasta için uluslararası kılavuzlara ve ders kaynaklarına göre en uygun birinci basamak kanıta dayalı psikoterapi yaklaşımı nedir?",
        options: [
            "A) Travma Odaklı Bilişsel Davranışçı Terapi (TF-CBT) veya EMDR",
            "B) Klasik serbest çağrışımlı psikanaliz",
            "C) Zorla göçük fotoğraflarına baktırma (kontrolsüz maruz bırakma)",
            "D) Hiçbir terapi verilmemeli, sadece uyutulmalıdır"
        ],
        correct: 0,
        clinicalFeedback: "Slayt 28 (Kaynak 3): TF-CBT ve EMDR TSSB tedavisinde en yüksek kanıt düzeyine sahip altın standart psikoterapötik yaklaşımlardır."
      }
    ]
  },
  {
    id: "case_2",
    title: "Vaka 2: Adli Tıp ve Olay Yeri Polisinde Mesleki Tükenmişlik",
    patientName: "Murat K.",
    age: 41,
    occupation: "Olay Yeri İnceleme Memuru",
    presentationDay: "Meslekte 12. Yıl",
    vignette: `Murat Bey, 12 yıldır cinayet, çocuk istismarı ve ağır trafik kazalarında olay yeri inceleme ekibinde görev yapmaktadır. Son 6 aydır mesai arkadaşlarına tahammülsüzlük, eve geldiğinde çocuklarına ve eşine karşı tamamen duygusuz hissetme ('İçimde sevgi namına hiçbir şey kalmadı'), işe gitmek istememe ve sürekli alkol tüketerek zihnindeki kanlı görüntüleri susturmaya çalışma şikayetleri göstermektedir. Kendisine fiziksel bir saldırı olmamıştır.`,
    steps: [
      {
        stepNumber: 1,
        question: "Murat Bey'in fiziksel olarak hiçbir saldırıya uğramamış olması DSM-5-TR Kriter A'yı engeller mi?",
        options: [
            "A) Evet, fiziksel yara almayan hiç kimseye travma tanısı konulamaz.",
            "B) HAYIR, engellemez. DSM-5 ile birlikte 'Mesleki görev icabı travmatik olayların tiksindirici/aversif ayrıntılarına aşırı veya tekrarlı maruz kalma' Kriter A kapsamına alınmıştır.",
            "C) Yalnızca amiri onay verirse Kriter A sayılır.",
            "D) Olay yeri polisleri travmadan tamamen muaftır."
        ],
        correct: 1,
        clinicalFeedback: "DSM-5-TR Kriter A'nın 4. maddesi ilk müdahale ekipleri, adli tıp çalışanları ve polislerin görevleri esnasındaki aversif maruziyetlerini açıkça tanımlamıştır."
      },
      {
        stepNumber: 2,
        question: "Murat Bey'in duygusal uyuşması, sabırsızlığı ve başkalarının acılarına sürekli maruz kalmasıyla tükenmesi öncelikle hangi kavramla açıklanır?",
        options: [
            "A) İkincil Travmatik Stres ve Merhamet Yorgunluğu (Compassion Fatigue)",
            "B) Travma Sonrası Büyüme (PTG)",
            "C) Bipolar Bozukluk",
            "D) Çocukluk Çağı Yoksunluğu"
        ],
        correct: 0,
        clinicalFeedback: "Cocker & Joss (2016): Merhamet yorgunluğu ve ikincil travmatik stres; başkalarının acılarına mesleki maruziyet sonucu duygusal tükenme, duyarsızlaşma ve yabancılaşmayı ifade eder."
      },
      {
        stepNumber: 3,
        question: "Murat Bey'in alkol tüketimini artırarak pervasızca araç kullanması DSM-5-TR TSSB'de hangi belirti kümesine örnektir?",
        options: [
            "A) Kriter B (İntrüzyon)",
            "B) Kriter C (Kaçınma)",
            "C) Kriter E (Uyarılma ve Tepkisellik - Pervasız veya Kendine Zarar Verici Davranış)",
            "D) Kriter H (Dışlama)"
        ],
        correct: 2,
        clinicalFeedback: "Kriter E2 maddesi: Pervasız veya kendine zarar verici davranışlar (reckless or self-destructive behavior) uyarılma kümesinin ana semptomlarındandır."
      }
    ]
  },
  {
    id: "case_3",
    title: "Vaka 3: Kronik Çocukluk Örselenmesi ve Kompleks TSSB",
    patientName: "Selin D.",
    age: 26,
    occupation: "Mimar",
    presentationDay: "Klinik Başvuru",
    vignette: `Selin Hanım, Çocukluk Çağı Travmaları Anketi'nde (CTQ) 'Ailemde bana sürekli aptal ve işe yaramaz denirdi', 'Kemerle dövülürdüm' ve 'Ailem tarafından istenmediğimi hissederdim' maddelerine en yüksek puanları vermiştir. Yetişkin yaşamında öfkesini kontrol edememekte, partnerlerine güvenememekte, 'Ben içten içe kusurluyum ve kimse beni gerçekten sevemez' inancı taşımakta ve sık sık ilişkilerini sabote etmektedir.`,
    steps: [
      {
        stepNumber: 1,
        question: "Selin Hanım'ın CTQ profili McLaughlin & Sheridan (2016) boyutsal modeline göre hangi ağırlıklı adversiteye işaret eder?",
        options: [
            "A) Yalnızca pozitif durumlar ve büyüme",
            "B) Hem 'Tehdit' (fiziksel/duygusal istismar) hem de 'Yoksunluk' (duygusal ihmal) boyutlarında kronik kümülatif örselenme",
            "C) Sadece tek bir trafik kazası",
            "D) Sıradan okul sınavı stresi"
        ],
        correct: 1,
        clinicalFeedback: "Selin Hanım hem aktif şiddet/aşağılanma (Tehdit boyutu) hem de istenmeme/sevgisizlik (Yoksunluk/İhmal boyutu) yaşamıştır."
      },
      {
        stepNumber: 2,
        question: "Dünya Sağlık Örgütü'nün ICD-11 sisteminde Selin Hanım'ın çekirdek TSSB'ye ek olarak 'Duygu regülasyonunda bozulma', 'Negatif benlik algısı' ve 'Kişilerarası ilişki sürdürme güçlüğü' sergilemesi hangi tanıyı koydurur?",
        options: [
            "A) Akut Stres Bozukluğu",
            "B) Kompleks Travma Sonrası Stres Bozukluğu (CPTSD)",
            "C) Basit Fobi",
            "D) Narkolepsi"
        ],
        correct: 1,
        clinicalFeedback: "ICD-11'de DSO (Kendilik Örgütlenmesinde Bozulma) triadı ile seyreden kronik travma tablosunun resmi adı Kompleks TSSB'dir (CPTSD)."
      }
    ]
  }
];
