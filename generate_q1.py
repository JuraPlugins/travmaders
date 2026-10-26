import json

# We will write a python script that outputs js/data_q1.js with 20 rich questions.
questions = [
    {
        "id": "q1_1",
        "question": "DSM-5-TR'ye göre aşağıdakilerden hangisi bir olayın 'travmatik olay' (Kriter A) olarak sınıflandırılabilmesi için gereken temel nesnel koşullardan biridir?",
        "options": [
            "A) Olayın bireyde derin bir üzüntü ve hayal kırıklığı yaratmış olması",
            "B) Gerçek ya da tehdit edici ölüm, ciddi yaralanma veya cinsel şiddete maruz kalma",
            "C) Yaşantının bireyin ekonomik durumunda ani bir çöküşe yol açması",
            "D) Olayın ardından en az 6 ay boyunca günlük işlevselliğin aksaması",
            "E) Bireyin olay öncesinde herhangi bir psikiyatrik geçmişinin bulunmaması"
        ],
        "correct": 1,
        "explanation": "DSM-5-TR Kriter A'ya göre psikolojik travma; gerçek ya da tehdit edici ölüm, ağır yaralanma veya cinsel şiddete doğrudan maruz kalma, tanık olma ya da belirli koşullarda öğrenme ile tanımlanır. Gündelik yaşamdaki ağır hayal kırıklıkları veya finansal kayıplar Kriter A kapsamına girmez.",
        "optionAnalysis": {
            "A": "Yanlış. Derin üzüntü ve hayal kırıklığı her stresli yaşam olayında (örneğin boşanma veya işten çıkarılma) görülebilir; ancak Kriter A nesnel bir fiziksel bütünlük/ölüm/cinsel şiddet tehdidi gerektirir.",
            "B": "DOĞRU. DSM-5-TR Kriter A'nın birebir tanımıdır: Gerçek ya da tehdit edici ölüm, ciddi yaralanma veya cinsel şiddete maruz kalma şarttır.",
            "C": "Yanlış. Ekonomik kayıplar veya iflas gibi durumlar kronik yaşam stresi ve olumsuzluk (adversity) yaratır, ancak Kriter A travmatik olay sayılmaz.",
            "D": "Yanlış. 6 ay gibi bir süre koşulu Kriter A'da aranmaz; ayrıca travma sonrası belirtiler 1 aydan sonra TSSB için yeterli süre kriterini (Kriter F) karşılar.",
            "E": "Yanlış. Bireyin geçmişte psikiyatrik öyküsünün olup olmaması olayın travmatik niteliğini belirlemez; bu sadece bir pre-travmatik risk faktörüdür."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 11 & APA (2022)"
    },
    {
        "id": "q1_2",
        "question": "Bir polis memuru, görevi gereği kaza yerlerinde parçalanmış ceset fotoğraflarını ve olay yeri delillerini aylarca sürekli incelemek zorunda kalmıştır. Bu durum DSM-5-TR Kriter A açısından nasıl değerlendirilir?",
        "options": [
            "A) Olayı bizzat fiziksel olarak yaşamadığı için kesinlikle Kriter A dışındadır.",
            "B) Yalnızca televizyon haberi izlemekle eşdeğer kabul edilir ve tanı konulamaz.",
            "C) Mesleki görev icabı travmatik olayların tiksindirici/tahrip edici detaylarına aşırı veya tekrarlayıcı biçimde maruz kalındığı için Kriter A'yı karşılar.",
            "D) Ancak polis memuru fiziksel bir saldırıya uğrarsa travma kriterini karşılar.",
            "E) DSM-5-TR mesleki maruziyetleri tamamen kapsam dışı bırakmıştır."
        ],
        "correct": 2,
        "explanation": "DSM-5-TR Kriter A'nın 4. maruziyet yolu: Bireyin mesleki görevleri sırasında travmatik olayların ayrıntılarına (örneğin ilk müdahale ekiplerinin ceset parçaları toplaması, polislerin çocuk istismarı dosyalarını incelemesi) tekrarlayıcı veya aşırı düzeyde maruz kalmasıdır.",
        "optionAnalysis": {
            "A": "Yanlış. DSM-5-TR mesleki görev icabı ayrıntılara maruz kalmayı açıkça Kriter A maruziyet modu olarak kabul etmiştir.",
            "B": "Yanlış. Sıradan vatandaşların medyadan haber izlemesi hariç tutulmuştur; ancak görev gereği profesyonel maruziyet Kriter A'dır.",
            "C": "DOĞRU. Mesleki görev icabı travmatik ayrıntılara tekrarlayan veya aşırı maruziyet Kriter A'yı doğrudan karşılar.",
            "D": "Yanlış. Kişinin bizzat fiziksel şiddet görmesi şart değildir; görev başında tanık olma veya aversive ayrıntıları inceleme de geçerlidir.",
            "E": "Yanlış. Tam aksine DSM-5 ile birlikte mesleki maruziyet kriterlere açıkça ve resmen dahil edilmiştir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 11, 16 & DSM-5-TR (2022)"
    },
    {
        "id": "q1_3",
        "question": "Aşağıdaki durumlardan hangisi DSM-5-TR'ye göre bir yakının başına gelen olayı öğrenme yoluyla Kriter A'yı karşılaması için ZORUNLU bir koşuldur?",
        "options": [
            "A) Olayın mutlaka doğal ve beklenen bir eceliyle ölüm olması",
            "B) Söz konusu olayın şiddet içerikli (violent) veya kaza sonucu (accidental) gerçekleşmiş olması",
            "C) Yakının bu olay sonrasında mutlaka hayatta kalmış olması",
            "D) Olayın öğrenildiği anda bireyin mutlaka panik atak geçirmesi",
            "E) Bireyin olay sırasında yakınının yanında bulunması"
        ],
        "correct": 1,
        "explanation": "DSM-5-TR'ye göre travmatik bir olayın bir yakının (aile ferdi veya yakın arkadaş) başına geldiğini öğrenerek Kriter A'yı karşılayabilmesi için; ölüm veya ölüm tehdidi içeren olayın mutlaka şiddet kaynaklı (ör. cinayet, intihar, saldırı) veya kaza sonucu meydana gelmiş olması şarttır.",
        "optionAnalysis": {
            "A": "Yanlış. Yaşlılığa veya kronik hastalığa bağlı doğal eceliyle ölüm Kriter A kapsamında travma sayılmaz (yas sürecidir).",
            "B": "DOĞRU. DSM-5-TR metninde açıkça belirtildiği üzere ölüm veya ölüm tehdidi şiddet içerikli (violent) veya kazara (accidental) olmalıdır.",
            "C": "Yanlış. Kişinin ölümü durumunda da (şiddet veya kaza kaynaklı ise) Kriter A karşılanır.",
            "D": "Yanlış. Panik atak geçirilmesi tanı kriteri şartı değildir; nesnel olayın gerçekleşme biçimi esastır.",
            "E": "Yanlış. Yanında bulunmak 'tanık olma' (witnessing) maddesidir; öğrenme maddesinde yanında bulunma şartı yoktur."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 11 & DSM-5-TR (2022)"
    },
    {
        "id": "q1_4",
        "question": "Travmatik bir olay esnasında ve hemen ardından bireylerin yaşadığı deneyimlerle ilgili olarak Ozer ve arkadaşları (2003) tarafından vurgulanan 'öncesi ve sonrası' (before and after) hissi hakkında hangisi doğrudur?",
        "options": [
            "A) Travmaya maruz kalan istisnasız her bireyde görülmesi zorunlu evrensel bir semptomdur.",
            "B) Yalnızca kafa travması geçiren bireylerde görülen nörolojik bir lezyon belirtisidir.",
            "C) Bireyin güvenlik ve öngörülebilirlik hissinin sarsılmasıyla bazı kişilerce tarif edilen olası bir deneyimdir, evrensel bir zorunluluk değildir.",
            "D) Travma Sonrası Büyüme (PTG) gösteren hiçbir bireyde bu his yaşanmaz.",
            "E) DSM-5-TR'de Kriter B altında zorunlu bir intruzyon kriteridir."
        ],
        "correct": 2,
        "explanation": "Slaytlarda açıkça belirtildiği üzere (Ozer et al., 2003): Travmatik olay bireyin güvenlik ve öngörülebilirlik algısını bozar. Bazı kişiler yaşamlarında net bir 'öncesi ve sonrası' olduğunu tarif eder; ancak bu evrensel bir kural veya zorunlu bir tanı ölçütü değil, olası tepkilerden biridir.",
        "optionAnalysis": {
            "A": "Yanlış. Slayt 12: 'This is one possible experience, not a universal response' (Olası bir deneyimdir, evrensel bir yanıt değildir).",
            "B": "Yanlış. Nörolojik bir lezyon değil, psikolojik güvenlik ve dünya algısının sarsılmasıyla ilgilidir.",
            "C": "DOĞRU. Kişinin emniyet algısının sarsılmasıyla yaşadığı öznel bir kırılmadır ancak herkes bu şekilde deneyimlemez.",
            "D": "Yanlış. Travma sonrası büyüme gösteren bireyler de olay anında derin bir kırılma ve öncesi-sonrası ayrımı yaşayabilir.",
            "E": "Yanlış. DSM-5-TR'de böyle zorunlu bir tanı kriteri maddesi yoktur."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 12 & Ozer et al. (2003)"
    },
    {
        "id": "q1_5",
        "question": "Popüler kültürde ve bazı klinik tartışmalarda sıkça kullanılan 'Büyük T' (Big T) ve 'Küçük t' (little t) kavramları hakkında ders slaytlarında vurgulanan temel bilimsel gerçek nedir?",
        "options": [
            "A) Bunlar DSM-5-TR'de resmi olarak tanımlanmış iki farklı tanı kodudur.",
            "B) 'Küçük t' travmaları hiçbir zaman psikolojik tedavi gerektirmeyen önemsiz durumlardır.",
            "C) Bunlar gayriresmi (informal) etiketlerdir; DSM-5-TR'de resmi bir tanı kategorisi değildirler.",
            "D) 'Büyük T' yalnızca çocuklukta, 'Küçük t' ise yetişkinlikte yaşanan olayları ifade eder.",
            "E) ICD-11 bu kavramları resmi tanı kriteri olarak benimsemiştir."
        ],
        "correct": 2,
        "explanation": "Slayt 13'te belirtildiği üzere: 'Big T' ve 'little t' kavramları gündelik ve klinik jargonda kullanılan gayriresmi (informal) etiketlerdir; tanısal birer kategori değildirler. Bununla birlikte Kriter A'yı karşılamayan kronik ihmal ve ayrımcılık gibi deneyimler de ruh sağlığı üzerinde çok ciddi tahribat yaratabilir.",
        "optionAnalysis": {
            "A": "Yanlış. DSM-5-TR'de Big T veya little t adında hiçbir resmi tanı kodu veya kategori yer almaz.",
            "B": "Yanlış. Kriter A'yı karşılamayan adversiteler (ayrımcılık, ihmal) çok ciddi klinik müdahale gerektirebilir.",
            "C": "DOĞRU. Slayt 13: 'Describe these experiences precisely. 'Big T' and 'little t' are informal labels, not diagnostic categories.'",
            "D": "Yanlış. Yaşla hiçbir ilgisi yoktur; olayın şiddeti ve türü için uydurulmuş gayriresmi kavramlardır.",
            "E": "Yanlış. Ne ICD-11 ne de DSM-5 bu terimleri resmi nozolojiye dahil etmemiştir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 13 & McLaughlin & Sheridan (2016)"
    },
    {
        "id": "q1_6",
        "question": "Toplulukları, halkları veya geniş sosyal grupları etkileyen; savaş, soykırım ve zorunlu göç gibi olaylarla ortak belleği ve kimliği şekillendiren süreç hangisidir?",
        "options": [
            "A) Kişisel Uyum Bozukluğu",
            "B) Kolektif Travma (Collective Trauma)",
            "C) Bipolar Bozukluk",
            "D) Akut Panik Reaksiyonu",
            "E) Travma Sonrası Büyüme"
        ],
        "correct": 1,
        "explanation": "Hirschberger (2018) tarafından tanımlandığı üzere Kolektif Travma; grupları ve toplulukları etkileyen, paylaşılan toplumsal belleği, kimliği ve sosyal dokuyu nesiller boyu şekillendiren kitlesel travmatik olayları ifade eder.",
        "optionAnalysis": {
            "A": "Yanlış. Uyum bozukluğu bireysel bir psikiyatrik tanı kategorisidir.",
            "B": "DOĞRU. Toplulukları etkileyen ve ortak kimlik/hafızayı dönüştüren olgu kolektif travmadır.",
            "C": "Yanlış. Bipolar bozukluk biyolojik temelli bir duygudurum bozukluğudur.",
            "D": "Yanlış. Akut panik reaksiyonu kısa süreli fizyolojik uyarılma atağıdır.",
            "E": "Yanlış. Travma sonrası büyüme olumlu dönüşümü ifade eder, kitlesel travmanın tanımı değildir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 14 & Hirschberger (2018)"
    },
    {
        "id": "q1_7",
        "question": "Dünya Sağlık Örgütü (WHO) Dünya Ruh Sağlığı Taramaları (Liu et al., 2017) verilerine göre travma türleri ve TSSB riski ile ilgili hangisi doğrudur?",
        "options": [
            "A) Doğal afetler her zaman kişilerarası şiddetten daha yüksek TSSB riski yaratır.",
            "B) Kişilerarası şiddet (interpersonal violence) birçok çalışmada belirgin biçimde yüksek TSSB riski ile ilişkilidir.",
            "C) Trafik kazaları TSSB geliştiren tek travma türüdür.",
            "D) İnsan kaynaklı travmalar hiçbir zaman ruhsal bozukluğa yol açmaz.",
            "E) Her insan kaynaklı travma her doğal afetten kesin bir matematiksel formülle daha tehlikelidir."
        ],
        "correct": 1,
        "explanation": "Liu ve arkadaşlarının (2017) WHO araştırmasında gösterildiği üzere, kişilerarası kasıtlı şiddet (interpersonal violence: tecavüz, cinsel saldırı, işkence vb.) doğal afetlere kıyasla belirgin şekilde daha yüksek oranda TSSB riski doğurur.",
        "optionAnalysis": {
            "A": "Yanlış. Tam tersine kişilerarası şiddet doğal afetlerden genellikle daha yüksek risk taşır.",
            "B": "DOĞRU. Kişilerarası şiddet (interpersonal violence) en yüksek TSSB riski ile ilişkilidir.",
            "C": "Yanlış. Kaza sadece travma türlerinden biridir; cinsel şiddet, savaş ve fiziksel saldırı çok daha yüksek risklidir.",
            "D": "Yanlış. İnsan kaynaklı travmalar psikolojik olarak en derin iz bırakan travmalardır.",
            "E": "Yanlış. Slayt 15: 'No simple rule ranks every human-caused event against every natural disaster' (Basit tek bir sıralama kuralı yoktur)."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 15 & Liu et al. (2017)"
    },
    {
        "id": "q1_8",
        "question": "İkincil Travmatik Stres (Secondary Traumatic Stress - STS) kavramı hakkında aşağıdakilerden hangisi DOĞRUDUR?",
        "options": [
            "A) Yalnızca fiziksel olarak bizzat yaralanan kişilerde görülür.",
            "B) Başkalarının travmatik yaşantılarına dolaylı olarak, özellikle mesleki görev icabı travma ayrıntılarına maruz kalma sonucu ortaya çıkabilir.",
            "C) Bireyin televizyonda akşam haberlerini izlemesi doğrudan Kriter A düzeyinde STS sayılır.",
            "D) STS geliştiren kişiler hiçbir zaman intrüzyon veya kaçınma belirtisi göstermezler.",
            "E) Sadece çocuklarda görülen gelişimsel bir bozukluktur."
        ],
        "correct": 1,
        "explanation": "İkincil Travmatik Stres (Brewin et al., 2009; Cocker & Joss, 2016), travma mağdurlarına yardım eden veya onların travmatik detaylarına mesleki olarak maruz kalan profesyonellerde birincil travmaya benzer belirtilerin gelişmesidir.",
        "optionAnalysis": {
            "A": "Yanlış. Bizzat fiziksel yaralanma birincil travmadır; STS dolaylı (indirect) maruziyetle gelişir.",
            "B": "DOĞRU. Travma ayrıntılarına dolaylı ve mesleki yoldan maruz kalma neticesinde ortaya çıkan travmatik tablodur.",
            "C": "Yanlış. Slayt 16: 'Learning about an event through media does not automatically meet DSM-5-TR PTSD Criterion A.'",
            "D": "Yanlış. STS yaşayanlarda intrüzyon (akla gelen anılar), kaçınma ve tetikte olma semptomları görülebilir.",
            "E": "Yanlış. STS özellikle klinisyenler, sosyal hizmet uzmanları ve ilk müdahale çalışanlarında incelenir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 16 & Cocker & Joss (2016)"
    },
    {
        "id": "q1_9",
        "question": "Merhamet Yorgunluğu (Compassion Fatigue) ile ilgili olarak Cocker & Joss (2016) literatür taramasında aşağıdakilerden hangisi yaygın bir belirti olarak listelenmemiştir?",
        "options": [
            "A) Duygusal tükenmişlik veya duyarsızlaşma/uyuşma",
            "B) Kolay öfkelenme ve irritabilite",
            "C) İnsanlardan geri çekilme veya mesleki katılımdan kopma",
            "D) Uyku sorunları veya bedensel gerginlik",
            "E) Manik coşku ve sınırsız empati yeteneğinde kalıcı artış"
        ],
        "correct": 4,
        "explanation": "Merhamet yorgunluğu empati kapasitesinin tükenmesiyle seyreder; manik coşku veya aşırı artmış empati değil, tam tersine duygusal uyuşma, geri çekilme, irritabilite ve tükenmişlik görülür.",
        "optionAnalysis": {
            "A": "Yanlış (Belirtidir). Duygusal tükenmişlik merhamet yorgunluğunun ana eksenidir.",
            "B": "Yanlış (Belirtidir). İrritabilite ve sabırsızlık tipik bulgulardandır.",
            "C": "Yanlış (Belirtidir). Sosyal geri çekilme ve yabancılaşma slaytlarda vurgulanmıştır.",
            "D": "Yanlış (Belirtidir). Uyku bozukluğu ve somatik gerginlik fiziksel yansımalardır.",
            "E": "DOĞRU CEVAP (Listelenmemiştir). Manik coşku veya sınırsız empati artışı değil, empatinin körelmesi ve tükenme görülür."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 17 & Cocker & Joss (2016)"
    },
    {
        "id": "q1_10",
        "question": "Kompleks Travma ve Kompleks TSSB (CPTSD) hakkında aşağıdakilerden hangisi DOĞRUDUR?",
        "options": [
            "A) Kompleks TSSB, DSM-5-TR'de yer alan ve tek seferlik araba kazalarından sonra konulan resmi bir tanıdır.",
            "B) Kompleks travma ve Kompleks TSSB birbiriyle ilişkili terimlerdir ancak tamamen aynı ve birbirinin yerine geçebilir kavramlar değildir.",
            "C) Kompleks TSSB yalnızca 65 yaş üstü bireylerde teşhis edilebilir.",
            "D) Kompleks travmada kişi maruz kaldığı ortamdan istediği an kolayca kaçabilir.",
            "E) ICD-11 Kompleks TSSB kavramını reddetmiştir."
        ],
        "correct": 1,
        "explanation": "Slayt 18'de vurgulandığı gibi: 'Complex trauma and Complex PTSD are related terms, but they are not interchangeable.' Kompleks travma olay örüntüsünü (tekrarlayan, kaçması zor travmalar) ifade ederken; Kompleks TSSB ise ICD-11'de tanımlanmış özel bir klinik tanıdır.",
        "optionAnalysis": {
            "A": "Yanlış. Kompleks TSSB DSM-5-TR'de ayrı bir tanı DEĞİLDİR (ICD-11'dedir) ve tek seferlik kazaları değil, kronik/tekrarlayan travmaları kapsar.",
            "B": "DOĞRU. Slayt 18'in açık vurgusu: İlişkili kavramlardır ancak birbirinin yerine birebir kullanılamazlar.",
            "C": "Yanlış. Her yaşta ortaya çıkabilir; özellikle çocukluk çağı kronik istismarı ile güçlü bağlantılıdır.",
            "D": "Yanlış. Kompleks travma tanımı gereği kişinin kaçmasının imkansız veya çok zor olduğu durumlardır (ör. esaret, çocuk istismarı).",
            "E": "Yanlış. Tam tersine ICD-11 Kompleks TSSB'yi resmi olarak tanıyan ana tanı sistemidir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 18, WHO (2024), Karatzias et al. (2017)"
    },
    {
        "id": "q1_11",
        "question": "ICD-11'de tanımlanan 'Kompleks TSSB' (CPTSD), çekirdek TSSB belirtilerine ek olarak hangi temel alanda bozulmayı zorunlu kılar?",
        "options": [
            "A) Kendilik Örgütlenmesinde Bozulma (Disturbances in Self-Organisation: duygu regülasyonu, olumsuz benlik, ilişki güçlükleri)",
            "B) Yalnızca zeka geriliği ve motor becerilerde aksama",
            "C) Görme ve işitme duyusunun tamamen kaybı",
            "D) Sürekli aşırı alışveriş yapma isteği",
            "E) Herhangi bir ek belirti aranmaz, standart TSSB ile tamamen aynıdır"
        ],
        "correct": 0,
        "explanation": "ICD-11'de CPTSD; 3 çekirdek TSSB semptomuna ek olarak Kendilik Örgütlenmesinde Bozulma (DSO) triadını içerir: 1) Duygu regülasyonunda bozulma (affect dysregulation), 2) Kalıcı olumsuz benlik algısı (negative self-concept), 3) İlişkileri sürdürmede güçlük (relational disturbances).",
        "optionAnalysis": {
            "A": "DOĞRU. DSO (Kendilik Örgütlenmesinde Bozulma) Kompleks TSSB'yi standart TSSB'den ayıran ana bileşendir.",
            "B": "Yanlış. CPTSD bilişsel kapasite geriliği veya motor felç tablosu değildir.",
            "C": "Yanlış. Duyusal organ kaybı kriteri değildir.",
            "D": "Yanlış. Aşırı alışveriş dürtü kontrol veya bipolar mani özelliğidir.",
            "E": "Yanlış. Standart TSSB ile aynı olsaydı ayrı bir tanı kategorisi oluşturulmazdı."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 18 & Karatzias et al. (2017)"
    },
    {
        "id": "q1_12",
        "question": "McLaughlin & Sheridan'ın (2016) Çocukluk Çağı Adversitesi Boyutsal Yaklaşımı'na göre 'Tehdit' (Threat) ve 'Yoksunluk' (Deprivation) boyutları arasındaki temel fark nedir?",
        "options": [
            "A) Tehdit fiziksel/cinsel istismar ve şiddet gibi yaşantıları kapsarken; Yoksunluk fiziksel/duygusal ihmal ve bilişsel uyarım eksikliğini kapsar.",
            "B) Tehdit sadece zengin ailelerde, Yoksunluk ise sadece fakir ailelerde görülür.",
            "C) Tehdit hiçbir zaman beyin gelişimini etkilemez; Yoksunluk ise sadece görme merkezini etkiler.",
            "D) İkisi tamamen aynı kavramdır ve literatürde eşanlamlı kullanılır.",
            "E) Tehdit yalnızca okulda akran zorbalığıyla sınırlıdır."
        ],
        "correct": 0,
        "explanation": "McLaughlin & Sheridan (2016) boyutsal modelinde: 'Tehdit' (fiziksel/cinsel istismar, aile içi şiddet) tehlike ve zarar vermeyi içerip amigdala ve korku devrelerini etkilerken; 'Yoksunluk' (ihmal, uyarım eksikliği) çevreden beklenen temel girdilerin yokluğunu ifade eder ve kortikal incelme/bilişsel gelişimi etkiler.",
        "optionAnalysis": {
            "A": "DOĞRU. Tehdit aktif zarar/şiddet iken, Yoksunluk temel fiziksel, duygusal ve bilişsel girdilerin eksikliğidir.",
            "B": "Yanlış. Her iki boyut da her sosyoekonomik düzeyde farklı görünümlerle ortaya çıkabilir.",
            "C": "Yanlış. Tehdit amigdala ve korku işleme ağlarını derinden etkiler.",
            "D": "Yanlış. Modelin tüm amacı bu iki farklı boyutu kümülatif riski aşarak ayrıştırmaktır.",
            "E": "Yanlış. Tehdit aile içi şiddet ve fiziksel istismarı da merkezine alır."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 19, 20 & McLaughlin & Sheridan (2016)"
    },
    {
        "id": "q1_13",
        "question": "McLaughlin & Sheridan (2016) tablosunda yer alan 'Öngörülemezlik veya Kararsızlık' (Unpredictability or instability) boyutuna slaytlarda hangi örnek verilmiştir?",
        "options": [
            "A) Bireyin tek bir trafik kazası geçirmesi",
            "B) Bakım verenlerin sık sık değişmesi ve istikrarsız/kaotik aile ortamları",
            "C) Çocuğun mükemmel bir okulda düzenli eğitim alması",
            "D) Bireyin bir kez spor müsabakasında mağlup olması",
            "E) Genetik olarak göz renginin değişmesi"
        ],
        "correct": 1,
        "explanation": "Slayt 20'deki tabloda: 'Unpredictability or instability' boyutu; 'Frequent changes in caregiving; unstable family environments' (Bakım verenlerin sık değişmesi; istikrarsız aile ortamları) olarak örneklendirilmiştir.",
        "optionAnalysis": {
            "A": "Yanlış. Tekil trafik kazası akut bir kaza travmasıdır; öngörülemez ailevi kararsızlık boyutu değildir.",
            "B": "DOĞRU. Slayt 20 tablosundaki birebir tanım: Sık bakım veren değişimi ve kaotik aile yapısı.",
            "C": "Yanlış. Bu koruyucu ve istikrarlı bir faktördür.",
            "D": "Yanlış. Sıradan rekabetçi bir yaşam deneyimidir.",
            "E": "Yanlış. Biyolojik ve ilgisiz bir ifadedir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 20 & McLaughlin & Sheridan (2016)"
    },
    {
        "id": "q1_14",
        "question": "Travmatik stresin nörobiyolojisi üzerine yapılan nörogörüntüleme araştırmalarında (O'Doherty et al., 2015; McLaughlin et al., 2019) grup düzeyinde hangi bulgu saptanmıştır?",
        "options": [
            "A) Amigdala tehdit tepkilerinde azalma ve hipokampus hacminde devasa büyüme",
            "B) Tehdit karşısında amigdala tepkilerinde değişiklik/hiperaktivite ve bazı TSSB örneklemlerinde daha küçük hipokampal hacim",
            "C) Prefrontal korteksin amigdalayı aşırı şekilde tamamen susturması",
            "D) HPA ekseninin tamamen yok olması ve hormon salgılayamaması",
            "E) Beyincik (serebellum) bölgesinin tamamen kireçlenmesi"
        ],
        "correct": 1,
        "explanation": "Slayt 21: Nörogörüntüleme çalışmaları TSSB'de amigdalanın tehdide karşı değişmiş/artmış tepkilerini, hipokampusta daha küçük hacmi (smaller hippocampal volume), prefrontal korteks aktivite farklılıklarını ve HPA ekseni değişimlerini rapor etmiştir.",
        "optionAnalysis": {
            "A": "Yanlış. Hipokampus büyümez, küçülür; amigdala uyarılması azalmaz, artar.",
            "B": "DOĞRU. Slayt 21'deki açık bulgular: Değişmiş amigdala tepkileri, küçülmüş hipokampus hacmi ve prefrontal disregülasyon.",
            "C": "Yanlış. Prefrontal korteks yetersiz regülasyon gösterir (hipoaktivite), amigdalayı susturamaz.",
            "D": "Yanlış. HPA ekseni yok olmaz, regülasyon dinamikleri ve kortizol geri bildirim duyarlılığı bozulur.",
            "E": "Yanlış. Gerçek dışı ve ilgisiz bir ifadedir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 21 & O'Doherty et al. (2015)"
    },
    {
        "id": "q1_15",
        "question": "Ders slaytlarında Travma Sonrası Büyüme (Post-Traumatic Growth - PTG) ve iyileşme süreciyle ilgili vurgulanan temel prensip aşağıdakilerden hangisidir?",
        "options": [
            "A) Travmaya uğrayan her birey mutlaka büyüme göstermek zorundadır.",
            "B) Travma sonrası büyüme bir olasılıktır; beklenen zorunlu bir sonuç değildir ve psikolojik acı ile bir arada bulunabilir.",
            "C) Büyüme gösteren bireyler artık hiçbir zaman üzüntü ya da stres hissetmezler.",
            "D) Büyüme yalnızca ilaç tedavisi alan bireylerde ortaya çıkar.",
            "E) Büyüme olması için travmanın hafif olması şarttır."
        ],
        "correct": 1,
        "explanation": "Slayt 22 (Wu et al., 2019): 'Post-traumatic growth is reported by some people and can coexist with distress. It is a possibility, not an expected outcome.' (Büyüme bir olasılıktır, zorunlu bir sonuç değildir ve sıkıntı ile bir arada bulunabilir).",
        "optionAnalysis": {
            "A": "Yanlış. Travma yaşayan herkes büyüme göstermek zorunda değildir; bunu beklemek mağdura baskı yaratır.",
            "B": "DOĞRU. Slayt 22'nin açık ve net ifadesidir: Bir olasılıktır, zorunlu beklenti değildir ve acıyla bir arada var olabilir.",
            "C": "Yanlış. Büyüme acının tamamen yok olması demek değildir; varoluşsal mücadeleyle birlikte yürür.",
            "D": "Yanlış. İlaçla ilişkili bir zorunluluk yoktur; psikolojik ve bilişsel mücadeleyle ilişkilidir.",
            "E": "Yanlış. Ağır krizlerle mücadele edenlerde de büyüme sıklıkla rapor edilmiştir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 22 & Wu et al. (2019)"
    },
    {
        "id": "q1_16",
        "question": "1. Dünya Savaşı sırasında siperlerde yoğun topçu ateşi ve patlamalara maruz kalan askerlerde gözlemlenen ve travma tarihinin ilk önemli askeri kavramı olan terim hangisidir?",
        "options": [
            "A) Demiryolu Omurgası (Railway Spine)",
            "B) Mermi Şoku (Shell Shock)",
            "C) Geçici Durumsal Bozukluk (Transient Situational Disturbance)",
            "D) Merhamet Yorgunluğu (Compassion Fatigue)",
            "E) Savaş Nevrozu (War Neurosis - WWII)"
        ],
        "correct": 1,
        "explanation": "1. Dünya Savaşı (WWI) sırasında siperlerde patlayan top mermilerinin yarattığı şok dalgası ve dehşet sonucu askerlerde görülen tabloya 'Shell Shock' (Mermi Şoku) adı verilmiştir.",
        "optionAnalysis": {
            "A": "Yanlış. Railway Spine 19. yüzyıl Sanayi Devrimi ve tren kazaları için kullanılan terimdir.",
            "B": "DOĞRU. 1. Dünya Savaşı'nın (WWI) simge travma kavramı 'Shell Shock'tur.",
            "C": "Yanlış. Bu kavram DSM-II'de (1968) kullanılan terimdir.",
            "D": "Yanlış. Merhamet yorgunluğu modern dönem sağlık çalışanları için tanımlanmıştır.",
            "E": "Yanlış. War Neurosis özellikle 2. Dünya Savaşı (WWII) döneminde yaygınlaşmıştır."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 24 & History of PTSD"
    },
    {
        "id": "q1_17",
        "question": "Travma tepkilerinin Amerikan Psikiyatri Birliği'nin DSM el kitaplarındaki tarihsel seyri hakkında aşağıdakilerden hangisi DOĞRUDUR?",
        "options": [
            "A) Travma Sonrası Stres Bozukluğu (TSSB) ilk kez DSM-I'de (1952) bu adla yer almıştır.",
            "B) DSM-I'de (1952) 'Gross Stress Reaction' adı kullanılmış; TSSB ise ilk kez DSM-III'te (1980) resmi bir tanı olarak girmiştir.",
            "C) DSM-II'de travma kavramı tamamen yasaklanmış ve hiçbir tanıya yer verilmemiştir.",
            "D) DSM-5-TR'de TSSB kaldırılmış ve yerine sadece anksiyete bozukluğu konulmuştur.",
            "E) DSM-III'te travma tanısı yalnızca kadın doğum hastaları için geliştirilmiştir."
        ],
        "correct": 1,
        "explanation": "Slayt 24 kronolojisi: DSM-I (1952) 'Gross stress reaction'; DSM-II (1968) 'Transient situational disturbance'; DSM-III (1980) 'Post-Traumatic Stress Disorder (PTSD)'. Güncel sürüm ise DSM-5-TR'dir (2022).",
        "optionAnalysis": {
            "A": "Yanlış. DSM-I'de PTSD ismi yoktu; adı 'Gross Stress Reaction' idi.",
            "B": "DOĞRU. DSM-I (1952): Gross stress reaction; DSM-III (1980): PTSD resmen tanıtıldı.",
            "C": "Yanlış. DSM-II'de 'Transient situational disturbance' başlığı altında yer alıyordu.",
            "D": "Yanlış. DSM-5-TR'de TSSB 'Travma ve Stresörle İlişkili Bozukluklar' bağımsız ana kategorisindedir.",
            "E": "Yanlış. DSM-III'e girişinde özellikle Vietnam Savaşı gazilerinin mücadelesi belirleyici olmuştur."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 24 & US National Center for PTSD"
    },
    {
        "id": "q1_18",
        "question": "Aşağıdakilerden hangisi çocukluk ve ergenlik dönemindeki travmatik ve olumsuz yaşantıları taramak amacıyla derste incelenmesi önerilen ölçeklerden biridir?",
        "options": [
            "A) MMPI (Minnesota Çok Yönlü Kişilik Envanteri)",
            "B) CTQ (Çocukluk Çağı Travmaları Anketi - Childhood Trauma Questionnaire)",
            "C) WAIS (Wechsler Yetişkin Zeka Ölçeği)",
            "D) Rorschach Mürekkep Lekesi Testi",
            "E) Hamilton Depresyon Derecelendirme Ölçeği"
        ],
        "correct": 1,
        "explanation": "Slayt 25'te öğrencilere bir sonraki derse hazırlık olarak incelemeleri istenen araç: Childhood Trauma Questionnaire (CTQ - Bernstein et al., 2003) ve Life Events Checklist (LEC-5)'tir.",
        "optionAnalysis": {
            "A": "Yanlış. MMPI genel kişilik patolojisi envanteridir.",
            "B": "DOĞRU. Slayt 25: 'Explore the Childhood Trauma Questionnaire (CTQ) - Bernstein et al. (2003)'.",
            "C": "Yanlış. WAIS bir zeka testidir.",
            "D": "Yanlış. Rorschach projektif bir kişilik testidir.",
            "E": "Yanlış. Hamilton depresyon şiddetini ölçer."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 25 & Bernstein et al. (2003)"
    },
    {
        "id": "q1_19",
        "question": "Yehuda & Lehrner (2018) tarafından incelenen ve slaytlarda bahsedilen 'travmanın nesiller arası aktarımı' (intergenerational transmission) hakkında hangisi doğrudur?",
        "options": [
            "A) Travma yalnızca tek bir bireyde hapsolur; aile ve topluma hiçbir zaman yansımaz.",
            "B) Travmanın etkileri sosyal, gelişimsel ve bağlamsal yolaklarla aile ve topluluklara yayılabilir; biyolojik mekanizmalar ise aktif bir araştırma alanıdır.",
            "C) Travma genetik olarak %100 oranında bir sonraki nesle kesin aktarılan tek gen hastalığıdır.",
            "D) Nesiller arası aktarım yalnızca babadan erkek çocuğa geçer.",
            "E) Travmanın aktarımı sadece 18. yüzyılda görülmüş, günümüzde ortadan kalkmıştır."
        ],
        "correct": 1,
        "explanation": "Slayt 11: 'The effects of trauma may extend across families and communities through social, developmental, and contextual pathways. Biological mechanisms remain an active area of research (Yehuda & Lehrner, 2018).'",
        "optionAnalysis": {
            "A": "Yanlış. Travma aile içi dinamikler ve epigenetik süreçlerle sonraki kuşakları etkileyebilir.",
            "B": "DOĞRU. Sosyal, gelişimsel ve bağlamsal yollarla yayılır; biyolojik ve epigenetik mekanizmalar araştırılmaktadır.",
            "C": "Yanlış. Travma Mendeliyen tek gen hastalığı değildir; karmaşık biyopsikososyal süreçtir.",
            "D": "Yanlış. Hem anne hem baba üzerinden ve çevresel/bakım veren etkileşimleriyle aktarılabilir.",
            "E": "Yanlış. Günümüzde Holokost, savaş ve soykırım mağdurlarının çocukları/torunlarında yoğun olarak incelenmektedir."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 11 & Yehuda & Lehrner (2018)"
    },
    {
        "id": "q1_20",
        "question": "Aşağıdakilerden hangisi bir olayın travmatik etki yaratmasında rol oynayan ve slaytlarda özetlenen çok düzeyli risk ve koruyucu faktörlerin işleyişini en doğru ifade eder?",
        "options": [
            "A) Aynı olaya maruz kalan her insan birebir aynı psikopatolojik sonucu geliştirir.",
            "B) Risk ve koruyucu faktörler bireysel, kişilerarası ve toplumsal düzeylerde dinamik olarak çalışır; aynı olaya maruz kalmak herkeste aynı sonucu doğurmaz.",
            "C) Yalnızca zengin insanlar travmadan korunabilir, yoksullar istisnasız hasta olur.",
            "D) Olayın şiddeti tek belirleyicidir; bireyin kişiliği veya sosyal desteği hiçbir fark yaratmaz.",
            "E) İnsan beyni travmaya karşı tamamen geçirimsizdir; psikolojik etkiler bir illüzyondur."
        ],
        "correct": 1,
        "explanation": "Slayt 22: 'Exposure to the same event does not lead to the same outcome for everyone. Risk and protective factors operate at individual, interpersonal, and social levels.' (Aynı olaya maruz kalmak herkes için aynı sonucu doğurmaz; risk ve koruyucu faktörler bireysel, kişilerarası ve sosyal düzeyde işler).",
        "optionAnalysis": {
            "A": "Yanlış. İnsan tepkileri son derece heterojendir; herkes aynı sonucu geliştirmez.",
            "B": "DOĞRU. Bireysel biyoloji/kişilik, ailevi/sosyal destek ve toplumsal bağlam sonucu belirler.",
            "C": "Yanlış. SES bir faktör olsa da tek başına belirleyici değildir; zengin bireyler de ağır TSSB geliştirebilir.",
            "D": "Yanlış. Olayın nesnel şiddeti kadar algılanan tehdit ve sosyal destek gibi faktörler de kritiktir.",
            "E": "Yanlış. Beyin travmatik strese karşı son derece duyarlıdır ve nörobiyolojik değişimler somuttur."
        },
        "sourceRef": "ABUtrauma1ve2_Engl.pptx, Slayt 22 & Wu et al. (2019)"
    }
]

content = "// ==========================================================================\n"
content += "// PSYC 4115: The Psychology of Trauma - KAYNAK 1 ÇOKTAN SEÇMELİ TESTİ (20 SORU)\n"
content += "// Kaynak: ABUtrauma1ve2_Engl.pptx (Hafta 1 & 2)\n"
content += "// ==========================================================================\n\n"
content += "const QUESTIONS_SOURCE1 = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

with open("js/data_q1.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/data_q1.js with {len(questions)} questions successfully!")
