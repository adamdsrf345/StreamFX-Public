const SITE_LOCK_ENABLED = false;
const SITE_LOCK_CODE = "BIZ2025";
const STORAGE_KEYS = {
  lang: "bizjourney_lang",
  plan: "bizjourney_plan",
  planSummary: "bizjourney_plan_summary",
  bestScore: "bizjourney_bestScore",
  quizAttempts: "bizjourney_quizAttempts",
  isAdmin: "bizjourney_isAdmin"
};

const translations = {
  ar: {
    brand: "رحلة الأعمال | BizJourney",
    "nav.home": "الرئيسية",
    "nav.ownership": "الهياكل",
    "nav.plan": "الخطة",
    "nav.global": "العالمية",
    "nav.quiz": "الاختبار",
    "nav.login": "تسجيل الدخول",
    "nav.admin": "لوحة التحكم",
    "landing.badge": "منهج مصغّر",
    "landing.title": "ابدأ رحلتك في عالم الأعمال",
    "landing.subtitle": "تطبيق تفاعلي يساعدك على فهم الملكية، بناء خطة مشروع، واستكشاف التصدير.",
    "landing.feature1.title": "الهياكل القانونية",
    "landing.feature1.desc": "تعرف على أنواع الملكية والمسؤوليات لكل شكل.",
    "landing.feature2.title": "بناء خطة عمل",
    "landing.feature2.desc": "اتبع خطوات بسيطة لصياغة خطة متكاملة.",
    "landing.feature3.title": "التجارة العالمية",
    "landing.feature3.desc": "حاكي قرارات التصدير واختر الأسواق المناسبة.",
    "landing.feature4.title": "اختبار نهائي",
    "landing.feature4.desc": "قيّم فهمك واحفظ أفضل نتيجة.",
    "landing.cta": "ابدأ التعلم",
    "landing.cta.quiz": "جرّب الاختبار",
    "ownership.badge": "الوحدة 1",
    "ownership.title": "هياكل الملكية",
    "ownership.subtitle": "قارن بين الأنواع المختلفة واختر ما يناسب مشروعك.",
    "ownership.toPlan": "تابع إلى الخطة",
    "ownership.sole.title": "ملكية فردية",
    "ownership.sole.badge": "بسيطة",
    "ownership.sole.liability": "مسؤولية شخصية كاملة عن الديون.",
    "ownership.sole.capital": "رأس المال محدود غالبًا بمدخراتك.",
    "ownership.sole.control": "اتخاذ القرار سريع وفردي.",
    "ownership.sole.speed": "الانطلاق سريع مع متطلبات قليلة.",
    "ownership.partner.title": "شركة أشخاص",
    "ownership.partner.badge": "تشاركية",
    "ownership.partner.liability": "مسؤولية مشتركة بين الشركاء.",
    "ownership.partner.capital": "رأس مال أكبر مع تعدد المساهمين.",
    "ownership.partner.control": "قرارات جماعية تحتاج لتنسيق.",
    "ownership.partner.speed": "إجراءات تأسيس متوسطة السرعة.",
    "ownership.corp.title": "شركة مساهمة / محدودة",
    "ownership.corp.badge": "حماية",
    "ownership.corp.liability": "مسؤولية محدودة على حدود الحصة.",
    "ownership.corp.capital": "إمكانية جذب استثمارات أكبر.",
    "ownership.corp.control": "مجلس إدارة ولوائح داخلية.",
    "ownership.corp.speed": "تأسيس أطول لكنه يوفر حماية قانونية.",
    "ownership.quiz.title": "اختبار سريع",
    "ownership.quiz.subtitle": "أجب عن الأسئلة واحصل على تغذية راجعة فورية.",
    "ownership.quiz.submit": "عرض النتيجة",
    "plan.badge": "الخطة",
    "plan.title": "مُنشئ خطة العمل",
    "plan.subtitle": "اتبع الخطوات الست لبلورة فكرتك بسرعة.",
    "plan.prev": "السابق",
    "plan.next": "التالي",
    "plan.finish": "إنهاء",
    "plan.summary.title": "ملخص خطتك",
    "plan.summary.subtitle": "احتفظ به وشاركه مع فريقك.",
    "plan.copy": "نسخ الملخص",
    "plan.toGlobal": "الانتقال إلى التجارة العالمية",
    "plan.step1.title": "الفكرة والهدف",
    "plan.step1.label1": "اسم الفكرة",
    "plan.step1.label2": "الهدف الأساسي",
    "plan.step1.ph1": "تطبيق تعليمي",
    "plan.step1.ph2": "تمكين المتعلمين",
    "plan.step2.title": "السوق والعملاء",
    "plan.step2.label1": "العميل المستهدف",
    "plan.step2.label2": "المشكلة التي تحلها",
    "plan.step2.ph1": "شباب 18-30",
    "plan.step2.ph2": "قلة الموارد التدريبية",
    "plan.step3.title": "القيمة والمنتج",
    "plan.step3.label1": "القيمة المقترحة",
    "plan.step3.label2": "قنوات التوزيع",
    "plan.step3.ph1": "تجربة تعلم تفاعلية",
    "plan.step3.ph2": "متجر تطبيقات / موقع",
    "plan.step4.title": "التكاليف",
    "plan.step4.label1": "أهم التكاليف",
    "plan.step4.label2": "الموارد الأساسية",
    "plan.step4.ph1": "تطوير، تسويق",
    "plan.step4.ph2": "فريق تقني، محتوى",
    "plan.step5.title": "الإيرادات",
    "plan.step5.label1": "مصادر الدخل",
    "plan.step5.label2": "نموذج التسعير",
    "plan.step5.ph1": "اشتراكات، دورات مدفوعة",
    "plan.step5.ph2": "شهري / سنوي",
    "plan.step6.title": "المخاطر والخطوات",
    "plan.step6.label1": "أهم المخاطر",
    "plan.step6.label2": "الخطوة التالية",
    "plan.step6.ph1": "منافسة قوية",
    "plan.step6.ph2": "إطلاق نسخة تجريبية",
    "global.badge": "الوحدة 2",
    "global.title": "التوسع العالمي",
    "global.subtitle": "اختر المنتج والسوق لتحصل على نصائح سريعة.",
    "global.toQuiz": "الاختبار النهائي",
    "global.sim.title": "محاكي التجارة",
    "global.sim.subtitle": "جرّب سيناريوهات تصدير متنوعة.",
    "global.product": "نوع المنتج",
    "global.product.digital": "منتج رقمي",
    "global.product.clothing": "ملابس",
    "global.product.food": "أغذية",
    "global.region": "المنطقة المستهدفة",
    "global.region.mena": "الشرق الأوسط",
    "global.region.europe": "أوروبا",
    "global.region.asia": "آسيا",
    "global.scale": "حجم العملية",
    "global.scale.small": "صغير",
    "global.scale.medium": "متوسط",
    "global.scale.large": "كبير",
    "global.run": "شغّل المحاكي",
    "global.tips.title": "نصائح التوسع",
    "global.tip1": "افهم لوائح الجمارك وبيانات التصدير لكل سوق.",
    "global.tip2": "جهّز خطة لوجستية بديلة لتقليل المخاطر.",
    "global.tip3": "وائم المنتج مع الثقافة المحلية والتشريعات.",
    "global.tip4": "ابدأ بحجم صغير لاختبار الطلب ثم وسّع تدريجيًا.",
    "final.badge": "التقييم",
    "final.title": "الاختبار النهائي",
    "final.subtitle": "أسئلة تجمع بين الملكية، التخطيط، والتجارة العالمية.",
    "final.submit": "إرسال الإجابات",
    "final.best": "أفضل نتيجة: 0 / 20",
    "login.title": "دخول المشرف",
    "login.subtitle": "استخدم بيانات الدخول التجريبية.",
    "login.email": "البريد الإلكتروني",
    "login.password": "كلمة المرور",
    "login.button": "تسجيل الدخول",
    "admin.badge": "المشرف",
    "admin.title": "لوحة التحكم",
    "admin.subtitle": "إدارة البيانات المخزنة وخطط المستخدمين.",
    "admin.clear": "مسح البيانات",
    "admin.logout": "تسجيل الخروج",
    "admin.plan.title": "الخطط المحفوظة",
    "admin.quiz.title": "نتائج الاختبارات",
    "lock.title": "النظام مغلق مؤقتًا",
    "lock.subtitle": "أدخل رمز الدخول للمتابعة",
    "lock.submit": "دخول"
  },
  en: {
    brand: "BizJourney | رحلة الأعمال",
    "nav.home": "Home",
    "nav.ownership": "Ownership",
    "nav.plan": "Plan",
    "nav.global": "Global",
    "nav.quiz": "Final Quiz",
    "nav.login": "Login",
    "nav.admin": "Admin",
    "landing.badge": "Micro Curriculum",
    "landing.title": "Start your business journey",
    "landing.subtitle": "An interactive app to learn ownership models, build a plan, and explore exporting.",
    "landing.feature1.title": "Ownership structures",
    "landing.feature1.desc": "Learn liability and control for each model.",
    "landing.feature2.title": "Business plan",
    "landing.feature2.desc": "Follow simple steps to craft a solid plan.",
    "landing.feature3.title": "Global trade",
    "landing.feature3.desc": "Simulate export choices and pick markets.",
    "landing.feature4.title": "Final quiz",
    "landing.feature4.desc": "Measure your understanding and track your best score.",
    "landing.cta": "Start learning",
    "landing.cta.quiz": "Try the quiz",
    "ownership.badge": "Module 1",
    "ownership.title": "Ownership structures",
    "ownership.subtitle": "Compare types and pick the right fit.",
    "ownership.toPlan": "Continue to plan",
    "ownership.sole.title": "Sole proprietorship",
    "ownership.sole.badge": "Simple",
    "ownership.sole.liability": "Full personal liability for debts.",
    "ownership.sole.capital": "Capital is limited to your savings.",
    "ownership.sole.control": "Fast, individual decision making.",
    "ownership.sole.speed": "Quick start with few requirements.",
    "ownership.partner.title": "Partnership",
    "ownership.partner.badge": "Collaborative",
    "ownership.partner.liability": "Shared liability among partners.",
    "ownership.partner.capital": "Higher capital through multiple investors.",
    "ownership.partner.control": "Decisions require coordination.",
    "ownership.partner.speed": "Medium setup time.",
    "ownership.corp.title": "Corporation / LLC",
    "ownership.corp.badge": "Protection",
    "ownership.corp.liability": "Limited liability to the share.",
    "ownership.corp.capital": "Can attract larger investments.",
    "ownership.corp.control": "Board governance and bylaws.",
    "ownership.corp.speed": "Slower setup but legal protection.",
    "ownership.quiz.title": "Quick quiz",
    "ownership.quiz.subtitle": "Get instant feedback for each answer.",
    "ownership.quiz.submit": "Show score",
    "plan.badge": "Plan",
    "plan.title": "Business plan builder",
    "plan.subtitle": "Complete six guided steps.",
    "plan.prev": "Previous",
    "plan.next": "Next",
    "plan.finish": "Finish",
    "plan.summary.title": "Your plan summary",
    "plan.summary.subtitle": "Keep it and share with your team.",
    "plan.copy": "Copy summary",
    "plan.toGlobal": "Go to Global Trade",
    "plan.step1.title": "Idea & Mission",
    "plan.step1.label1": "Idea name",
    "plan.step1.label2": "Main mission",
    "plan.step1.ph1": "Educational app",
    "plan.step1.ph2": "Empower learners",
    "plan.step2.title": "Market & Audience",
    "plan.step2.label1": "Target customer",
    "plan.step2.label2": "Problem you solve",
    "plan.step2.ph1": "Youth 18-30",
    "plan.step2.ph2": "Limited training resources",
    "plan.step3.title": "Value & Product",
    "plan.step3.label1": "Value proposition",
    "plan.step3.label2": "Distribution channels",
    "plan.step3.ph1": "Interactive learning experience",
    "plan.step3.ph2": "App store / website",
    "plan.step4.title": "Costs",
    "plan.step4.label1": "Key costs",
    "plan.step4.label2": "Core resources",
    "plan.step4.ph1": "Development, marketing",
    "plan.step4.ph2": "Tech team, content",
    "plan.step5.title": "Revenue",
    "plan.step5.label1": "Revenue streams",
    "plan.step5.label2": "Pricing model",
    "plan.step5.ph1": "Subscriptions, paid courses",
    "plan.step5.ph2": "Monthly / yearly",
    "plan.step6.title": "Risks & Next steps",
    "plan.step6.label1": "Main risks",
    "plan.step6.label2": "Next action",
    "plan.step6.ph1": "Strong competition",
    "plan.step6.ph2": "Launch beta version",
    "global.badge": "Module 2",
    "global.title": "Going global",
    "global.subtitle": "Pick product and market for quick tips.",
    "global.toQuiz": "Final quiz",
    "global.sim.title": "Trade simulator",
    "global.sim.subtitle": "Try export scenarios.",
    "global.product": "Product type",
    "global.product.digital": "Digital product",
    "global.product.clothing": "Clothing",
    "global.product.food": "Food",
    "global.region": "Target region",
    "global.region.mena": "Middle East",
    "global.region.europe": "Europe",
    "global.region.asia": "Asia",
    "global.scale": "Scale",
    "global.scale.small": "Small",
    "global.scale.medium": "Medium",
    "global.scale.large": "Large",
    "global.run": "Run simulator",
    "global.tips.title": "Expansion tips",
    "global.tip1": "Understand customs rules for each market.",
    "global.tip2": "Prepare backup logistics to reduce risk.",
    "global.tip3": "Adapt the product to culture and laws.",
    "global.tip4": "Start small, test demand, then scale.",
    "final.badge": "Assessment",
    "final.title": "Final quiz",
    "final.subtitle": "Questions about ownership, planning, and trade.",
    "final.submit": "Submit answers",
    "final.best": "Best score: 0 / 20",
    "login.title": "Admin login",
    "login.subtitle": "Use the demo credentials.",
    "login.email": "Email",
    "login.password": "Password",
    "login.button": "Login",
    "admin.badge": "Admin",
    "admin.title": "Dashboard",
    "admin.subtitle": "Manage stored data and user plans.",
    "admin.clear": "Clear data",
    "admin.logout": "Logout",
    "admin.plan.title": "Saved plans",
    "admin.quiz.title": "Quiz attempts",
    "lock.title": "Site locked",
    "lock.subtitle": "Enter access code to continue",
    "lock.submit": "Enter"
  }
};

