// ==========================================================================
// PSYC 4115: The Psychology of Trauma - KAVRAM TABLOLARI VE DERS MATRİSİ
// Kaynaklar: ABUtrauma1ve2_Engl, ABUtrauma3, ABUtrauma4, ABUtrauma5
// ==========================================================================

const CONCEPTS_DATA = {
  source1: {
    title: "Kaynak 1: Psikolojik Travmaya Giriş, Travma Türleri ve Çocukluk Çağı",
    subtitle: "ABUtrauma1ve2_Engl.pptx (Hafta 1 & 2)",
    lecturers: "Dr. Cansu Aykaç Kemik & Dr. Ömer Orhun Ercan",
    description: "Travmanın temel klinik tanımı, maruziyet modları, peritravmatik süreçler, kolektif/ikincil travma, çocukluk çağı adversite boyutları ve tarihsel kökler.",
    concepts: [
      {
        id: "c1_1",
        term: "Psikolojik Travma (Klinik Tanım)",
        englishTerm: "Psychological Trauma (Clinical Definition)",
        category: "Temel Tanım & Kriter",
        definition: "Bireyin gerçek ya da tehdit edici ölüm, ciddi yaralanma veya cinsel şiddete maruz kalması durumunda ortaya çıkan; kişinin güvenlik ve öngörülebilirlik algısını derinden sarsan psikolojik süreç.",
        details: "Gündelik dildeki 'üzücü/sarsıcı olay' kavramından farklı olarak DSM-5-TR'de kesin sınırları çizilmiş bir maruziyet gerektirir. Herkes aynı tepkiyi vermez; kişisel, sosyal ve bağlamsal değişkenler devreye girer.",
        authors: "APA (2022); Brewin et al. (2009)",
        slides: "Slayt 11, 13, 23",
        examTip: "Sınavda gündelik stres ile klinik travma ayrımına dikkat! Kriter A nesnel ölüm/ciddi yaralanma/cinsel şiddet şartı arar."
      },
      {
        id: "c1_2",
        term: "Kriter A Maruziyet Biçimleri (4 Yol)",
        englishTerm: "DSM-5-TR Criterion A Exposure Modes",
        category: "Tanı Kriteri",
        definition: "Bireyin travmatik olaya maruz kalma biçimleri: 1) Doğrudan yaşama, 2) Başkasına olduğunu bizzat görme (tanıklık), 3) Yakın bir aile ferdi ya da arkadaşın başına geldiğini öğrenme (şiddet veya kaza kaynaklı olmalı), 4) Mesleki görev icabı travmanın ayrıntılarına tekrar tekrar maruz kalma.",
        details: "Elektronik medya, televizyon, film veya fotoğraflar üzerinden öğrenilen travmalar İŞ İLE İLGİLİ DEĞİLSE Kriter A kapsamına GİRMEZ.",
        authors: "APA DSM-5-TR (2022)",
        slides: "Slayt 11, 16",
        examTip: "Haberleri TV'den izleyen birinin durumu Kriter A sayılmaz! Yalnızca ilk müdahale ekipleri, olay yeri inceleme, acil personeli gibi mesleki maruziyetler sayılır."
      },
      {
        id: "c1_3",
        term: "Peritravmatik Tepkiler & 'Öncesi-Sonrası' Algısı",
        englishTerm: "Peritraumatic Responses & 'Before-and-After'",
        category: "Klinik Süreç",
        definition: "Travmatik olay esnasında veya hemen sonrasında ortaya çıkan korku, çaresizlik, dehşet, uyuşma ve kafa karışıklığı tepkileri.",
        details: "Dikkat, bellek ve alışılmış baş etme stratejileri bozulur. Birey yaşamında belirgin bir 'travmadan öncesi ve sonrası' kırılma çizgisi hissedebilir; ancak bu tepki evrensel bir zorunluluk değil, olası yanıtlardan biridir.",
        authors: "Ozer et al. (2003)",
        slides: "Slayt 12",
        examTip: "'Öncesi ve sonrası hissi' travma geçiren herkeste zorunlu bir kriter DEĞİLDİR; bireysel bir deneyim örüntüsüdür."
      },
      {
        id: "c1_4",
        term: "Travma vs Adversite ('Büyük T' ve 'Küçük t' Miti)",
        englishTerm: "Trauma vs Adversity ('Big T' vs 'little t')",
        category: "Kavramsal Ayrım",
        definition: "Kriter A'yı karşılamayan kronik ihmal, yoksulluk ve ayrımcılık gibi durumların ruh sağlığı üzerindeki derin etkilerini ifade eden ayrım.",
        details: "'Big T' (Büyük T - yaşamı tehdit eden olaylar) ve 'little t' (Küçük t - kronik stresörler) popüler/gayriresmi etiketlerdir; DSM-5-TR'de resmi birer tanı kategorisi DEĞİLDİR. Kriter A'yı karşılamayan adversiteler de ciddi ruhsal yıkım yaratabilir.",
        authors: "Alisic et al. (2014); McLaughlin & Sheridan (2016)",
        slides: "Slayt 13",
        examTip: "Soruda 'DSM-5-TR'de Big T ve little t resmi alt tanı kümeleridir' ifadesi gelirse YANLIŞTIR; bunlar gayriresmi (informal) terimlerdir."
      },
      {
        id: "c1_5",
        term: "Kolektif Travma (Toplumsal Travma)",
        englishTerm: "Collective Trauma",
        category: "Sosyo-Kültürel Travma",
        definition: "Toplulukları, halkları ve grupları etkileyen; ortak belleği, kimliği ve sosyal dokuyu şekillendiren kitlesel travmatik olaylar (savaş, soykırım, zorunlu göç, sistematik ırkçılık).",
        details: "Tek bir bireysel klinik tanıya işaret etmez. Araştırmalarda kişilerarası şiddetin (interpersonal violence) TSSB riskini doğal afetlere kıyasla daha çok yükselttiği görülmüştür, ancak her insan kaynaklı olay her doğal afetle mutlak olarak kıyaslanamaz.",
        authors: "Hirschberger (2018); Liu et al. (2017)",
        slides: "Slayt 14, 15",
        examTip: "Kişilerarası kasıtlı şiddet (interpersonal violence) TSSB gelişimi açısından en yüksek riske sahiptir."
      },
      {
        id: "c1_6",
        term: "İkincil Travmatik Stres (STS)",
        englishTerm: "Secondary Traumatic Stress (STS)",
        category: "Mesleki / Dolaylı Travma",
        definition: "Travma mağdurlarıyla çalışan veya travmatik ayrıntılara dolaylı yoldan mesleki olarak maruz kalan profesyonellerde (terapistler, ilk müdahale ekipleri) birincil travmaya benzer belirtilerin görülmesi.",
        details: "Başkalarının acısına doğrudan tanıklık veya mesleki dinleme/dosya inceleme sonucu ortaya çıkar. Medyadan haber izlemekle karıştırılmamalıdır.",
        authors: "Brewin et al. (2009); Cocker & Joss (2016)",
        slides: "Slayt 16",
        examTip: "STS, mağdurun anlattıklarına maruz kalındığında gelişen intrüzyon, kaçınma ve uyarılma benzeri semptomları kapsar."
      },
      {
        id: "c1_7",
        term: "Merhamet Yorgunluğu (Compassion Fatigue)",
        englishTerm: "Compassion Fatigue",
        category: "Mesleki / Dolaylı Travma",
        definition: "Başkalarının acılarına sürekli maruz kalma ve yardım etme çabası neticesinde gelişen duygusal tükenmişlik, duyarsızlaşma, öfke ve geri çekilme durumu.",
        details: "Literatürde tükenmişlik (burnout) ile ikincil travmanın birleşimi olarak ele alınır. Belirtileri: duygusal uyuşma, irritabilite, mesleki yabancılaşma, uyku bozuklukları ve somatik gerginlik.",
        authors: "Cocker & Joss (2016)",
        slides: "Slayt 17",
        examTip: "Merhamet yorgunluğu hem tükenmişliği (fiziksel/duygusal bitkinlik) hem de ikincil travmatik stresi bünyesinde barındırabilir."
      },
      {
        id: "c1_8",
        term: "Karmaşık Travma ve Kompleks TSSB (CPTSD)",
        englishTerm: "Complex Trauma and Complex PTSD (ICD-11)",
        category: "Klinik Tanı & Sınıflandırma",
        definition: "Kaçılması imkansız veya çok zor olan ortamlarda uzun süreli ve tekrarlayıcı travmalara (ör. çocukluk çağı istismarı, esaret, aile içi şiddet) maruz kalma neticesinde gelişen tablo.",
        details: "Kompleks TSSB (CPTSD), ICD-11'de resmi bir tanıdır. Çekirdek TSSB belirtilerine ek olarak 'Kendilik Örgütlenmesinde Bozulma' (DSO: duygu regülasyonunda güçlük, kalıcı değersizlik/olumsuz benlik algısı, kişilerarası ilişki sürdürme sorunları) içerir. DSM-5-TR'de ise bu ayrı bir tanı değil, semptom yelpazesidir.",
        authors: "WHO (2024); Karatzias et al. (2017)",
        slides: "Slayt 18",
        examTip: "Kompleks TSSB = ICD-11'de resmi bir tanıdır! DSM-5-TR'de bağımsız bir tanı kategorisi olarak YER ALMAZ."
      },
      {
        id: "c1_9",
        term: "Çocukluk Çağı Adversite Boyutları (6 Boyut)",
        englishTerm: "Dimensions of Childhood Adversity (McLaughlin & Sheridan)",
        category: "Gelişimsel Model",
        definition: "Çocukluk örselenmelerini sadece 'kümülatif risk skoru' olarak değil, nörobilişsel etkilerine göre niteliksel boyutlara ayıran çağdaş model.",
        details: "1) Tehdit (Fiziksel/cinsel istismar, aile içi şiddet), 2) Yoksunluk (Fiziksel/duygusal ihmal, bilişsel uyarım azlığı), 3) Kayıp (Ebeveyn ölümü, terk edilme), 4) Öngörülemezlik/Kararsızlık (Sık bakım veren değişimi, kaos), 5) Kronik Çevresel Adversite (Savaş, göç, aşırı yoksulluk), 6) Kişilerarası Mağduriyet (Akran zorbalığı, flört şiddeti).",
        authors: "McLaughlin & Sheridan (2016)",
        slides: "Slayt 19, 20",
        examTip: "Tehdit (Threat) tehdit işleme/amigdala aktivasyonunu etkilerken; Yoksunluk (Deprivation) bilişsel gelişim, kortikal kalınlık ve lisan becerilerini baskılar."
      },
      {
        id: "c1_10",
        term: "Travmatik Stresin Nörobiyolojisi (Ön Bakış)",
        englishTerm: "Neurobiology of Traumatic Stress (Overview)",
        category: "Nörobiyoloji",
        definition: "TSSB hastalarında grup düzeyinde tespit edilen beyin yapısı ve işlev farklılıkları: Amigdala hiperaktivitesi, hipokampus hacim küçülmesi, prefrontal korteks aktivite yetersizliği ve HPA ekseni disregülasyonu.",
        details: "Bu bulgular biyolojik belirteç niteliği taşısa da her travma mağdurunda birebir aynı oranda görülmez (heterojenite yüksektir).",
        authors: "O’Doherty et al. (2015); McLaughlin et al. (2019)",
        slides: "Slayt 21",
        examTip: "Klasik triad: Amigdala hiperaktiftir (aşırı korku), Prefrontal korteks hipoaktiftir (frenleme yapamaz), Hipokampus küçülmüştür (bağlam ayırt edemez)."
      },
      {
        id: "c1_11",
        term: "Bireysel İyileşme ve Travma Sonrası Büyüme (PTG)",
        englishTerm: "Individual Recovery & Post-Traumatic Growth",
        category: "Pozitif Psikoloji & İyileşme",
        definition: "Büyük bir krizle mücadele sonrasında bireyin travma öncesi işlevsellik düzeyinin üzerine çıkarak olumlu dönüşümler yaşaması.",
        details: "PTG bir zorunluluk ya da her travmanın kaçınılmaz sonucu DEĞİLDİR; sadece bir olasılıktır. Acı ve sıkıntıyla bir arada (ko-eksist) bulunabilir.",
        authors: "Wu et al. (2019)",
        slides: "Slayt 22",
        examTip: "Büyüme, acının olmadığı anlamına gelmez; yoğun psikolojik acı ile büyüme aynı anda var olabilir."
      },
      {
        id: "c1_12",
        term: "TSSB'nin DSM'deki Tarihsel Gelişimi",
        englishTerm: "Historical Evolution of PTSD in the DSM",
        category: "Tarihçe",
        definition: "Savaş tepkilerinden güncel tanı kılavuzlarına uzanan süreç: 1. Dünya Savaşı (Shell Shock), 2. Dünya Savaşı (War Neurosis / Battle Fatigue), DSM-I 1952 (Gross Stress Reaction), DSM-II 1968 (Transient Situational Disturbance), DSM-III 1980 (TSSB ilk kez resmi tanı oldu), DSM-5-TR 2022 (Güncel metin revizyonu).",
        details: "TSSB'nin DSM-III'e girişi Vietnam gazilerinin ve sivil travma hareketlerinin yoğun savunuculuk çalışmalarıyla gerçekleşmiştir.",
        authors: "US National Center for PTSD",
        slides: "Slayt 24",
        examTip: "TSSB ilk kez DSM-III'te (1980) resmi bir tanı olarak yer almıştır. DSM-I'deki adı 'Gross Stress Reaction'dır."
      }
    ]
  },

  source2: {
    title: "Kaynak 2: Travma Tepkileri, TSSB, Büyüme (PTG) ve Risk Faktörleri",
    subtitle: "ABUtrauma3.pptx (Hafta 3)",
    lecturers: "Dr. Cansu Aykaç Kemik",
    description: "O'Leary işlevsellik seyirleri, Akut Stres Bozukluğu ile TSSB ayrımı, Tedeschi & Calhoun'un 5 büyüme boyutu, pre-, peri-, post-travmatik risk faktörleri ve Marmara depremi verileri.",
    concepts: [
      {
        id: "c2_1",
        term: "Travmatik Yaşantıların Nitelikleri",
        englishTerm: "Characteristics of Traumatic Experiences",
        category: "Klinik Özellikler",
        definition: "Travmatik olaylar; doğal afet veya insan kaynaklı, kasıtlı veya ihmale bağlı olabilir. Doğrudan yaşanabilir ya da tanık olunabilir; kuşaklararası (dikey) ya da yatay aktarılabilir.",
        details: "Kişiyi kendi çaresizliğiyle yüzleştirir, temel güvenlik hissini parçalar ve derin kayıplar ile hayat değişimlerini beraberinde getirir.",
        authors: "Türksoy (2003); Ozer et al. (2003)",
        slides: "Slayt 12",
        examTip: "Kasıtlı insan eliyle yapılan travmalar (ör. tecavüz, işkence), doğal afetlere kıyasla daha derin psikolojik hasar bırakır."
      },
      {
        id: "c2_2",
        term: "Travmaya Karşı 3 İşlevsellik Seyri (O'Leary Modeli)",
        englishTerm: "Trajectories of Functioning (O'Leary et al., 1998)",
        category: "Klinik Seyir",
        definition: "Travma sonrasında bireylerin gösterebileceği 3 temel işlevsellik gidişatı: 1) Düşük işlevsellikte yaşamaya devam etme (kronik bozulma), 2) Travma öncesi eski işlevsellik düzeyine geri dönme (rezilyans/iyileşme), 3) İşlevsellikte travma öncesine kıyasla artış (Travma Sonrası Büyüme / Thriving).",
        details: "Bu model travmanın sadece yıkım değil, bazı bireylerde olgunlaşma ve psikolojik güçlenme sağlayabileceğini gösterir.",
        authors: "O'Leary et al. (1998)",
        slides: "Slayt 17",
        examTip: "O'Leary'ye göre 3 seyir: Kronik düşüş, eski düzeye dönüş ve eski düzeyin üstüne çıkış (büyüme)."
      },
      {
        id: "c2_3",
        term: "Akut Stres Bozukluğu (ASB) ve Süre Ayrımı",
        englishTerm: "Acute Stress Disorder (ASD) & Duration Boundary",
        category: "Tanı & Ayırıcı Tanı",
        definition: "Kriter A travmatik olay sonrasında başlayan ve 3 gün ile 1 ay arasında süren klinik tablo. Belirtileri TSSB ile neredeyse aynıdır.",
        details: "ASB ilk kez DSM-IV'te tanımlanmıştır. TSSB ile arasındaki en temel fark SÜREDİR (ASB: 3 gün - 1 ay; TSSB: 1 aydan uzun süre). ASB, TSSB gelişimi için çok güçlü bir risk faktörüdür.",
        authors: "DSM-IV / DSM-5-TR",
        slides: "Slayt 18",
        examTip: "En kritik ayrım: Semptomlar 20. gündeyse tanı ASB'dir. 35. güne geçmişse tanı TSSB kapsamına girer!"
      },
      {
        id: "c2_4",
        term: "ASB'den TSSB'ye Geçiş Riski (%83 Oranı)",
        englishTerm: "Transition from ASD to PTSD (Keane Study)",
        category: "Epidemiyoloji & Risk",
        definition: "Trafik kazası geçiren bireylerle yapılan önemli bir çalışmada, erken dönemde Akut Stres Bozukluğu tanısı alan bireylerin %83'ünün daha sonra TSSB geliştirdiği kanıtlanmıştır.",
        details: "Bu veri, erken dönem müdahalesinin ve ASB saptanan olguların yakından izlenmesinin önemini klinik olarak ortaya koymaktadır.",
        authors: "Keane et al. (2006)",
        slides: "Slayt 18",
        examTip: "Keane vd. (2006) trafik kazası çalışmasında ASB tanısı alanların %83'ü ilerleyen süreçte TSSB tanısı almıştır."
      },
      {
        id: "c2_5",
        term: "Travma Sonrası Büyüme (PTG) ve Acının Dönüştürücü Gücü",
        englishTerm: "Post-Traumatic Growth (PTG) & Transformative Suffering",
        category: "Pozitif Psikoloji",
        definition: "Büyük bir yaşam krizi veya travmayla mücadele etme sürecinin sonucunda işlevsellikte meydana gelen pozitif yöndeki niteliksel sıçrama.",
        details: "Varoluşçu psikolojide 'acının dönüştürücü gücü' (transformative power of suffering) olarak adlandırılır. Travmanın kendisi değil, travmayla bilişsel ve duygusal mücadele süreci büyümeyi doğurur.",
        authors: "Calhoun et al. (2000); Tedeschi & Calhoun (2004)",
        slides: "Slayt 20",
        examTip: "Büyümeyi sağlayan şey travmanın bizzat kendisi değil, travmanın yarattığı varoluşsal krizle mücadele etme sürecidir."
      },
      {
        id: "c2_6",
        term: "Travma Sonrası Büyümenin 5 Alt Boyutu",
        englishTerm: "Five Subdimensions of Post-Traumatic Growth",
        category: "Kavramsal Model",
        definition: "Tedeschi ve Calhoun'un belirlediği 5 büyüme alanı: 1) Benlik algısında değişim (kendi gücünü fark etme), 2) Kişilerarası ilişkilerde değişim (daha derin ve samimi bağlar), 3) Yaşam felsefesinde değişim (yaşama minnettarlık, öncelikleri yeniden sıralama), 4) Yeni olanakları fark etme (yeni yollara yönelme), 5) İnanç sisteminde/maneviyatta değişim.",
        details: "Ölümcül hastalıklar, kayıplar, gaziler, doğal afetzedeler ve bu alanlarda çalışan uzmanlarda incelenmiştir.",
        authors: "Tedeschi & Calhoun (2004)",
        slides: "Slayt 21",
        examTip: "Sınavda bu 5 alt boyutu ezbere bilmek şarttır: Benlik, İlişkiler, Yaşam Felsefesi, Yeni Olanaklar, İnanç Sistemi."
      },
      {
        id: "c2_7",
        term: "Gazilerde Yaşam Felsefesi ve Bilişsel Esneklik",
        englishTerm: "Veterans, Life Philosophy and Cognitive Flexibility",
        category: "Ampirik Araştırma",
        definition: "2015 yılında savaş gazileriyle yapılan çalışmada, PTG alt boyutları arasında en yüksek puanı 'yaşam felsefesinde değişim' almıştır. Bunun nedeni ölümle doğrudan ve yoğun yüzleşmedir.",
        details: "Aynı çalışma, bilişsel esneklik (cognitive flexibility) düzeyi ile travma sonrası büyüme arasında güçlü ve pozitif bir korelasyon olduğunu ortaya koymuştur.",
        authors: "Hijazi et al. (2015)",
        slides: "Slayt 23",
        examTip: "Gazilerde en yüksek çıkan alt boyut: Yaşam Felsefesinde Değişim. Büyümeyi en çok yordayan zihinsel yeti: Bilişsel Esneklik."
      },
      {
        id: "c2_8",
        term: "Pre-travmatik Risk Faktörleri (Olay Öncesi)",
        englishTerm: "Pre-traumatic Risk Factors",
        category: "Risk Faktörleri",
        definition: "Travma meydana gelmeden önce bireyde var olan ve travma sonrası TSSB riskini artıran özellikler: Kadın cinsiyet, düşük sosyoekonomik düzey (SES), düşük eğitim düzeyi, etnik/ırksal azınlık mensubiyeti, ailede depresyon ya da psikiyatrik öykü ve nörotisizm gibi kişilik özellikleri.",
        details: "Kadınlarda erkeklere oranla travma maruziyeti daha düşük olabilse de TSSB gelişme sıklığı yaklaşık 2 kat fazladır.",
        authors: "Kirkpatrick & Heller (2014); Ditlevsen & Elklit (2012); Asnaani (2010)",
        slides: "Slayt 22",
        examTip: "Pre-travmatik faktörler: Kadın cinsiyet, düşük SES, düşük eğitim, psikiyatri öyküsü. (Olayın şiddeti peri-travmatiktir!)."
      },
      {
        id: "c2_9",
        term: "Peritravmatik Risk Faktörleri (Olay Sırası)",
        englishTerm: "Peritraumatic Risk Factors",
        category: "Risk Faktörleri",
        definition: "Travmatik olayın meydana geldiği anda ve hemen ardından devrede olan faktörler: Travmanın yoğunluğu, çeşidi, sıklığı ve süresi; algılanan yaşam tehdidi ve peritravmatik disosiasyon.",
        details: "Olay sırasında kişinin 'kendini beden dışından izlemesi' veya 'olayların gerçek dışı gelmesi' (peritravmatik disosiasyon), ileride TSSB gelişimi için en güçlü yordayıcılardan biridir.",
        authors: "Ozer et al. (2003); Marmar et al. (1997)",
        slides: "Slayt 23",
        examTip: "Peritravmatik disosiasyon (olay anındaki disosiasyon) TSSB gelişimi açısından en yüksek yordama gücüne sahip faktörlerdendir."
      },
      {
        id: "c2_10",
        term: "Post-travmatik Risk Faktörleri & Sosyoekonomik Paradoks",
        englishTerm: "Post-traumatic Risk Factors & Economic Support Paradox",
        category: "Risk Faktörleri",
        definition: "Travma sonrasındaki süreçte etkili faktörler: Sosyal destek eksikliği, travma sonrası işsizlik/stresli yaşam, tanı ve tedavide gecikme.",
        details: "Manove vd. (2019) çalışmasında ilginç bir bulgu elde edilmiştir: Düşük SES'e sahip bireylere travma sonrasında yeterli ekonomik kaynak sağlandığında, TSSB geliştirme olasılıklarının arttığı gözlemlenmiştir (farkındalık ve sağlık hizmeti arama artışı veya kaynak stresi).",
        authors: "Manove et al. (2019)",
        slides: "Slayt 24",
        examTip: "Travma sonrasındaki en güçlü koruyucu faktör: Algılanan sosyal destektir. Sosyal desteğin yokluğu en büyük post-travmatik risktir."
      },
      {
        id: "c2_11",
        term: "Yaşam Boyu Travma Maruziyeti ve Rezilyans",
        englishTerm: "Lifetime Trauma Exposure & Resilience Prevalence",
        category: "Epidemiyoloji",
        definition: "Toplumun %41 ile %86'sı yaşamı boyunca en az bir travmatik olaya maruz kalmaktadır. Ancak bu kişilerin büyük bir çoğunluğu herhangi bir psikopatoloji geliştirmeden iyileşir.",
        details: "Travma sonrası psikolojik destek ekiplerinde de prevalans %30-40 civarındadır. Bu durum travmanın evrensel olarak her maruz kalanda bozukluk yaratmadığını, rezilyansın yaygın olduğunu gösterir.",
        authors: "Steudte-Schmiedgen (2016); Kross et al. (2008)",
        slides: "Slayt 25",
        examTip: "Travma maruziyeti yaygındır (%41-86), ancak TSSB gelişimi azınlıktadır (%7-8). Çoğunluk rezilyanttır."
      },
      {
        id: "c2_12",
        term: "17 Ağustos 1999 Marmara Depremi Bulguları",
        englishTerm: "17 August 1999 Marmara Earthquake Epidemiology",
        category: "Türkiye Saha Verisi",
        definition: "17 Ağustos Marmara Depremi sonrası toplum genelinde yapılan taramalarda TSSB yaygınlığı %20 civarında bulunurken, psikiyatrik tedavi için başvuranlar arasında bu oran %63 olarak tespit edilmiştir.",
        details: "Bu veri, genel toplum örneklemi ile klinik başvuru örneklemi arasındaki dramatik yaygınlık farkını ortaya koymaktadır.",
        authors: "Öztürk MO (2015)",
        slides: "Slayt 25",
        examTip: "17 Ağustos Depremi: Toplum taramasında %20, klinik tedaviye başvuranlarda %63!"
      }
    ]
  },

  source3: {
    title: "Kaynak 3: Otonom Stres Tepkileri, Nörobiyoloji, ASB ve Tarihsel Süreç",
    subtitle: "ABUtrauma4.pptx (Hafta 4)",
    lecturers: "Dr. Cansu Aykaç Kemik",
    description: "Sempatik/parasempatik sistem, HPA ekseni ve kortizol kaskadı, amigdala-PFC-hipokampus devreleri, DSM-5-TR ASB kriterleri (9/14) ve antikiteden günümüze travma tarihi.",
    concepts: [
      {
        id: "c3_1",
        term: "Stres Yanıtının İki Temel Sistemi (ANS & HPA)",
        englishTerm: "Two Major Stress Systems: ANS and HPA Axis",
        category: "Nörobiyoloji",
        definition: "Akut stres, beynin stresörlere ilişkin bilgiyi nöral ağlar üzerinden bütünleştirdiği ve iki ana ekseni koordine ettiği süreçtir: 1) Otonom Sinir Sistemi (hızlı, saniyeler içinde bedensel yanıt), 2) HPA Ekseni (endokrin/hormonal, dakikalar içinde gelişen yanıt).",
        details: "Bu iki sistem birbirinden ayrı fakat yoğun şekilde bağlantılıdır; katkı oranları stresörün türüne ve şiddetine göre ayarlanır (katı ve tekdüze bir refleks değildir).",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 10, 11, 12",
        examTip: "Otonom sinir sistemi hızlı/elektriksel bodily tepki verir; HPA ekseni ise hormonal/endokrin yanıt üretir."
      },
      {
        id: "c3_2",
        term: "Sempatik Sinir Sistemi (SNS - Savaş veya Kaç)",
        englishTerm: "Sympathetic Nervous System (Fight or Flight)",
        category: "Otonom Sistem",
        definition: "Tehlike anında enerjiyi mobilize eden sistem. Kalp atış hızı artar, göz bebekleri büyür (midriyazis), solunum hızlanır, sindirim yavaşlar ve böbrek üstü bezinden adrenalin salgılanır.",
        details: "Bedeni tehditle mücadele etmeye veya tehditten kaçmaya hazır ve uyanık hale getirir.",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 5",
        examTip: "Sempatik aktivasyonda sindirim hızlanmaz, TAM AKSİNE YAVAŞLAR/DURUR! Enerji kaslara ve kalbe aktarılır."
      },
      {
        id: "c3_3",
        term: "Parasempatik Sinir Sistemi (PNS - Dinlen ve Sindir)",
        englishTerm: "Parasympathetic Nervous System (Rest and Digest)",
        category: "Otonom Sistem",
        definition: "Gevşeme, dinlenme ve homeostazis anında aktif olan sistem. Kalp atışı yavaşlar, solunum sakinleşir, sindirim hızlanır, göz bebekleri küçülür ve enerji korunarak beden dengesine döner.",
        details: "Vagus siniri bu sistemin ana taşıyıcısıdır; sempatik sistemin aşırı uyarılmasını frenler.",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 6",
        examTip: "Parasempatik sistem: Kalbi yavaşlatır, sindirimi uyarır, pupil konstriksiyonu yapar, enerjiyi depolar."
      },
      {
        id: "c3_4",
        term: "HPA Ekseni Hormonal Kaskadı (CRH → ACTH → Kortizol)",
        englishTerm: "HPA Axis Cascade (CRH → ACTH → Cortisol)",
        category: "Endokrinoloji",
        definition: "Tehdit algılandığında Hipotalamus CRH (Kortikotropin Salgılatıcı Hormon) salgılar → CRH ön hipofizi uyararak ACTH (Adrenokortikotropik Hormon) salgılatır → ACTH kan yoluyla böbrek üstü bezi korteksine ulaşarak KORTİZOL salgılatır.",
        details: "Kortizol negatif geri bildirimle hipotalamus ve hipofizi baskılayarak eksenin durmasını sağlar. TSSB'de bu negatif geri bildirim aşırı duyarlılaşmıştır.",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 10",
        examTip: "Sıralama sınav klasiğidir: Hipotalamus (CRH) → Hipofiz (ACTH) → Böbrek üstü bezi korteksi (Kortizol)."
      },
      {
        id: "c3_5",
        term: "Kortizol: Akut Adaptasyon vs Kronik Toksisite",
        englishTerm: "Cortisol: Acute Adaptation vs Chronic Neurotoxicity",
        category: "Hormon & Nöroendokrin",
        definition: "Birincil stres hormonu. Kısa vadede enerji mobilizasyonunu kolaylaştırır ve gereksiz bağışıklık tepkilerini baskılar (uyum sağlayıcıdır).",
        details: "Uzun vadede ve kronik stres altında ise bellek üzerinde hasar yaratır (hipokampal atrofi), bağışıklığı zayıflatır ve duygudurumu bozar.",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 7",
        examTip: "Kısa süreli kortizol hayat kurtarır ve enerji sağlar; kronik kortizol maruziyeti hipokampusu küçültür."
      },
      {
        id: "c3_6",
        term: "Amigdala ve Hızlı Tehdit İşleme",
        englishTerm: "Amygdala and Threat Perception",
        category: "Nöroanatomi",
        definition: "Tehdit algısında ve hızlı duygusal tepkilerde kilit rol oynayan temporal lob yapısı. Duygusal açıdan belirgin ve tehdit edici bilgilerin işlenmesine katkıda bulunur.",
        details: "TSSB hastalarında amigdala aşırı aktiftir (hiperaktif); zararsız uyaranları bile ölümcül tehdit gibi algılar.",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 8",
        examTip: "TSSB'de amigdala hiperaktiftir; korku koşullanması ve alarm reaksiyonunun merkezidir."
      },
      {
        id: "c3_7",
        term: "Prefrontal Korteks (PFC) & mPFC İnhibisyonu",
        englishTerm: "Prefrontal Cortex & Medial PFC Top-Down Regulation",
        category: "Nöroanatomi",
        definition: "Bilişsel kontrol, karar verme ve duygu regülasyonundan sorumlu beyin bölgesi. Medial prefrontal korteks (mPFC), hipotalamik ve beyin sapı stres yolaklarının limbik regülasyonuna katılır (amigdalayı yukarıdan aşağıya frenler).",
        details: "Kronik stres altında PFC işlevleri baskılanır; bu da korku yanıtının söndürülememesine (extinction failure) yol açar.",
        authors: "Ulrich-Lai & Herman (2009)",
        slides: "Slayt 8, 9",
        examTip: "PFC normalde amigdalaya 'sakin ol, tehlike geçti' der; TSSB'de PFC hipoaktif olduğu için bu fren çalışmaz."
      },
      {
        id: "c3_8",
        term: "Hipokampus ve Bağlamsal Bellek Hasarı",
        englishTerm: "Hippocampus & Contextual Memory Sensitivity",
        category: "Nöroanatomi",
        definition: "Öğrenme ve açık (deklaratif) bellekten sorumlu yapı. Stres regülasyonunu bellek ve bağlamsal bilgiyle birleştirir. Kortizole aşırı duyarlıdır.",
        details: "Uzun süreli stres hipokampusta hacim kaybına yol açar. Hipokampus hasar gördüğünde kişi travma anısı ile şimdiki güvenli ortamın bağlamını ayırt edemez (flashback ve genelleşmiş tetiklenme tetiklenir).",
        authors: "Ulrich-Lai & Herman (2009); O’Doherty et al. (2015)",
        slides: "Slayt 9",
        examTip: "Hipokampus travmanın nerede ve ne zaman olduğunu kodlar. Hacim kaybı bağlamsal bellek ayrımını bozar."
      },
      {
        id: "c3_9",
        term: "Akut Stres Bozukluğu (ASB) DSM-5-TR Tanı Kriterleri",
        englishTerm: "ASD DSM-5-TR Diagnostic Framework (9 of 14 rule)",
        category: "Tanı Kriteri",
        definition: "Kriter A travmaya maruz kalma sonrasında, 3 gün ile 1 ay süresince, 5 alandan (intrüzyon, olumsuz duygudurum, disosiasyon, kaçınma, uyarılma) toplam 14 semptomdan EN AZ 9'UNUN bulunması kuralı.",
        details: "Semptomların herhangi bir kombinasyondan gelmesi yeterlidir; belirli bir kümeden zorunlu kota aranmaz.",
        authors: "APA DSM-5-TR (2022); Bryant (2011)",
        slides: "Slayt 16, 17",
        examTip: "ASB DSM-5-TR kuralı: 14 belirtiden en az 9'u (any combination) ve süre 3 gün - 1 ay arası!"
      },
      {
        id: "c3_10",
        term: "DSM-IV'ten DSM-5'e ASB'deki Kriter Devrimi",
        englishTerm: "Evolution of ASD: DSM-IV to DSM-5",
        category: "Tanısal Değişim",
        definition: "DSM-IV'te ASB tanısı için DİSOSİYASYON ZORUNLU bir kriterdi (kişinin en az 3 disosiyatif belirti göstermesi şarttı). DSM-5'te bu zorunluluk KALDIRILMIŞTIR.",
        details: "DSM-5'te disosiasyon zorunlu olmaktan çıkarılmış; 14 belirtiden herhangi 9'unun bulunması ve 3 gün-1 ay zaman penceresi yeterli kılınmıştır. DSM-5-TR'de çekirdek kriterler değişmemiştir.",
        authors: "Bryant (2011); APA (2022)",
        slides: "Slayt 17",
        examTip: "EN ÖNEMLİ DEĞİŞİKLİK: Disosiasyon DSM-5'te artık ASB için zorunlu (mandator) bir kriter DEĞİLDİR!"
      },
      {
        id: "c3_11",
        term: "Herodotus ve Antik Çağ Travması (Psikojenik Körlük)",
        englishTerm: "Herodotus and Ancient Trauma (Psychogenic Blindness)",
        category: "Tarihçe",
        definition: "Tarihçi Herodotus, Maraton Savaşı'nda yanındaki arkadaşının öldürülmesine tanık olan bir askerin hiçbir fiziksel yara almadığı halde aniden kör olduğunu kaydetmiştir.",
        details: "Bu vaka, travmanın fiziksel yaralanma olmaksızın duyusal ve nörolojik işlev kaybına (konversiyon / psikojenik körlük) yol açabileceğinin tarihteki en eski kayıtlarındandır.",
        authors: "Herodotus; Slayt metni",
        slides: "Slayt 20",
        examTip: "Herodotus'un anlattığı vaka: Arkadaşının ölümüne tanık olduktan sonra aniden kör olan asker vakası."
      },
      {
        id: "c3_12",
        term: "Samuel Pepys ve 1666 Büyük Londra Yangını",
        englishTerm: "Samuel Pepys and the 1666 Great Fire of London",
        category: "Tarihçe",
        definition: "1666 Büyük Londra Yangını'ndan kurtulan Samuel Pepys'in günlükleri, travmanın gecikmiş etkilerini mükemmel biçimde belgeler.",
        details: "Pepys yangından aylar sonra bile geceleri uyuyamadığını, rüyalarında sürekli alevler gördüğünü, dehşet içinde uyandığını ve en ufak duman kokusunda ya da çıtırtıda paniklediğini yazmıştır (tipik intrüzyon ve aşırı uyarılma).",
        authors: "Samuel Pepys Günlükleri (1666)",
        slides: "Slayt 20",
        examTip: "Samuel Pepys: 1666 Büyük Londra yangını sonrası kabuslar, duman kokusundan tetiklenme ve gecikmiş travma belirtileri."
      },
      {
        id: "c3_13",
        term: "Demiryolu Omurgası (Railway Spine / Erichsen Hastalığı)",
        englishTerm: "Railway Spine / Erichsen's Disease",
        category: "Tarihçe",
        definition: "19. yüzyıl Sanayi Devrimi sırasında tren kazalarından fiziksel yara almadan kurtulan yolcularda aylarca süren yoğun korku, çarpıntı ve felç benzeri hislerin tanımlanması.",
        details: "Tarihte travmanın sinir sistemi üzerindeki etkilerinin ilk kez kurumsallaşmış ve tıbbi olarak tartışıldığı dönüm noktasıdır.",
        authors: "John Eric Erichsen (19. Yüzyıl)",
        slides: "Slayt 21",
        examTip: "Tarihte travmanın sinir sistemi üzerindeki etkilerinin ilk kurumsal tartışması: 'Railway Spine' (Demiryolu Omurgası)."
      },
      {
        id: "c3_14",
        term: "DSM-5-TR ve ICD-11 TSSB Karşılaştırması",
        englishTerm: "PTSD: DSM-5-TR vs ICD-11 Approach",
        category: "Tanı Kılavuzları Karşılaştırması",
        definition: "DSM-5-TR TSSB'yi geniş bir semptom yelpazesi ve 4 ayrı küme (İntrüzyon, Kaçınma, Olumsuz Biliş/Duygudurum, Uyarılma) ile tanımlar ve disosiyatif alt tipi ekler.",
        details: "ICD-11 ise daha dar bir çekirdek küme tanımlar: 1) Burada-ve-şimdi yeniden yaşantılama, 2) Kaçınma, 3) Kalıcı tehdit hissi. Ayrıca duygu regülasyonu, benlik algısı ve ilişki sorunlarını içeren bağımsız 'Kompleks TSSB' tanısı sunar.",
        authors: "APA (2022); WHO (2024)",
        slides: "Slayt 23",
        examTip: "DSM-5-TR: 4 geniş küme. ICD-11: 3 dar çekirdek belirti + ayrı Kompleks TSSB tanısı."
      }
    ]
  },

  source4: {
    title: "Kaynak 4: DSM-5-TR Kriter Setleri, Disosiasyon ve Klinik Ölçekler",
    subtitle: "ABUtrauma5.pptx (Hafta 5)",
    lecturers: "Dr. Cansu Aykaç Kemik",
    description: "Kriter B'den H'ye DSM-5-TR TSSB tanı kriterleri, depersonalizasyon ve derealizasyon alt tipi, PDEQ, LEC-5, CTQ (5 alt boyut) ve altın standart klinik ölçekler.",
    concepts: [
      {
        id: "c4_1",
        term: "Kriter B: Yeniden Yaşantılama / İntrüzyon (1+ Belirti)",
        englishTerm: "Criterion B: Intrusion Symptoms (1 or more required)",
        category: "TSSB Tanı Kriteri",
        definition: "Travmatik olay sonrasında başlayan ve istemsizce araya giren 5 belirtiden EN AZ 1'inin bulunması zorunludur: 1) İntrüzif, istemsiz anılar, 2) Travma temalı rahatsız edici rüyalar/kabuslar, 3) Disosiyatif tepkiler (flashbackler - olayı yeniden yaşıyormuş gibi hissetme), 4) Travmayı hatırlatan içsel/dışsal ipuçlarında yoğun psikolojik sıkıntı, 5) Hatırlatıcılara karşı belirgin fizyolojik tepkiler (taşikardi, terleme vb.).",
        details: "Flashback sırasında kişi çevresiyle temasını kısmen veya tamamen kaybedip travma anındaymış gibi davranabilir.",
        authors: "DSM-5-TR (APA, 2022)",
        slides: "Slayt 3",
        examTip: "Kriter B için en az 1 belirti yeterlidir. Hatırlatıcılara verilen fizyolojik tepkiler (ör. çarpıntı) bu kümededir!"
      },
      {
        id: "c4_2",
        term: "Kriter C: Kaçınma (1 veya 2'si)",
        englishTerm: "Criterion C: Avoidance (1 or both required)",
        category: "TSSB Tanı Kriteri",
        definition: "Travmaya ilişkin uyaranlardan sürekli kaçınma çabası: 1) İçsel kaçınma: Travmaya ilişkin sıkıntı verici anı, düşünce ve duygulardan kaçınma veya kaçınma çabası; 2) Dışsal kaçınma: Bu anı ve duyguları tetikleyen dışsal hatırlatıcılardan (insanlar, mekanlar, konuşmalar, nesneler, etkinlikler) kaçınma.",
        details: "DSM-IV'te kaçınma ve duygusal uyuşma tek kümedeydi; DSM-5'te Kaçınma (Kriter C) bağımsız bir küme haline getirilmiştir.",
        authors: "DSM-5-TR (APA, 2022)",
        slides: "Slayt 5",
        examTip: "Kriter C için en az 1 kaçınma davranışı (içsel veya dışsal) zorunludur."
      },
      {
        id: "c4_3",
        term: "Kriter D: Biliş ve Duygudurumda Olumsuz Değişimler (2+ Belirti)",
        englishTerm: "Criterion D: Negative Alterations in Cognitions & Mood (2+ required)",
        category: "TSSB Tanı Kriteri",
        definition: "Travma sonrası başlayan/kötüleşen 7 belirtiden EN AZ 2'sinin varlığı: 1) Travmanın önemli bir bölümünü hatırlayamama (disosiyatif amnezi), 2) Kendisi, başkaları veya dünya hakkında abartılı olumsuz inançlar ('Ben kötüyüm', 'Kimseye güvenilmez'), 3) Kendini veya başkalarını haksız yere suçlayan çarpık bilişler, 4) Sürekli olumsuz duygusal durum (korku, dehşet, öfke, suçluluk, utanç), 5) Etkinliklere ilgide belirgin azalma (anhedoni), 6) Başkalarından yabancılaşma/kopma hissi, 7) Pozitif duyguları (sevgi, neşe) hissedememe.",
        details: "Bu küme DSM-5'te sıfırdan eklenen en büyük yeniliklerdendir; travmanın derin bilişsel ve duygusal izlerini yansıtır.",
        authors: "DSM-5-TR (APA, 2022)",
        slides: "Slayt 6",
        examTip: "Kriter D için EN AZ 2 belirti şarttır! Disosiyatif amnezi Kriter D'dedir (kafa travması veya alkole bağlı olmamalıdır)."
      },
      {
        id: "c4_4",
        term: "Kriter E: Uyarılma ve Tepkisellikte Değişiklikler (2+ Belirti)",
        englishTerm: "Criterion E: Alterations in Arousal & Reactivity (2+ required)",
        category: "TSSB Tanı Kriteri",
        definition: "Travma sonrası başlayan/kötüleşen 6 belirtiden EN AZ 2'sinin varlığı: 1) İrritabl davranış ve öfke patlamaları (küçük kışkırtmayla veya kışkırtmasız sözel/fiziksel saldırganlık), 2) Pervasız veya kendine zarar verici davranışlar (reckless behavior), 3) Aşırı tetikte olma (hypervigilance), 4) Abartılı irkilme tepkisi (exaggerated startle), 5) Konsantrasyon güçlüğü, 6) Uyku bozukluğu.",
        details: "Pervasız/kendine zarar verici davranışlar DSM-5 ile bu kümeye eklenmiştir.",
        authors: "DSM-5-TR (APA, 2022)",
        slides: "Slayt 7",
        examTip: "Kriter E için EN AZ 2 belirti gerekir. Pervasız araba kullanma veya madde suistimali Kriter E'nin 'reckless behavior' maddesidir."
      },
      {
        id: "c4_5",
        term: "Kriter F, G, H: Süre, İşlevsellik ve Dışlama",
        englishTerm: "Criteria F, G, H: Duration, Distress/Impairment & Exclusion",
        category: "TSSB Tanı Kriteri",
        definition: "Kriter F: Belirtilerin süresi 1 AYDAN UZUN olmalıdır. Kriter G: Belirtiler sosyal, mesleki veya diğer önemli alanlarda klinik açıdan belirgin sıkıntı veya işlev bozukluğuna yol açmalıdır. Kriter H: Tablo bir maddenin fizyolojik etkilerine veya başka bir tıbbi duruma bağlanamaz olmalıdır.",
        details: "1 aydan kısa süren belirtiler için ASB (Akut Stres Bozukluğu) veya uyum bozukluğu düşünülür.",
        authors: "DSM-5-TR (APA, 2022)",
        slides: "Slayt 8",
        examTip: "Süre eşiği 1 aydır! 1 aydan önce TSSB tanısı KONULAMAZ."
      },
      {
        id: "c4_6",
        term: "Disosiyatif Alt Tip: Depersonalizasyon vs Derealizasyon",
        englishTerm: "Dissociative Subtype: Depersonalization vs Derealization",
        category: "TSSB Alt Tipi",
        definition: "TSSB tanısı alan bireyde ek olarak kalıcı ya da tekrarlayıcı şu yaşantılardan en az birinin olması: 1) Depersonalizasyon: Kişinin kendi zihinsel süreçlerinden veya bedeninden kopması, kendine dışarıdan bir gözlemci gibi bakması, bedeninin gerçek dışı gelmesi, zamanın yavaşlaması; 2) Derealizasyon: Kişinin çevresinin, nesnelerin ya da insanların gerçek dışı, rüya gibi, sisli veya yapay gelmesi.",
        details: "Bu alt tip, travmaya verilen farklı bir nörobiyolojik yanıt profilini (aşırı frontal inhibisyon ve duygusal uyuşma) yansıtır.",
        authors: "DSM-5-TR (APA, 2022)",
        slides: "Slayt 9",
        examTip: "Kendi bedenine dışarıdan bakma = Depersonalizasyon; Etrafın rüya/film gibi gelmesi = Derealizasyon."
      },
      {
        id: "c4_7",
        term: "Peritravmatik Disosiyatif Deneyimler Ölçeği (PDEQ)",
        englishTerm: "Peritraumatic Dissociative Experiences Questionnaire (PDEQ)",
        category: "Klinik Ölçek",
        definition: "Travma olayı gerçekleşirken ve hemen ardından yaşanan disosiasyon düzeyini ölçen özbildirim ölçeği.",
        details: "Maddelerinden örnekler: 'Olanlar rüya gibi, film izliyormuşum gibi gerçek dışı geldi', 'Bedenimin dışından olanları seyreden bir seyirci gibiydim', 'Bedenim normalden büyük/küçük hissettirdi veya ondan koptum', 'Olaylar başkasının başına geliyormuş gibi hissettim'.",
        authors: "Marmar et al. (1997); Birmes et al. (2005)",
        slides: "Slayt 12, 13, 14",
        examTip: "PDEQ travma anındaki (peritravmatik) disosiasyonu ölçer ve gelecekteki TSSB'nin en güçlü habercilerindendir."
      },
      {
        id: "c4_8",
        term: "Yaşam Olayları Listesi (LEC-5)",
        englishTerm: "Life Events Checklist for DSM-5 (LEC-5)",
        category: "Klinik Ölçek",
        definition: "Bireyin yaşam boyu karşılaştığı 17 potansiyel travmatik olay türünü tarayan araç (Doğal afet, yangın, trafik kazası, toksik maruziyet, fiziksel saldırı, silahlı saldırı, cinsel saldırı vb.).",
        details: "Her olay için 5 maruziyet düzeyini sorgular: Başıma geldi, Tanığı oldum, Yakınımdan öğrendim, İşim gereği karşılaştım, Emin değilim / Uygulanamaz.",
        authors: "Gray et al. (2004); US National Center for PTSD",
        slides: "Slayt 15, 16, 17",
        examTip: "LEC-5 tanı koymaz; Kriter A kapsamındaki potansiyel travmatik maruziyet geçmişini tarar."
      },
      {
        id: "c4_9",
        term: "Çocukluk Çağı Travmaları Anketi (CTQ) ve 5 Alt Boyutu",
        englishTerm: "Childhood Trauma Questionnaire (CTQ - Bernstein)",
        category: "Klinik Ölçek",
        definition: "18 yaş öncesi çocukluk ve ergenlik dönemi kötü muamelelerini geriye dönük (retrospektif) olarak değerlendiren 28 maddelik standart tarama ölçeği. 5 klinik alt boyuttan oluşur: 1) Duygusal İhmal, 2) Fiziksel İhmal, 3) Duygusal İstismar, 4) Fiziksel İstismar, 5) Cinsel İstismar.",
        details: "Türkiye geçerlik ve güvenirlik çalışması Prof. Dr. Vedat Şar ve ekibi tarafından yapılmıştır.",
        authors: "Bernstein et al. (2003); Şar et al. (2012)",
        slides: "Slayt 18, 19, 20, 21",
        examTip: "CTQ'nun 5 temel klinik boyutu: Duygusal İhmal, Fiziksel İhmal, Duygusal İstismar, Fiziksel İstismar, Cinsel İstismar."
      },
      {
        id: "c4_10",
        term: "CTQ: İhmal vs İstismar Madde Ayrımı",
        englishTerm: "CTQ: Neglect vs Abuse Item Distinction",
        category: "Klinik Ölçek Maddeleri",
        definition: "İhmal temel gereksinimlerin karşılanmamasıdır (yemek bulamama, kirli kıyafet giymek zorunda kalma, sarhoş/bağımlı ebeveyn, sevilmediğini hissetme). İstismar ise aktif zarar vermedir (aşağılama/aptal denmesi, kemer/sopayla dövülme, morluk oluşması, cinsel dokunma/zorlama).",
        details: "İhmal pasif eksikliktir (omission), istismar aktif eylemdir (commission).",
        authors: "Bernstein et al. (2003)",
        slides: "Slayt 18, 19, 20, 21",
        examTip: "'Yeterli yiyecek bulamıyordum' = Fiziksel İhmal; 'Kemer veya sopayla dövüldüm' = Fiziksel İstismar."
      },
      {
        id: "c4_11",
        term: "CTQ: Minimizasyon / İnkar Skalası (Pozitif Durumlar)",
        englishTerm: "CTQ Minimization / Denial Scale",
        category: "Ölçek Güvenilirlik Maddeleri",
        definition: "CTQ'da yer alan ve kişinin travmatik geçmişi inkar edip aşırı kusursuz bir tablo çizip çizmediğini kontrol eden maddeler bütünü.",
        details: "Örnek maddeler: 'Mükemmel bir çocukluğum vardı', 'Dünyanın en iyi ailesine sahiptim', 'Ailemde değiştirmek isteyeceğim hiçbir şey yoktu'. Bu maddelere çok yüksek puan verilmesi yanıtların güvenilir olmadığını (aşırı savunmacı inkarı) gösterir.",
        authors: "Bernstein et al. (2003)",
        slides: "Slayt 22",
        examTip: "'Mükemmel bir çocukluğum vardı' maddesi pozitif aile ortamını değil, testin 'Minimizasyon/İnkar' kontrol maddesini temsil eder!"
      },
      {
        id: "c4_12",
        term: "PCL-5 ve CAPS-5: Altın Standartlar",
        englishTerm: "PCL-5 & CAPS-5: Gold Standard PTSD Instruments",
        category: "Değerlendirme Araçları",
        definition: "PCL-5 (PTSD Checklist for DSM-5): 20 maddelik özbildirim ölçeğidir, DSM-5'in 20 belirtisini doğrudan sorgular. CAPS-5 (Clinician-Administered PTSD Scale for DSM-5): Klinisyen tarafından uygulanan yarı yapılandırılmış görüşmedir; TSSB tanısında dünya çapındaki ALTIN STANDARTTIR (Gold Standard).",
        details: "CAPS-5 belirtilerin hem sıklığını hem de şiddetini derecelendirir.",
        authors: "Weathers et al. (US National Center for PTSD)",
        slides: "Slayt 23",
        examTip: "Özbildirim altın standardı = PCL-5; Klinisyen görüşmesi altın standardı = CAPS-5."
      }
    ]
  }
};
