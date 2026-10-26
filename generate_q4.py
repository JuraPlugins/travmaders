import json

questions = [
    {
        "id": "q4_1",
        "question": "DSM-5-TR'ye göre Travma Sonrası Stres Bozukluğu (TSSB) Kriter B (İntrüzyon / Yeniden Yaşantılama) tanısı için aşağıdakilerden hangisi şarttır ve bu kümede kaç belirti yer alır?",
        "options": [
            "A) 5 belirtinin tamamının aynı anda bulunması zorunludur.",
            "B) 5 belirtiden EN AZ 1'inin bulunması yeterlidir.",
            "C) Yalnızca fiziksel felç belirtisi aranır.",
            "D) En az 10 farklı belirti aranır.",
            "E) İntrüzyon belirtilerinin yalnızca rüyalarda olması gerekir, uyanıkken olamaz."
        ],
        "correct": 1,
        "explanation": "Slayt 3: 'Criterion B: Intrusion Symptoms: The presence of one or more of the following symptoms associated with the traumatic event, beginning after the event...'. Bu kümede toplam 5 semptom (anılar, rüyalar, flashbackler, psikolojik sıkıntı, fizyolojik tepkiler) tanımlanmıştır ve tanı için EN AZ 1 tanesinin varlığı yeterlidir.",
        "optionAnalysis": {
            "A": "Yanlış. 5 belirtinin tümü aranmaz; 1 tanesi yeterlidir.",
            "B": "DOĞRU. DSM-5-TR Kriter B kuralı: 5 belirtiden en az 1'inin bulunması şarttır.",
            "C": "Yanlış. Fiziksel felç konversiyon belirtisidir, intruzyon kriteri değildir.",
            "D": "Yanlış. Kümede zaten toplam 5 semptom vardır.",
            "E": "Yanlış. Hem uyanıkken (istemsiz anılar, flashbackler) hem uykuda (kabuslar) ortaya çıkabilir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 3 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_2",
        "question": "Bir depremzedenin, sokakta yanından geçen ağır bir hafriyat kamyonunun yarattığı sarsıntı ve gürültü nedeniyle kalbinin aniden deli gibi çarpması, soğuk terler dökmesi ve nefesinin daralması DSM-5-TR'de hangi Kriter B maddesine örnektir?",
        "options": [
            "A) Travmatik olayın önemli bir yönünü hatırlayamama (Amnezi)",
            "B) Travmatik olayın bir yönünü simgeleyen veya andıran içsel ya da dışsal ipuçlarına karşı belirgin fizyolojik tepkiler",
            "C) Pervasız veya kendine zarar verici davranışlar",
            "D) Başkalarından kopma veya yabancılaşma hissi",
            "E) Depersonalizasyon alt tipi"
        ],
        "correct": 1,
        "explanation": "Slayt 3, 5. madde: 'Marked physiological reactions to internal or external cues that symbolize or resemble an aspect of the traumatic event.' Kamyonun yarattığı sarsıntı (dışsal ipucu) karşısında terleme, taşikardi gibi bedensel uyarılmalar Kriter B'nin fizyolojik tepkisellik maddesidir.",
        "optionAnalysis": {
            "A": "Yanlış. Hatırlayamama Kriter D'dedir.",
            "B": "DOĞRU. Travmayı andıran dışsal ipuçlarına verilen belirgin fizyolojik tepkiler Kriter B'nin 5. maddesidir.",
            "C": "Yanlış. Kendine zarar verme Kriter E'dedir.",
            "D": "Yanlış. Yabancılaşma Kriter D'dedir.",
            "E": "Yanlış. Depersonalizasyon bedeninden kopma hissidir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 3 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_3",
        "question": "DSM-5-TR'de Kriter C (Kaçınma) semptom kümesi kaç temel davranış alanını sorgular ve tanı için bunlardan en az kaç tanesinin varlığı kanıtlanmalıdır?",
        "options": [
            "A) 2 temel alan (içsel anı/duygulardan kaçınma ve dışsal hatırlatıcılardan kaçınma); EN AZ 1'inin veya her ikisinin varlığı kanıtlanmalıdır.",
            "B) 10 farklı alan sorgulanır; hepsinin varlığı zorunludur.",
            "C) Kaçınma kümesi DSM-5-TR'den tamamen çıkartılmıştır.",
            "D) Yalnızca yurt dışına kaçma eylemi sorgulanır.",
            "E) En az 5 yıl boyunca evden hiç çıkmama şartı aranır."
        ],
        "correct": 0,
        "explanation": "Slayt 5: 'Criterion C: Avoidance: Persistent avoidance of stimuli associated with the traumatic event... as evidenced by ONE OR BOTH of the following: 1) Avoidance of distressing memories, thoughts, feelings, 2) Avoidance of external reminders (people, places, conversations, etc.).'",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 5'in açık kuralı: 2 alandan (içsel veya dışsal) en az 1'inin ya da ikisinin varlığı şarttır.",
            "B": "Yanlış. 10 alan değil, 2 temel alan vardır.",
            "C": "Yanlış. Kaçınma bağımsız ve kritik bir kümedir.",
            "D": "Yanlış. Somut olarak yurt dışına gitmek değil, travma hatırlatıcılarından kaçınmaktır.",
            "E": "Yanlış. Evden çıkmama agorafobi ile ilişkilidir, 5 yıl şartı yoktur."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 5 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_4",
        "question": "DSM-5-TR TSSB Kriter D (Biliş ve Duygudurumda Olumsuz Değişiklikler) kümesi için tanısal eşik nedir ve bu kümede kaç semptom tanımlanmıştır?",
        "options": [
            "A) 7 semptomdan EN AZ 2'sinin bulunması gerekir.",
            "B) Yalnızca 1 semptom olması yeterlidir.",
            "C) 7 semptomun 7'sinin de aynı anda bulunması zorunludur.",
            "D) Hiç semptom olmasa da klinisyen kanaatiyle tanı konulabilir.",
            "E) En az 15 semptom bulunmalıdır."
        ],
        "correct": 0,
        "explanation": "Slayt 6: 'Criterion D: Negative Alterations in Cognitions and Mood: Two or more of the following (7 semptomdan EN AZ 2'si aranır)'. Bu semptomlar: amnezi, olumsuz inançlar, kendini/başkalarını suçlama, olumsuz duygulanım, anhedoni, yabancılaşma ve pozitif duygu hissedememedir.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 6: 'Two or more of the following' kuralı geçerlidir (en az 2 semptom).",
            "B": "Yanlış. Kriter B ve C için en az 1 yeterliyken, Kriter D ve E için EN AZ 2 semptom gereklidir.",
            "C": "Yanlış. Tümünün bulunması şart değildir.",
            "D": "Yanlış. DSM-5 kriter setinde açık semptom eşiği karşılanmalıdır.",
            "E": "Yanlış. Kümede toplam 7 madde vardır."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 6 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_5",
        "question": "Aşağıdakilerden hangisi DSM-5-TR Kriter D (Biliş ve Duygudurumda Olumsuz Değişiklikler) semptomlarından biri DEĞİLDİR?",
        "options": [
            "A) Travmatik olayın önemli bir yönünü hatırlayamama (genellikle disosiyatif amneziye bağlı)",
            "B) Kendisi, başkaları veya dünya hakkında sürekli ve abartılı olumsuz inançlar besleme ('Ben kötüyüm', 'Dünya tamamen tehlikelidir')",
            "C) Sürekli korku, dehşet, öfke, suçluluk veya utanç gibi olumsuz duygusal durum yaşama",
            "D) Aşırı tetikte olma (hypervigilance) ve abartılı irkilme tepkisi",
            "E) Önemli etkinliklere karşı belirgin biçimde azalmış ilgi veya katılım (anhedoni)"
        ],
        "correct": 3,
        "explanation": "Aşırı tetikte olma (hypervigilance) ve abartılı irkilme tepkisi Kriter D'de değil; Kriter E (Uyarılma ve Tepkisellikte Değişiklikler) kümesinde yer alır (Slayt 6 ve 7). Amnezi, olumsuz inançlar, suçluluk/utanç ve anhedoni ise Kriter D'dedir.",
        "optionAnalysis": {
            "A": "Kriter D semptomudur (1. madde).",
            "B": "Kriter D semptomudur (2. madde).",
            "C": "Kriter D semptomudur (4. madde).",
            "D": "DOĞRU CEVAP (Kriter D değil, Kriter E semptomudur). Aşırı tetikte olma Kriter E uyarılma kümesindedir.",
            "E": "Kriter D semptomudur (5. madde)."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 6, 7 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_6",
        "question": "DSM-5-TR Kriter E (Uyarılma ve Tepkisellikte Değişiklikler) kümesinde yer alan ve DSM-5 ile birlikte bu kümeye eklenen semptomlardan biri aşağıdakilerden hangisidir?",
        "options": [
            "A) Pervasız veya kendine zarar verici davranışlar (Reckless or self-destructive behavior)",
            "B) Gün boyu aralıksız gülme ve şarkı söyleme",
            "C) Bireyin görme duyusunu kendi isteğiyle kapatabilmesi",
            "D) Yalnızca yabancı dil konuşma isteği",
            "E) Kalp atışını zihinsel olarak tamamen durdurabilme"
        ],
        "correct": 0,
        "explanation": "Slayt 7: Kriter E semptomları: 1) İrritabl davranış ve öfke patlamaları, 2) Pervasız veya kendine zarar verici davranışlar (reckless or self-destructive behavior), 3) Hypervigilance, 4) Abartılı irkilme, 5) Konsantrasyon sorunları, 6) Uyku bozukluğu.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 7, 2. madde: 'Reckless or self-destructive behavior' bu kümenin ana tanı kriteridir.",
            "B": "Yanlış. Uyarılma belirtisi değildir.",
            "C": "Yanlış. İstemli duyusal kontrol değildir.",
            "D": "Yanlış. Nörolojik yabancı dil sendromuyla ilgisizdir.",
            "E": "Yanlış. Biyolojik olarak imkansız bir iddiadır."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 7 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_7",
        "question": "TSSB teşhisi için DSM-5-TR Kriter F (Süre), Kriter G (Klinik Anlamlılık) ve Kriter H (Dışlama) kuralları hangi seçenekte EKSİKSİZ ve DOĞRU eşleştirilmiştir?",
        "options": [
            "A) Kriter F: Süre > 1 ay / Kriter G: Klinik belirgin sıkıntı veya işlev bozukluğu / Kriter H: Bir maddeye veya tıbbi duruma bağlanamaz olma",
            "B) Kriter F: Süre en fazla 3 gün / Kriter G: Sadece zenginleri etkileme / Kriter H: İlaç kullanmama şartı",
            "C) Kriter F: Süre en az 10 yıl / Kriter G: Herhangi bir sıkıntı yaratmama / Kriter H: Yalnızca alkol etkisiyle çıkma",
            "D) Kriter F: Süre 24 saat / Kriter G: Mahkeme kararı zorunluluğu / Kriter H: Kan tahlili zorunluluğu",
            "E) Kriter F, G ve H harfleri DSM-5-TR'de hiçbir anlam ifade etmez"
        ],
        "correct": 0,
        "explanation": "Slayt 8: 'Criterion F: Duration > 1 month. Criterion G: Clinically significant distress or impairment in social, occupational functioning. Criterion H: Exclusion: Not attributable to physiological effects of a substance or another medical condition.'",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 8'deki üç kriterin eksiksiz ve kusursuz tanımıdır.",
            "B": "Yanlış. 3 gün ASB'nin başlangıç eşiğidir, TSSB 1 aydan uzun sürmelidir.",
            "C": "Yanlış. 10 yıl şartı yoktur, madde etkisi ise dışlama ölçütüdür.",
            "D": "Yanlış. 24 saat yeterli değildir ve mahkeme kararı kriter olamaz.",
            "E": "Yanlış. F, G ve H standart DSM tanı alfabesidir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 8 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_8",
        "question": "TSSB Disosiyatif Alt Tipinde (With Dissociative Symptoms) tanımlanan 'Depersonalizasyon' ve 'Derealizasyon' kavramları arasındaki fark nedir?",
        "options": [
            "A) Depersonalizasyon kişinin kendi bedeninden/zihninden kopması ve kendine dışarıdan bakıyor gibi hissetmesidir; Derealizasyon ise çevrenin/dünyanın gerçek dışı veya rüya gibi algılanmasıdır.",
            "B) Depersonalizasyon sokaktaki yabancıları unutmaktır; Derealizasyon ise kendi adını unutmaktır.",
            "C) İkisi tamamen aynı şeydir, DSM-5-TR aralarında hiçbir fark görmez.",
            "D) Depersonalizasyon sadece uyurken olur, derealizasyon ise sadece yemek yerken olur.",
            "E) Derealizasyon sadece görme kaybıdır."
        ],
        "correct": 0,
        "explanation": "Slayt 9: 'Depersonalization: Experiences of unreality or detachment from one’s mental processes or body (outside observer of oneself, body unreal, time slow). Derealization: Recurrent experiences of unreality or detachment from one’s surroundings (surroundings/people feel unreal, dreamlike).'",
        "optionAnalysis": {
            "A": "DOĞRU. Depersonalizasyon kişinin kendine ve bedenine yabancılaşması; Derealizasyon ise dış dünyaya ve çevreye yabancılaşmasıdır.",
            "B": "Yanlış. İsim unutma amnezidir, disosiyatif yabancılaşma değildir.",
            "C": "Yanlış. DSM-5-TR iki ayrı klinik terim ve madde olarak açıkça ayırmıştır.",
            "D": "Yanlış. Uyanıkken yaşanan kalıcı/tekrarlayıcı disosiyatif durumlardır.",
            "E": "Yanlış. Görme duyusu sağlamdır, algının gerçeklik niteliği değişmiştir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 9 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_9",
        "question": "Peritravmatik Disosiyatif Deneyimler Ölçeği'nde (PDEQ) yer alan aşağıdaki maddelerden hangisi 'Depersonalizasyon' boyutunu doğrudan örneklendirir?",
        "options": [
            "A) 'Bankadaki tüm paramı kaybettim.'",
            "B) 'Bedenimin dışından olanları seyreden bir seyirci gibiydim; bedenim normalden daha büyük veya küçük hissettirdi.'",
            "C) 'Deprem sırasında evimin duvarı çatladı.'",
            "D) 'Polis sirenini duyunca hemen arabamı kenara çektim.'",
            "E) 'Yemek yemeyi çok seviyorum.'"
        ],
        "correct": 1,
        "explanation": "Slayt 12, 13 ve 14: PDEQ maddeleri: 'I felt as though I were a spectator watching the event or observing what was happening from outside my body. I experienced strange bodily sensations; my body felt larger or smaller than usual, or I felt detached from it.' Bu tipik bir depersonalizasyon ifadesidir.",
        "optionAnalysis": {
            "A": "Yanlış. Finansal bir kayıptır, disosiasyon değildir.",
            "B": "DOĞRU. Slayt 12-14 PDEQ metnindeki özgün madde: Bedenin dışından seyirci gibi izleme ve bedensel kopukluk.",
            "C": "Yanlış. Nesnel çevresel hasardır.",
            "D": "Yanlış. Trafik kuralı davranışıdır.",
            "E": "Yanlış. Gündelik zevktir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 12, 13, 14 & Marmar et al. (1997)"
    },
    {
        "id": "q4_10",
        "question": "Yaşam Olayları Listesi (LEC-5 / Life Events Checklist for DSM-5) klinik uygulamada ne amaçla kullanılır?",
        "options": [
            "A) Bireyin zeka düzeyini ve matematik yeteneğini puanlamak için",
            "B) Bireyin yaşam boyu karşılaştığı potansiyel travmatik olay türlerini (doğal afet, yangın, kaza, saldırı vb.) ve maruziyet biçimini taramak için",
            "C) Bireyin kan grubu ve alerjilerini tespit etmek için",
            "D) Hangi üniversite bölümünü seçeceğini belirlemek için",
            "E) Bireyin geçmişte işlediği suçları cezalandırmak için"
        ],
        "correct": 1,
        "explanation": "Slayt 15, 16, 17: 'LEC screens for types of incidents that have been experienced, witnessed, learned to have happened to a loved one, or encountered in a professional capacity.' 17 travma türünü ve maruz kalma biçimini tarar.",
        "optionAnalysis": {
            "A": "Yanlış. LEC-5 zeka testi değildir.",
            "B": "DOĞRU. Yaşam boyu travma türlerini ve maruz kalma biçimlerini tarayan standart araçtır.",
            "C": "Yanlış. Tıbbi laboratuvar testi değildir.",
            "D": "Yanlış. Mesleki rehberlik envanteri değildir.",
            "E": "Yanlış. Adli ceza aracı değil, psikometrik tarama ölçeğidir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 15, 16 & Gray et al. (2004)"
    },
    {
        "id": "q4_11",
        "question": "Çocukluk Çağı Travmaları Anketi'nin (CTQ - Bernstein et al., 2003) 5 ana alt boyutu hangi seçenekte EKSİKSİZ olarak doğru verilmiştir?",
        "options": [
            "A) Duygusal İhmal, Fiziksel İhmal, Duygusal İstismar, Fiziksel İstismar, Cinsel İstismar",
            "B) Yalan Söyleme, Hırsızlık, Kumar, Alkolizm, Madde Bağımlılığı",
            "C) Okul Başarısı, Spor Yeteneği, Müzik Kulağı, Resim Kabiliyeti, Yabancı Dil",
            "D) Yalnızca Fiziksel İstismar ve Trafik Kazaları",
            "E) Uykusuzluk, İştahsızlık, Baş Ağrısı, Mide Bulantısı, Baş Dönmesi"
        ],
        "correct": 0,
        "explanation": "Slayt 18-22: CTQ (Bernstein et al., 2003) 5 klinik alt boyuttan oluşur: 1) Emotional Neglect (Duygusal İhmal), 2) Physical Neglect (Fiziksel İhmal), 3) Emotional Abuse (Duygusal İstismar), 4) Physical Abuse (Fiziksel İstismar), 5) Sexual Abuse (Cinsel İstismar).",
        "optionAnalysis": {
            "A": "DOĞRU. CTQ'nun 5 standart alt boyutudur.",
            "B": "Yanlış. Davranım bozukluğu veya bağımlılık maddeleridir.",
            "C": "Yanlış. Yetenek ve başarı alanlarıdır.",
            "D": "Yanlış. Trafik kazası CTQ'da değil LEC'de sorgulanır ve 5 boyut eksiktir.",
            "E": "Yanlış. Somatik belirti listesidir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 18-22 & Bernstein et al. (2003)"
    },
    {
        "id": "q4_12",
        "question": "Bir danışanın CTQ'da 'Yeterli yiyecek bulamıyordum' ve 'Kirli elbiseler giymek zorundaydım' maddelerine 'Çok sık' yanıtını vermesi hangi alt boyuttaki örselenmeye işaret eder?",
        "options": [
            "A) Cinsel İstismar",
            "B) Fiziksel İhmal (Physical Neglect)",
            "C) Fiziksel İstismar (Physical Abuse)",
            "D) Manisizm",
            "E) Travma Sonrası Büyüme"
        ],
        "correct": 1,
        "explanation": "Slayt 18: 'Emotional and physical neglect: I couldn’t find enough food. I had to wear dirty clothes. My parents were too drunk or high on drugs to take care of me.' Temel beslenme ve giyim ihtiyaçlarının karşılanmaması Fiziksel İhmal'dir.",
        "optionAnalysis": {
            "A": "Yanlış. Cinsel temas içermemektedir.",
            "B": "DOĞRU. Slayt 18'deki açık madde: Yiyecek bulamama ve kirli kıyafet fiziksel ihmal göstergesidir.",
            "C": "Yanlış. Fiziksel istismar darp/dayak eylemidir; ihmal ise temel gereksinimlerin karşılanmamasıdır.",
            "D": "Yanlış. Psikiyatride böyle bir terim yoktur.",
            "E": "Yanlış. Çocukluk travması göstergesidir, büyüme boyutu değildir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 18 & Bernstein et al. (2003)"
    },
    {
        "id": "q4_13",
        "question": "CTQ'da yer alan 'Ailemdeki insanlar bana aptal, tembel veya çirkin derdi' ve 'Ailemden birinin benden nefret ettiğini hissederdim' maddeleri hangi alt boyuta aittir?",
        "options": [
            "A) Fiziksel İhmal",
            "B) Duygusal İstismar (Emotional Abuse)",
            "C) Cinsel İstismar",
            "D) Minimizasyon / İnkar",
            "E) Akut Stres Bozukluğu"
        ],
        "correct": 1,
        "explanation": "Slayt 19: 'Emotional abuse: People in my family called me “stupid,” “lazy,” or “ugly.” People in my family said hurtful or demeaning things to me. I felt that someone in my family hated me. I believe I was emotionally abused.'",
        "optionAnalysis": {
            "A": "Yanlış. Fiziksel ihtiyaçların karşılanmaması değil, sözel/psikolojik saldırıdır.",
            "B": "DOĞRU. Slayt 19 metninde birebir yer alan Duygusal İstismar (Emotional Abuse) maddeleridir.",
            "C": "Yanlış. Cinsel taciz veya temas içermez.",
            "D": "Yanlış. İnkar maddeleri tam tersine aileyi kusursuz gösteren maddelerdir.",
            "E": "Yanlış. ASB yetişkin akut reaksiyonudur, ölçek boyutu değildir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 19 & Bernstein et al. (2003)"
    },
    {
        "id": "q4_14",
        "question": "CTQ'da 'Bir aile bireyi beni doktora veya hastaneye gitmek zorunda kalacak kadar sert dövdü' ve 'Kemer, sopa, kordon veya sert bir nesneyle cezalandırıldım' maddeleri hangi boyutu ölçer?",
        "options": [
            "A) Fiziksel İstismar (Physical Abuse)",
            "B) Duygusal İhmal",
            "C) Bilişsel Esneklik",
            "D) Derealizasyon",
            "E) Peritravmatik Disosiasyon"
        ],
        "correct": 0,
        "explanation": "Slayt 20: 'Physical Abuse: A family member hit me so hard that I had to go to the doctor or the hospital... I was punished with a belt, a stick, a cord, or a hard object. I believe I was physically abused.'",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 20'deki açık maddeler: Fiziksel İstismar (Physical Abuse) boyutudur.",
            "B": "Yanlış. Pasif ihmal değil, doğrudan fiziksel şiddet ve darptır.",
            "C": "Yanlış. Bilişsel esneklik bir kişilik/yürütücü işlev yetisidir.",
            "D": "Yanlış. Derealizasyon çevrenin yabancılaşmasıdır.",
            "E": "Yanlış. PDEQ ile ölçülen olay anı disosiasyonudur."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 20 & Bernstein et al. (2003)"
    },
    {
        "id": "q4_15",
        "question": "CTQ'da yer alan 'Mükemmel bir çocukluğum vardı', 'Dünyanın en iyi ailesine sahiptim' ve 'Ailemde değiştirmek isteyeceğim hiçbir şey yoktu' maddelerinin ölçekteki klinik işlevi nedir?",
        "options": [
            "A) Bireyin gerçekten dünyadaki en şanslı insan olduğunu tescillemek",
            "B) Yanıtlayıcının travmayı inkar edip etmediğini, savunmacı bir kusursuzluk çizip çizmediğini (Minimizasyon/İnkar) denetlemek",
            "C) Bireye Nobel Barış Ödülü verilmesini sağlamak",
            "D) Bireyin fiziksel refleks hızını ölçmek",
            "E) Kişinin IQ puanını hesaplamak"
        ],
        "correct": 1,
        "explanation": "Slayt 22: 'Childhood Trauma Questionnaire - Positive Situations (Minimization/Denial): I had a perfect childhood. I had the best family in the world. There was nothing in my family that I wanted to change.' Bu maddeler ölçeğin geçerlik skalasıdır; aşırı kusursuz yanıtlar savunmacı inkarı gösterir.",
        "optionAnalysis": {
            "A": "Yanlış. Psikometride kusursuz aile profili genellikle savunmacı inkara işaret eder.",
            "B": "DOĞRU. Slayt 22'deki pozitif maddelerin işlevi Minimizasyon/İnkar (geçerlik/savunmacılık) kontrolüdür.",
            "C": "Yanlış. Tıbbi ve bilimsel olmayan bir kurgudur.",
            "D": "Yanlış. Refleks ölçümü değildir.",
            "E": "Yanlış. Zeka testi maddesi değildir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 22 & Bernstein et al. (2003)"
    },
    {
        "id": "q4_16",
        "question": "TSSB semptom şiddetini ve tanısını klinisyen gözetiminde yarı yapılandırılmış mülakat ile değerlendiren dünyadaki 'ALTIN STANDART' (Gold Standard) araç hangisidir?",
        "options": [
            "A) CAPS-5 (Clinician-Administered PTSD Scale for DSM-5)",
            "B) Standart Açık Uçlu Sohbet",
            "C) Kan Sayımı Testi (Hemogram)",
            "D) Elektroensefalografi (EEG)",
            "E) Göz Muayene Tablosu"
        ],
        "correct": 0,
        "explanation": "Slayt 23 ve 26: CAPS-5 (Clinician-Administered PTSD Scale for DSM-5), klinisyenin uyguladığı yapılandırılmış görüşmedir ve TSSB teşhisinde küresel altın standart kabul edilir. PCL-5 ise özbildirim altın standardıdır.",
        "optionAnalysis": {
            "A": "DOĞRU. CAPS-5 TSSB tanısında dünyadaki altın standart klinisyen ölçeğidir.",
            "B": "Yanlış. Yapılandırılmamış sohbet altın standart kriterini karşılamaz.",
            "C": "Yanlış. Kan sayımı biyokimyasal testtir, TSSB teşhisi koyamaz.",
            "D": "Yanlış. EEG elektrofizyolojiktir, tanı koydurucu altın standart değildir.",
            "E": "Yanlış. Görme keskinliği testidir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 23 & Weathers et al."
    },
    {
        "id": "q4_17",
        "question": "Bir hastanın TSSB tablosuna 'Disosiyatif Alt Tip' eklenebilmesi için DSM-5-TR'ye göre hangi iki semptomdan birinin veya her ikisinin kalıcı/tekrarlayıcı biçimde bulunması şarttır?",
        "options": [
            "A) Depersonalizasyon veya Derealizasyon",
            "B) Manik Coşku veya Uyurgezerlik",
            "C) Aşırı Kilo Alma veya Saç Dökülmesi",
            "D) Hiperaktivite veya Tik Bozukluğu",
            "E) Yalnızca Yüksek Tansiyon"
        ],
        "correct": 0,
        "explanation": "Slayt 9: 'PTSD Criterion Sets in the DSM-5-TR: With Dissociative Symptoms: The persistent or recurrent presence of one or both of the following: 1) Depersonalization, 2) Derealization.'",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 9'un net kuralı: Depersonalizasyon veya Derealizasyon varlığı şarttır.",
            "B": "Yanlış. Mani ve somnambulizm disosiyatif alt tip kriteri değildir.",
            "C": "Yanlış. Fiziksel belirtilerdir.",
            "D": "Yanlış. DEHB veya Tourette ile ilgilidir.",
            "E": "Yanlış. Kardiyovasküler bulgudur."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 9 & DSM-5-TR (2022)"
    },
    {
        "id": "q4_18",
        "question": "Ders slaytlarında yer alan vize sınavı bilgilendirmesine (Slayt 24 ve 25) göre öğrencilerin sorumlu olduğu temel öğrenme hedefleri arasında aşağıdakilerden hangisi YER ALIR?",
        "options": [
            "A) Akut stres tepkisi, otonom sinir sistemi ve potansiyel etkileri",
            "B) TSSB tanımı, pre-, peri- ve post-travmatik risk faktörleri ve eştanılar",
            "C) TSSB'nin Akut Stres Bozukluğu'ndan (ASB) nasıl farklılaştığı",
            "D) Travma Sonrası Büyüme (PTG) kavramı ve örnekleri",
            "E) Yukarıdakilerin HEPSİ"
        ],
        "correct": 4,
        "explanation": "Slayt 24 ve 25'te hocanın sınav için vurguladığı tüm başlıklar: Travmatik yaşantılar ve türleri, akut stres tepkisi ve otonom sinir sistemi, TSSB tanımı, pre-peri-post travmatik riskler, komorbiditeler, ASB'den farkı ve PTG örnekleridir.",
        "optionAnalysis": {
            "A": "Sınav kapsamında yer alır (Slayt 24-25).",
            "B": "Sınav kapsamında yer alır (Slayt 24-25).",
            "C": "Sınav kapsamında yer alır (Slayt 24-25).",
            "D": "Sınav kapsamında yer alır (Slayt 24-25).",
            "E": "DOĞRU. Listelenen tüm hedefler slaytlarda açıkça sınav konusu olarak duyurulmuştur."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 24, 25"
    },
    {
        "id": "q4_19",
        "question": "Çocukluk Çağı Travmaları Anketi'nin (CTQ) Türkçeye uyarlama, geçerlik ve güvenirlik çalışması (Şar et al., 2012) hangi saygın Türk bilim insanı ve ekibi tarafından gerçekleştirilmiştir?",
        "options": [
            "A) Prof. Dr. Vedat Şar",
            "B) Dr. Sigmund Freud",
            "C) Dr. Alois Alzheimer",
            "D) İbn-i Sina",
            "E) Dr. Carl Gustav Jung"
        ],
        "correct": 0,
        "explanation": "Slayt 26: 'Şar, V., et al. (2012). Turkish validation of the Childhood Trauma Questionnaire. Turkish Journal of Medical Sciences, 32, 1054–1063.' CTQ Türkiye uyarlaması Prof. Dr. Vedat Şar ve ekibine aittir.",
        "optionAnalysis": {
            "A": "DOĞRU. Slayt 26 referansı: Şar, V. ve ekibi (2012).",
            "B": "Yanlış. Freud psikanalizin kurucusudur, 2012 ölçek çalışması yapamaz.",
            "C": "Yanlış. Alzheimer hastalığını tanımlayan nöropatologdur.",
            "D": "Yanlış. Orta çağ tıp bilginidir.",
            "E": "Yanlış. Analitik psikolojinin kurucusudur."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 26 & Şar et al. (2012)"
    },
    {
        "id": "q4_20",
        "question": "Travmatik bir olay yaşayan bir bireyde semptomların Kriter H (Dışlama Kriteri) uyarınca değerlendirilmesi ne anlama gelir?",
        "options": [
            "A) Hastanın hiçbir hastaneye kabul edilmemesi",
            "B) Belirtilerin bir maddenin (örneğin ilaç veya alkol/uyuşturucu) fizyolojik etkilerine veya başka bir genel tıbbi duruma (örneğin kafa travması, hipertiroidi) bağlı olmadığının doğrulanması",
            "C) Hastanın tüm akrabalarıyla görüşmesinin yasaklanması",
            "D) Tanı konulduktan sonra hastanın işten kovulması",
            "E) Kişinin artık hiçbir hukuki hakka sahip olmaması"
        ],
        "correct": 1,
        "explanation": "Slayt 8: 'Criterion H: Exclusion: The disturbance is not attributable to the physiological effects of a substance or another medical condition.' Tıptaki diferansiyel tanı (ayırıcı tanı) kuralıdır; semptomlar madde suistimali, yoksunluk veya kafa travması gibi tıbbi durumlarla açıklanamaz olmalıdır.",
        "optionAnalysis": {
            "A": "Yanlış. Dışlama kriteri hastaneden kovmak demek değildir.",
            "B": "DOĞRU. Kriter H'nin açık tıbbi karşılığı: Madde veya genel tıbbi durum etkilerinin dışlanmasıdır.",
            "C": "Yanlış. Sosyal izolasyon tıbbi bir tanı kriteri olamaz.",
            "D": "Yanlış. İş güvencesiyle ilgili değil, tıbbi ayırıcı tanıyla ilgilidir.",
            "E": "Yanlış. Hukuki hak kaybı söz konusu değildir."
        },
        "sourceRef": "ABUtrauma5.pptx, Slayt 8 & DSM-5-TR (2022)"
    }
]

content = "// ==========================================================================\n"
content += "// PSYC 4115: The Psychology of Trauma - KAYNAK 4 ÇOKTAN SEÇMELİ TESTİ (20 SORU)\n"
content += "// Kaynak: ABUtrauma5.pptx (Hafta 5)\n"
content += "// ==========================================================================\n\n"
content += "const QUESTIONS_SOURCE4 = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n"

with open("js/data_q4.js", "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated js/data_q4.js with {len(questions)} questions successfully!")