function t(key) {
  const langPack = translations[currentLang] || translations.ar;
  return langPack[key] || translations.ar[key] || key;
}

const ownershipQuestions = [
  {
    id: "o1",
    question: { ar: "أي هيكل يوفر أسرع إطلاق للمشروع؟", en: "Which structure lets you launch fastest?" },
    options: {
      ar: ["ملكية فردية", "شركة أشخاص", "شركة مساهمة"],
      en: ["Sole proprietorship", "Partnership", "Corporation"]
    },
    correctIndex: 0,
    explanation: { ar: "الملكية الفردية أبسط من ناحية المتطلبات والإجراءات.", en: "Sole proprietorship has the simplest requirements." }
  },
  {
    id: "o2",
    question: { ar: "أي خيار يمنح حماية مسؤولية محدودة؟", en: "Which option offers limited liability protection?" },
    options: {
      ar: ["شراكة", "شركة مساهمة/محدودة", "ملكية فردية"],
      en: ["Partnership", "Corporation/LLC", "Sole proprietorship"]
    },
    correctIndex: 1,
    explanation: { ar: "الشركة المساهمة أو المحدودة تفصل الذمة المالية للملاك.", en: "Corporations/LLCs separate owners from company liabilities." }
  },
  {
    id: "o3",
    question: { ar: "أفضل هيكل لجذب استثمارات كبيرة؟", en: "Best structure to attract significant investment?" },
    options: {
      ar: ["ملكية فردية", "شركة مساهمة", "شركة أشخاص"],
      en: ["Sole proprietorship", "Corporation", "Partnership"]
    },
    correctIndex: 1,
    explanation: { ar: "الشركة المساهمة تسهل دخول مستثمرين جدد.", en: "Corporations make it easier to onboard investors." }
  },
  {
    id: "o4",
    question: { ar: "عند الرغبة في قرار سريع دون تشاور، الهيكل المناسب هو؟", en: "For quick solo decisions, which structure fits?" },
    options: {
      ar: ["شركة مساهمة", "شركة أشخاص", "ملكية فردية"],
      en: ["Corporation", "Partnership", "Sole proprietorship"]
    },
    correctIndex: 2,
    explanation: { ar: "الملكية الفردية تمنح حرية قرار كاملة.", en: "Sole proprietorship allows solo decision making." }
  },
  {
    id: "o5",
    question: { ar: "أي هيكل يتطلب تنظيمات داخلية مثل مجلس إدارة؟", en: "Which structure needs internal governance like a board?" },
    options: {
      ar: ["شركة مساهمة", "شركة أشخاص", "مشروع منزلي"],
      en: ["Corporation", "Partnership", "Home business"]
    },
    correctIndex: 0,
    explanation: { ar: "الشركة المساهمة تحتاج لوائح ومجلس إدارة.", en: "Corporations rely on bylaws and a board." }
  }
];

