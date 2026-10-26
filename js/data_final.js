// ==========================================================================
// PSYC 4115: The Psychology of Trauma - FİNAL SINAVI (ORTA-ZOR 25 KAPSAMLI SORU)
// Kaynaklar: ABUtrauma1ve2, ABUtrauma3, ABUtrauma4, ABUtrauma5 Sentezi
// ==========================================================================

const QUESTIONS_FINAL = [
  {
    "id": "final_1",
    "question": "VAKA 1: 34 yaşındaki bir acil servis doktoru, görev yaptığı hastanede çok sayıda kaza ve şiddet kurbanının parçalanmış cesetleriyle ilgilenmektedir. Son 3 aydır nöbet haricinde de zihninde bu ceset görüntüleri canlanmakta, uykuları bölünmekte, meslektaşlarına karşı aniden öfkelenmekte ve hastaneye gitmemek için sürekli rapor almaya çalışmaktadır. Doktorun bu durumu DSM-5-TR tanı kriterleri açısından nasıl değerlendirilmelidir?",
    "options": [
      "A) Olayları bizzat kendisi yaşamadığı ve fiziksel bir saldırıya uğramadığı için Kriter A kesinlikle karşılanmamıştır.",
      "B) Mesleki görev icabı travmatik olayların tiksindirici detaylarına tekrarlayıcı ve aşırı maruziyet (Kriter A) mevcuttur; intrüzyon, kaçınma, uyarılma belirtileri 1 aydan uzun sürdüğü için TSSB tanısını karşılar.",
      "C) Doktorun durumu yalnızca hafif bir iş yorgunluğudur, hiçbir psikiyatrik değerlendirme gerekmez.",
      "D) Olay 3 aydır sürdüğü için tanı mutlaka Akut Stres Bozukluğu (ASB) olmalıdır.",
      "E) Yalnızca televizyondan haber izlemekle eşdeğerdir."
    ],
    "correct": 1,
    "explanation": "DSM-5-TR Kriter A'ya göre mesleki görev icabı travmatik olayların aversif ayrıntılarına tekrarlayan veya aşırı maruz kalma (ilk müdahale ekipleri, hekimler, adli tıp çalışanları) geçerli bir maruziyet türüdür. Belirtiler (intruzyon, kaçınma, öfke/uyarılma) 3 aydır devam ettiği için süre kriteri (>1 ay) aşılmış ve TSSB tablosu oluşmuştur.",
    "optionAnalysis": {
      "A": "Yanlış. DSM-5 ile birlikte mesleki maruziyet açıkça Kriter A kapsamına alınmıştır; fiziksel yara şart değildir.",
      "B": "DOĞRU. Mesleki maruziyet (Kriter A) mevcuttur ve semptomlar 1 aydan uzun sürdüğü için (>3 ay) tanı TSSB'dir.",
      "C": "Yanlış. İntrüzyon, kaçınma ve uyarılma gösteren ve işlevselliği bozulan bir tabloda klinik tanı esastır.",
      "D": "Yanlış. Akut Stres Bozukluğu en fazla 1 ay sürebilir; 3 aydır süren tablo ASB olamaz.",
      "E": "Yanlış. Sıradan medya izleme Kriter A dışındadır ancak mesleki görev bizzat Kriter A'dır."
    },
    "sourceRef": "ABUtrauma1ve2 Slayt 11, 16 & ABUtrauma5 Slayt 3-8"
  },
  {
    "id": "final_2",
    "question": "VAKA 2: Bir banka soygununda silahla rehin alınan 28 yaşındaki bir veznedar, olayın 12. gününde psikiyatri kliniğine başvurmuştur. Olay anında kendini film izliyormuş gibi hissettiğini (peritravmatik disosiasyon), bankayı hatırlatan caddeden kaçındığını, sürekli irkildiğini, uykularının bozulduğunu ve toplam 10 semptom sergilediğini belirtmektedir. Bu danışan için EN OLASI DSM-5-TR tanısı nedir?",
    "options": [
      "A) Travma Sonrası Stres Bozukluğu (TSSB)",
      "B) Akut Stres Bozukluğu (ASB)",
      "C) Bipolar Bozukluk - Manik Atak",
      "D) Yaygın Gelişimsel Bozukluk",
      "E) Antisosyal Kişilik Bozukluğu"
    ],
    "correct": 1,
    "explanation": "Olayın üzerinden henüz 12 gün geçmiştir. DSM-5-TR'de travma sonrası 3 gün ile 1 ay arasında süren ve 14 semptomdan en az 9'unun bulunduğu tablo AKUT STRES BOZUKLUĞU'dur (ASB). Semptomlar 1 ayı aşmadığı için bu aşamada TSSB tanısı konulamaz.",
    "optionAnalysis": {
      "A": "Yanlış. TSSB için belirtilerin 1 aydan uzun sürmesi (Kriter F) zorunludur; vaka henüz 12. gündedir.",
      "B": "DOĞRU. Travma sonrası 12. günde olunması ve semptom eşiğinin (10 > 9) karşılanması nedeniyle tanı Akut Stres Bozukluğu'dur.",
      "C": "Yanlış. Manik atak belirtileri (öfori, grandiyözite) yoktur.",
      "D": "Yanlış. Çocukluk çağı nörogelişimsel bozukluğudur.",
      "E": "Yanlış. Kişilik patolojisi değil, akut travmatik reaksiyondur."
    },
    "sourceRef": "ABUtrauma3 Slayt 18 & ABUtrauma4 Slayt 16, 17"
  },
  {
    "id": "final_3",
    "question": "VAKA 3: Çocukluğu boyunca alkolik ebeveynleri tarafından kronik fiziksel şiddete maruz kalan, aşağılanan ve kaçması imkansız bir ev ortamında büyüyen 25 yaşındaki bir danışan; yetişkinliğinde kalıcı öfke patlamaları, kendini değersiz ve hasarlı hissetme ('Ben bozuğum') ve kimseyle yakın ilişki kuramama şikayetleriyle başvurmuştur. Dünya Sağlık Örgütü'nün ICD-11 kılavuzuna göre bu danışanın klinik tablosu hangisine en uygundur?",
    "options": [
      "A) Basit Fobi",
      "B) Kompleks Travma Sonrası Stres Bozukluğu (CPTSD)",
      "C) Akut Stres Bozukluğu",
      "D) Narkolepsi",
      "E) Şizofreni Hebefrenik Tip"
    ],
    "correct": 1,
    "explanation": "ICD-11'de uzun süreli, tekrarlayan ve kaçması zor travmalar (çocukluk çağı kronik istismarı) neticesinde çekirdek TSSB semptomlarına ek olarak Kendilik Örgütlenmesinde Bozulma (DSO: duygu regülasyon bozukluğu, olumsuz benlik kavramı, kişilerarası ilişki sürdürme yetersizliği) geliştiğinde tanı KOMPLEKS TSSB'dir (CPTSD).",
    "optionAnalysis": {
      "A": "Yanlış. Tekil nesne korkusu değildir.",
      "B": "DOĞRU. ICD-11 Kompleks TSSB tanı kriterlerinin prototipik görünümüdür (tekrarlayan travma + DSO triad).",
      "C": "Yanlış. Akut 1 aylık reaksiyon değil, yıllarca süren kronik tablodur.",
      "D": "Yanlış. Uyku atağı nörolojik bozukluğudur.",
      "E": "Yanlış. Psikotik hezeyan veya halüsinasyon söz konusu değildir."
    },
    "sourceRef": "ABUtrauma1ve2 Slayt 18 & Karatzias et al. (2017), WHO (2024)"
  },
  {
    "id": "final_4",
    "question": "Kronik travmatik stres altında HPA ekseni ve beynin nöral devrelerinde meydana gelen değişimlerle ilgili aşağıdaki ifadelerden hangisi BİYOLOJİK OLARAK DOĞRUDUR?",
    "options": [
      "A) Kortizol seviyeleri sürekli amigdalayı küçültürken hipokampusu devasa boyuta ulaştırır.",
      "B) Amigdala hiperaktifleşerek aşırı tehdit algısı üretirken; Medial Prefrontal Korteks (mPFC) hipoaktifleşir ve hipokampus uzamış yüksek kortizol etkisiyle hacim kaybına uğrar.",
      "C) Hipotalamus hiçbir zaman CRH salgılamaz, sadece adrenalin üretir.",
      "D) Sempatik sinir sistemi stres anında sindirimi 10 kat hızlandırarak bedeni rahatlatır.",
      "E) Parasempatik sinir sistemi kalp atışını dakikada 200'e çıkararak savaşa hazırlar."
    ],
    "correct": 1,
    "explanation": "Nörobiyolojik literatürde (Ulrich-Lai & Herman, 2009; O'Doherty et al., 2015) gösterildiği gibi: Amigdala aşırı uyarılır (hiperaktif tehdit algısı), Prefrontal korteks yetersiz inhibisyon gösterir (hipoaktivite - korkuyu frenleyememe) ve Hipokampus kronik kortizol maruziyetiyle nörotoksisiteye uğrayıp hacim kaybeder.",
    "optionAnalysis": {
      "A": "Yanlış. Tam tersi: Hipokampus küçülür, amigdala küçülmez.",
      "B": "DOĞRU. Klasik nörobiyolojik disfonksiyon: Amigdala hiperaktivitesi, mPFC hipoaktivitesi ve hipokampal atrofi.",
      "C": "Yanlış. Hipotalamus HPA ekseninin başlatıcısıdır ve CRH salgılar.",
      "D": "Yanlış. Sempatik sistem sindirimi durdurur, hızlandırmaz.",
      "E": "Yanlış. Kalbi hızlandıran Sempatik sistemdir; Parasempatik sistem kalbi yavaşlatır."
    },
    "sourceRef": "ABUtrauma4 Slayt 5-11 & Ulrich-Lai & Herman (2009)"
  },
  {
    "id": "final_5",
    "question": "McLaughlin & Sheridan'ın (2016) Çocukluk Çağı Adversitesi modeline göre, erken çocukluk döneminde fiziksel ve duygusal ihmale uğramış, bilişsel uyaranlardan yoksun bırakılmış bir bireyde en belirgin etkilenen gelişimsel boyut hangisidir?",
    "options": [
      "A) Yoksunluk (Deprivation) boyutu; bilişsel gelişim, lisan ve kortikal kalınlıkta belirgin geriliklerle ilişkilidir.",
      "B) Tehdit (Threat) boyutu; amigdala aşırı duyarlılığına yol açar.",
      "C) Yalnızca işitme duyusunun tamamen yok olması.",
      "D) Bireyin hafızasının normalden 5 kat daha güçlü hale gelmesi.",
      "E) Hiçbir boyutta hiçbir etkinin görülmemesi."
    ],
    "correct": 0,
    "explanation": "McLaughlin & Sheridan (2016) modelinde 'Yoksunluk' (Deprivation: fiziksel/duygusal ihmal, bilişsel uyarım azlığı); kortikal gelişimi, lisan becerilerini ve karmaşık bilişsel süreçleri sekteye uğratır. Tehdit ise amigdala ve korku koşullanması yolaklarını hedefler.",
    "optionAnalysis": {
      "A": "DOĞRU. İhmal ve uyarımsızlık Yoksunluk (Deprivation) boyutudur ve kortikal/bilişsel gelişimi baskılar.",
      "B": "Yanlış. Tehdit boyutu istismar ve şiddetle ilgilidir.",
      "C": "Yanlış. Duyusal organ kaybı değildir.",
      "D": "Yanlış. Bilişsel gerilik görülür, hafıza güçlenmez.",
      "E": "Yanlış. Çocukluk çağı adversitesinin beyin gelişimi üzerinde somut etkileri vardır."
    },
    "sourceRef": "ABUtrauma1ve2 Slayt 19, 20 & McLaughlin & Sheridan (2016)"
  },
  {
    "id": "final_6",
    "question": "Aşağıdaki klinik tablolardan hangisi DSM-5-TR'de 'TSSB Disosiyatif Alt Tipi' (With Dissociative Symptoms) tanısını doğrular?",
    "options": [
      "A) Hastanın travma sonrası sadece kabus görmesi",
      "B) Hastanın travma kriterlerini karşılamasının yanında, sürekli olarak sanki bedeninin dışındaymış gibi hissetmesi (depersonalizasyon) veya çevresindeki insan ve mekanların bir rüya/sis perdesi gibi gerçek dışı gelmesi (derealizasyon)",
      "C) Hastanın yalnızca tansiyonunun yükselmesi",
      "D) Hastanın sadece arkadaşlarıyla görüşmekten kaçınması",
      "E) Hastanın olay gününü ayrıntısıyla hatırlayabilmesi"
    ],
    "correct": 1,
    "explanation": "Slayt 9: TSSB Disosiyatif Alt Tipi için kişinin standart TSSB kriterlerini karşılamasına ek olarak kalıcı ya da tekrarlayıcı Depersonalizasyon (kendi bedenine/zihnine yabancılaşma) veya Derealizasyon (çevreye/dünyaya yabancılaşma) yaşaması şarttır.",
    "optionAnalysis": {
      "A": "Yanlış. Kabuslar standart Kriter B intruzyon belirtisidir, disosiyatif alt tip için yeterli değildir.",
      "B": "DOĞRU. Depersonalizasyon veya Derealizasyon varlığı disosiyatif alt tipi kesinleştirir.",
      "C": "Yanlış. Somatik kardiyovasküler uyarılmadır.",
      "D": "Yanlış. Kriter C kaçınma belirtisidir.",
      "E": "Yanlış. Normal bellek fonksiyonudur."
    },
    "sourceRef": "ABUtrauma5 Slayt 9 & DSM-5-TR (2022)"
  },
  {
    "id": "final_7",
    "question": "Bir araştırmacı, Çoculuk Çağı Travmaları Anketi'ni (CTQ) uyguladığı bir katılımcının 'Mükemmel bir çocukluğum vardı', 'Dünyanın en iyi ailesine sahiptim' ve 'Ailemde değiştirmek isteyeceğim hiçbir şey yoktu' maddelerine en yüksek puanları verdiğini görmüştür. Araştırmacı bu veriyi nasıl yorumlamalıdır?",
    "options": [
      "A) Katılımcının verileri kesinlikle en güvenilir ve objektif veridir.",
      "B) Katılımcı testin Minimizasyon/İnkar skalasında aşırı savunmacı bir yanıt örüntüsü sergilemektedir; travmatik geçmişi inkar etme eğilimindedir ve yanıtlar ihtiyatla değerlendirilmelidir.",
      "C) Katılımcı gelecekte kesinlikle psikiyatrist olacaktır.",
      "D) Katılımcının ağır düzeyde fiziksel istismara uğradığı kanıtlanmıştır.",
      "E) Ölçek bozuktur, yeniden basılmalıdır."
    ],
    "correct": 1,
    "explanation": "Slayt 22: CTQ'daki 'Positive Situations' maddeleri ölçeğin Minimizasyon ve İnkar (Denial) geçerlik alt boyutunu oluşturur. Bu maddelere verilen aşırı yüksek puanlar danışanın savunmacı tutumunu ve travmatik yaşantıları inkar etme riskini gösterir.",
    "optionAnalysis": {
      "A": "Yanlış. Tam aksine aşırı idealizasyon psikometride güvenilirlik şüphesi yaratır.",
      "B": "DOĞRU. Minimizasyon/İnkar kontrol skalasıdır; savunmacı inkar örüntüsüne işaret eder.",
      "C": "Yanlış. Mesleki yönelimle ilgisizdir.",
      "D": "Yanlış. Maddeler istismar değil, inkar skalasıdır.",
      "E": "Yanlış. Ölçek uluslararası geçerliği kanıtlanmış standart bir araçtır."
    },
    "sourceRef": "ABUtrauma5 Slayt 22 & Bernstein et al. (2003)"
  },
  {
    "id": "final_8",
    "question": "Tarihsel süreçte travma kavramının kavramsallaştırılmasıyla ilgili olarak Samuel Pepys (1666), John Eric Erichsen (19. yy) ve 1. Dünya Savaşı hekimlerinin tanımladığı tablolar sırasıyla hangi seçenekte DOĞRU eşleştirilmiştir?",
    "options": [
      "A) Pepys: Shell Shock / Erichsen: Savaş Nevrozu / 1. Dünya Savaşı: Demiryolu Omurgası",
      "B) Pepys: Büyük Londra Yangını Sonrası İntrüzyon ve Kabuslar / Erichsen: Demiryolu Omurgası (Railway Spine) / 1. Dünya Savaşı: Mermi Şoku (Shell Shock)",
      "C) Pepys: Covid-19 / Erichsen: Depresyon / 1. Dünya Savaşı: İnkar Skalası",
      "D) Pepys: Bipolar Bozukluk / Erichsen: Panik Atak / 1. Dünya Savaşı: Otizm",
      "E) Üçü de aynı hastanede birlikte çalışmıştır"
    ],
    "correct": 1,
    "explanation": "Slayt 20, 21 ve 22: Samuel Pepys 1666 Büyük Londra yangını sonrası kabus ve duman tetiklenmesini yazmıştır; John Eric Erichsen 19. yüzyıl tren kazalarında fiziksel yara olmaksızın gelişen sinir sistemi şokunu 'Railway Spine' olarak tanımlamıştır; 1. Dünya Savaşı'nda ise siperlerdeki tabloya 'Shell Shock' adı verilmiştir.",
    "optionAnalysis": {
      "A": "Yanlış. Eşleştirmeler tamamen kronolojik olarak hatalıdır.",
      "B": "DOĞRU. Pepys (1666 Londra yangını kabusları) - Erichsen (Railway Spine) - WWI (Shell Shock).",
      "C": "Yanlış. Tarihsel ve tıbbi açıdan anachronistic ve saçma maddelerdir.",
      "D": "Yanlış. İlgisiz tanılardır.",
      "E": "Yanlış. Aralarında yüzyıllar vardır."
    },
    "sourceRef": "ABUtrauma4 Slayt 20, 21, 22"
  },
  {
    "id": "final_9",
    "question": "Hijazi ve arkadaşlarının (2015) savaş gazileriyle yaptığı çalışmada ve Tedeschi & Calhoun'un PTG modelinde; ölümle yoğun yüzleşmenin özellikle hangi büyüme boyutunu en çok tetiklediği ve bu büyümeyi sağlayan en kritik bilişsel faktörün ne olduğu bulunmuştur?",
    "options": [
      "A) Boyut: Maddi kazanç artışı / Faktör: Sayısal zeka",
      "B) Boyut: Yaşam felsefesinde değişim / Faktör: Bilişsel esneklik (Cognitive flexibility)",
      "C) Boyut: Görme keskinliği / Faktör: Kalp debisi",
      "D) Boyut: Şüphecilik / Faktör: Yüksek uyarılma",
      "E) Gazilerde hiçbir büyüme saptanamamıştır"
    ],
    "correct": 1,
    "explanation": "Slayt 23: Hijazi vd. (2015) gazilerde ölümle doğrudan yüzleşmenin 'yaşam felsefesinde değişim' alt boyutunda en yüksek puanı ürettiğini ve bu büyümenin bireyin 'bilişsel esneklik' (cognitive flexibility) kapasitesiyle çok güçlü pozitif ilişkili olduğunu saptamıştır.",
    "optionAnalysis": {
      "A": "Yanlış. PTG maddi kazanç değil, varoluşsal/felsefi olgunlaşmadır.",
      "B": "DOĞRU. Slayt 23: Yaşam felsefesinde değişim ve bilişsel esneklik.",
      "C": "Yanlış. Fizyolojik parametreler büyüme boyutu değildir.",
      "D": "Yanlış. Şüphecilik patolojidir, büyüme değildir.",
      "E": "Yanlış. Çalışma gazilerde belirgin büyüme tespit etmiştir."
    },
    "sourceRef": "ABUtrauma3 Slayt 23 & Hijazi et al. (2015)"
  },
  {
    "id": "final_10",
    "question": "DSM-5-TR'de TSSB Kriter D (Biliş ve Duygudurumda Olumsuz Değişimler) kapsamında yer alan 'Travmanın önemli bir yönünü hatırlayamama' semptomu için aşağıdaki dışlama koşullarından hangisi ZORUNLUDUR?",
    "options": [
      "A) Bu durum mutlaka kafa travması, alkol veya madde kullanımına bağlı olmalıdır.",
      "B) Bu durum kafa travması, alkol veya madde kullanımına BAĞLI OLMAMALI; primer olarak disosiyatif amneziye dayanmalıdır.",
      "C) Bireyin hafızasını kendi isteğiyle silmiş olması gerekir.",
      "D) Yalnızca anne ve babasının adını unutması yeterlidir.",
      "E) Hafıza kaybı en az 50 yıl sürmelidir."
    ],
    "correct": 1,
    "explanation": "DSM-5-TR Kriter D1 maddesi açıkça belirtir: Travmanın önemli bir yönünü hatırlayamama (amnezi) organik beyin hasarına, kafa travmasına veya madde/ilaç intoksikasyonuna bağlı OLMAMALIDIR; psikolojik/disosiyatif kökenli olmalıdır.",
    "optionAnalysis": {
      "A": "Yanlış. Kafa travması veya alkole bağlıysa organik amnezidir, TSSB Kriter D sayılamaz.",
      "B": "DOĞRU. Kafa travması veya maddeden bağımsız, disosiyatif amnezi kökenli olması şarttır.",
      "C": "Yanlış. İstemsiz bir disosiyatif süreçtir.",
      "D": "Yanlış. Travmatik olayın kilit detaylarına yönelik amnezi kastedilir.",
      "E": "Yanlış. Süre şartı 50 yıl değildir."
    },
    "sourceRef": "ABUtrauma5 Slayt 6 & DSM-5-TR (2022)"
  },
  {
    "id": "final_11",
    "question": "VAKA 4: 22 yaşındaki bir üniversite öğrencisi, yaşadığı büyük trafik kazasından 20 gün sonra psikoloğa başvurmuştur. 'Kazayı hatırlatan hiçbir yoldan geçemiyorum, arabaya binemiyorum, sürekli kalbim çarpıyor, ders çalışamıyorum ama garip bir şekilde kendimi çok canlı hissediyorum ve hiç uyuşma/kopma (disosiasyon) yaşamıyorum' demektedir. DSM-IV ve DSM-5 tanı kriterleri karşılaştırıldığında bu danışanın durumu hakkında ne söylenebilir?",
    "options": [
      "A) DSM-IV'e göre disosiasyon zorunlu olduğu için ASB tanısı alamazdı; ancak DSM-5'te disosiasyon zorunluluğu kalktığı için 14 belirtiden 9'unu karşılıyorsa ASB tanısı alabilir.",
      "B) DSM-5'te disosiasyon tek zorunlu kriter yapılmıştır, dolayısıyla kesinlikle tanı alamaz.",
      "C) Her iki kılavuzda da hiçbir travma tanısı alamaz.",
      "D) Kaza üzerinden 20 gün geçtiği için doğrudan şizofreni tanısı alır.",
      "E) DSM-IV ve DSM-5 arasında hiçbir kriter farkı yoktur."
    ],
    "correct": 0,
    "explanation": "Slayt 17 (Kaynak 3): DSM-IV'te ASB tanısı için en az 3 disosiyatif belirti göstermek ZORUNLUYDU. DSM-5 bu disosiasyon şartını kaldırmış, 14 belirtiden herhangi 9'unun varlığını yeterli kılmıştır. Dolayısıyla disosiasyon yaşamayan bu danışan DSM-IV'te tanı alamazken DSM-5'te ASB tanısı alabilir.",
    "optionAnalysis": {
      "A": "DOĞRU. DSM-IV'te disosiasyon şarttı; DSM-5'te bu zorunluluk kaldırıldığı için diğer semptomlarla ASB tanısı alabilir.",
      "B": "Yanlış. DSM-5 disosiasyonu zorunlu kılmamış, tam aksine zorunluluğu kaldırmıştır.",
      "C": "Yanlış. Danışan açıkça ağır travmatik semptomlar sergilemektedir.",
      "D": "Yanlış. Psikotik bozukluk değil, akut travma tablosudur.",
      "E": "Yanlış. İki sürüm arasında köklü bir paradigma farkı mevcuttur."
    },
    "sourceRef": "ABUtrauma4 Slayt 17 & Bryant (2011)"
  },
  {
    "id": "final_12",
    "question": "Aşağıdakilerden hangisi travma araştırmalarında 'Pre-travmatik', 'Peritravmatik' ve 'Post-travmatik' risk faktörlerinin doğru bir kronolojik ve kavramsal gruplamasıdır?",
    "options": [
      "A) Pre: Olay anında algılanan ölüm tehlikesi / Peri: Sosyal destek eksikliği / Post: Kadın cinsiyet",
      "B) Pre: Kadın cinsiyet ve düşük eğitim düzeyi / Peri: Travmanın şiddeti ve peritravmatik disosiasyon / Post: Sosyal destek eksikliği ve travma sonrası işsizlik",
      "C) Pre: Tedavi gecikmesi / Peri: Düşük SES / Post: Olay esnasındaki korku",
      "D) Pre: İntihar girişimi / Peri: Doğum tarihi / Post: Göz rengi",
      "E) Tüm faktörler sadece olay anında ortaya çıkar, öncesi ve sonrası yoktur"
    ],
    "correct": 1,
    "explanation": "Slayt 22, 23, 24 (Kaynak 2 ve 3): Pre-travmatik (olay öncesi): Kadın cinsiyet, düşük SES, düşük eğitim, psikiyatri öyküsü. Peritravmatik (olay anı): Travma şiddeti, süre, algılanan yaşam tehdidi, peritravmatik disosiasyon. Post-travmatik (olay sonrası): Sosyal destek eksikliği, stresli yaşam/işsizlik, tedavi gecikmesi.",
    "optionAnalysis": {
      "A": "Yanlış. Dönemler birbiriyle karıştırılmıştır.",
      "B": "DOĞRU. Pre (Cinsiyet/eğitim) - Peri (Şiddet/disosiasyon) - Post (Sosyal destek yokluğu/işsizlik).",
      "C": "Yanlış. Tedavi gecikmesi olay sonrası bir faktördür.",
      "D": "Yanlış. Bilimsel olmayan ilgisiz maddelerdir.",
      "E": "Yanlış. Travma araştırmaları zamansal evrelere göre net bir ayrım yapar."
    },
    "sourceRef": "ABUtrauma3 Slayt 22, 23, 24"
  },
  {
    "id": "final_13",
    "question": "TSSB epidemiyolojisi ve klinik yaygınlık oranları göz önüne alındığında, genel toplum taramaları ile afet sonrası tedaviye başvuranlar arasındaki farkı en iyi hangi veri çifti yansıtır?",
    "options": [
      "A) Toplumda TSSB oranı %99 iken; tedavi arayanlarda %1'dir.",
      "B) 17 Ağustos Marmara Depremi verilerine göre (Öztürk, 2015), toplum genel taramasında yaygınlık yaklaşık %20 iken; tedavi arayan klinik grupta bu oran %63'e çıkmaktadır.",
      "C) Genel toplumda yaşam boyu travma maruziyeti %5 iken; TSSB oranı %80'dir.",
      "D) Arama kurtarma ekiplerinde TSSB oranı kesinlikle %0'dır.",
      "E) Hiçbir afet sonrası psikiyatrik başvuru olmamıştır."
    ],
    "correct": 1,
    "explanation": "Slayt 25 (Kaynak 2 ve 3): Marmara Depremi sonrası toplum taramalarında TSSB prevalansı %20 iken; tedavi için psikiyatriye başvuran depremzedelerde bu oran %63 olarak tespit edilmiştir. Ayrıca toplumun %41-86'sı travmaya maruz kalırken genel TSSB prevalansı %7-8 düzeyindedir.",
    "optionAnalysis": {
      "A": "Yanlış. Oranlar gerçek dışıdır.",
      "B": "DOĞRU. Öztürk (2015) Marmara Depremi saha verisidir: Toplumda ~%20, tedaviye başvuranlarda %63.",
      "C": "Yanlış. Tam tersi: Maruziyet yüksektir (%41-86), TSSB düşüktür (%7-8).",
      "D": "Yanlış. Kross vd. (2008) arama kurtarma ekiplerinde %30-40 prevalans bulmuştur.",
      "E": "Yanlış. Afetler sonrası klinik başvurular dramatik şekilde artar."
    },
    "sourceRef": "ABUtrauma3 Slayt 25 & Öztürk MO (2015)"
  },
  {
    "id": "final_14",
    "question": "VAKA 5: 42 yaşındaki bir savaş muhabiri, çatışma bölgelerinde defalarca ölüm tehlikesi atlatmış ve silahlı saldırılara şahit olmuştur. Savaştan 1 yıl sonra yapılan değerlendirmede; olay anlarını istemsizce hatırlamakta (Kriter B), savaş haberlerini izlemekten kaçınmakta (Kriter C), 'Dünyada hiçbir iyi insan kalmadı' inancını taşımakta (Kriter D) ve sürekli aşırı irkilme tepkisi göstermektedir (Kriter E). Ancak aynı zamanda 'Hayatın pamuk ipliğine bağlı olduğunu anladım, artık her günün kıymetini biliyorum ve ailemle bağlarım hiç olmadığı kadar derinleşti' demektedir. Bu vaka bize travma psikolojisine dair hangi temel gerçeği kanıtlar?",
    "options": [
      "A) Muhabirin aslında hiç travma yaşamadığını ve yalan söylediğini",
      "B) Travma Sonrası Büyüme (PTG) ile TSSB belirtilerinin ve psikolojik acının aynı anda, bir arada (co-exist) bulunabileceğini",
      "C) Büyüme gösteren bireylerde Kriter B ve C belirtilerinin bulunmasının imkansız olduğunu",
      "D) Muhabirin acilen tüm aile ilişkilerini kesmesi gerektiğini",
      "E) Bu tablonun yalnızca grip enfeksiyonuna bağlı olduğunu"
    ],
    "correct": 1,
    "explanation": "Slayt 22 (Kaynak 1) ve Wu vd. (2019): Travma sonrası büyüme (PTG), psikolojik sıkıntı ve TSSB semptomları ile bir arada (co-exist) var olabilir. Büyüme, acının sıfırlanması demek değildir; krizle boğuşma sürecinde yaşam felsefesi ve ilişkilerde olumlu bir dönüşümün filizlenmesidir.",
    "optionAnalysis": {
      "A": "Yanlış. Ağır Kriter A maruziyeti ve tanı semptomları mevcuttur.",
      "B": "DOĞRU. Slayt 22 vurgusu: PTG ile klinik sıkıntı bir arada bulunabilir (co-existence).",
      "C": "Yanlış. PTG ile TSSB semptomları sıklıkla birlikte rapor edilir.",
      "D": "Yanlış. Destekleyici aile bağları koruyucu faktördür.",
      "E": "Yanlış. Enfeksiyon hastalığı değil, travmatik psikopatoloji ve büyümedir."
    },
    "sourceRef": "ABUtrauma1ve2 Slayt 22 & Wu et al. (2019)"
  },
  {
    "id": "final_15",
    "question": "HPA ekseninin negatif geri bildirim (negative feedback) mekanizması sağlıklı bireyler ile TSSB hastaları karşılaştırıldığında nasıl bir farklılık gösterir?",
    "options": [
      "A) Sağlıklı bireylerde kortizol hipotalamusu baskılarken; TSSB hastalarında HPA ekseninin glukokortikoid reseptör duyarlılığı aşırı artmış (hipersensitif negatif geri bildirim) olabilir.",
      "B) TSSB hastalarında böbrek üstü bezleri vücuttan cerrahi olarak kaybolur.",
      "C) Sağlıklı bireylerde HPA ekseni hiçbir zaman devreye girmez.",
      "D) TSSB hastalarında yalnızca insülin salgılanır, kortizol hiç üretilmez.",
      "E) Negatif geri bildirim sadece yemek yerken çalışır."
    ],
    "correct": 0,
    "explanation": "Nöroendokrin araştırmalarda (Yehuda vd., Slayt 5 ve 21): Klasik depresyonda HPA ekseninde negatif geri bildirim direnci ve yüksek kortizol görülürken; TSSB'de tam aksine glukokortikoid reseptörlerinin aşırı duyarlılaşması (sensitization) ve aşırı güçlü bir negatif geri bildirim yanıtı dikkat çekicidir.",
    "optionAnalysis": {
      "A": "DOĞRU. TSSB'de HPA ekseni sensitizasyonu ve glukokortikoid reseptör hipersensitivitesi karakteristik bir nöroendokrin anomalidir.",
      "B": "Yanlış. Organ kaybı söz konusu değildir.",
      "C": "Yanlış. HPA ekseni her sağlıklı insanda homeostazis için aktiftir.",
      "D": "Yanlış. Kortizol üretilir ve dinamik regülasyonu değişmiştir.",
      "E": "Yanlış. Stres kaskadının temel biyolojik kontrolüdür."
    },
    "sourceRef": "ABUtrauma4 Slayt 10, 14 & Yehuda et al."
  },
  {
    "id": "final_16",
    "question": "Travma Sonrası Stres Bozukluğunun kanıta dayalı (evidence-based) birinci basamak psikoterapötik tedavileri arasında ders slaytlarında özellikle vurgulanan iki temel yaklaşım hangisidir?",
    "options": [
      "A) Astroloji seansları ve hipnotik eğlence gösterileri",
      "B) Travma Odaklı Bilişsel Davranışçı Terapi (TF-CBT) ve Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme (EMDR)",
      "C) Yalnızca zorunlu yatak istirahati ve hiçbir şey konuşmama",
      "D) Elektroşok tedavisi ve lobotomi",
      "E) Bireyi travma ortamına zorla hapsedip kapıyı kilitleme"
    ],
    "correct": 1,
    "explanation": "Slayt 28 (Kaynak 3): 'Trauma-focused psychotherapies, cognitive behavioral therapies and eye movement desensitization and reprocessing (EMDR) as well as certain pharmacological treatments, have been shown to reduce PTSD symptoms.'",
    "optionAnalysis": {
      "A": "Yanlış. Bilim dışı yaklaşımlardır.",
      "B": "DOĞRU. Slayt 28: Travma odaklı BDT (TF-CBT) ve EMDR uluslararası kılavuzlarda en güçlü kanıta sahip yaklaşımlardır.",
      "C": "Yanlış. Kaçınmayı pekiştirir, tedavi edici değildir.",
      "D": "Yanlış. Birinci basamak TSSB tedavisi değildir.",
      "E": "Yanlış. Yeniden travmatizasyon (retraumatization) yaratır ve etik dışıdır."
    },
    "sourceRef": "ABUtrauma4 Slayt 28 & APA Guidelines"
  },
  {
    "id": "final_17",
    "question": "Aşağıdaki ifadelerden hangisi 'Peritravmatik Disosiasyon' (PDEQ) ile 'TSSB Disosiyatif Alt Tipi' arasındaki zamanlama ve kavramsal farkı en doğru şekilde açıklar?",
    "options": [
      "A) Peritravmatik disosiasyon olayın meydana geldiği anda ya da hemen akabinde yaşanan kopmaları ölçerken; TSSB disosiyatif alt tipi olaydan aylar sonra bile devam eden kalıcı depersonalizasyon/derealizasyon tablosudur.",
      "B) İkisi tamamen aynı anda başlar ve 5 dakika sonra biter.",
      "C) Peritravmatik disosiasyon sadece rüyalarda olur; disosiyatif alt tip ise sadece uyanıkken olur.",
      "D) Peritravmatik disosiasyon yalnızca çocuklarda, alt tip ise yalnızca yaşlılarda görülür.",
      "E) Aralarında hiçbir fark yoktur, aynı ölçekle ölçülürler."
    ],
    "correct": 0,
    "explanation": "Peri- öneki 'olay anı/etrafı' demektir. Peritravmatik disosiasyon (PDEQ ile ölçülür) travma cereyan ederkenki kopmadır ve TSSB riskini artırır. Disosiyatif alt tip ise travmadan en az 1 ay sonra resmi TSSB tanısı almış hastada süregelen kronik depersonalizasyon/derealizasyondur.",
    "optionAnalysis": {
      "A": "DOĞRU. Biri olay anındaki akut kopmadır (peritravmatik), diğeri kronik tanısal alt tiptir.",
      "B": "Yanlış. Kronik alt tip aylarca/yıllarca sürebilir.",
      "C": "Yanlış. Her iki yaşantı da uyanıkken bilincin yarılmasıyla ilgilidir.",
      "D": "Yanlış. Yaş grubu ayrımı yoktur.",
      "E": "Yanlış. Biri risk faktörü tarama aracıdır (PDEQ), diğeri DSM-5 tanı belirtecidir."
    },
    "sourceRef": "ABUtrauma3 Slayt 23 & ABUtrauma5 Slayt 9, 12"
  },
  {
    "id": "final_18",
    "question": "DSM-5-TR'ye göre bir kişinin Kriter A kapsamında travmaya 'dolaylı maruziyet' ile tanı alabilmesi için gereken kesin sınır nedir?",
    "options": [
      "A) Herhangi bir yabancının ölümünü sosyal medyadan okumuş olması yeterlidir.",
      "B) Sevilen bir sanatçının doğal eceliyle öldüğünü televizyon haberlerinden öğrenmek yeterlidir.",
      "C) Olayın yakın bir aile bireyi veya yakın arkadaşın başına gelmiş olması ve olayın şiddet içerikli ya da kaza sonucu gerçekleşmiş olması zorunludur.",
      "D) Bireyin olay yerinden 1000 km uzakta yaşaması şarttır.",
      "E) Dolaylı yoldan maruziyet hiçbir koşulda Kriter A sayılamaz."
    ],
    "correct": 2,
    "explanation": "Slayt 24 (Kaynak 3): Öğrenme yoluyla maruziyette: 1) Olay yakın bir aile ferdi veya yakın arkadaşın başına gelmiş olmalıdır, 2) Ölüm veya ölüm tehdidi şiddet kaynaklı (violent) veya kaza sonucu (accidental) gerçekleşmiş olmalıdır. Medyadan izleme iş icabı değilse kapsam dışıdır.",
    "optionAnalysis": {
      "A": "Yanlış. Yabancıların durumunu medyadan okumak Kriter A sayılmaz.",
      "B": "Yanlış. Doğal eceliyle ölüm Kriter A değildir.",
      "C": "DOĞRU. Yakın aile/arkadaş şartı + kaza veya şiddet şartı eksiksiz karşılanmalıdır.",
      "D": "Yanlış. Coğrafi mesafe değil, ilişkinin yakınlığı ve ölümün niteliği önemlidir.",
      "E": "Yanlış. Belirtilen koşullarda öğrenme yoluyla dolaylı maruziyet Kriter A'dır."
    },
    "sourceRef": "ABUtrauma4 Slayt 24 & DSM-5-TR (2022)"
  },
  {
    "id": "final_19",
    "question": "Bir afet bölgesinde görev yapan sağlık çalışanları, sosyal hizmet uzmanları ve itfaiyecilerde gözlemlenen ikincil travma ve merhamet yorgunluğunu önlemek/azaltmak için kurumsal düzeyde alınması gereken en bilimsel önlem nedir?",
    "options": [
      "A) Çalışanların haftada 100 saat hiç uyumadan aralıksız çalıştırılması",
      "B) Düzenli süpervizyon, akran desteği oturumları, nöbet rotasyonları ve psikoeğitim sağlanması",
      "C) Travma yaşayan çalışanların derhal meslekten ihraç edilmesi",
      "D) Çalışanların travma mağdurlarıyla konuşmasının tamamen yasaklanması",
      "E) Sadece ağrı kesici ilaç dağıtılması"
    ],
    "correct": 1,
    "explanation": "Cocker & Joss (2016) ve Brewin (2009): İkincil travmatik stres ve merhamet yorgunluğuyla mücadelede en etkili kurumsal stratejiler; düzenli klinik süpervizyon, vaka paylaşımları, iş yükünün dengelenmesi, rotasyon ve psikososyal destek mekanizmalarıdır.",
    "optionAnalysis": {
      "A": "Yanlış. Uykusuzluk tükenmişliği ve travmatizasyonu hızlandırır.",
      "B": "DOĞRU. Süpervizyon, akran desteği, psikoeğitim ve rotasyon kanıtlanmış kurumsal koruyuculardır.",
      "C": "Yanlış. Damgalayıcı ve insan haklarına aykırı bir tutumdur.",
      "D": "Yanlış. Mesleğin doğasını yok eder.",
      "E": "Yanlış. Medikalize edici ve etkisiz bir yöntemdir."
    },
    "sourceRef": "ABUtrauma1ve2 Slayt 16, 17 & Cocker & Joss (2016)"
  },
  {
    "id": "final_20",
    "question": "Aşağıdaki klinik ölçek ve ölçtüğü yapı eşleştirmelerinden hangisi YANLIŞTIR?",
    "options": [
      "A) PDEQ → Peritravmatik Disosiasyon Düzeyi",
      "B) LEC-5 → Yaşam Boyu Karşılaşılan Travmatik Olay Türleri",
      "C) CTQ → 18 Yaş Öncesi Çocukluk Çağı İhmal ve İstismarı",
      "D) CAPS-5 → Klinisyen Tarafından Uygulanan TSSB Tanı ve Şiddet Görüşmesi",
      "E) PCL-5 → Bireyin Zeka Düzeyini (IQ) ve Genel Kültürünü Ölçen Test"
    ],
    "correct": 4,
    "explanation": "PCL-5 (PTSD Checklist for DSM-5), DSM-5'in 20 TSSB semptomunu tarayan bir ÖZBİLDİRİM TRAVMA ÖLÇEĞİDİR. Zeka (IQ) veya genel kültür testi DEĞİLDİR.",
    "optionAnalysis": {
      "A": "Doğru eşleştirme (PDEQ olay anı disosiasyonunu ölçer).",
      "B": "Doğru eşleştirme (LEC-5 travmatik maruziyet listesidir).",
      "C": "Doğru eşleştirme (CTQ çocukluk çağı travmalarını ölçer).",
      "D": "Doğru eşleştirme (CAPS-5 klinisyen altın standardıdır).",
      "E": "DOĞRU CEVAP (Yanlış eşleştirme). PCL-5 bir zeka testi değil, 20 maddelik TSSB kontrol listesidir."
    },
    "sourceRef": "ABUtrauma5 Slayt 12-23"
  },
  {
    "id": "final_21",
    "question": "VAKA 6: 1999 Marmara Depremi'nde göçük altında 14 saat kalan 50 yaşındaki bir kazazede, aradan 20 yılı aşkın süre geçmesine rağmen en ufak yer sarsıntısında balkondan aşağı atlama dürtüsü hissetmekte, evinde hiçbir eşyayı dolaplara koyamamakta ve gece yatağa ayakkabılarıyla yatmaktadır. Bu hastanın amigdala-prefrontal korteks işlevselliği hakkında nörolojik olarak ne söylenebilir?",
    "options": [
      "A) Amigdala tehdit yanıtını tamamen kaybetmiş, prefrontal korteks ise amigdalayı aşırı şekilde susturmuştur.",
      "B) Korku söndürme (fear extinction) mekanizması başarısız olmuştur; medial Prefrontal Korteks (mPFC) hiperaktif amigdalayı yukarıdan aşağıya inhibe edememektedir.",
      "C) Hipokampusu tamamen yok olmuştur ve beyin sapı çalışmamaktadır.",
      "D) Bu durum tamamen normaldir, hiçbir nöral devre anomalisi bulunmaz.",
      "E) Hastanın beyin omurilik sıvısı tamamen kurumuş olmalıdır."
    ],
    "correct": 1,
    "explanation": "TSSB'nin kronikleşmesinde kilit nörobiyolojik mekanizma 'korku koşullanmasının söndürülememesi'dir (extinction deficit). Normalde mPFC güvenli ortamda amigdalayı baskılayarak alarmı durdurmalıdır. Ancak TSSB'de mPFC amigdalayı inhibe edemez; bu nedenle 20 yıl sonra bile amigdala ölümcül tehlike alarmı vermeye devam eder.",
    "optionAnalysis": {
      "A": "Yanlış. Tam tersine amigdala aşırı uyarılmıştır ve susturulamamaktadır.",
      "B": "DOĞRU. Korku söndürme yetersizliği (extinction failure) ve mPFC'nin amigdalayı inhibe edememesi söz konusudur.",
      "C": "Yanlış. Yaşamsal beyin sapı sağlamdır.",
      "D": "Yanlış. Ağır kronik bir nörobilişsel disfonksiyon mevcuttur.",
      "E": "Yanlış. Biyolojik olarak imkansız bir durumdur."
    },
    "sourceRef": "ABUtrauma4 Slayt 8, 9 & O'Doherty et al. (2015)"
  },
  {
    "id": "final_22",
    "question": "Trafik kazası sonrası Akut Stres Bozukluğu (ASB) tanısı alan bireyler ile ilgili Keane ve arkadaşlarının (2006) %83 bulgusu klinik pratikte klinisyenlere hangi sorumluluğu yükler?",
    "options": [
      "A) ASB saptanan olgular nasılsa iyileşir diyerek kendi hallerine bırakılmalıdır.",
      "B) ASB tanısı alan bireyler çok yüksek bir TSSB riski taşıdıkları için erken dönemde yakından izlenmeli, psikoeğitim ve erken kanıta dayalı müdahalelerle desteklenmelidir.",
      "C) ASB tanısı alan herkes derhal kapalı psikiyatri servisine yatırılmalıdır.",
      "D) Kazazedelerin ehliyetlerine ömür boyu el konulmalıdır.",
      "E) ASB tanısı hiçbir zaman ciddiye alınmamalıdır."
    ],
    "correct": 1,
    "explanation": "Slayt 18 ve 19 (Kaynak 2 ve 3): ASB tanısı alanların %83'ünün daha sonra TSSB geliştirmesi, bu dönemin 'altın bir müdahale penceresi' olduğunu gösterir. Erken izlem ve kanıta dayalı travma müdahaleleri kronikleşmeyi ve yeti yitimini önlemek için hayati önem taşır.",
    "optionAnalysis": {
      "A": "Yanlış. Kendi haline bırakmak %83'lük kronikleşme riskini davet eder.",
      "B": "DOĞRU. Erken tanı, yakın izlem ve erken psikolojik destek kronik TSSB'yi önlemede esastır.",
      "C": "Yanlış. Rutin kapalı servis yatışı gereksiz ve orantısızdır.",
      "D": "Yanlış. Tıbbi endikasyon değil, adli bir cezalandırmadır.",
      "E": "Yanlış. ASB literatürdeki en kritik erken risk belirtecidir."
    },
    "sourceRef": "ABUtrauma3 Slayt 18 & Keane et al. (2006)"
  },
  {
    "id": "final_23",
    "question": "Aşağıdaki ifadelerden hangisi 'Travma ve Adversite' konusundaki çağdaş bilimsel uzlaşmayı en yetkin şekilde özetler?",
    "options": [
      "A) Yalnızca Kriter A olayları insan ruhuna zarar verir; çocukluk ihmali veya ırkçılık hiçbir psikolojik zarar yaratmaz.",
      "B) Kriter A olayları nesnel ölüm/ciddi yaralanma/cinsel şiddet gerektiren resmi bir tanı sınırıdır; ancak bu kriteri karşılamayan kronik ihmal, ayrımcılık ve yoksulluk gibi adversiteler de çok ağır ruh sağlığı sonuçları doğurabilir.",
      "C) Tüm dünyada travma terimi yalnızca grip olan hastalar için kullanılmalıdır.",
      "D) DSM-5-TR tüm travma tanılarını kaldırmıştır.",
      "E) Doğal afetler her zaman insan eliyle yapılan işkenceden daha travmatiktir."
    ],
    "correct": 1,
    "explanation": "Slayt 13 (Kaynak 1): DSM-5-TR Kriter A nesnel sınırları çizer; ancak Kriter A'yı karşılamayan kronik suiistimal, ayrımcılık ve yoksunluk gibi olumsuzluklar da bireyin ruh sağlığını derinden tahrip edebilir. Bilim insanları bu kavramları birbirine karıştırmadan kesin bir dille tanımlamalıdır.",
    "optionAnalysis": {
      "A": "Yanlış. İhmal ve ayrımcılık son derece ağır psikolojik hasarlar yaratır.",
      "B": "DOĞRU. Slayt 13'teki temel ders mesajı: Kriter A tanısal bir sınırdır; ancak diğer adversiteler de çok ciddi klinik etkilere sahiptir.",
      "C": "Yanlış. Tıbbi jargonda travma fiziksel veya psikolojik derin yaralanmadır.",
      "D": "Yanlış. DSM-5-TR'de Travma ve Stresörle İlişkili Bozukluklar ana kategoridir.",
      "E": "Yanlış. İnsan eliyle yapılan kasıtlı şiddet genellikle daha yüksek TSSB riski taşır."
    },
    "sourceRef": "ABUtrauma1ve2 Slayt 13 & McLaughlin & Sheridan (2016)"
  },
  {
    "id": "final_24",
    "question": "Ders slaytlarında yer alan 'Peritravmatik Risk Faktörleri' arasında bulunan değişkenlerin ortak paydası nedir?",
    "options": [
      "A) Hepsinin birey 5 yaşındayken gerçekleşmiş olması",
      "B) Doğrudan travmatik olayın cereyan ettiği anda ve hemen akabinde yaşanan nesnel şiddet, algılanan yaşam tehdidi ve peritravmatik disosiasyon ile ilişkili olmaları",
      "C) Yalnızca bireyin banka hesabındaki para miktarıyla ölçülebilmeleri",
      "D) Olaydan 20 yıl sonra ortaya çıkmaları",
      "E) Sadece laboratuvarda fare deneylerinde görülebilmeleri"
    ],
    "correct": 1,
    "explanation": "Slayt 23 (Kaynak 2 ve 3): Peritravmatik faktörler (olay anı faktörleri); travmanın şiddeti, süresi, sıklığı, algılanan ölüm tehdidi ve olayın gerçekleştiği sırada yaşanan peritravmatik disosiasyondur (kopma).",
    "optionAnalysis": {
      "A": "Yanlış. Çocukluk çağı değil, travmanın gerçekleştiği anı ifade eder.",
      "B": "DOĞRU. Olayın meydana geldiği anda hissedilen dehşet, tehdit ve disosiasyondur.",
      "C": "Yanlış. Finansal metrikler değildir.",
      "D": "Yanlış. 20 yıl sonrası post-travmatik kronik evredir.",
      "E": "Yanlış. İnsan klinik çalışmalarının en temel odak noktasıdır."
    },
    "sourceRef": "ABUtrauma3 Slayt 23 & Ozer et al. (2003)"
  },
  {
    "id": "final_25",
    "question": "Bütün ders kaynakları (ABUtrauma 1, 2, 3, 4 ve 5) sentezlendiğinde; travma sonrası iyileşme, rezilyans ve psikopatoloji gelişimini belirleyen en kapsamlı biyopsikososyal denklem hangisidir?",
    "options": [
      "A) İyileşme yalnızca genetik bir kaderdir; çevre veya terapinin hiçbir rolü yoktur.",
      "B) Sonuç; pre-travmatik zemin (biyoloji, geçmiş öykü, kişilik), peritravmatik maruziyetin şiddeti ve disosiasyon düzeyi ile post-travmatik kaynakların (sosyal destek, erken profesyonel müdahale, bilişsel esneklik) dinamik etkileşimiyle belirlenir.",
      "C) Sadece olayın büyüklüğü belirleyicidir; bireyin algısı veya destek sistemleri önemsizdir.",
      "D) Bireyin yaşı 40'ı geçmişse iyileşmesi biyolojik olarak yasaktır.",
      "E) Travma sonrası herkes istisnasız aynı düzeyde travma sonrası büyüme gösterir."
    ],
    "correct": 1,
    "explanation": "Dersin nihai sentezi: İnsan tepkileri son derece heterojendir. Pre-travmatik risk ve koruyucu faktörler, olayın peritravmatik dehşeti ve disosiasyonu ile olay sonrası sosyal destek, bilişsel esneklik ve kanıta dayalı tedaviler bir araya gelerek iyileşmeyi, kronik TSSB'yi veya travma sonrası büyümeyi şekillendirir.",
    "optionAnalysis": {
      "A": "Yanlış. Biyolojik determinizm yanlıştır; sosyal destek ve terapi kritiktir.",
      "B": "DOĞRU. Bütün kaynakların ortak ana fikri: Pre, peri ve post-travmatik faktörlerin dinamik biyopsikososyal etkileşimidir.",
      "C": "Yanlış. Öznel algı ve algılanan sosyal destek en az nesnel şiddet kadar belirleyicidir.",
      "D": "Yanlış. İyileşmenin yaş sınırı yoktur.",
      "E": "Yanlış. Büyüme bir zorunluluk değil, bir olasılıktır."
    },
    "sourceRef": "Tüm Sunumlar Sentezi (ABUtrauma 1, 2, 3, 4, 5) & Wu et al. (2019)"
  }
];
