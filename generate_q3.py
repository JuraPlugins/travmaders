import json

questions = [
    {
        "id": "q3_1",
        "question": "Otonom sinir sisteminin stres anında devreye giren 'Sempatik Sinir Sistemi' (SNS) aktive olduğunda vücutta aşağıdakilerden hangisi GERÇEKLEŞMEZ?",
        "options": [
            "A) Kalp atış hızı ve debisi artar.",
            "B) Göz bebekleri büyür (midriyazis).",
            "C) Solunum sıklaşır ve hızlanır.",
            "D) Sindirim sistemi hareketleri ve enzim salgısı belirgin şekilde hızlanır.",
            "E) Böbrek üstü bezlerinden kana adrenalin salgılanır."
        ],
        "correct": 3,
        "explanation": "Sempatik sistem (Savaş veya Kaç), enerjiyi hayati kaslara ve organlara yönlendirmek için acil olmayan fonksiyonları durdurur. Bu nedenle sindirim sistemi HIZLANMAZ, TAM AKSİNE YAVAŞLAR ve baskılanır (Slayt 5). Sindirimi hızlandıran sistem Parasempatik sistemdir.",
        "optionAnalysis": {
            "A": "Gerçekleşir. Kalp hızlanır, kaslara oksijen taşınır.",
            "B": "Gerçekleşir. Göz bebekleri tehdidi daha iyi görmek için genişler.",
            "C": "Gerçekleşir. Solunum kaslara oksijen sağlamak için hızlanır.",
            "D": "DOĞRU CEVAP (Gerçekleşmez). Sindirim yavaşlar ve durur; sindirimi hızlandıran parasempatik sistemdir.",
            "E": "Gerçekleşir. Adrenalin salgısıyla alarm durumu oluşturulur."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 5 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_2",
        "question": "Vücudun dinlenme, gevşeme ve homeostazis (denge) evresinde aktif olan Parasempatik Sinir Sistemi (PNS) devreye girdiğinde hangi fizyolojik yanıt gözlemlenir?",
        "options": [
            "A) Kalp atışı yavaşlar, solunum sakinleşir, sindirim hızlanır ve göz bebekleri küçülür.",
            "B) Kalp atışı dakikada 180'e fırlar ve kan basıncı tavan yapar.",
            "C) Sindirim tamamen felç olur ve mide asidi kesilir.",
            "D) Vücut 'savaş ya da kaç' durumuna geçerek tüm glikoz depolarını tüketir.",
            "E) Göz bebekleri aşırı derecede genişler."
        ],
        "correct": 0,
        "explanation": "Slayt 6: Parasempatik Sinir Sistemi (Dinlen ve Sindir): Kalp atışı yavaşlar, solunum sakinleşir, sindirim hızlanır, göz bebekleri büzüşür (miyozis) ve enerji korunarak sistemler dengeye döner.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 6'daki tam parasempatik etki listesidir: Kalp yavaşlar, solunum sakinleşir, sindirim hızlanır, pupiller küçülür.",
            "B": "Yanlış. Bu sempatik sistemin aşırı uyarılma tablosudur.",
            "C": "Yanlış. Sindirim hızlanır ve aktive olur.",
            "D": "Yanlış. Bu sempatik sistemin enerji tüketme modudur.",
            "E": "Yanlış. Sempatik sistemde pupiller büyür; parasempatikte küçülür."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 6 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_3",
        "question": "Hipotalamik-Pitüiter-Adrenal (HPA) ekseninin hormonal kaskadında hormonların salgılanma sırası ve salgılandıkları organlar hangi seçenekte EKSİKSİZ ve DOĞRU verilmiştir?",
        "options": [
            "A) Hipofiz (Kortizol) → Hipotalamus (ACTH) → Böbrek üstü bezi (CRH)",
            "B) Hipotalamus (CRH) → Hipofiz Bezi (ACTH) → Böbrek Üstü Bezi (Kortizol)",
            "C) Tiroid Bezi (T3) → Hipotalamus (Adrenalin) → Hipofiz (Melatonin)",
            "D) Böbrek Üstü Bezi (ACTH) → Hipofiz (CRH) → Hipotalamus (Kortizol)",
            "E) Pankreas (İnsülin) → Hipofiz (Dopamin) → Adrenal Bez (Serotonin)"
        ],
        "correct": 1,
        "explanation": "Slayt 10: HPA Ekseni sırası: Tehdit algılandığında Hipotalamus CRH (Kortikotropin Salgılatıcı Hormon) salgılar → Hipofiz bezi ACTH (Adrenokortikotropik Hormon) salgılar → Böbrek üstü bezi (adrenal korteks) birincil stres hormonu olan Kortizol'ü salgılar.",
        "optionAnalysis": {
            "A": "Yanlış. Organlar ve hormonlar tamamen ters sırada verilmiştir.",
            "B": "DOĞRU. Hipotalamus (CRH) → Hipofiz (ACTH) → Böbrek üstü bezi (Kortizol).",
            "C": "Yanlış. Tiroid ekseni ile karıştırılmıştır; stres kaskadı değildir.",
            "D": "Yanlış. Salgı organları ve hormonlar yer değiştirmiştir.",
            "E": "Yanlış. İnsülin ve dopamin HPA ekseninin primer salgıları değildir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 10 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_4",
        "question": "Birincil stres hormonu olan Kortizol'ün organizma üzerindeki 'akut (kısa vadeli)' ve 'kronik (uzun vadeli)' etkileri hakkında aşağıdakilerden hangisi DOĞRUDUR?",
        "options": [
            "A) Kısa vadede beyni çürütür; uzun vadede ise zekayı olağanüstü artırır.",
            "B) Kısa vadede enerji mobilizasyonunu kolaylaştırır ve bağışıklığı baskılar (uyum sağlayıcıdır); uzun vadede ise bellek, bağışıklık ve duygudurum üzerinde tahrip edici olumsuz etkiler yaratır.",
            "C) Kortizol yalnızca sindirim enzimidir, stresle hiçbir ilişkisi yoktur.",
            "D) Kronik kortizol salgısı hipokampus hacmini devasa boyutlara ulaştırır.",
            "E) Kortizol akut evrede sadece uyku getirir."
        ],
        "correct": 1,
        "explanation": "Slayt 7: 'Cortisol: Primary stress hormone. In the short term, it facilitates energy mobilization and suppresses the immune system. In the long term, however, it can have negative effects on memory, the immune system, and mood.'",
        "optionAnalysis": {
            "A": "Yanlış. Tam tersidir; akut dönemde adaptif, kronik dönemde nörotoksiktir.",
            "B": "DOĞRU. Slayt 7'deki açık ifade: Kısa vadede enerji sağlar ve bağışıklığı frenler; uzun vadede hafızayı, bağışıklığı ve duygudurumu bozar.",
            "C": "Yanlış. Kortizol böbrek üstü bezinden salgılanan ana glukokortikoiddir.",
            "D": "Yanlış. Kronik kortizol hipokampusu büyütmez, nörotoksisiteyle küçültür (atrofi).",
            "E": "Yanlış. Kortizol uyanıklık ve enerji mobilizasyonu sağlar."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 7 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_5",
        "question": "Tehdit algısında ve hızlı duygusal tepkilerde kilit rol oynayan, duygusal olarak belirgin ve tehdit edici bilgilerin işlenmesine katkıda bulunan temporal lob yapısı hangisidir?",
        "options": [
            "A) Serebellum (Beyincik)",
            "B) Amigdala",
            "C) Oksipital Lob (Görme Merkezi)",
            "D) Corpus Callosum",
            "E) Medulla Spinalis (Omurilik)"
        ],
        "correct": 1,
        "explanation": "Slayt 8: 'Amygdala: It plays a key role in threat perception. It is active during rapid emotional responses. Contributes to processing emotionally significant and threat-related information.'",
        "optionAnalysis": {
            "A": "Yanlış. Serebellum motor koordinasyon ve denge merkezidir.",
            "B": "DOĞRU. Amigdala tehdit algısı ve korku koşullanmasının ana merkezidir.",
            "C": "Yanlış. Oksipital lob primer görme alanıdır.",
            "D": "Yanlış. Korpus kallozum iki yarıküreyi bağlayan ak madde köprüsüdür.",
            "E": "Yanlış. Medulla spinalis omuriliktir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 8 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_6",
        "question": "Prefrontal Korteks (PFC) ve Medial Prefrontal Korteks'in (mPFC) stres regülasyonundaki temel işlevi ders slaytlarında nasıl açıklanmıştır?",
        "options": [
            "A) Yalnızca melatonin hormonu salgılamak",
            "B) Bilişsel kontrol, karar verme ve duygu regülasyonunu sağlamak; hipotalamik ve beyin sapı stres yolaklarını yukarıdan aşağıya (top-down) denetlemek",
            "C) Amigdalanın tüm korku tepkilerini kontrolsüzce şiddetlendirmek",
            "D) Kalp kasının kasılma gücünü doğrudan ayarlamak",
            "E) Gözün retina tabakasında ışığı algılamak"
        ],
        "correct": 1,
        "explanation": "Slayt 8 ve 9: Prefrontal korteks bilişsel kontrol, karar verme ve duygu regülasyonunda rol oynar; kronik stres altında işlevi baskılanabilir. mPFC ise hipotalamik ve beyin sapı stres tepkilerinin limbik regülasyonuna (amigdala inhibisyonuna) katılır.",
        "optionAnalysis": {
            "A": "Yanlış. Melatonini epifiz bezi salgılar.",
            "B": "DOĞRU. Slayt 8 ve 9: Bilişsel kontrol, karar verme, duygu regülasyonu ve limbik stres yolaklarının inhibisyonunu sağlar.",
            "C": "Yanlış. PFC korkuyu şiddetlendirmez, normalde korku tepkilerini frenler.",
            "D": "Yanlış. Kalp kasılmasını otonom sistem ve kardiyak merkezler yönetir.",
            "E": "Yanlış. Görme duyusu ile ilgili ilgisiz bir maddedir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 8, 9 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_7",
        "question": "Bellek ile doğrudan ilişkili olan, kortizole aşırı duyarlı bulunan ve uzamış/kronik stres altında hacim kaybına (atrofi) uğradığı saptanan beyin bölgesi hangisidir?",
        "options": [
            "A) Hipokampus",
            "B) Pons",
            "C) Oksipital korteks",
            "D) Talamus nükleusu",
            "E) Ön hipofiz"
        ],
        "correct": 0,
        "explanation": "Slayt 9: 'Hippocampus: It is associated with memory. It is sensitive to cortisol. Prolonged stress can lead to a loss of volume in this region. Connects stress regulation with memory and contextual information.'",
        "optionAnalysis": {
            "A": "DOĞRU. Hipokampus açık bellek ve bağlamdan sorumludur, kortizole çok duyarlıdır ve kronik streste hacim kaybeder.",
            "B": "Yanlış. Pons beyin sapı köprüsüdür.",
            "C": "Yanlış. Oksipital korteks görme ile ilgilidir.",
            "D": "Yanlış. Talamus duyusal röle istasyonudur.",
            "E": "Yanlış. Hipofiz endokrin bir bezdir, bellek merkezi değildir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 9 & O’Doherty et al. (2015)"
    },
    {
        "id": "q3_8",
        "question": "Beynin stres tepkilerini yöneten ağları (networks) hakkında slaytlarda vurgulanan 'Key idea' (Temel Fikir) nedir?",
        "options": [
            "A) Beyin bölgeleri birbirinden tamamen yalıtılmış ve bağımsız çalışan kutucuklardır.",
            "B) Stres tepkisi katı ve değişmez tek bir 'savaş ya da kaç' kalıbından ibarettir.",
            "C) Bu bölgeler izole merkezler değil, birbirine bağlı ağlar (interconnected networks) olarak çalışır; bellek ve ödül devreleriyle örtüşerek yanıtı geçmiş deneyim ve bağlama göre uyarlar.",
            "D) Stres esnasında insan beyni tüm işlevlerini tamamen durdurur.",
            "E) Otonom sistem ile HPA ekseni arasında hiçbir bağlantı yoktur."
        ],
        "correct": 2,
        "explanation": "Slayt 9, 11 ve 12: Beyin bölgeleri izole merkezler değil, birbirine bağlı ağlar (interconnected networks) halinde çalışır. Stres yanıtı katı tekdüze bir refleks değildir; stresörün şiddetine, türüne, değerlendirmeye ve geçmiş deneyime göre dinamik olarak ayarlanır.",
        "optionAnalysis": {
            "A": "Yanlış. Slayt 9 açıkça izole merkezler olmadığını belirtir.",
            "B": "Yanlış. Slayt 11: 'The response is not a fixed fight-or-flight pattern.' (Sabit tek bir kalıp değildir).",
            "C": "DOĞRU. Birbirine bağlı nöral ağlar olarak bellek ve bağlamla entegre çalışır.",
            "D": "Yanlış. Beyin alarm durumunda olağanüstü aktif ve entegre çalışır.",
            "E": "Yanlış. İki sistem yakından bağlantılıdır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 9, 11, 12 & Ulrich-Lai & Herman (2009)"
    },
    {
        "id": "q3_9",
        "question": "DSM-5-TR tanı çerçevesine göre Akut Stres Bozukluğu (ASB) teşhisi koyabilmek için travma sonrası belirtilerin süresi ve semptom eşiği ne olmalıdır?",
        "options": [
            "A) Belirtiler en az 3 gün ile en fazla 1 ay sürmeli; 14 belirtiden en az 9'u bulunmalıdır.",
            "B) Belirtiler en az 6 ay sürmeli; 20 belirtinin tamamı bulunmalıdır.",
            "C) Belirtiler sadece ilk 2 saat içinde görülüp tamamen kaybolmalıdır.",
            "D) Yalnızca tek bir belirti olması ve en az 1 yıl sürmesi şarttır.",
            "E) Belirtilerin süresi en az 3 yıl olmalıdır."
        ],
        "correct": 0,
        "explanation": "Slayt 16: DSM-5-TR ASB kriterleri: 1) Kriter A travmatik maruziyet, 2) Semptom süresi: Travmadan sonra en az 3 gün ile en fazla 1 ay arası, 3) 14 semptomdan en az 9'unun (olumsuz duygu, disosiasyon, kaçınma, uyarılma, intruzyon alanlarından herhangi bir kombinasyonla) bulunması.",
        "optionAnalysis": {
            "A": "DOĞRU. DSM-5-TR ASB kuralı: 3 gün - 1 ay arası süre ve 14 belirtiden en az 9'u.",
            "B": "Yanlış. 6 ay ASB için değil, kronikleşmiş TSSB veya gecikmeli başlangıç için geçerlidir.",
            "C": "Yanlış. İlk 2 saatteki geçici şok tablosu ASB tanısı için yeterli süre değildir (en az 3 gün sürmelidir).",
            "D": "Yanlış. En az 9 belirti aranır.",
            "E": "Yanlış. 3 yıl kronik TSSB'dir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 16 & APA DSM-5-TR (2022)"
    },
    {
        "id": "q3_10",
        "question": "DSM-IV'ten DSM-5'e geçişte Akut Stres Bozukluğu (ASB) tanı kriterlerinde yapılan EN ÖNEMLİ değişiklik aşağıdakilerden hangisidir?",
        "options": [
            "A) ASB tanısı tamamen kaldırılmış ve yerine şizofreni konulmuştur.",
            "B) Disosiasyon (dissociation) semptomlarının artık ZORUNLU bir kriter olmaktan çıkarılması",
            "C) Travma kriterinin tamamen metinden silinmesi",
            "D) Tanı koymak için hastanın komada olmasının şart koşulması",
            "E) Semptom süresinin 5 yıla uzatılması"
        ],
        "correct": 1,
        "explanation": "Slayt 17: 'DSM-5: Dissociation is no longer a required criterion. Nine of the 14 symptoms and a time window of 3 days to 1 month were introduced.' DSM-IV'te ASB tanısı için disosiasyon şarttı; DSM-5 bu zorunluluğu kaldırarak 14 belirtiden herhangi 9'unun varlığını yeterli görmüştür.",
        "optionAnalysis": {
            "A": "Yanlış. ASB bağımsız bir travma tanısı olarak korunmuştur.",
            "B": "DOĞRU. En kritik değişim: Disosiasyonun zorunlu kriter olmaktan çıkarılmasıdır.",
            "C": "Yanlış. Travmatik maruziyet (Kriter A) temel ön koşul olarak devam eder.",
            "D": "Yanlış. Koma tıbbi acildir, psikiyatrik tanı şartı değildir.",
            "E": "Yanlış. Süre 3 gün - 1 ay olarak netleştirilmiştir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 17 & Bryant (2011)"
    },
    {
        "id": "q3_11",
        "question": "Akut Stres Bozukluğu (ASB) ile TSSB ilişkisi konusunda klinik gerçekliği en doğru özetleyen ifade hangisidir?",
        "options": [
            "A) ASB tanısı alan herkes istisnasız ömür boyu TSSB hastası kalır.",
            "B) ASB, TSSB için güçlü bir risk faktörüdür; ancak ASB tanısı almayanlarda da TSSB gelişebilir ve ASB tanısı alanların bir kısmı tamamen iyileşebilir.",
            "C) ASB geçiren birinde TSSB gelişmesi biyolojik olarak yasaktır.",
            "D) TSSB yalnızca ASB geçirenlerde görülür, başka hiçbir yolla başlayamaz.",
            "E) ASB ve TSSB tamamen aynı günde başlar ve aynı gün biter."
        ],
        "correct": 1,
        "explanation": "Slayt 19: 'ASD is a risk factor for PTSD. PTSD can develop even in people without ASD; however, some of those diagnosed with ASD go on to recover.'",
        "optionAnalysis": {
            "A": "Yanlış. ASB tanısı alanların bir kısmı kendiliğinden veya destekle iyileşir.",
            "B": "DOĞRU. Slayt 19'daki klinik denge: ASB güçlü bir risk faktörüdür ama ASB olmadan da TSSB gelişebilir, ASB olanların bir kısmı da iyileşir.",
            "C": "Yanlış. ASB'den TSSB'ye geçiş sık görülen bir klinik gidişattır.",
            "D": "Yanlış. Birey ilk ayda ASB eşiğini aşmayıp sonradan alevlenen TSSB geliştirebilir.",
            "E": "Yanlış. Biri ilk ayda, diğeri 1 aydan sonra tanımlanır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 19 & Bryant (2011)"
    },
    {
        "id": "q3_12",
        "question": "Tarihçi Herodotus'un antik çağ savaşlarına dair aktardığı ve travma tarihinde fiziksel bir yara almadan ortaya çıkan duyusal işlev kaybına ilk örneklerden sayılan vaka hangisidir?",
        "options": [
            "A) Maraton Savaşı'nda arkadaşının öldürülmesine tanık olan bir askerin aniden kör olması",
            "B) Truva Savaşı'nda bir askerin kılıçla kolunun kesilmesi",
            "C) Sparta'da bir askerin yemek yedikten sonra uyuyakalması",
            "D) Roma İmparatoru'nun ata binerken düşüp bacağını kırması",
            "E) Mısır piramitlerini inşa eden bir işçinin susuz kalması"
        ],
        "correct": 0,
        "explanation": "Slayt 20: 'Herodotus recounts that the person who witnessed his friend’s death was blind.' Arkadaşının ölümüne tanık olan askerin hiçbir fiziksel göz travması olmaksızın kör olması (psikojenik körlük), travmanın bedensel duyular üzerindeki erken tarihsel kaydıdır.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 20'de Herodotus'un aktardığı vaka: Arkadaşının ölümüne tanık olup kör olan asker vakasıdır.",
            "B": "Yanlış. Fiziksel amputasyon travmasıdır, psikojenik işlev kaybı değildir.",
            "C": "Yanlış. Sıradan fizyolojik bir durumdur.",
            "D": "Yanlış. Ortopedik bir yaralanmadır.",
            "E": "Yanlış. Dehidrasyondur."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 20"
    },
    {
        "id": "q3_13",
        "question": "1666 Büyük Londra Yangını'ndan kurtulan ünlü günlük yazarı Samuel Pepys'in kayıtları, travma semptomlarından hangisinin tarihteki en canlı erken tasviridir?",
        "options": [
            "A) Olayı anında unutup hiçbir şey hatırlamaması",
            "B) Aylar sonra bile uykuya dalamama, rüyalarında sürekli alevler görme, dehşetle uyanma ve en ufak duman kokusu ya da çıtırtıda panikleme (gecikmiş intruzyon ve tetikte olma)",
            "C) Yangından sonra hemen itfaiyeci olmaya karar vermesi",
            "D) Olayın ardından konuşma yeteneğini sonsuza dek kaybetmesi",
            "E) Londra yangınını kendisinin başlattığı hezeyanı"
        ],
        "correct": 1,
        "explanation": "Slayt 20: Samuel Pepys, 1666 Büyük Londra Yangını'ndan aylar sonra bile geceleri uyuyamadığını, rüyalarında sürekli alevler gördüğünü, dehşet içinde uyandığını ve en ufak duman kokusunda paniklediğini günlüklerinde yazmıştır (intruzyon, kabuslar, koku ile tetiklenme).",
        "optionAnalysis": {
            "A": "Yanlış. Anıları unutmamış, tam tersine istemsizce zihnine hücum etmiştir.",
            "B": "DOĞRU. Slayt 20 metninde birebir anlatılan semptomlar: Kabuslar, uyuyamama, duman kokusu ve çıtırtıyla panikleme.",
            "C": "Yanlış. Pepys donanma yöneticisi ve bürokrattır.",
            "D": "Yanlış. Günlük tutmaya ve konuşmaya devam etmiştir.",
            "E": "Yanlış. Psikotik bir hezeyan değil, otantik travmatik yeniden yaşantılamadır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 20"
    },
    {
        "id": "q3_14",
        "question": "19. yüzyıl Sanayi Devrimi sırasında tren kazalarından fiziksel yara almadan kurtulan yolcuların aylarca yoğun korku, çarpıntı ve felç benzeri duyumlar yaşaması tıp tarihinde hangi isimle tartışılmıştır?",
        "options": [
            "A) Demiryolu Omurgası (Railway Spine) veya Erichsen Hastalığı",
            "B) Asker Kalbi Sendromu",
            "C) Buhar Kazanı Alerjisi",
            "D) Ray Kanseri",
            "E) Kronik Yorgunluk Sendromu"
        ],
        "correct": 0,
        "explanation": "Slayt 21: 'The Industrial Revolution and the 'Railway Spine' or Erichsen’s Disease.' Tren kazalarından fiziksel hasarsız çıkanların yaşadığı bu tablo, travmanın sinir sistemi üzerindeki etkilerinin tarihteki ilk kurumsal tartışması olmuştur.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 21: 'Railway Spine' veya 'Erichsen's Disease' olarak adlandırılmıştır.",
            "B": "Yanlış. Da Costa sendromu ile karıştırılmamalıdır.",
            "C": "Yanlış. Kurgusal bir terimdir.",
            "D": "Yanlış. Onkolojik bir durum değildir.",
            "E": "Yanlış. Modern bir immünolojik tanı adıdır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 21"
    },
    {
        "id": "q3_15",
        "question": "Travma Sonrası Stres Bozukluğu (TSSB) kavramı Amerikan Psikiyatri Birliği'nin tanı el kitabına (DSM) İLK KEZ hangi yılda ve hangi sürümde resmi bir bozukluk olarak girmiştir?",
        "options": [
            "A) 1952 - DSM-I",
            "B) 1968 - DSM-II",
            "C) 1980 - DSM-III",
            "D) 1994 - DSM-IV",
            "E) 2013 - DSM-5"
        ],
        "correct": 2,
        "explanation": "Slayt 22: 'In 1980, Post-Traumatic Stress Disorder (PTSD) was officially recognized as a disorder in the DSM-III (Diagnostic and Statistical Manual of Mental Disorders).' Vietnam gazilerinin ve sivil hareketlerin savunuculuğu bu kabulde kilit rol oynamıştır.",
        "optionAnalysis": {
            "A": "Yanlış. DSM-I'de (1952) 'Gross Stress Reaction' adı kullanılıyordu.",
            "B": "Yanlış. DSM-II'de (1968) 'Transient Situational Disturbance' vardı.",
            "C": "DOĞRU. TSSB (PTSD) resmi bir tanı olarak ilk kez 1980 yılında DSM-III'te yer almıştır.",
            "D": "Yanlış. DSM-IV 1994'tedir (ASB ilk kez eklenmiştir).",
            "E": "Yanlış. DSM-5 2013'tedir."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 22 & US National Center for PTSD"
    },
    {
        "id": "q3_16",
        "question": "DSM-5-TR ile Dünya Sağlık Örgütü'nün ICD-11 tanı sistemlerinin TSSB'ye yaklaşımları arasındaki temel fark nedir?",
        "options": [
            "A) DSM-5-TR TSSB'yi 4 geniş semptom kümesiyle tanımlarken; ICD-11 daha dar 3 çekirdek belirti (yeniden yaşantılama, kaçınma, tehdit hissi) ve ek olarak bağımsız bir 'Kompleks TSSB' tanısı tanımlar.",
            "B) ICD-11 travmayı tamamen bir enfeksiyon hastalığı olarak sınıflandırır.",
            "C) DSM-5-TR yalnızca erkeklere, ICD-11 ise yalnızca kadınlara teşhis koyar.",
            "D) İki kılavuz kelimesi kelimesine birbiriyle tamamen aynıdır.",
            "E) DSM-5-TR'de hiçbir semptom kümesi bulunmaz."
        ],
        "correct": 0,
        "explanation": "Slayt 23: DSM-5-TR 4 belirti kümesi ve geniş bir semptom listesi kullanır; disosiyatif belirtileri alt tip olarak tanımlar. ICD-11 ise daha dar 3 çekirdek semptom belirler ve ek olarak 'Kompleks TSSB'yi (duygu regülasyonu, benlik algısı ve ilişki sorunları içeren) bağımsız bir tanı olarak tanımlar.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 23'teki açık karşılaştırma: DSM-5-TR 4 geniş küme; ICD-11 ise 3 dar çekirdek belirti + ayrı Kompleks TSSB tanısı kullanır.",
            "B": "Yanlış. Enfeksiyon değil, ruhsal bozukluktur.",
            "C": "Yanlış. Cinsiyet ayrımı yoktur.",
            "D": "Yanlış. İki nozoloji arasında belirgin felsefe ve kriter farkı vardır.",
            "E": "Yanlış. DSM-5-TR 4 küme tanımlar (B, C, D, E)."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 23 & APA (2022); WHO (2024)"
    },
    {
        "id": "q3_17",
        "question": "DSM-IV'ten DSM-5'e geçerken TSSB Kriter A (maruziyet) koşullarında yapılan kritik ekleme/güncelleme aşağıdakilerden hangisidir?",
        "options": [
            "A) Televizyonda haber izleyen herkesin Kriter A'yı otomatik olarak karşılayacağı kuralı",
            "B) Mesleki görev icabı travmatik ayrıntılara aşırı ya da tekrarlayıcı maruz kalmanın (elektronik medya hariç tutularak) Kriter A'ya açıkça dahil edilmesi",
            "C) Doğrudan maruz kalmanın kriterlerden tamamen çıkarılması",
            "D) Yalnızca 18 yaşından küçüklerin travmatize olabileceği kuralı",
            "E) Kaza sonucu ölümlerin kriter dışı bırakılması"
        ],
        "correct": 1,
        "explanation": "Slayt 24: 'Criterion A was expanded to include repeated or extreme exposure to aversive details of traumatic events, typically in the course of professional duties. This does not include exposure through electronic media unless it is work-related.'",
        "optionAnalysis": {
            "A": "Yanlış. Medyadan izleme iş ile ilgili değilse açıkça KAPSAM DIŞI bırakılmıştır.",
            "B": "DOĞRU. Mesleki görev gereği travmatik detaylara maruziyet (ilk müdahale, polis vb.) DSM-5'te Kriter A'ya resmen eklenmiştir.",
            "C": "Yanlış. Doğrudan maruziyet Kriter A'nın en temel birinci maddesidir.",
            "D": "Yanlış. Yaş sınırı yoktur.",
            "E": "Yanlış. Yakınların kaza sonucu ölümü Kriter A'da açıkça yer alır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 24 & DSM-5-TR (2022)"
    },
    {
        "id": "q3_18",
        "question": "DSM-5'te TSSB semptom kümelerine eklenen ve travmanın bireyin zihinsel dünyası ile duygu durumunda yarattığı kalıcı bozulmayı temsil eden YENİ ve AYRI semptom kümesi hangisidir?",
        "options": [
            "A) Biliş ve Duygudurumda Kalıcı Olumsuz Değişiklikler (Persistent negative alterations in cognition and mood)",
            "B) İntrüzyon (Yeniden Yaşantılama)",
            "C) Kaçınma Davranışları",
            "D) Uyarılma ve Tepkisellik",
            "E) Uyku Apnesi Sendromu"
        ],
        "correct": 0,
        "explanation": "Slayt 25: 'Persistent negative alterations in cognition and mood were introduced as a distinct symptom cluster.' DSM-IV'te duygusal uyuşma kaçınma kümesinin içindeydi; DSM-5'te bilişsel ve duygusal bozulmalar (suçluluk, yabancılaşma, anhedoni vb.) bağımsız bir küme (Kriter D) haline getirilmiştir.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 25: Biliş ve duygudurumda olumsuz değişiklikler ayrı ve bağımsız bir küme olarak eklenmiştir.",
            "B": "Yanlış. İntrüzyon DSM-III ve DSM-IV'te de zaten vardı.",
            "C": "Yanlış. Kaçınma önceki sürümlerde de vardı.",
            "D": "Yanlış. Uyarılma kümesi zaten mevcuttu.",
            "E": "Yanlış. Uyku apnesi göğüs hastalıkları tanısıdır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 25 & DSM-5-TR (2022)"
    },
    {
        "id": "q3_19",
        "question": "TSSB tanısı almış bireylerde intihar girişimi (suicide attempt) riski genel topluma kıyasla yaklaşık kaç kat daha yüksektir?",
        "options": [
            "A) Risk aynıdır, hiçbir fark yoktur (1 kat)",
            "B) Yaklaşık 4 kat daha yüksektir",
            "C) Yaklaşık 100 kat daha düşüktür",
            "D) TSSB olan kişiler hiçbir zaman intihar düşüncesi yaşamazlar",
            "E) Yalnızca %0.1 oranında bir artış vardır"
        ],
        "correct": 1,
        "explanation": "Slayt 26: 'People with PTSD may have approximately four times the risk of a suicide attempt compared with the general population.' Bu veri, TSSB'nin erken tanısının ve tedavisinin hayati önemini ortaya koymaktadır.",
        "optionAnalysis": {
            "A": "Yanlış. Risk belirgin derecede artmıştır.",
            "B": "DOĞRU. Slayt 26 verisi: Genel topluma kıyasla intihar girişimi riski yaklaşık 4 kat daha yüksektir.",
            "C": "Yanlış. Risk düşük değil, oldukça yüksektir.",
            "D": "Yanlış. TSSB intihar riski en yüksek psikiyatrik tablolardandır.",
            "E": "Yanlış. %0.1 ihmal edilebilir bir orandır, gerçek risk 4 kattır."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 26"
    },
    {
        "id": "q3_20",
        "question": "TSSB'nin resmi olarak tanımlanmasının ve tıbbi bir tanı haline gelmesinin sağladığı en önemli toplumsal ve klinik kazanımlardan biri slaytlarda nasıl vurgulanmıştır?",
        "options": [
            "A) Savaş ve şiddet sonrasında yaşanan semptomların 'kişisel zayıflık' veya korkaklık olarak yorumlanmasını engellemiştir.",
            "B) Tüm savaşların dünya üzerinden tamamen silinmesini sağlamıştır.",
            "C) İnsanların artık hiçbir üzüntü yaşamamasını sağlamıştır.",
            "D) Yargıçların ceza davalarında ceza vermesini yasaklamıştır.",
            "E) Bireyin tüm kimliğini yalnızca bu tanıdan ibaret kılmıştır."
        ],
        "correct": 0,
        "explanation": "Slayt 27: 'It provides a common clinical language... It has prevented symptoms experienced after war and violence from being interpreted as personal weakness.' (Savaş ve şiddet sonrası yaşanan semptomların kişisel zayıflık olarak yorumlanmasını önlemiştir).",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 27'deki temel insani vurgu: Travma semptomlarının karakter zayıflığı veya korkaklık değil, meşru bir tıbbi/psikolojik tablo olduğunun kabul edilmesidir.",
            "B": "Yanlış. Tanı koymak savaşları durdurmamıştır.",
            "C": "Yanlış. Üzüntü insan doğasının parçasıdır.",
            "D": "Yanlış. Adli süreçler için tanı rehberdir ancak cezayı yasaklamaz.",
            "E": "Yanlış. Slayt 27 açıkça uyarır: 'The diagnosis is not the cause of the person's identity' (Tanı kişinin tüm kimliği değildir)."
        },
        "sourceRef": "ABUtrauma4.pptx, Slayt 27"
    }
]

content = "// ==========================================================================\n"
content += "// PSYC 4115: The Psychology of Trauma - KAYNAK 3 ÇOKTAN SEÇMELİ TESTİ (20 SORU)\n"
content += "// Kaynak: ABUtrauma4.pptx (Hafta 4)\n"
content += "// ==========================================================================\n\n"
content += "const QUESTIONS_SOURCE3 = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

with open("js/data_q3.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/data_q3.js with {len(questions)} questions successfully!")