const planSteps = [
  {
    titleKey: "plan.step1.title",
    fields: [
      { name: "idea", labelKey: "plan.step1.label1", placeholderKey: "plan.step1.ph1" },
      { name: "mission", labelKey: "plan.step1.label2", placeholderKey: "plan.step1.ph2" }
    ]
  },
  {
    titleKey: "plan.step2.title",
    fields: [
      { name: "customer", labelKey: "plan.step2.label1", placeholderKey: "plan.step2.ph1" },
      { name: "problem", labelKey: "plan.step2.label2", placeholderKey: "plan.step2.ph2" }
    ]
  },
  {
    titleKey: "plan.step3.title",
    fields: [
      { name: "value", labelKey: "plan.step3.label1", placeholderKey: "plan.step3.ph1" },
      { name: "channels", labelKey: "plan.step3.label2", placeholderKey: "plan.step3.ph2" }
    ]
  },
  {
    titleKey: "plan.step4.title",
    fields: [
      { name: "costs", labelKey: "plan.step4.label1", placeholderKey: "plan.step4.ph1" },
      { name: "resources", labelKey: "plan.step4.label2", placeholderKey: "plan.step4.ph2" }
    ]
  },
  {
    titleKey: "plan.step5.title",
    fields: [
      { name: "revenue", labelKey: "plan.step5.label1", placeholderKey: "plan.step5.ph1" },
      { name: "pricing", labelKey: "plan.step5.label2", placeholderKey: "plan.step5.ph2" }
    ]
  },
  {
    titleKey: "plan.step6.title",
    fields: [
      { name: "risks", labelKey: "plan.step6.label1", placeholderKey: "plan.step6.ph1" },
      { name: "next", labelKey: "plan.step6.label2", placeholderKey: "plan.step6.ph2" }
    ]
  }
];

