(function () {
  var STORAGE_KEY = "acesoai-lang";

  var STRINGS = {
    en: {
      metaDescription:
        "AcesoAI — agentic medical intelligence: real-time clinical speech, weight management, and connected health records.",
      skipLink: "Skip to content",
      logoAria: "AcesoAI home",
      navSolutions: "Solutions",
      navContact: "Contact",
      langGroupAria: "Language",
      pageTitle: "AcesoAI — Agentic Medical Intelligence",
      heroEyebrow: "Agentic medical intelligence",
      heroTitle1: "Care that listens,",
      heroTitle2: "learns, and acts.",
      heroLead:
        "AcesoAI brings together real-time clinical conversation capture, evidence-based weight care, and a unified medical information layer — so teams spend less time on documentation and more time with patients.",
      heroTalk: "Talk to us",
      heroExplore: "Explore solutions",
      featuresH2: "Built for modern care delivery",
      featuresLead:
        "Three integrated capabilities designed to feel invisible in the workflow — fast, private by design, and ready for your stack.",
      feature1Title: "Real-time speech & summarization",
      feature1Body:
        "Capture encounters as they happen. Streaming transcription and structured summaries help clinicians review, hand off, and code with clarity — without breaking eye contact with the patient.",
      feature1Demo: "Live demo",
      feature1DemoAria: "Open real-time speech and summarization demo in a new tab",
      feature2Title: "Weight control & longitudinal support",
      feature2Body:
        "Agent-guided coaching that adapts to goals, medications, and lifestyle. Surface trends, nudges, and clinician-ready snapshots so obesity and metabolic care stay continuous, not episodic.",
      feature2Demo: "Live demo",
      feature2DemoAria: "Open weight control demo in a new tab",
      feature3Title: "Medical information system",
      feature3Body:
        "A coherent view across encounters, devices, and protocols. Query what matters, reconcile discrepancies, and keep the record aligned with how your organization actually practices medicine.",
      bandQuote:
        "We believe the best medical AI disappears into the room — ambient, accurate, and accountable to the people it serves.",
      bandCredit: "— AcesoAI",
      ctaH2: "Partner with AcesoAI",
      ctaLead:
        "Whether you are a health system, digital health company, or research group, we would like to hear what you are building.",
      ctaEmail: "business@acesoai.pro",
    },
    "zh-TW": {
      metaDescription:
        "AcesoAI 智慧醫療代理：即時臨床語音、體重管理與整合性醫療資訊。",
      skipLink: "跳至主要內容",
      logoAria: "AcesoAI 首頁",
      navSolutions: "解決方案",
      navContact: "聯絡我們",
      langGroupAria: "語言",
      pageTitle: "AcesoAI — 智慧型醫療代理",
      heroEyebrow: "智慧型醫療代理",
      heroTitle1: "真正傾聽的照護，",
      heroTitle2: "持續學習並付諸行動。",
      heroLead:
        "AcesoAI 整合即時診間對話擷取、循證體重照護與統一的醫療資訊層，讓團隊少花時間在文書、多花時間在病人身上。",
      heroTalk: "與我們聯繫",
      heroExplore: "了解方案",
      featuresH2: "為現代醫療而打造",
      featuresLead:
        "三項深度整合的能力，融入流程而不干擾——快速、隱私優先、並可串接您的系統。",
      feature1Title: "即時語音與摘要",
      feature1Body:
        "在診間當下即可擷取。串流轉寫與結構化摘要協助醫師複核、交班與編碼更清晰——無需中斷與病人的眼神交流。",
      feature1Demo: "試用示範",
      feature1DemoAria: "在新分頁開啟即時語音與摘要示範",
      feature2Title: "體重管理與長期支持",
      feature2Body:
        "由代理驅動的衛教，依目標、用藥與生活型態調整。呈現趨勢、提醒與可供臨床參考的摘要，讓肥胖與代謝照護連貫而不只是單次看診。",
      feature2Demo: "試用示範",
      feature2DemoAria: "在新分頁開啟體重管理示範",
      feature3Title: "醫療資訊系統",
      feature3Body:
        "橫跨看診、儀器與流程的一致視角。查詢重點、比對歧異，並讓病歷與貴院實際執業方式保持一致。",
      bandQuote:
        "我們相信最好的醫療 AI 會消融於診間——無感、精準，並對它所服務的人負責。",
      bandCredit: "— AcesoAI",
      ctaH2: "與 AcesoAI 合作",
      ctaLead:
        "無論您是醫療體系、數位健康公司或研究團隊，我們都期待聆聽您的計畫。",
      ctaEmail: "business@acesoai.pro",
    },
    ja: {
      metaDescription:
        "AcesoAI — エージェント型医療インテリジェンス：リアルタイム臨床音声、体重管理、統合医療情報。",
      skipLink: "本文へスキップ",
      logoAria: "AcesoAI ホーム",
      navSolutions: "ソリューション",
      navContact: "お問い合わせ",
      langGroupAria: "言語",
      pageTitle: "AcesoAI — エージェント型医療インテリジェンス",
      heroEyebrow: "エージェント型医療インテリジェンス",
      heroTitle1: "傾聴し、",
      heroTitle2: "学び、行動するケア。",
      heroLead:
        "AcesoAI はリアルタイムの診療会話の記録、エビデンスに基づく体重管理、統合された医療情報レイヤーをひとつにまとめ、文書作業の時間を減らし患者との時間を増やします。",
      heroTalk: "お問い合わせ",
      heroExplore: "ソリューションを見る",
      featuresH2: "現代の医療提供のために",
      featuresLead:
        "ワークフローに溶け込む三つの統合機能——高速、プライバシー優先、あなたのスタックに接続可能。",
      feature1Title: "リアルタイム音声と要約",
      feature1Body:
        "診察のその場で記録。ストリーミング転写と構造化された要約が、振り返り、申し送り、コーディングを明瞭に——患者との視線を切らずに。",
      feature1Demo: "ライブデモ",
      feature1DemoAria: "リアルタイム音声と要約のデモを新しいタブで開く",
      feature2Title: "体重管理と長期的サポート",
      feature2Body:
        "目標・投薬・生活習慣に応じて適応するエージェント型コーチング。トレンド、リマインダー、臨床向けスナップショットを提示し、肥満と代謝のケアを単発ではなく継続的に。",
      feature2Demo: "ライブデモ",
      feature2DemoAria: "体重管理デモを新しいタブで開く",
      feature3Title: "医療情報システム",
      feature3Body:
        "診療、デバイス、プロトコルを横断する一貫したビュー。重要なことを問い合わせ、矛盾を調整し、組織の実際の診療に記録を揃えます。",
      bandQuote:
        "最高の医療AIは診察室に溶け込む——環境的で、正確で、支える人々に説明責任を果たすものだと私たちは考えます。",
      bandCredit: "— AcesoAI",
      ctaH2: "AcesoAI とパートナーになる",
      ctaLead:
        "医療システム、デジタルヘルス企業、研究グループのいずれでも、ぜひ取り組みをお聞かせください。",
      ctaEmail: "business@acesoai.pro",
    },
  };

  function detectLocale() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && STRINGS[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("ja")) return "ja";
    if (
      nav === "zh-tw" ||
      nav === "zh-hant" ||
      nav.startsWith("zh-hk") ||
      nav.startsWith("zh-mo")
    )
      return "zh-TW";
    return "en";
  }

  function applyLocale(lang) {
    if (!STRINGS[lang]) lang = "en";
    var t = STRINGS[lang];
    document.documentElement.lang = lang === "zh-TW" ? "zh-TW" : lang;

    document.title = t.pageTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t.metaDescription);

    var logo = document.querySelector(".logo");
    if (logo) logo.setAttribute("aria-label", t.logoAria);

    var map = {
      "i18n-skip": "skipLink",
      "i18n-nav-solutions": "navSolutions",
      "i18n-nav-contact": "navContact",
      "i18n-hero-eyebrow": "heroEyebrow",
      "i18n-hero-title-1": "heroTitle1",
      "i18n-hero-title-2": "heroTitle2",
      "i18n-hero-lead": "heroLead",
      "i18n-hero-talk": "heroTalk",
      "i18n-hero-explore": "heroExplore",
      "i18n-features-h2": "featuresH2",
      "i18n-features-lead": "featuresLead",
      "i18n-f1-title": "feature1Title",
      "i18n-f1-body": "feature1Body",
      "i18n-f1-demo": "feature1Demo",
      "i18n-f2-title": "feature2Title",
      "i18n-f2-body": "feature2Body",
      "i18n-f2-demo": "feature2Demo",
      "i18n-f3-title": "feature3Title",
      "i18n-f3-body": "feature3Body",
      "i18n-band-quote": "bandQuote",
      "i18n-band-credit": "bandCredit",
      "i18n-cta-h2": "ctaH2",
      "i18n-cta-lead": "ctaLead",
      "i18n-cta-email": "ctaEmail",
    };

    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.textContent = t[map[id]];
    });

    var d1 = document.getElementById("feature-demo-speech");
    if (d1) d1.setAttribute("aria-label", t.feature1DemoAria);
    var d2 = document.getElementById("feature-demo-weight");
    if (d2) d2.setAttribute("aria-label", t.feature2DemoAria);

    var langGroup = document.getElementById("lang-switch");
    if (langGroup) langGroup.setAttribute("aria-label", t.langGroupAria);

    ["en", "zh-TW", "ja"].forEach(function (code) {
      var btn = document.querySelector(
        '.lang-switch__btn[data-locale="' + code + '"]'
      );
      if (btn) btn.setAttribute("aria-pressed", code === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function initLangButtons() {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var loc = btn.getAttribute("data-locale");
        if (loc && STRINGS[loc]) applyLocale(loc);
      });
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  applyLocale(detectLocale());
  initLangButtons();
})();
