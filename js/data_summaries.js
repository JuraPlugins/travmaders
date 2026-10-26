// ==========================================================================
// PSYC 4115: The Psychology of Trauma - KARŞILAŞTIRMA MATRİSLERİ VE KARAR AĞAÇLARI
// ==========================================================================

const COMPARISON_DATA = {
  asb_vs_tssb: {
    title: "Akut Stres Bozukluğu (ASB) vs Travma Sonrası Stres Bozukluğu (TSSB)",
    description: "DSM-5-TR çerçevesinde iki kardeş travma bozukluğunun karşılaştırmalı analizi",
    rows: [
      {
        feature: "Semptom Süresi (Duration)",
        asb: "3 gün ile 1 ay arası (3 days – 1 month)",
        tssb: "1 aydan uzun süre (> 1 month)",
        clinicalNote: "Ayırıcı tanının en temel ve kesin kriteridir."
      },
      {
        feature: "Semptom Eşik Kuralı",
        asb: "14 semptomdan EN AZ 9'u (herhangi bir alandan)",
        tssb: "Kriter B (≥1), Kriter C (≥1), Kriter D (≥2), Kriter E (≥2)",
        clinicalNote: "ASB küme kotası aramazken, TSSB her kümeden ayrı kota ister."
      },
      {
        feature: "Disosiasyonun Rolü",
        asb: "DSM-5 ile zorunlu olmaktan çıkarılmıştır (14 belirtiden biridir)",
        tssb: "Ek klinik belirteçtir ('Disosiyatif Alt Tip')",
        clinicalNote: "DSM-IV'te ASB için disosiasyon şarttı, DSM-5 kaldırdı."
      },
      {
        feature: "Geçiş ve Risk İlişkisi",
        asb: "TSSB için çok güçlü erken göstergedir",
        tssb: "ASB olmadan da doğrudan veya gecikmeli başlayabilir",
        clinicalNote: "Keane vd. (2006): Trafik kazasında ASB olanların %83'ü TSSB geliştirdi."
      },
      {
        feature: "İlk Tanımlandığı Sürüm",
        asb: "DSM-IV (1994)",
        tssb: "DSM-III (1980)",
        clinicalNote: "TSSB Vietnam gazileri sayesinde DSM-III'e girmiştir."
      }
    ]
  },

  dsm5_vs_icd11: {
    title: "DSM-5-TR vs Dünya Sağlık Örgütü ICD-11 Karşılaştırması",
    description: "Amerikan Psikiyatri Birliği ile WHO'nun tanısal yaklaşım ve nozoloji farkları",
    rows: [
      {
        feature: "Tanısal Genişlik",
        dsm5: "Geniş semptom yelpazesi, 4 ayrı belirti kümesi",
        icd11: "Daha dar, katı ve özgül 3 çekirdek belirti",
        clinicalNote: "ICD-11 gereksiz eştanıları önlemek için çekirdeği daraltmıştır."
      },
      {
        feature: "Çekirdek Semptom Kümeleri",
        dsm5: "İntrüzyon (B), Kaçınma (C), Olumsuz Biliş/Duygu (D), Uyarılma (E)",
        icd11: "1) Burada-ve-şimdi yeniden yaşantılama, 2) Kaçınma, 3) Kalıcı tehdit hissi",
        clinicalNote: "ICD-11'de sıradan anılar değil, olayı o an yaşıyormuş gibi hissetme aranır."
      },
      {
        feature: "Kompleks TSSB (CPTSD)",
        dsm5: "Ayrı bir resmi tanı DEĞİLDİR (semptom spektrumudur)",
        icd11: "RESMİ VE BAĞIMSIZ bir tanı kategorisidir",
        clinicalNote: "ICD-11 Kompleks TSSB = Çekirdek TSSB + Kendilik Örgütlenmesinde Bozulma (DSO)."
      },
      {
        feature: "Disosiyatif Belirtiler",
        dsm5: "TSSB'nin resmi bir alt tipi (Depersonalizasyon/Derealizasyon)",
        icd11: "Disosiyatif bozukluklar ana başlığıyla ayrı değerlendirilir",
        clinicalNote: "DSM-5-TR'de alt tip tanısı farmakoterapi seçimini etkileyebilir."
      }
    ]
  },

  sns_vs_pns: {
    title: "Sempatik Sinir Sistemi (SNS) vs Parasempatik Sinir Sistemi (PNS)",
    description: "Otonom Sinir Sisteminin Stres ve Gevşeme Kutupları",
    rows: [
      {
        organ: "Göz Bebekleri (Pupiller)",
        sns: "Genişler / Büyür (Midriyazis - Tehdidi daha iyi görmek için)",
        pns: "Küçülür / Büzüşür (Miyozis - Işıktan korur, gevşeme)"
      },
      {
        organ: "Kalp Atış Hızı ve Debisi",
        sns: "Hızlanır, kan basıncı tavan yapar, kaslara kan pompalar",
        pns: "Yavaşlar, sakinleşir, kan basıncı normale döner"
      },
      {
        organ: "Solunum ve Bronşlar",
        sns: "Hızlanır, bronşlar genişler (oksijen alımı artar)",
        pns: "Sakinleşir, derinleşir, bronşlar daralır"
      },
      {
        organ: "Sindirim Sistemi (Mide & Bağırsak)",
        sns: "YAVAŞLAR VE DURUR! (Enerji hayati organlara aktarılır)",
        pns: "HIZLANIR VE AKTİVE OLUR (Besin sindirimi ve emilimi başlar)"
      },
      {
        organ: "Böbrek Üstü Bezleri",
        sns: "Adrenalin ve Noradrenalin salgılar (Alarm durumu)",
        pns: "Salgı durur, enerji tasarrufu ve homeostazis sağlanır"
      },
      {
        organ: "Evrimsel / İşlevsel Amaç",
        sns: "'Savaş ya da Kaç' (Fight or Flight) - Enerji Mobilizasyonu",
        pns: "'Dinlen ve Sindir' (Rest and Digest) - Enerji Korunumu"
      }
    ]
  }
};