const finalQuizQuestions = [
  {
    q: { ar: "أي هيكل ملكية يناسب اختبار السوق بسرعة وبأقل تكلفة؟", en: "Which ownership suits quick, low-cost market testing?" },
    options: { ar: ["شركة مساهمة", "ملكية فردية", "شركة أشخاص"], en: ["Corporation", "Sole proprietorship", "Partnership"] },
    answer: 1
  },
  {
    q: { ar: "ما الذي يحدد مسؤولية الشركاء في شركة الأشخاص؟", en: "What defines partner liability in a partnership?" },
    options: { ar: ["حجم رأس المال", "الاتفاق بين الشركاء", "نوع المنتج"], en: ["Capital size", "Partner agreement", "Product type"] },
    answer: 1
  },
  {
    q: { ar: "في خطة العمل، حقل \"القيمة المقترحة\" يصف؟", en: "In the plan, the 'value proposition' field describes?" },
    options: { ar: ["آلية التسعير", "ما يميز عرضك للعملاء", "عدد الموظفين"], en: ["Pricing method", "What makes your offer unique", "Team size"] },
    answer: 1
  },
  {
    q: { ar: "أفضل خطوة بعد تحديد المخاطر الرئيسية هي؟", en: "Best step after identifying key risks?" },
    options: { ar: ["تجاهلها", "وضع خطط تخفيف", "تأجيل الإطلاق"], en: ["Ignore them", "Create mitigation plans", "Delay launch"] },
    answer: 1
  },
  {
    q: { ar: "عند استهداف أوروبا بمنتج غذائي يجب التركيز على؟", en: "When targeting Europe with food products, focus on?" },
    options: { ar: ["القنوات الرقمية فقط", "التوافق مع لوائح الصحة", "خفض الجودة"], en: ["Only digital channels", "Health regulation compliance", "Lowering quality"] },
    answer: 1
  },
  {
    q: { ar: "أي عنصر من التالي يمثل تكلفة ثابتة غالبًا؟", en: "Which is typically a fixed cost?" },
    options: { ar: ["الشحن لكل طلب", "الترخيص السنوي للبرمجيات", "المواد الخام"], en: ["Shipping per order", "Annual software license", "Raw materials"] },
    answer: 1
  },
  {
    q: { ar: "أفضلية إنشاء شركة مساهمة مبكرًا هي؟", en: "Advantage of forming a corporation early?" },
    options: { ar: ["سهولة القرارات الفردية", "حماية قانونية للملاك", "تكاليف تأسيس أقل"], en: ["Easier solo decisions", "Legal protection", "Lower setup cost"] },
    answer: 1
  },
  {
    q: { ar: "في محاكي التجارة، اختيار حجم \"كبير\" يعني؟", en: "In the simulator, choosing 'large' scale means?" },
    options: {
      ar: ["حجم صادرات أعلى وتحديات لوجستية أكبر", "لا توجد رسوم جمركية", "يقلل الحاجة للتسويق"],
      en: ["Higher exports with bigger logistics challenges", "No customs fees", "Less marketing needed"]
    },
    answer: 0
  },
  {
    q: { ar: "ضمن الخطة، \"العميل المستهدف\" يساعدك في؟", en: "Knowing the 'target customer' helps you?" },
    options: { ar: ["تحديد سعر الصرف", "صياغة رسائل تسويقية دقيقة", "كتابة لوائح الشركة"], en: ["Set exchange rates", "Craft precise marketing messages", "Write company bylaws"] },
    answer: 1
  },
  {
    q: { ar: "عند الدخول لسوق جديد، أول خطوة في اللوجستيات هي؟", en: "First logistics step when entering a new market?" },
    options: { ar: ["التخزين المحلي دون دراسة", "اختيار شريك شحن موثوق", "إلغاء خطة الطوارئ"], en: ["Store locally without study", "Select a reliable shipping partner", "Remove contingency plans"] },
    answer: 1
  },
  {
    q: { ar: "أفضل طريقة لزيادة رأس المال في شركة أشخاص؟", en: "Best way to raise capital in a partnership?" },
    options: { ar: ["طرح عام", "اتفاق مع شركاء جدد", "قرض شخصي فقط"], en: ["Public offering", "Agreement with new partners", "Personal loan only"] },
    answer: 1
  },
  {
    q: { ar: "في خطة الإيرادات، نموذج الاشتراك يناسب؟", en: "In revenue planning, subscriptions fit?" },
    options: { ar: ["المنتجات ذات الاستخدام المتكرر", "بيع منزل لمرة واحدة", "مشروع بناء"], en: ["Repeat-use products", "One-time house sale", "Construction project"] },
    answer: 0
  },
  {
    q: { ar: "حفظ أفضل نتيجة للاختبار يفيد في؟", en: "Saving best quiz score helps with?" },
    options: { ar: ["تجاهل التقدم", "قياس التحسن بمرور الوقت", "تغيير الأسئلة"], en: ["Ignoring progress", "Tracking improvement over time", "Changing questions"] },
    answer: 1
  },
  {
    q: { ar: "في خطة المخاطر، وجود منافس قوي يعني؟", en: "In risk planning, a strong competitor means?" },
    options: { ar: ["لا حاجة للتسويق", "ضرورة لتمييز واضح", "إلغاء المشروع فورًا"], en: ["No need for marketing", "Need a clear differentiation", "Cancel the project"] },
    answer: 1
  }
];

