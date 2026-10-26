// ==========================================================================
// PSYC 4115: The Psychology of Trauma - İNTERAKTİF BİLGİ KARTLARI (FLASHCARDS)
// 60 Adet Yüksek Kazanımlı Akıllı Ezber Kartı
// ==========================================================================

const FLASHCARDS_DATA = {
  source1: [
    {
      id: "fc1_1",
      front: "DSM-5-TR Kriter A'ya göre bir olayın travmatik sayılabilmesi için gereken temel nesnel koşul nedir?",
      back: "Gerçek ya da tehdit edici ölüm, ciddi yaralanma veya cinsel şiddete maruz kalmadır. Sıradan hayal kırıklıkları, boşanma veya iflas Kriter A sayılmaz.",
      category: "Kriter A",
      difficulty: "Kolay",
      slideRef: "ABUtrauma1ve2, Slayt 11"
    },
    {
      id: "fc1_2",
      front: "Kriter A kapsamında travmaya maruz kalmanın 4 resmi yolu nelerdir?",
      back: "1) Doğrudan yaşama\n2) Bizzat tanık olma\n3) Yakın birinin başına şiddet/kaza sonucu geldiğini öğrenme\n4) Mesleki görev icabı travmatik detaylara aşırı/tekrarlı maruz kalma.",
      category: "Kriter A",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 11"
    },
    {
      id: "fc1_3",
      front: "Televizyon ve elektronik medyadan travma haberlerini izlemek DSM-5-TR Kriter A sayılır mı?",
      back: "HAYIR. Sıradan vatandaşların medyadan izlemesi Kriter A dışındadır; yalnızca ilk müdahale personeli, polis veya adli tıp gibi mesleki görev icabı maruziyetler sayılır.",
      category: "Kriter A İstisnası",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 16"
    },
    {
      id: "fc1_4",
      front: "Ozer ve arkadaşları (2003) travma sonrası 'öncesi ve sonrası' (before and after) hissi hakkında ne belirtmiştir?",
      back: "Kişinin güvenlik ve öngörülebilirlik algısının bozulmasıyla ortaya çıkan olası bir öznel deneyimdir; ancak evrensel bir kural veya zorunlu tanı ölçütü değildir.",
      category: "Peritravmatik Tepki",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 12"
    },
    {
      id: "fc1_5",
      front: "'Büyük T' (Big T) ve 'Küçük t' (little t) kavramlarının DSM-5-TR'deki yeri nedir?",
      back: "Bunlar gayriresmi (informal) jargondur; DSM-5-TR'de resmi bir tanı kategorisi DEĞİLDİR. Ancak Kriter A dışındaki adversiteler de ruh sağlığını ağır bozabilir.",
      category: "Kavramsal Ayrım",
      difficulty: "Kolay",
      slideRef: "ABUtrauma1ve2, Slayt 13"
    },
    {
      id: "fc1_6",
      front: "Kolektif Travma (Collective Trauma) nedir ve en yüksek TSSB riski hangi travma türünde görülür?",
      back: "Grupları ve halkları etkileyen, paylaşılan hafıza ve kimliği şekillendiren kitlesel travmalardır (savaş, soykırım, göç). Kişilerarası kasıtlı şiddet doğal afetlere kıyasla daha yüksek TSSB riski doğurur.",
      category: "Kolektif Travma",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 14-15"
    },
    {
      id: "fc1_7",
      front: "İkincil Travmatik Stres (Secondary Traumatic Stress - STS) kime denir?",
      back: "Travma mağdurlarıyla çalışan veya travmatik ayrıntılara mesleki olarak dolaylı maruz kalan uzmanlarda (terapistler, acil hekimleri) birincil travmaya benzer belirtilerin görülmesidir.",
      category: "İkincil Travma",
      difficulty: "Kolay",
      slideRef: "ABUtrauma1ve2, Slayt 16"
    },
    {
      id: "fc1_8",
      front: "Merhamet Yorgunluğu'nun (Compassion Fatigue) en tipik 4 belirtisi nedir?",
      back: "1) Duygusal tükenmişlik veya duyarsızlaşma\n2) İrritabilite ve sabırsızlık\n3) İnsanlardan ve meslekten geri çekilme\n4) Uyku bozukluğu ve somatik gerginlik.",
      category: "Merhamet Yorgunluğu",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 17"
    },
    {
      id: "fc1_9",
      front: "Kompleks TSSB (CPTSD) hangi kılavuzda resmi bir tanıdır ve hangi ek kümesi vardır?",
      back: "Dünya Sağlık Örgütü'nün ICD-11 kılavuzunda resmi bir tanıdır. Çekirdek TSSB'ye ek olarak 'Kendilik Örgütlenmesinde Bozulma' (DSO: duygu regülasyonu, olumsuz benlik, ilişki güçlüğü) triadı içerir.",
      category: "ICD-11 Kompleks TSSB",
      difficulty: "Zor",
      slideRef: "ABUtrauma1ve2, Slayt 18"
    },
    {
      id: "fc1_10",
      front: "McLaughlin & Sheridan'ın modelinde 'Tehdit' (Threat) ve 'Yoksunluk' (Deprivation) farkı nedir?",
      back: "Tehdit: Fiziksel/cinsel istismar ve şiddeti kapsar, amigdala ve korku devrelerini bozar.\nYoksunluk: İhmal ve uyarım eksikliğidir, kortikal kalınlık ve bilişsel gelişimi baskılar.",
      category: "Çocukluk Modeli",
      difficulty: "Zor",
      slideRef: "ABUtrauma1ve2, Slayt 19-20"
    },
    {
      id: "fc1_11",
      front: "McLaughlin & Sheridan modelindeki 'Öngörülemezlik/Kararsızlık' (Unpredictability) boyutu neyi ifade eder?",
      back: "Bakım verenlerin sık sık değişmesi, ev ortamındaki öngörülemezlik ve istikrarsız/kaotik aile ortamlarını ifade eder.",
      category: "Çocukluk Modeli",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 20"
    },
    {
      id: "fc1_12",
      front: "TSSB'nin klasik nörobiyolojik triadı nedir?",
      back: "1) Amigdala hiperaktivitesi (aşırı tehdit algısı)\n2) Hipokampus hacim küçülmesi (bağlamsal bellek bozukluğu)\n3) Medial Prefrontal Korteks hipoaktivitesi (yetersiz yukarıdan-aşağıya inhibisyon).",
      category: "Nörobiyoloji",
      difficulty: "Zor",
      slideRef: "ABUtrauma1ve2, Slayt 21"
    },
    {
      id: "fc1_13",
      front: "Travma Sonrası Büyüme (PTG) bir zorunluluk mudur ve acıyla bir arada bulunabilir mi?",
      back: "Büyüme zorunlu bir sonuç değil, yalnızca bir olasılıktır. En önemlisi; psikolojik acı ve TSSB belirtileriyle AYNI ANDA bir arada (co-exist) bulunabilir.",
      category: "Büyüme (PTG)",
      difficulty: "Orta",
      slideRef: "ABUtrauma1ve2, Slayt 22"
    },
    {
      id: "fc1_14",
      front: "1. Dünya Savaşı'nda siperlerdeki patlamalara verilen ad nedir?",
      back: "'Shell Shock' (Mermi Şoku). 2. Dünya Savaşı'nda 'War Neurosis', DSM-I'de 'Gross Stress Reaction', DSM-III'te ise ilk kez 'PTSD' adını almıştır.",
      category: "Tarihçe",
      difficulty: "Kolay",
      slideRef: "ABUtrauma1ve2, Slayt 24"
    },
    {
      id: "fc1_15",
      front: "TSSB ilk kez hangi yıl ve hangi DSM sürümünde resmi bir tanı olmuştur?",
      back: "1980 yılında DSM-III'te (üçüncü baskı) resmen tanınmıştır.",
      category: "Tarihçe",
      difficulty: "Kolay",
      slideRef: "ABUtrauma1ve2, Slayt 24"
    }
  ],

  source2: [
    {
      id: "fc2_1",
      front: "O'Leary ve arkadaşlarının (1998) tanımladığı 3 işlevsellik seyri nedir?",
      back: "1) Düşük işlevsellikte yaşamaya devam etme (kronik bozulma)\n2) Travma öncesi eski işlevsellik düzeyine geri dönme (rezilyans)\n3) İşlevsellikte travma öncesinin üzerine çıkma (travma sonrası büyüme / thriving).",
      category: "O'Leary Modeli",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 17"
    },
    {
      id: "fc2_2",
      front: "Akut Stres Bozukluğu (ASB) ile TSSB arasındaki en temel ayırıcı kriter nedir?",
      back: "SÜREDİR. Belirtiler travmadan sonra 3 gün ile 1 ay arasında sürüyorsa ASB; 1 aydan uzun süre devam ediyorsa TSSB tanısı düşünülür.",
      category: "ASB vs TSSB",
      difficulty: "Kolay",
      slideRef: "ABUtrauma3, Slayt 18"
    },
    {
      id: "fc2_3",
      front: "Keane ve arkadaşlarının (2006) trafik kazası çalışmasındaki kritik yüzde kaçtır?",
      back: "Erken dönemde Akut Stres Bozukluğu (ASB) tanısı alan kazazedelerin %83'ü ilerleyen süreçte TSSB tanısı almıştır. Bu oran ASB'nin güçlü prognostik değerini gösterir.",
      category: "Epidemiyoloji",
      difficulty: "Zor",
      slideRef: "ABUtrauma3, Slayt 18"
    },
    {
      id: "fc2_4",
      front: "Tedeschi & Calhoun'un (2004) Travma Sonrası Büyüme (PTG) tanımındaki temel felsefi ilke nedir?",
      back: "Varoluşçu psikolojideki 'Acının dönüştürücü gücü' (transformative power of suffering). Büyümeyi travmanın kendisi değil, travmayla varoluşsal mücadele süreci doğurur.",
      category: "PTG Teorisi",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 20"
    },
    {
      id: "fc2_5",
      front: "Travma Sonrası Büyümenin (PTG) 5 alt boyutu nelerdir?",
      back: "1) Benlik algısında değişim (içsel güç)\n2) Kişilerarası ilişkilerde değişim (yakın bağlar)\n3) Yaşam felsefesinde değişim (öncelikler)\n4) Yeni olanakları fark etme\n5) İnanç sisteminde / maneviyatta değişim.",
      category: "PTG 5 Boyut",
      difficulty: "Zor",
      slideRef: "ABUtrauma3, Slayt 21"
    },
    {
      id: "fc2_6",
      front: "Hijazi ve arkadaşlarının (2015) gaziler çalışmasında en yüksek çıkan boyut ve ilişkili yeti nedir?",
      back: "En yüksek puanı 'Yaşam felsefesinde değişim' almıştır (ölümle doğrudan yüzleşme nedeniyle). Büyümeyle en güçlü pozitif ilişkili zihinsel yeti ise 'Bilişsel Esneklik'tir (cognitive flexibility).",
      category: "Gaziler & Büyüme",
      difficulty: "Zor",
      slideRef: "ABUtrauma3, Slayt 23"
    },
    {
      id: "fc2_7",
      front: "En önemli Pre-travmatik (olay öncesi) risk faktörleri nelerdir?",
      back: "Kadın cinsiyet, düşük sosyoekonomik düzey (SES), düşük eğitim, ırksal/etnik azınlık mensubiyeti, ailede depresyon ya da psikiyatri öyküsü ve nörotisizm.",
      category: "Pre-travmatik Risk",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 22"
    },
    {
      id: "fc2_8",
      front: "En kritik Peritravmatik (olay sırası) risk faktörü nedir?",
      back: "Travmanın şiddeti, süresi ve özellikle 'Peritravmatik Disosiasyon' (olay esnasında bedeninden kopma, rüya gibi hissetme). Bu durum gelecekteki TSSB'nin en güçlü yordayıcılarındandır.",
      category: "Peritravmatik Risk",
      difficulty: "Zor",
      slideRef: "ABUtrauma3, Slayt 23"
    },
    {
      id: "fc2_9",
      front: "Travma sonrası iyileşmeyi en çok baltalayan Post-travmatik risk faktörü nedir?",
      back: "Sosyal destek eksikliği (Lack of social support), travma sonrası işsizlik/stresli yaşam ve tanı/tedavideki gecikmelerdir.",
      category: "Post-travmatik Risk",
      difficulty: "Kolay",
      slideRef: "ABUtrauma3, Slayt 24"
    },
    {
      id: "fc2_10",
      front: "Manove ve arkadaşlarının (2019) ekonomik destek paradoksu nedir?",
      back: "Düşük SES'li bireylere travma sonrasında yeterli ekonomik kaynak sağlandığında TSSB geliştirme/bildirme olasılıklarının arttığı saptanmıştır (kaynak stresi, farkındalık veya sağlık arayışı artışı).",
      category: "Ekonomik Paradoks",
      difficulty: "Zor",
      slideRef: "ABUtrauma3, Slayt 24"
    },
    {
      id: "fc2_11",
      front: "Steudte-Schmiedgen (2016) genel toplum travma maruziyet oranı kaçtır?",
      back: "Toplumun %41 ile %86'sı yaşamı boyunca en az bir potansiyel travmaya maruz kalır; fakat insanların büyük çoğunluğu psikopatoloji geliştirmeden iyileşir (rezilyans yaygındır).",
      category: "Epidemiyoloji",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 25"
    },
    {
      id: "fc2_12",
      front: "Afet sonrası yardım ve arama kurtarma ekiplerinde travma prevalansı (Kross 2008) ne kadardır?",
      back: "%30 ile %40 arasındadır. Destek personeli yüksek mesleki travma riski taşır.",
      category: "Epidemiyoloji",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 25"
    },
    {
      id: "fc2_13",
      front: "17 Ağustos Marmara Depremi sonrası toplum taraması vs tedaviye başvuranlar oranları (Öztürk 2015) nedir?",
      back: "Toplum taramalarında TSSB prevalansı yaklaşık %20 iken; psikiyatrik tedavi arayanlar arasında bu oran %63'e fırlamaktadır.",
      category: "Marmara Depremi",
      difficulty: "Zor",
      slideRef: "ABUtrauma3, Slayt 25"
    },
    {
      id: "fc2_14",
      front: "Yaş ile Travma Sonrası Büyüme (PTG) arasında nasıl bir korelasyon bildirilmektedir?",
      back: "Negatif korelasyon bildirilmektedir. Genç yetişkinler, inanç ve şemaları henüz esnek olduğu için kriz sonrasında daha yüksek büyüme puanları rapor edebilmektedir.",
      category: "Yaş & Büyüme",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 26"
    },
    {
      id: "fc2_15",
      front: "Shakespeare-Finch & Lurie-Beck (2014) bulgularına göre doğrudan maruziyet PTG'yi nasıl etkiler?",
      back: "Travmatik olaya doğrudan maruz kalmanın (direct exposure) travma sonrası büyüme olasılığını artırdığına dair güçlü kanıtlar bulunmuştur.",
      category: "Maruziyet & Büyüme",
      difficulty: "Orta",
      slideRef: "ABUtrauma3, Slayt 26"
    }
  ],

  source3: [
    {
      id: "fc3_1",
      front: "Sempatik Sinir Sistemi (SNS) uyarılınca sindirime ne olur?",
      back: "Sindirim HIZLANMAZ, TAM AKSİNE YAVAŞLAR ve durur! Enerji kaslara ve kalbe yönlendirilir.",
      category: "Otonom Sistem",
      difficulty: "Kolay",
      slideRef: "ABUtrauma4, Slayt 5"
    },
    {
      id: "fc3_2",
      front: "Parasempatik Sinir Sisteminin (PNS) vücuttaki 4 ana etkisi nedir?",
      back: "1) Kalp atışını yavaşlatır\n2) Solunumu sakinleştirir\n3) Sindirimi hızlandırır\n4) Göz bebeklerini küçültür (miyozis). Vücudu dengeye ve enerji tasarrufuna döndürür.",
      category: "Otonom Sistem",
      difficulty: "Kolay",
      slideRef: "ABUtrauma4, Slayt 6"
    },
    {
      id: "fc3_3",
      front: "HPA ekseninin 3 basamaklı hormonal kaskadı nasıldır?",
      back: "1) Hipotalamus → CRH salgılar\n2) Ön Hipofiz → ACTH salgılar\n3) Adrenal Korteks → KORTİZOL salgılar.",
      category: "HPA Ekseni",
      difficulty: "Orta",
      slideRef: "ABUtrauma4, Slayt 10"
    },
    {
      id: "fc3_4",
      front: "Kortizolün akut (kısa vadeli) vs kronik (uzun vadeli) farkı nedir?",
      back: "Kısa vadede enerji mobilizasyonu ve bağışıklık kontrolüyle uyum sağlayıcıdır (hayat kurtarır). Kronik evrede ise hipokampusu küçültür (nörotoksisite), bağışıklığı zayıflatır ve duygudurumu bozar.",
      category: "Kortizol",
      difficulty: "Orta",
      slideRef: "ABUtrauma4, Slayt 7"
    },
    {
      id: "fc3_5",
      front: "Amigdalanın stresteki temel işlevi nedir?",
      back: "Tehdit algısında ve hızlı duygusal tepkilerde kilit rol oynar; korku koşullanmasının ve alarm durumunun merkezidir. TSSB'de aşırı aktiftir (hiperaktif).",
      category: "Nöroanatomi",
      difficulty: "Kolay",
      slideRef: "ABUtrauma4, Slayt 8"
    },
    {
      id: "fc3_6",
      front: "Medial Prefrontal Korteksin (mPFC) amigdala üzerindeki etkisi nedir?",
      back: "Normalde amigdalayı yukarıdan aşağıya (top-down) inhibe ederek 'tehlike geçti, sakinleş' mesajı verir. TSSB'de mPFC yetersiz çalıştığı için bu fren bozulur (korku söndürme başarısızlığı).",
      category: "Nöroanatomi",
      difficulty: "Zor",
      slideRef: "ABUtrauma4, Slayt 8-9"
    },
    {
      id: "fc3_7",
      front: "Hipokampusun travmadaki rolü ve kortizol duyarlılığı nasıldır?",
      back: "Açık bellek ve bağlamsal bilgiyi kodlar. Glukokortikoid reseptörlerince zengindir; uzun süreli yüksek kortizol hacim kaybına (atrofi) yol açar, bu da travmanın 'şimdi değil geçmişte kaldığı' bağlamını ayırt etmeyi bozar.",
      category: "Nöroanatomi",
      difficulty: "Zor",
      slideRef: "ABUtrauma4, Slayt 9"
    },
    {
      id: "fc3_8",
      front: "DSM-5-TR'ye göre Akut Stres Bozukluğu (ASB) tanı kriteri kuralı nedir?",
      back: "Travmadan sonra 3 gün ile 1 ay arasında sürmeli; 5 alandan toplam 14 semptomdan EN AZ 9'UNUN bulunması gerekir.",
      category: "ASB Tanı Kriteri",
      difficulty: "Orta",
      slideRef: "ABUtrauma4, Slayt 16"
    },
    {
      id: "fc3_9",
      front: "DSM-IV'ten DSM-5'e geçişte ASB'de yapılan en devrimci değişiklik nedir?",
      back: "DİSOSİYASYON ARTIK ZORUNLU BİR KRİTER DEĞİLDİR! DSM-IV'te 3 disosiyatif belirti şarttı; DSM-5'te 14 belirtiden herhangi 9'unun varlığı yeterli kılınmıştır.",
      category: "Tanısal Değişim",
      difficulty: "Zor",
      slideRef: "ABUtrauma4, Slayt 17"
    },
    {
      id: "fc3_10",
      front: "Herodotus'un aktardığı antik travma vakası nedir?",
      back: "Maraton Savaşı'nda yanındaki arkadaşının ölümüne tanık olan bir askerin hiçbir fiziksel yara almadığı halde aniden kör olmasıdır (psikojenik körlük / konversiyon).",
      category: "Tarihçe",
      difficulty: "Orta",
      slideRef: "ABUtrauma4, Slayt 20"
    },
    {
      id: "fc3_11",
      front: "Samuel Pepys (1666) günlüklerinde neyi tasvir etmiştir?",
      back: "1666 Büyük Londra Yangını sonrası kabuslar, gece dehşetle uyanma, uykusuzluk ve duman kokusundan panikleme (gecikmiş intruzyon ve tetikte olma belirtilerini).",
      category: "Tarihçe",
      difficulty: "Orta",
      slideRef: "ABUtrauma4, Slayt 20"
    },
    {
      id: "fc3_12",
      front: "19. yüzyılda tren kazaları sonrası tartışılan 'Railway Spine' (Demiryolu Omurgası) nedir?",
      back: "Fiziksel yara almadan kurtulan yolcularda aylarca süren yoğun korku, çarpıntı ve felç duyumlarıdır. Travmanın sinir sistemine etkilerinin tarihteki ilk kurumsal tartışmasıdır.",
      category: "Tarihçe",
      difficulty: "Orta",
      slideRef: "ABUtrauma4, Slayt 21"
    },
    {
      id: "fc3_13",
      front: "DSM-5-TR ile ICD-11'in TSSB tanımlarındaki temel felsefe farkı nedir?",
      back: "DSM-5-TR: 4 geniş küme ve zengin semptom yelpazesi tanımlar.\nICD-11: 3 dar çekirdek belirti (burada-ve-şimdi yaşantılama, kaçınma, tehdit hissi) + ayrı Kompleks TSSB tanısı sunar.",
      category: "DSM vs ICD",
      difficulty: "Zor",
      slideRef: "ABUtrauma4, Slayt 23"
    },
    {
      id: "fc3_14",
      front: "TSSB hastalarında genel topluma kıyasla intihar girişimi riski kaç kat daha fazladır?",
      back: "Yaklaşık 4 KAT daha fazladır. Bu nedenle intihar riski öncelikli güvenlik değerlendirmesi gerektirir.",
      category: "Klinik Risk",
      difficulty: "Kolay",
      slideRef: "ABUtrauma4, Slayt 26"
    },
    {
      id: "fc3_15",
      front: "TSSB'de en güçlü kanıta sahip birinci basamak psikoterapötik yaklaşımlar hangileridir?",
      back: "Travma Odaklı Bilişsel Davranışçı Terapi (TF-CBT) ve Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme (EMDR).",
      category: "Tedavi",
      difficulty: "Kolay",
      slideRef: "ABUtrauma4, Slayt 28"
    }
  ],

  source4: [
    {
      id: "fc4_1",
      front: "DSM-5-TR Kriter B (İntrüzyon) için tanısal eşik nedir?",
      back: "Tanımlanan 5 belirtiden EN AZ 1 tanesinin varlığı zorunludur (anılar, kabuslar, flashbackler, psikolojik sıkıntı, fizyolojik reaktivite).",
      category: "Kriter B",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 3"
    },
    {
      id: "fc4_2",
      front: "DSM-5-TR Kriter C (Kaçınma) için tanısal eşik nedir?",
      back: "Tanımlanan 2 alandan (içsel anı/düşünce/duygulardan kaçınma veya dışsal insan/mekan/hatırlatıcılardan kaçınma) EN AZ 1'İ ya da her ikisi bulunmalıdır.",
      category: "Kriter C",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 5"
    },
    {
      id: "fc4_3",
      front: "DSM-5-TR Kriter D (Biliş ve Duygudurum) için tanısal eşik nedir?",
      back: "7 semptomdan EN AZ 2'sinin bulunması şarttır (amnezi, aşırı olumsuz inançlar, suçlama, olumsuz duygulanım, anhedoni, yabancılaşma, pozitif duygu eksikliği).",
      category: "Kriter D",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 6"
    },
    {
      id: "fc4_4",
      front: "DSM-5-TR Kriter E (Uyarılma ve Tepkisellik) için tanısal eşik nedir?",
      back: "6 semptomdan EN AZ 2'sinin bulunması şarttır (öfke patlamaları, pervasız/kendine zarar verici davranış, tetikte olma, irkilme, konsantrasyon sorunu, uyku bozukluğu).",
      category: "Kriter E",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 7"
    },
    {
      id: "fc4_5",
      front: "TSSB teşhisi için belirtilerin süresi (Kriter F) en az ne kadar olmalıdır?",
      back: "1 AYDAN UZUN sürmelidir. 1 aydan kısa süren belirtiler için Akut Stres Bozukluğu (ASB) veya uyum bozukluğu düşünülür.",
      category: "Kriter F (Süre)",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 8"
    },
    {
      id: "fc4_6",
      front: "TSSB Disosiyatif Alt Tipinde 'Depersonalizasyon' nedir?",
      back: "Kişinin kendi bedenine, zihnine veya benliğine dışarıdan bir seyirci gibi bakması, bedeninin gerçek dışı veya yabancı gelmesi, zamanın yavaşlaması hissidir.",
      category: "Disosiyasyon",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 9"
    },
    {
      id: "fc4_7",
      front: "TSSB Disosiyatif Alt Tipinde 'Derealizasyon' nedir?",
      back: "Kişinin etrafındaki çevrenin, nesnelerin veya insanların bir rüya, film şeridi veya sis perdesi gibi gerçek dışı veya yapay algılanmasıdır.",
      category: "Disosiyasyon",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 9"
    },
    {
      id: "fc4_8",
      front: "Peritravmatik Disosiyatif Deneyimler Ölçeği (PDEQ) neyi ölçer?",
      back: "Travmatik olayın cereyan ettiği anda ve hemen sonrasında yaşanan disosiasyonu (beden dışından izleme, gerçek dışılık, beden algısı bozulması) ölçer.",
      category: "PDEQ Ölçeği",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 12-14"
    },
    {
      id: "fc4_9",
      front: "Yaşam Olayları Listesi (LEC-5) klinik uygulamada neyi tarar?",
      back: "Bireyin yaşam boyu karşılaştığı 17 potansiyel travmatik olay türünü (afet, kaza, saldırı vb.) ve maruziyet düzeylerini (başıma geldi, tanık oldum, öğrendim, iş icabı) tarar.",
      category: "LEC-5 Ölçeği",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 15-17"
    },
    {
      id: "fc4_10",
      front: "Çocukluk Çağı Travmaları Anketi'nin (CTQ) 5 alt boyutu nelerdir?",
      back: "1) Duygusal İhmal\n2) Fiziksel İhmal\n3) Duygusal İstismar\n4) Fiziksel İstismar\n5) Cinsel İstismar.",
      category: "CTQ 5 Boyut",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 18-21"
    },
    {
      id: "fc4_11",
      front: "CTQ'da 'Yeterli yiyecek bulamıyordum' maddesi hangi alt boyuttadır?",
      back: "Fiziksel İhmal (Physical Neglect) boyutundadır.",
      category: "CTQ Maddeleri",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 18"
    },
    {
      id: "fc4_12",
      front: "CTQ'da 'Ailemde bana aptal, tembel denirdi' maddesi hangi alt boyuttadır?",
      back: "Duygusal İstismar (Emotional Abuse) boyutundadır.",
      category: "CTQ Maddeleri",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 19"
    },
    {
      id: "fc4_13",
      front: "CTQ'da 'Mükemmel bir çocukluğum vardı' maddesinin işlevi nedir?",
      back: "Testin geçerlik skalası olan 'Minimizasyon / İnkar' (Denial) kontrol maddesidir. Aşırı yüksek puan savunmacı inkarı gösterir.",
      category: "CTQ İnkar Skalası",
      difficulty: "Zor",
      slideRef: "ABUtrauma5, Slayt 22"
    },
    {
      id: "fc4_14",
      front: "TSSB tanısında klinisyen tarafından uygulanan 'ALTIN STANDART' araç hangisidir?",
      back: "CAPS-5 (Clinician-Administered PTSD Scale for DSM-5). Özbildirim altın standardı ise PCL-5'tir.",
      category: "Altın Standart",
      difficulty: "Kolay",
      slideRef: "ABUtrauma5, Slayt 23"
    },
    {
      id: "fc4_15",
      front: "Çocukluk Çağı Travmaları Anketi'nin (CTQ) Türkçe geçerlik çalışmasını kim yapmıştır?",
      back: "Prof. Dr. Vedat Şar ve ekibi (2012) tarafından Turkish Journal of Medical Sciences'ta yayımlanmıştır.",
      category: "Türkiye Uyarlaması",
      difficulty: "Orta",
      slideRef: "ABUtrauma5, Slayt 26"
    }
  ]
};