// Sınavda En Çok Çıkan 10 Kritik Nokta (High-Yield Pearls)
const HIGH_YIELD_PEARLS = [
  {
    title: "1. Kriter A Medya Kuralı",
    content: "Sıradan vatandaşların televizyon, internet veya haberlerden travma izlemesi Kriter A SAYILMAZ. Sadece polis, ilk müdahale ekibi, adli tıp uzmanı gibi mesleki görev icabı ayrıntılara maruziyet Kriter A kapsamındadır."
  },
  {
    title: "2. Süre Sınırı: ASB vs TSSB",
    content: "Travma sonrası 3 gün - 1 ay arası = Akut Stres Bozukluğu (ASB). 1 aydan uzun süre (>1 ay) = Travma Sonrası Stres Bozukluğu (TSSB). En temel fark süredir."
  },
  {
    title: "3. Keane vd. (2006) %83 Verisi",
    content: "Trafik kazası sonrası erken dönemde ASB tanısı alan bireylerin %83'ü ilerleyen süreçte TSSB tanısı almıştır. ASB, TSSB için güçlü bir risk habercisidir."
  },
  {
    title: "4. Nörobiyolojik Triad",
    content: "TSSB'de Amigdala HİPERAKTİF (aşırı korku/alarm), Medial Prefrontal Korteks HİPOAKTİF (korkuyu frenleyemez), Hipokampus HACİM KAYBINA UĞRAR (bağlamsal bellek bozulur)."
  },
  {
    title: "5. HPA Ekseni Sıralaması",
    content: "Hipotalamus (CRH) → Ön Hipofiz (ACTH) → Adrenal Korteks (Kortizol). Kronik streste kortizol hipokampal nörotoksisiteye yol açar."
  },
  {
    title: "6. PTG Acıyla Bir Arada Bulunabilir",
    content: "Travma Sonrası Büyüme (PTG) bir zorunluluk değil, bir olasılıktır. Acının tamamen bitmesi anlamına gelmez; yoğun TSSB belirtileri ve psikolojik acı ile aynı anda bir arada (co-exist) bulunabilir."
  },
  {
    title: "7. Gazilerde Yaşam Felsefesi & Bilişsel Esneklik (Hijazi 2015)",
    content: "Savaş gazilerinde en yüksek PTG boyutu 'Yaşam felsefesinde değişim'dir (ölümle yüzleşme nedeniyle). Büyümeyi en çok artıran zihinsel yeti ise 'Bilişsel Esneklik'tir."
  },
  {
    title: "8. McLaughlin & Sheridan: Tehdit vs Yoksunluk",
    content: "Tehdit (istismar, şiddet) korku ve amigdala devrelerini etkiler. Yoksunluk (ihmal, uyarım eksikliği) kortikal incelme ve bilişsel/lisan gelişimini sekteye uğratır."
  },
  {
    title: "9. DSM Tarihsel Kronolojisi",
    content: "WWI (Shell Shock) → WWII (War Neurosis) → DSM-I 1952 (Gross Stress Reaction) → DSM-II 1968 (Transient Situational Disturbance) → DSM-III 1980 (PTSD ilk kez resmen tanımlandı)."
  },
  {
    title: "10. CTQ İnkar / Minimizasyon Maddeleri",
    content: "'Mükemmel bir çocukluğum vardı', 'Dünyanın en iyi ailesine sahiptim' maddeleri ailenin iyiliğini değil, katılımcının travmayı inkar etme eğilimini (Minimizasyon/İnkar geçerlik skalası) ölçer."
  }
];