let currentLang = localStorage.getItem(STORAGE_KEYS.lang) || "ar";
let currentStep = 0;
let planData = loadPlanData();

function getFieldLabel(name) {
  for (const step of planSteps) {
    const match = step.fields.find((f) => f.name === name);
    if (match) return t(match.labelKey);
  }
  return name;
}

function loadPlanData() {
  const stored = localStorage.getItem(STORAGE_KEYS.plan);
  return stored ? JSON.parse(stored) : {};
}

function savePlanData() {
  localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(planData));
}

function showView(id) {
  const views = document.querySelectorAll(".view");
  views.forEach((view) => {
    view.classList.add("hidden");
    view.classList.remove("active");
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active");
    if (id === "admin-view") initAdminView();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initNavigation() {
  document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      if (target) showView(target);
    });
  });
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((el) => {
    const key = el.dataset.translate;
    const value = t(key);
    if (value) el.textContent = value;
  });
  const toggleBtn = document.getElementById("lang-toggle");
  if (toggleBtn) toggleBtn.textContent = currentLang === "ar" ? "English" : "العربية";
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEYS.lang, lang);
  applyTranslations();
  updateBestScoreDisplay();
  renderPlanFields();
  renderOwnershipQuiz();
  renderFinalQuiz();
  initIcons();
}

