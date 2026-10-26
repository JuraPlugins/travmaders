import json

questions = [
    {
        "id": "q2_1",
        "question": "O'Leary ve arkadaşları (1998) tarafından travmatik bir olay sonrasında bireylerin sergileyebileceği işlevsellik seyirleri (trajectories) arasında aşağıdakilerden hangisi YER ALMAZ?",
        "options": [
            "A) Düşük işlevsellikte yaşamaya devam etme (kronik bozulma)",
            "B) Travma öncesindeki eski işlevsellik düzeyine geri dönme (rezilyans/iyileşme)",
            "C) İşlevsellikte travma öncesi seviyenin de üzerine çıkma (travma sonrası büyüme / gelişme)",
            "D) Olay anında tüm anıların biyolojik olarak tamamen silinmesi ve bir daha hiç hatırlanamaması",
            "E) Travma öncesi temel düzeye zamanla adaptasyon sağlama"
        ],
        "correct": 3,
        "explanation": "O'Leary ve arkadaşları (1998) travma sonrası 3 temel işlevsellik seyri tanımlamıştır: 1) Düşük işlevsellikte yaşamaya devam etme, 2) Önceki işlevsellik düzeyine geri dönme, 3) İşlevsellikte artış (gelişme / büyüme). Anıların biyolojik olarak tamamen silinmesi bu modelin bir parçası değildir.",
        "optionAnalysis": {
            "A": "Modelde yer alır. Travma sonrası kronik işlev kaybıyla düşük düzeyde yaşamaya devam etmektir.",
            "B": "Modelde yer alır. Bireyin toparlanıp eski işlevsellik çizgisine geri dönmesidir (resilience).",
            "C": "Modelde yer alır. Bireyin eskisinden daha yüksek bir olgunluk ve işlevsellik düzeyine ulaşmasıdır (thriving/PTG).",
            "D": "DOĞRU CEVAP (Modelde yer almaz). Travma anılarının tamamen silinmesi biyolojik bir adaptasyon seyri olarak O'Leary modelinde bulunmaz.",
            "E": "Modelde yer alır. B seçeneğinde olduğu gibi temel düzeye dönmeyi ifade eder."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 17 & O'Leary et al. (1998)"
    },
    {
        "id": "q2_2",
        "question": "Akut Stres Bozukluğu (ASB) ile Travma Sonrası Stres Bozukluğu (TSSB) arasındaki en temel ve belirleyici klinik fark aşağıdakilerden hangisidir?",
        "options": [
            "A) ASB'de yalnızca fiziksel yaralanmaların olması, TSSB'de ise hiç fiziksel yara olmaması",
            "B) Belirtilerin süresi (ASB: 3 gün - 1 ay arası; TSSB: 1 aydan uzun süre)",
            "C) ASB'nin sadece çocuklarda, TSSB'nin ise sadece 50 yaş üstünde görülmesi",
            "D) ASB'de hiçbir zaman kaçınma belirtisinin görülmemesi",
            "E) TSSB'nin sadece ilaçla, ASB'nin ise sadece ameliyatla tedavi edilebilmesi"
        ],
        "correct": 1,
        "explanation": "Slayt 18'de vurgulandığı üzere: 'The most fundamental difference between ASD and PTSD is duration (3 days–1 month).' ASB belirtileri travmadan sonra 3 gün ile 1 ay arasında yaşanırken; belirtiler 1 ayı aştığında tablo TSSB tanısı kapsamına girer.",
        "optionAnalysis": {
            "A": "Yanlış. Her iki bozuklukta da fiziksel yaralanma olabilir veya olmayabilir.",
            "B": "DOĞRU. Slayt 18'deki açık ifade: En temel fark süredir (3 gün - 1 ay vs 1 aydan uzun).",
            "C": "Yanlış. Her iki bozukluk da her yaş grubunda görülebilir.",
            "D": "Yanlış. ASB'de de kaçınma belirtileri belirgin bir semptom alanıdır.",
            "E": "Yanlış. Tedavi modaliteleri cerrahi değildir; psikoterapi ve psikofarmakoloji kullanılır."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 18 & DSM-5-TR"
    },
    {
        "id": "q2_3",
        "question": "Keane ve arkadaşlarının (2006) trafik kazası geçiren bireylerle yaptığı önemli çalışmada, erken dönemde Akut Stres Bozukluğu (ASB) tanısı alan bireylerin yüzde kaçının daha sonra TSSB geliştirdiği tespit edilmiştir?",
        "options": [
            "A) %12",
            "B) %35",
            "C) %50",
            "D) %83",
            "E) %99"
        ],
        "correct": 3,
        "explanation": "Slayt 18: 'A study conducted with individuals who had been involved in traffic accidents indicates that 83% of those diagnosed with ASD were later diagnosed with PTSD (Keane et al., 2006).' Bu oran ASB'nin TSSB için ne denli güçlü bir erken uyarıcı risk faktörü olduğunu gösterir.",
        "optionAnalysis": {
            "A": "Yanlış. %12 çok düşüktür; ASB'nin prognostik gücünü yansıtmaz.",
            "B": "Yanlış. Kross ve arkadaşlarının arama kurtarma ekiplerinde bulduğu prevalans (%30-40) ile karıştırılmamalıdır.",
            "C": "Yanlış. Yarı yarıya bir oran değildir.",
            "D": "DOĞRU. Keane vd. (2006) çalışmasında trafik kazası sonrası ASB tanısı alanların %83'ü daha sonra TSSB geliştirmiştir.",
            "E": "Yanlış. Tıpta ve psikiyatride %99 gibi mutlak bir oran söz konusu değildir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 18 & Keane et al. (2006)"
    },
    {
        "id": "q2_4",
        "question": "Tedeschi ve Calhoun (2004) tarafından varoluşçu psikoloji çerçevesinde kavramsallaştırılan Travma Sonrası Büyüme (PTG), hangi temel felsefi ilke ile açıklanır?",
        "options": [
            "A) 'Koşulsuz itaat ve kadere boyun eğme'",
            "B) 'Acının dönüştürücü gücü' (Transformative power of suffering)",
            "C) 'Tüm acı verici anıları zihinden zorla silme sanatı'",
            "D) 'Duygusal tepkisizliğin üstünlüğü'",
            "E) 'Yalnızca genetik üstünlüğe dayalı biyolojik evrim'"
        ],
        "correct": 1,
        "explanation": "Slayt 20: 'In existential psychology, 'transformative power of suffering' (Tedeschi & Calhoun, 2004)'. Travma sonrası büyüme; krizle boğuşma ve yüzleşme sürecinde acının insan ruhunda dönüştürücü ve geliştirici bir güce evrilmesini tanımlar.",
        "optionAnalysis": {
            "A": "Yanlış. Pasif boyun eğme değil, bilişsel ve varoluşsal aktif mücadele söz konusudur.",
            "B": "DOĞRU. Slayt 20'de Tedeschi & Calhoun'un doğrudan atıf yaptığı kavram 'Acının dönüştürücü gücü'dür.",
            "C": "Yanlış. Anıları silme değil, anılara ve yaşama yeni bir anlam atfetme sürecidir.",
            "D": "Yanlış. Duygusal uyuşma büyümeyi değil, disosiasyon veya patolojiyi yansıtır.",
            "E": "Yanlış. Biyolojik determinizm değil, psikolojik ve varoluşsal bir süreçtir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 20 & Tedeschi & Calhoun (2004)"
    },
    {
        "id": "q2_5",
        "question": "Aşağıdakilerden hangisi Tedeschi ve Calhoun tarafından belirlenen Travma Sonrası Büyümenin (PTG) 5 alt boyutundan biri DEĞİLDİR?",
        "options": [
            "A) Benlik algısında değişim (Change in self-perception)",
            "B) Kişilerarası ilişkilerde değişim (Change in interpersonal relationships)",
            "C) Yaşam felsefesinde değişim (Change in philosophy of life)",
            "D) Bireyin hafızasının fotoğrafik olarak kusursuz hale gelmesi",
            "E) Yeni olanakları fark etme ve inanç sisteminde değişim"
        ],
        "correct": 3,
        "explanation": "PTG'nin 5 alt boyutu şunlardır: 1) Benlik algısında değişim, 2) Kişilerarası ilişkilerde değişim, 3) Yaşam felsefesinde değişim, 4) Yeni olanakları fark etme, 5) İnanç sisteminde değişim. 'Hafızanın fotoğrafik hale gelmesi' nörolojik bir kurgudur, büyüme boyutu değildir.",
        "optionAnalysis": {
            "A": "PTG alt boyutudur (Kişinin kendi içsel gücünü ve dayanıklılığını fark etmesi).",
            "B": "PTG alt boyutudur (İlişkilerde yakınlık, sahicilik ve öncelik değişimi).",
            "C": "PTG alt boyutudur (Yaşama değer verme ve öncelikleri yeniden sıralama).",
            "D": "DOĞRU CEVAP (Alt boyut değildir). Belleğin fotoğrafik hale gelmesi gibi bir boyut yoktur.",
            "E": "PTG alt boyutudur (Yeni yollar keşfetme ve manevi/felsefi inançta derinleşme)."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 21 & Tedeschi & Calhoun (2004)"
    },
    {
        "id": "q2_6",
        "question": "Hijazi ve arkadaşlarının (2015) savaş gazileriyle yürüttüğü çalışmada, PTG alt boyutları arasında en yüksek puanı alan alan ve büyümeyle en güçlü pozitif korelasyon gösteren bilişsel yeti hangisidir?",
        "options": [
            "A) En yüksek boyut: Yeni olanaklar / En ilişkili yeti: Yüksek IQ puanı",
            "B) En yüksek boyut: Yaşam felsefesinde değişim / En ilişkili yeti: Bilişsel esneklik (Cognitive flexibility)",
            "C) En yüksek boyut: İnanç sistemi / En ilişkili yeti: Fiziksel kas gücü",
            "D) En yüksek boyut: Benlik algısı / En ilişkili yeti: İçe kapanma düzeyi",
            "E) En yüksek boyut: Kişilerarası ilişkiler / En ilişkili yeti: Görme keskinliği"
        ],
        "correct": 1,
        "explanation": "Slayt 23: Hijazi vd. (2015) çalışmasında gazilerin en yüksek puanı 'yaşam felsefesinde değişim' boyutundan aldığı saptanmıştır (ölümle yoğun yüzleşme nedeniyle). Ayrıca bilişsel esneklik (cognitive flexibility) düzeyi ile PTG arasında çok güçlü bir pozitif korelasyon bulunmuştur.",
        "optionAnalysis": {
            "A": "Yanlış. IQ puanı ile ilişkiden bahsedilmemiştir; en yüksek boyut yaşam felsefesidir.",
            "B": "DOĞRU. Slayt 23: En yüksek puan 'yaşam felsefesinde değişim' ve en güçlü ilişkili yeti 'bilişsel esneklik'tir.",
            "C": "Yanlış. Fiziksel kas gücü psikolojik büyümeyi yordayan bilişsel değişken değildir.",
            "D": "Yanlış. İçe kapanma değil, bilişsel esneklik belirleyicidir.",
            "E": "Yanlış. Görme keskinliği ilgisiz bir fiziksel parametredir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 23 & Hijazi et al. (2015)"
    },
    {
        "id": "q2_7",
        "question": "Aşağıdakilerden hangisi bireyde travmatik olay meydana gelmeden ÖNCE var olan (Pre-traumatik) bir risk faktörüdür?",
        "options": [
            "A) Travmanın şiddeti ve olay anında algılanan ölüm tehlikesi",
            "B) Olay anında kendini beden dışından izliyor gibi hissetme (peritravmatik disosiasyon)",
            "C) Kadın cinsiyet ve ailede psikiyatrik hastalık/depresyon öyküsü bulunması",
            "D) Travmadan aylar sonra yaşanan işsizlik ve ekonomik iflas",
            "E) Psikiyatrik tedaviye ulaşımda yaşanan bürokratik gecikmeler"
        ],
        "correct": 2,
        "explanation": "Pre-travmatik risk faktörleri olaydan önce bireyin bünyesinde var olan zemin faktörleridir: Kadın cinsiyet, düşük SES, düşük eğitim, ailede psikiyatrik hastalık öyküsü, azınlık olma ve kişilik özellikleri (Slayt 22). Olayın şiddeti ve disosiasyon peritravmatik; işsizlik ve tedavi gecikmesi ise post-travmatiktir.",
        "optionAnalysis": {
            "A": "Yanlış. Olayın şiddeti ve tehlike algısı olay esnasındadır (Peritravmatik faktör).",
            "B": "Yanlış. Olay anındaki disosiasyon Peritravmatik faktördür.",
            "C": "DOĞRU. Kadın cinsiyet, ailede depresyon öyküsü ve düşük SES pre-travmatik faktörlerdir.",
            "D": "Yanlış. Olaydan sonraki işsizlik Post-travmatik faktördür.",
            "E": "Yanlış. Tedavi gecikmesi Post-travmatik faktördür."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 22 & Kirkpatrick & Heller (2014)"
    },
    {
        "id": "q2_8",
        "question": "Travma literatüründe ve Ozer ve arkadaşlarının (2003) meta-analizinde, travma esnasında yaşandığında ileride TSSB gelişimi açısından en güçlü yordayıcılardan biri olarak kabul edilen 'Peritravmatik' risk faktörü hangisidir?",
        "options": [
            "A) Kişinin olay anında derin bir uykuya dalması",
            "B) Peritravmatik Disosiasyon (olay esnasında bedeninden kopma, rüya gibi hissetme)",
            "C) Kişinin olay anında piyango kazanması",
            "D) Olay anında kahkaha atma refleksi",
            "E) Bireyin olaydan 10 yıl önce geçirdiği kızamık hastalığı"
        ],
        "correct": 1,
        "explanation": "Slayt 23: Peritravmatik faktörler arasında travmanın yoğunluğu, sıklığı, algılanan ölüm tehdidi ve özellikle 'Peritravmatik Disosiasyon' yer alır. Olay anında kopma ve yabancılaşma yaşayanlarda TSSB gelişme riski dramatik şekilde yükselmektedir.",
        "optionAnalysis": {
            "A": "Yanlış. Derin uyku tipik bir peritravmatik yanıt değildir.",
            "B": "DOĞRU. Peritravmatik disosiasyon TSSB gelişiminin en güçlü olay sırası yordayıcısıdır.",
            "C": "Yanlış. Gerçek dışı bir kurgudur.",
            "D": "Yanlış. Kahkaha birincil risk faktörü değildir.",
            "E": "Yanlış. 10 yıl önceki çocukluk hastalığı peritravmatik bir değişken olamaz."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 23 & Ozer et al. (2003)"
    },
    {
        "id": "q2_9",
        "question": "Travmatik olay gerçekleştikten SONRA (Post-travmatik dönemde) ortaya çıkan ve bireyin iyileşme şansını en çok baltalayan en kritik risk faktörü aşağıdakilerden hangisidir?",
        "options": [
            "A) Güçlü bir ailevi ve dost desteğinin varlığı",
            "B) Sosyal destek eksikliği (Lack of social support)",
            "C) Bireyin düzenli spor yapmaya başlaması",
            "D) Hızlı tanı konulup derhal EMDR terapisine başlanması",
            "E) Bireyin yeni hobiler edinmesi"
        ],
        "correct": 1,
        "explanation": "Slayt 24: Post-travmatik risk faktörlerinin başında 'Sosyal destek eksikliği' (Lack of social support), travma sonrası stresli yaşam (işsizlik vb.) ve tanı-tedavideki gecikmeler gelir. Sosyal desteğin olmaması kronikleşmenin en önemli zeminidir.",
        "optionAnalysis": {
            "A": "Yanlış. Güçlü sosyal destek riski artıran değil, en güçlü KORUYUCU faktördür.",
            "B": "DOĞRU. Sosyal destek eksikliği travma sonrası en tehlikeli risk faktörüdür.",
            "C": "Yanlış. Spor fiziksel ve psikolojik iyileşmeyi destekler.",
            "D": "Yanlış. Erken müdahale riski düşürür; gecikme ise riski artırır.",
            "E": "Yanlış. Yeni hobiler uyum sağlayıcı baş etme davranışlarıdır."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 24 & Manove et al. (2019)"
    },
    {
        "id": "q2_10",
        "question": "Manove ve arkadaşlarının (2019) çalışmasında düşük sosyoekonomik düzeye (SES) sahip bireylerde travma sonrasında gözlemlenen ve literatürde dikkat çeken bulgu hangisidir?",
        "options": [
            "A) Ekonomik yardım verilen bireylerin hiçbirinde TSSB görülmemiştir.",
            "B) Düşük SES'e sahip bireylere travma sonrasında yeterli ekonomik kaynak sağlandığında TSSB geliştirme olasılıklarının arttığı gözlemlenmiştir.",
            "C) Düşük SES'li bireyler biyolojik olarak travmadan hiçbir şekilde etkilenmezler.",
            "D) Gelir düzeyi ile travma tepkileri arasında hiçbir istatistiksel ilişki bulunamaz.",
            "E) Ekonomik destek verilince kişilerin tüm çocukluk anıları silinmiştir."
        ],
        "correct": 1,
        "explanation": "Slayt 24: 'It has been observed that when individuals with a low socioeconomic status are provided with adequate economic resources following a traumatic event, their likelihood of developing PTSD increases (Manove et al., 2019).' Bu bulgu kaynak yönetiminin yarattığı stres, farkındalık veya sağlık sistemine bildirim artışıyla tartışılmaktadır.",
        "optionAnalysis": {
            "A": "Yanlış. Tam aksine olasılığın arttığı saptanmıştır.",
            "B": "DOĞRU. Slayt 24'teki şaşırtıcı ve spesifik bulgu: Yeterli ekonomik kaynak sağlandığında TSSB bildirme/geliştirme olasılığı artmıştır.",
            "C": "Yanlış. Düşük SES pre-travmatik bir risk faktörüdür.",
            "D": "Yanlış. Güçlü istatistiksel ilişkiler mevcuttur.",
            "E": "Yanlış. Anı silinmesi gibi bir durum bilimsel olarak söz konusu değildir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 24 & Manove et al. (2019)"
    },
    {
        "id": "q2_11",
        "question": "Steudte-Schmiedgen (2016) epidemiyolojik verilerine göre, genel toplumda en az bir kez potansiyel travmatik olaya maruz kalma oranı yüzde kaç aralığındadır?",
        "options": [
            "A) %1 - %5",
            "B) %10 - %15",
            "C) %41 - %86",
            "D) %95 - %100",
            "E) %0 (Hiç kimse travmaya maruz kalmaz)"
        ],
        "correct": 2,
        "explanation": "Slayt 25: 'Between 41% and 86% of the population experiences at least one traumatic event in their lifetime (Steudte-Schmiedgen, 2016).' Buna rağmen insanların büyük çoğunluğu psikopatoloji geliştirmeden iyileşmektedir.",
        "optionAnalysis": {
            "A": "Yanlış. %1-5 aşırı düşüktür; travma insan yaşamında oldukça yaygındır.",
            "B": "Yanlış. Bu oran TSSB yaygınlığına yakındır, maruziyet oranına değil.",
            "C": "DOĞRU. Slayt 25 verisi: Yaşam boyu en az bir travmaya maruz kalma sıklığı %41 ile %86 arasındadır.",
            "D": "Yanlış. %95-100 aşırı abartılı bir genellemedir.",
            "E": "Yanlış. Travma kaçınılmaz bir insanlık gerçeğidir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 25 & Steudte-Schmiedgen (2016)"
    },
    {
        "id": "q2_12",
        "question": "Afet sonrası sahada arama kurtarma ve psikososyal destek sağlayan profesyonel ekiplerde travma ve TSSB prevalansı (Kross et al., 2008) hangi aralıkta bulunmuştur?",
        "options": [
            "A) %0 - %2",
            "B) %5 - %10",
            "C) %30 - %40",
            "D) %75 - %85",
            "E) %100"
        ],
        "correct": 2,
        "explanation": "Slayt 25: 'Prevalence rates have also been found to be in the 30–40 percent range among teams providing post-disaster support (Kross et al., 2008).' Sahada çalışan yardım ekipleri yüksek ikincil ve birincil travma riski taşır.",
        "optionAnalysis": {
            "A": "Yanlış. Sahada çalışan ekipler asla travmaya karşı bağışık değildir.",
            "B": "Yanlış. %5-10 genel toplumun ortalama normal dönem TSSB oranına yakındır.",
            "C": "DOĞRU. Kross vd. (2008) afet destek ekiplerinde %30-40 aralığında prevalans tespit etmiştir.",
            "D": "Yanlış. %75-85 aşırı yüksek bir orandır.",
            "E": "Yanlış. Her destek çalışanı travmatize olmaz; rezilyans faktörleri devrededir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 25 & Kross et al. (2008)"
    },
    {
        "id": "q2_13",
        "question": "Türkiye'de gerçekleşen 17 Ağustos 1999 Marmara Depremi sonrasında Öztürk (2015) tarafından bildirilen TSSB yaygınlık verileri hakkında hangisi DOĞRUDUR?",
        "options": [
            "A) Depremden sonra toplumda hiç TSSB vakasına rastlanmamıştır.",
            "B) Toplum taramalarında prevalans yaklaşık %20 iken; psikiyatrik tedavi arayanlar arasında bu oran %63 olarak saptanmıştır.",
            "C) Tedavi arayanlar arasında oran %5'e düşmüştür.",
            "D) Yalnızca İstanbul'da yaşayanlarda görülmüş, Kocaeli'de hiç görülmemiştir.",
            "E) Sadece çocuklarda görülmüş, yetişkinler hiç etkilenmemiştir."
        ],
        "correct": 1,
        "explanation": "Slayt 25: 'While prevalence rates were around 20 percent in community screenings conducted after the August 17, 1999, earthquake, they were found to be 63 percent among those who sought treatment (Öztürk MO, 2015).'",
        "optionAnalysis": {
            "A": "Yanlış. Marmara depremi Türkiye'nin en büyük kitlesel psikolojik travmalarındandır.",
            "B": "DOĞRU. Slayt 25 verisi: Toplum taramasında ~%20, tedaviye başvuran grupta ise %63!",
            "C": "Yanlış. Tedavi arayanlar zaten semptomları ağır olan gruptur, oran %63'e fırlar.",
            "D": "Yanlış. Deprem tüm Marmara bölgesini ve özellikle Kocaeli/Gölcük'ü derinden etkilemiştir.",
            "E": "Yanlış. Her yaş grubunda ağır travmatik belirtiler kaydedilmiştir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 25 & Öztürk MO (2015)"
    },
    {
        "id": "q2_14",
        "question": "Yaş ile Travma Sonrası Büyüme (PTG) arasındaki ilişkiyi inceleyen araştırmalarda genel olarak nasıl bir korelasyon saptanmıştır?",
        "options": [
            "A) Yaş arttıkça büyüme kesinlikle katlanarak artar (mükemmel pozitif korelasyon)",
            "B) Yaş ile PTG arasında negatif bir korelasyon bildiren çalışmalar vardır (genç yetişkinler daha yüksek büyüme bildirebilmektedir)",
            "C) 30 yaşından sonra PTG geliştirmek biyolojik olarak imkansızdır",
            "D) Yaş ile büyüme arasında çember şeklinde bir ilişki vardır",
            "E) Bebekler en yüksek PTG puanını alırlar"
        ],
        "correct": 1,
        "explanation": "Slayt 26: 'Some studies indicate a negative correlation between age and PTG.' Genç bireylerin yaşam felsefeleri ve şemaları henüz kristalleşmediği için kriz sonrasında şemalarını yeniden yapılandırıp büyüme bildirme olasılıkları daha esnek olabilmektedir.",
        "optionAnalysis": {
            "A": "Yanlış. Yaşla pozitif değil, birçok çalışmada negatif korelasyon bulunmuştur.",
            "B": "DOĞRU. Slayt 26'da açıkça belirtilmiştir: Yaş ile PTG arasında negatif yönlü korelasyon bildirilmektedir.",
            "C": "Yanlış. Her yaşta büyüme mümkündür, imkansızlık söz konusu değildir.",
            "D": "Yanlış. Çembersel bir korelasyon metriği yoktur.",
            "E": "Yanlış. PTG bilişsel soyutlama ve içgörü gerektirdiğinden bebeklerde ölçülemez."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 26 & Abraido-Lanza et al. (1998)"
    },
    {
        "id": "q2_15",
        "question": "Shakespeare-Finch & Lurie-Beck (2014) bulgularına göre travmatik olaya maruziyet biçimi ile PTG gelişimi arasındaki ilişki nasıldır?",
        "options": [
            "A) Olayı yalnızca uzaktan duymak büyümeyi en çok artıran durumdur.",
            "B) Travmatik bir olaya doğrudan maruz kalmanın (direct exposure) travma sonrası büyüme olasılığını artırdığına dair kanıtlar vardır.",
            "C) Doğrudan maruz kalan kişilerde büyüme gelişmesi yasalarca engellenmiştir.",
            "D) Maruziyet biçiminin psikolojik büyümeyle hiçbir ilişkisi yoktur.",
            "E) Büyüme yalnızca olaya hiç maruz kalmayan komşularda görülür."
        ],
        "correct": 1,
        "explanation": "Slayt 26: 'There is evidence that direct exposure to a traumatic event increases the likelihood of PTG (Shakespeare-Finch & Lurie-Beck, 2014).' Birey tehlikeyi ve kaybı bizzat doğrudan yaşadığında sarsıntı daha şiddetli olmakta, bu da daha köklü bir varoluşsal yeniden yapılanmayı tetikleyebilmektedir.",
        "optionAnalysis": {
            "A": "Yanlış. Dolaylı duymak doğrudan maruz kalmaktan daha güçlü bir büyüme yaratmaz.",
            "B": "DOĞRU. Slayt 26'daki açık ifade: Doğrudan maruziyet (direct exposure) PTG olasılığını artırır.",
            "C": "Yanlış. Büyüme yasal bir süreç değil, psikolojik bir olgudur.",
            "D": "Yanlış. Maruziyet düzeyi ve türü büyümeyi belirgin şekilde etkiler.",
            "E": "Yanlış. Travmayı bizzat yaşayan mağdurun büyüme deneyimi esastır."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 26 & Shakespeare-Finch & Lurie-Beck (2014)"
    },
    {
        "id": "q2_16",
        "question": "Wu ve arkadaşlarının (2019) meta-analizinde, travma türleri karşılaştırıldığında hangi grupta trafik kazası geçirenlere kıyasla daha yüksek oranda travmatik stres/TSSB saptanmıştır?",
        "options": [
            "A) Sadece hafif ev kazası geçirenler",
            "B) Mesleki travmaya maruz kalanlar ve ölümcül bir hastalıkla (örneğin kanser) yaşayanlar",
            "C) Düzenli sabah yürüyüşü yapan sağlıklı bireyler",
            "D) Üniversiteden mezun olan öğrenciler",
            "E) Tatile çıkan turistler"
        ],
        "correct": 1,
        "explanation": "Slayt 26: 'A 2019 meta-analysis found that individuals exposed to occupational trauma and those living with a terminal illness (such as cancer) exhibited higher rates of PTSD compared to those who had been in a traffic accident (Wu et al., 2019).'",
        "optionAnalysis": {
            "A": "Yanlış. Hafif ev kazaları Kriter A bile sayılmayabilir.",
            "B": "DOĞRU. Slayt 26 meta-analiz verisi: Mesleki travma ve ölümcül hastalık (kanser) trafik kazalarına kıyasla daha yüksek TSSB oranları göstermiştir.",
            "C": "Yanlış. Sağlıklı yürüyüş yapanlar travma grubu değildir.",
            "D": "Yanlış. Mezuniyet pozitif bir yaşam geçişidir.",
            "E": "Yanlış. Tatil rahatlatıcı bir etkinliktir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 26 & Wu et al. (2019)"
    },
    {
        "id": "q2_17",
        "question": "Aşağıdakilerden hangisi travma anındaki ve hemen sonrasındaki disosiyatif deneyimleri (rüya gibi hissetme, beden dışından izleme vb.) ölçmek için geliştirilmiş özel ölçektir?",
        "options": [
            "A) Beck Depresyon Envanteri (BDI)",
            "B) Peritravmatik Disosiyatif Deneyimler Anketi (PDEQ)",
            "C) Mini Mental Durum Muayenesi (MMSE)",
            "D) Durumluk Kaygı Envanteri (STAI)",
            "E) Pozitif ve Negatif Duygu Ölçeği (PANAS)"
        ],
        "correct": 1,
        "explanation": "Slayt 27'de hazırlık olarak önerilen ve derste anlatılan araç: The Peritraumatic Dissociative Experiences Questionnaire (PDEQ)'dir. Olay anındaki depersonalizasyon, derealizasyon ve zaman algısı bozulmasını ölçer.",
        "optionAnalysis": {
            "A": "Yanlış. BDI depresif semptomları ölçer.",
            "B": "DOĞRU. PDEQ (Peritraumatic Dissociative Experiences Questionnaire) tam olarak peritravmatik disosiasyonu ölçer.",
            "C": "Yanlış. MMSE demans ve bilişsel yıkımı tarar.",
            "D": "Yanlış. STAI kaygı düzeyini ölçer.",
            "E": "Yanlış. PANAS genel duygulanım durumunu belirler."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 27 & Marmar et al."
    },
    {
        "id": "q2_18",
        "question": "Aşağıdakilerden hangisi Türksoy'un (2003) travmatik yaşantıların niteliklerine dair vurguladığı temel unsurlardan biridir?",
        "options": [
            "A) Travma bireyin dünyadaki her şeye muktedir olduğu inancını pekiştirir.",
            "B) Bireyi kendi çaresizliği ve güçsüzlüğü ile yüzleştirir, kayıplar ve köklü değişimler getirir.",
            "C) Travma yalnızca tek kuşakla sınırlıdır, hiçbir şekilde aktarılamaz.",
            "D) Travma sadece kasıtsız kazalardan ibarettir; insan eliyle kötülük yapılamaz.",
            "E) Bireyin kontrol duygusunu %100 oranında artırır."
        ],
        "correct": 1,
        "explanation": "Slayt 12 (Türksoy, 2003): Travmatik yaşantılar bireyi kendi çaresizliğiyle (powerlessness) yüzleştirir; temel kayıplar ve değişimler doğurur; doğrudan yaşanabileceği gibi tanık da olunabilir; kuşaklararası ya da yatay aktarılabilir.",
        "optionAnalysis": {
            "A": "Yanlış. Güçlülük hissi vermez, tam tersine çaresizlikle yüzleştirir.",
            "B": "DOĞRU. Slayt 12'deki temel vurgu: Bireyi kendi güçsüzlüğüyle yüzleştirmesi ve kayıplar yaratmasıdır.",
            "C": "Yanlış. Kuşaklararası ve yatay aktarım mümkündür.",
            "D": "Yanlış. Kasıtlı, ihmale dayalı veya doğal olabilir.",
            "E": "Yanlış. Kontrol illüzyonunu ve güvenlik algısını parçalar."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 12 & Türksoy (2003)"
    },
    {
        "id": "q2_19",
        "question": "Aşağıdakilerden hangisi bir depremden sonra bireylerin gösterdiği akut tepkiler için ders slaytlarında kullanılan en doğru klinik yaklaşımdır?",
        "options": [
            "A) 'Bu tepkiler kesin bir delilik ve geri dönüşsüz akıl hastalığı kanıtıdır.'",
            "B) 'Anormal bir duruma verilen normal tepkilerdir; ancak işlev bozukluğu artarak sürerse patolojikleşir.'",
            "C) 'Hemen ilk 24 saatte herkese zorunlu elektroşok (EKT) uygulanmalıdır.'",
            "D) 'Korku veya ağlama gösteren herkes zayıf karakterlidir.'",
            "E) 'Bu tepkiler sadece ilgi çekmek için yapılan rol yapma davranışlarıdır.'"
        ],
        "correct": 1,
        "explanation": "Slayt 16: 'Reactions to Traumatic Events: Normal responses to an abnormal situation. If the difficulty or dysfunction increases, it is a pathological response.' (Anormal bir duruma verilen normal tepkilerdir; bozulma artarsa patolojiktir).",
        "optionAnalysis": {
            "A": "Yanlış. Erken tepkiler delilik değil, akut stresin biyopsikolojik olağan cevabıdır.",
            "B": "DOĞRU. Slayt 16'daki temel aksiyom: Anormal bir olaya karşı verilen normal tepkilerdir.",
            "C": "Yanlış. Akut dönemde EKT gibi invaziv girişimler asla rutin endikasyon değildir.",
            "D": "Yanlış. Karakter zayıflığı değil, tehdit karşısında biyolojik savunma mekanizmasıdır.",
            "E": "Yanlış. Yaşantı gerçek ve otantik bir nörobiyolojik acıdır."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 16"
    },
    {
        "id": "q2_20",
        "question": "TSSB belirti yelpazesi düşünüldüğünde, korku temelli belirtiler (kaçınma, tetikte olma, flashback) dışında slaytlarda hangi diğer semptom alanlarının da tabloya eşlik ettiği açıkça belirtilmiştir?",
        "options": [
            "A) Disforik ve anhedonik belirtiler, agresif belirtiler, suçluluk/utanç ve disosiyatif belirtiler",
            "B) Sadece boy uzaması ve diş çıkarma belirtileri",
            "C) Yalnızca renk körlüğü ve koku alamama",
            "D) Aşırı neşe, sınırsız mutluluk ve sürekli gülme nöbetleri",
            "E) Bireyin telepatik yetenekler kazanması"
        ],
        "correct": 0,
        "explanation": "Slayt 19: TSSB yalnızca klasik korku belirtilerinden ibaret değildir; travmayı disforik/anhedonik belirtiler (zevk alamama), agresif semptomlar (öfke patlamaları), suçluluk ve utanç duyguları, disosiyatif belirtiler ve kendine/dünyaya yönelik olumsuz değerlendirmeler takip eder.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 19'da listelenen semptomlar: Disforik, anhedonik, agresif, suçluluk/utanç ve disosiyatif belirtiler.",
            "B": "Yanlış. Fizyolojik gelişimle ilgili alakasız maddelerdir.",
            "C": "Yanlış. Nörolojik duyu kaybı tablosu değildir.",
            "D": "Yanlış. Mani veya öfori TSSB tablosu değildir; disfori hakimdir.",
            "E": "Yanlış. Bilim dışı bir ifadedir."
        },
        "sourceRef": "ABUtrauma3.pptx, Slayt 19"
    }
]

content = "// ==========================================================================\n"
content += "// PSYC 4115: The Psychology of Trauma - KAYNAK 2 ÇOKTAN SEÇMELİ TESTİ (20 SORU)\n"
content += "// Kaynak: ABUtrauma3.pptx (Hafta 3)\n"
content += "// ==========================================================================\n\n"
content += "const QUESTIONS_SOURCE2 = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

with open("js/data_q2.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/data_q2.js with {len(questions)} questions successfully!")