function initLanguage() {
  applyTranslations();
  const toggleBtn = document.getElementById("lang-toggle");
  toggleBtn.addEventListener("click", () => {
    setLanguage(currentLang === "ar" ? "en" : "ar");
  });
}

function initSiteLock() {
  const overlay = document.getElementById("site-lock-overlay");
  if (!SITE_LOCK_ENABLED) {
    overlay.classList.add("hidden");
    return;
  }
  overlay.classList.remove("hidden");
  overlay.classList.add("active");
  const input = document.getElementById("lock-code");
  const button = document.getElementById("lock-submit");
  const error = document.getElementById("lock-error");
  button.addEventListener("click", () => {
    if (input.value.trim() === SITE_LOCK_CODE) {
      overlay.classList.add("hidden");
      overlay.classList.remove("active");
      error.textContent = "";
    } else {
      error.textContent = currentLang === "ar" ? "رمز غير صحيح" : "Incorrect code";
    }
  });
}

function renderOwnershipQuiz() {
  const container = document.getElementById("ownership-quiz");
  container.innerHTML = "";
  ownershipQuestions.forEach((q, idx) => {
    const item = document.createElement("div");
    item.className = "quiz-item";
    item.innerHTML = `
      <div class="question">${idx + 1}. ${q.question[currentLang]}</div>
      <div class="options">
        ${q.options[currentLang]
          .map(
            (opt, i) => `
              <label>
                <input type="radio" name="${q.id}" value="${i}">
                <span>${opt}</span>
              </label>
            `
          )
          .join("")}
      </div>
      <div class="feedback" data-id="${q.id}"></div>
    `;
    container.appendChild(item);
  });

  container.querySelectorAll("input[type=radio]").forEach((input) => {
    input.addEventListener("change", (e) => {
      const selected = Number(e.target.value);
      const name = e.target.name;
      const question = ownershipQuestions.find((x) => x.id === name);
      const feedback = container.querySelector(`.feedback[data-id="${name}"]`);
      container
        .querySelectorAll(`input[name="${name}"]`)
        .forEach((r) => r.parentElement.classList.remove("correct", "incorrect"));
      if (selected === question.correctIndex) {
        e.target.parentElement.classList.add("correct");
        feedback.textContent = currentLang === "ar" ? "صحيح! " + question.explanation.ar : "Correct! " + question.explanation.en;
      } else {
        e.target.parentElement.classList.add("incorrect");
        feedback.textContent = currentLang === "ar" ? "إجابة خاطئة. " + question.explanation.ar : "Wrong. " + question.explanation.en;
      }
    });
  });
}

function initOwnershipQuiz() {
  renderOwnershipQuiz();
  document.getElementById("ownership-submit").addEventListener("click", () => {
    let score = 0;
    ownershipQuestions.forEach((q) => {
      const selected = document.querySelector(`input[name="${q.id}"]:checked`);
      if (selected && Number(selected.value) === q.correctIndex) score += 1;
    });
    const scoreBox = document.getElementById("ownership-score");
    const msg = currentLang === "ar" ? `نتيجتك: ${score} / ${ownershipQuestions.length}` : `Your score: ${score} / ${ownershipQuestions.length}`;
    scoreBox.textContent = msg;
  });
}

function renderPlanStepper() {
  const container = document.getElementById("plan-stepper");
  container.innerHTML = "";
  planSteps.forEach((step, idx) => {
    const div = document.createElement("div");
    div.className = `step ${idx === currentStep ? "active" : ""}`;
    div.textContent = `${idx + 1}. ${step.title}`;
    container.appendChild(div);
  });
}

function renderPlanFields() {
  const wrapper = document.getElementById("plan-fields");
  const step = planSteps[currentStep];
  wrapper.innerHTML = `<div class="card-header"><h3>${t(step.titleKey)}</h3></div>`;
  const body = document.createElement("div");
  body.className = "card-body form-grid";
  step.fields.forEach((field) => {
    const label = document.createElement("label");
    label.innerHTML = `<span>${t(field.labelKey)}</span>`;
    const input = document.createElement("input");
    input.name = field.name;
    input.placeholder = t(field.placeholderKey);
    input.value = planData[field.name] || "";
    label.appendChild(input);
    body.appendChild(label);
  });
  wrapper.appendChild(body);

  const progressText = document.getElementById("plan-progress-text");
  progressText.textContent = `${currentStep + 1} / ${planSteps.length}`;
  const bar = document.getElementById("plan-progress-bar");
  const percent = ((currentStep + 1) / planSteps.length) * 100;
  bar.style.width = `${percent}%`;
  renderPlanStepper();
  const nextBtn = document.getElementById("plan-next");
  nextBtn.textContent = currentStep === planSteps.length - 1 ? translations[currentLang]["plan.finish"] : translations[currentLang]["plan.next"];
}

function validateStep() {
  const inputs = document.querySelectorAll("#plan-fields input");
  let valid = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("invalid");
      valid = false;
    } else {
      input.classList.remove("invalid");
      planData[input.name] = input.value.trim();
    }
  });
  if (valid) savePlanData();
  return valid;
}

function generatePlanSummary() {
  const summaryContainer = document.getElementById("plan-summary-content");
  summaryContainer.innerHTML = "";
  Object.entries(planData).forEach(([key, value]) => {
    const item = document.createElement("div");
    item.innerHTML = `<strong>${getFieldLabel(key)}:</strong> <span>${value}</span>`;
    summaryContainer.appendChild(item);
  });
  const summaryText = Object.entries(planData)
    .map(([k, v]) => `${getFieldLabel(k)}: ${v}`)
    .join("\n");
  localStorage.setItem(STORAGE_KEYS.planSummary, summaryText);
}

function initPlanWizard() {
  renderPlanFields();
  document.getElementById("plan-prev").addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep -= 1;
      renderPlanFields();
    }
  });
  document.getElementById("plan-next").addEventListener("click", () => {
    if (!validateStep()) return;
    if (currentStep < planSteps.length - 1) {
      currentStep += 1;
      renderPlanFields();
    } else {
      generatePlanSummary();
      document.getElementById("plan-summary").classList.remove("hidden");
      document.getElementById("plan-summary").classList.add("active");
    }
  });
  document.getElementById("plan-copy").addEventListener("click", async () => {
    const summary = localStorage.getItem(STORAGE_KEYS.planSummary) || "";
    try {
      await navigator.clipboard.writeText(summary);
      alert(currentLang === "ar" ? "تم نسخ الملخص" : "Summary copied");
    } catch (e) {
      alert(currentLang === "ar" ? "تعذّر النسخ" : "Copy failed");
    }
  });
}

function runGlobalSimulator() {
  const product = document.getElementById("global-product").value;
  const region = document.getElementById("global-region").value;
  const scale = document.getElementById("global-scale").value;
  const benefits = [];
  const challenges = [];

  if (product === "digital") benefits.push(currentLang === "ar" ? "تكلفة شحن منخفضة" : "Low shipping cost");
  if (product === "food") challenges.push(currentLang === "ar" ? "حاجة لشهادات صحية" : "Requires health certificates");
  if (product === "clothing") challenges.push(currentLang === "ar" ? "حساسية للمقاسات والأذواق" : "Sizing and taste preferences");
  if (region === "europe") challenges.push(currentLang === "ar" ? "لوائح صارمة" : "Strict regulations");
  if (region === "mena") benefits.push(currentLang === "ar" ? "قرب ثقافي ولغوي" : "Cultural and language proximity");
  if (region === "asia") benefits.push(currentLang === "ar" ? "أسواق ضخمة متنوعة" : "Large, diverse markets");
  if (scale === "large") challenges.push(currentLang === "ar" ? "تعقيد لوجستي أعلى" : "Higher logistics complexity");
  if (scale === "small") benefits.push(currentLang === "ar" ? "مخاطر مالية أقل في البداية" : "Lower initial financial risk");

  const tips = `
    <p><strong>${currentLang === "ar" ? "الفوائد المحتملة" : "Potential benefits"}:</strong> ${benefits.join("، ") || "-"}</p>
    <p><strong>${currentLang === "ar" ? "التحديات" : "Challenges"}:</strong> ${challenges.join("، ") || "-"}</p>
    <p>${currentLang === "ar" ? "نصيحة" : "Tip"}: ${scale === "small" ? (currentLang === "ar" ? "ابدأ بكمية اختبارية" : "Start with a pilot batch") : currentLang === "ar" ? "احسب تكاليف المخزون والرسوم بدقة" : "Model costs carefully"}</p>
  `;
  document.getElementById("global-result").innerHTML = tips;
}

function initGlobalSimulator() {
  document.getElementById("global-run").addEventListener("click", runGlobalSimulator);
}

function renderFinalQuiz() {
  const container = document.getElementById("final-quiz");
  container.innerHTML = "";
  finalQuizQuestions.forEach((q, idx) => {
    const item = document.createElement("div");
    item.className = "quiz-item";
    item.innerHTML = `
      <div class="question">${idx + 1}. ${q.q[currentLang]}</div>
      <div class="options">
        ${q.options[currentLang]
          .map(
            (opt, i) => `
              <label>
                <input type="radio" name="final-${idx}" value="${i}">
                <span>${opt}</span>
              </label>
            `
          )
          .join("")}
      </div>
    `;
    container.appendChild(item);
  });
}

function updateBestScoreDisplay() {
  const best = Number(localStorage.getItem(STORAGE_KEYS.bestScore) || 0);
  const label = document.getElementById("best-score");
  if (!label) return;
  const text = currentLang === "ar" ? `أفضل نتيجة: ${best} / ${finalQuizQuestions.length}` : `Best score: ${best} / ${finalQuizQuestions.length}`;
  label.textContent = text;
}

function recordQuizAttempt(score) {
  const attempts = JSON.parse(localStorage.getItem(STORAGE_KEYS.quizAttempts) || "[]");
  attempts.push({ date: new Date().toISOString(), score });
  localStorage.setItem(STORAGE_KEYS.quizAttempts, JSON.stringify(attempts));
}

function initFinalQuiz() {
  renderFinalQuiz();
  updateBestScoreDisplay();
  document.getElementById("final-submit").addEventListener("click", () => {
    let score = 0;
    finalQuizQuestions.forEach((q, idx) => {
      const chosen = document.querySelector(`input[name="final-${idx}"]:checked`);
      if (chosen && Number(chosen.value) === q.answer) score += 1;
    });
    recordQuizAttempt(score);
    const best = Number(localStorage.getItem(STORAGE_KEYS.bestScore) || 0);
    if (score > best) localStorage.setItem(STORAGE_KEYS.bestScore, String(score));
    updateBestScoreDisplay();
    const percentage = Math.round((score / finalQuizQuestions.length) * 100);
    let feedback = "";
    if (percentage >= 85) feedback = currentLang === "ar" ? "أداء ممتاز!" : "Excellent!";
    else if (percentage >= 60) feedback = currentLang === "ar" ? "جيد جدًا، واصل التعلم." : "Good job, keep going.";
    else feedback = currentLang === "ar" ? "تحتاج لمراجعة بعض الوحدات." : "Review the modules again.";
    const scoreBox = document.getElementById("final-score");
    scoreBox.textContent = `${currentLang === "ar" ? "نتيجتك" : "Your score"}: ${score} / ${finalQuizQuestions.length} (${percentage}%) - ${feedback}`;
  });
}

function isAdmin() {
  return localStorage.getItem(STORAGE_KEYS.isAdmin) === "true";
}

function toggleAdminNav(show) {
  const navItem = document.getElementById("nav-admin-item");
  if (!navItem) return;
  navItem.classList.toggle("hidden", !show);
}

function handleLogin() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();
  const msg = document.getElementById("login-message");
  if (email === "admin@bizjourney.app" && password === "BizJourney2025!") {
    localStorage.setItem(STORAGE_KEYS.isAdmin, "true");
    toggleAdminNav(true);
    msg.textContent = currentLang === "ar" ? "تم تسجيل الدخول بنجاح" : "Logged in";
    showView("admin-view");
  } else {
    msg.textContent = currentLang === "ar" ? "بيانات غير صحيحة" : "Invalid credentials";
  }
}

function initAuth() {
  toggleAdminNav(isAdmin());
  document.getElementById("login-submit").addEventListener("click", handleLogin);
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.setItem(STORAGE_KEYS.isAdmin, "false");
    toggleAdminNav(false);
    showView("landing-view");
  });
}

function renderPlanAdmin() {
  const container = document.getElementById("admin-plan");
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.plan) || "{}");
  if (Object.keys(stored).length === 0) {
    container.textContent = currentLang === "ar" ? "لا توجد خطط محفوظة" : "No saved plans";
    return;
  }
  container.innerHTML = Object.entries(stored)
    .map(([k, v]) => `<div><strong>${k}:</strong> ${v}</div>`)
    .join("");
}

function renderQuizAdmin() {
  const container = document.getElementById("admin-quiz");
  const attempts = JSON.parse(localStorage.getItem(STORAGE_KEYS.quizAttempts) || "[]");
  if (attempts.length === 0) {
    container.textContent = currentLang === "ar" ? "لا توجد محاولات" : "No attempts yet";
    return;
  }
  container.innerHTML = attempts
    .map((a) => {
      const date = new Date(a.date).toLocaleString(currentLang === "ar" ? "ar-EG" : "en-US");
      return `<div class="quiz-row"><strong>${a.score}</strong> / ${finalQuizQuestions.length} - ${date}</div>`;
    })
    .join("");
}

function initAdminView() {
  if (!isAdmin()) {
    showView("login-view");
    return;
  }
  renderPlanAdmin();
  renderQuizAdmin();
}

function initAdminControls() {
  document.getElementById("clear-data").addEventListener("click", () => {
    [STORAGE_KEYS.plan, STORAGE_KEYS.planSummary, STORAGE_KEYS.bestScore, STORAGE_KEYS.quizAttempts, STORAGE_KEYS.isAdmin].forEach((k) =>
      localStorage.removeItem(k)
    );
    planData = {};
    toggleAdminNav(false);
    renderPlanAdmin();
    renderQuizAdmin();
    alert(currentLang === "ar" ? "تم مسح البيانات" : "Data cleared");
    showView("landing-view");
  });
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initLanguage();
  initSiteLock();
  initOwnershipQuiz();
  initPlanWizard();
  initGlobalSimulator();
  initFinalQuiz();
  initAuth();
  initAdminControls();
  initIcons();
});
