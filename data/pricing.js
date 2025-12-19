export const pricingTiers = [
  {
    id: 1,
    title: "Inicial",
    description: "Para clínicas pequeñas que están empezando.",
    price: "$99 USD",
    priceInfo: "por mes",
    buttonLabel: "Prueba gratis",

    features: [
      "CRM de Ventas Básico",
      "Agenda Médica (1 médico)",
      "Portal del Paciente",
      "Soporte por email",
    ],
  },
  {
    id: 2,
    title: "Crecimiento",
    description: "Para clínicas en expansión con múltiples médicos.",
    price: "$199 USD",
    priceInfo: "por mes",
    buttonLabel: "Prueba gratis",

    features: [
      "Todo en Inicial",
      "Múltiples Médicos (hasta 5)",
      "Automatización de Marketing",
      "Reportes Avanzados de ROI",
      "Soporte prioritario",
    ],
    popular: true,
    imageUrl: "/assets/images/template/money.svg",
    imageAlt: "money",
    darkImageUrl: "/assets/images/template/money-dark.svg",
    darkImageAlt: "money-dark",
  },
  {
    id: 3,
    title: "Empresarial",
    description: "Para grandes centros y franquicias.",
    price: "Consultar",
    priceInfo: "personalizado",
    buttonLabel: "Contactar ventas",

    features: [
      "Todo en Crecimiento",
      "Médicos Ilimitados",
      "API Integrations",
      "Manager de cuenta dedicado",
      "Personalización whitelabel",
    ],
  },
];
export const tiers = [
  {
    id: 1,
    plan: "Basic plan",
    price: "$49",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    icon: "unicon-sub-volume",
    buttonText: "Get started",

    highlight: false,
  },
  {
    id: 2,
    plan: "Business plan",
    price: "$79",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Basic</b> features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    icon: "unicon-course",
    buttonText: "Start a free trial",

    highlight: true,
  },
  {
    id: 3,
    plan: "Enterprise plan",
    price: "$199",
    priceSuffix: "/ mo",
    description: "Billed annually.",
    features: [
      "Access to all <b>Business</b> features",
      "Unlimited files uploads",
      "Real-time team collaboration",
      "SSO support and custom user roles",
      "Bulk send & Forms",
    ],
    icon: "unicon-building",
    buttonText: "Book a demo",

    highlight: false,
  },
];

export const pricingPlans = [
  {
    title: "Starter",
    price: "$49",
    description: "For creating impressive tools that generate results.",
    features: [
      "Up to 10 individual users",
      "Basic reporting and analytics",
      "Project Management",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
    linkText: "Get started",

    additionalClasses: "",
  },
  {
    title: "Pro",
    price: "$79",
    description: "For seamless integrations and sending tools in bulk.",
    features: [
      "Access to all Starter features",
      "200+ integrations",
      "Unlimited team workspaces",
      "Approval workflows",
      "Salesforce integration*",
    ],
    linkText: "Start a free trial",

    additionalClasses:
      "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
    badge: "Popular",
  },
];

export const tiers2 = [
  {
    name: "Free",
    price: "$0",
    description: "Build a <b>hobby site</b> with every basic features.",
    details: "Free Forever!",
    buttonClass: "btn-secondary",
    features: [
      "Use on 1 website",
      "Personal License",
      "20 Basic Elements",
      "Basic Dynamic Data",
      "Basic Design Library",
      "Basic support",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    description: "Build <b>one website</b> with every pro feature.",
    details: "Billed annually.",
    buttonClass: "btn-primary",
    features: [
      "Use on 1 website",
      "Personal License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
    offer: "Save $25",
  },
  {
    name: "Agency",
    price: "$199",
    description: "Build <b>unlimited websites</b> with every pro feature",
    details: "Billed annually.",
    buttonClass: "btn-secondary",
    features: [
      "Use on unlimited websites",
      "Commercial License",
      "100 Pro Elements",
      "Full Dynamic Data",
      "Full Design Library",
      "Priority support",
    ],
  },
];

export const tiers3 = [
  {
    title: "Inicial",
    description: "Para clínicas pequeñas que están empezando.",
    price: "$99 USD",
    yearlyPrice: "$89 USD",
    priceDetails: "por mes",
    linkText: "Prueba gratis",
    linkSubtext: "Sin tarjeta de crédito",
    features: [
      "CRM de Ventas Básico",
      "Agenda Médica (1 médico)",
      "Portal del Paciente",
      "Soporte por email",
    ],
    isPopular: false,
  },
  {
    title: "Crecimiento",
    description: "Para clínicas en expansión con múltiples médicos.",
    price: "$199 USD",
    yearlyPrice: "$179 USD",
    priceDetails: "por mes",
    linkText: "Prueba gratis",
    linkSubtext: "Sin tarjeta de crédito",
    features: [
      "Todo en Inicial",
      "Múltiples Médicos (hasta 5)",
      "Automatización de Marketing",
      "Reportes Avanzados de ROI",
      "Soporte prioritario",
    ],
    isPopular: true,
  },
  {
    title: "Empresarial",
    description: "Para grandes centros y franquicias.",
    price: "Consultar",
    yearlyPrice: "Consultar",
    priceDetails: "personalizado",
    linkText: "Contactar ventas",
    linkSubtext: "Respuesta en 24hs",
    features: [
      "Todo en Crecimiento",
      "Médicos Ilimitados",
      "Integraciones API",
      "Manager de cuenta dedicado",
      "Personalización whitelabel",
    ],
    isPopular: false,
  },
];

export const pricingPlans3 = [
  {
    title: "Inicial",
    description: "Para individuos y freelancers",
    price: 49,
    features: [
      "Rápido y Confiable",
      "Datos en todas partes",
      "Contexto enriquecido",
      "Gestión de riesgos",
      "Cumplimiento de privacidad",
      "Gestión de terceros",
    ],
    included: [true, true, false, false, false, false],
    link: "https://app.clinicmanager.digital/",
    buttonClass: "btn-ghost-tertiary",
  },
  {
    title: "Crecimiento",
    description: "Para startups y agencias",
    price: 89,
    features: [
      "Rápido y Confiable",
      "Datos en todas partes",
      "Contexto enriquecido",
      "Gestión de riesgos",
      "Cumplimiento de privacidad",
      "Gestión de terceros",
    ],
    included: [true, true, true, true, false, false],
    link: "https://app.clinicmanager.digital/",
    buttonClass: "btn-primary",
  },
  {
    title: "Empresarial",
    description: "Para grandes empresas",
    price: 249,
    features: [
      "Rápido y Confiable",
      "Datos en todas partes",
      "Contexto enriquecido",
      "Gestión de riesgos",
      "Cumplimiento de privacidad",
      "Gestión de terceros",
    ],
    included: [true, true, true, true, true, true],
    link: "/page-contact",
    buttonClass: "btn-ghost-tertiary",
  },
];

export const pricingPlans4 = [
  {
    title: "FREE",
    description: "Free now and forever",
    descriptionYearly: "Free now and forever",
    price: 0,
    buttonText: "Get started",
    buttonClass:
      "btn btn-md btn-ghost-tertiary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
    ],
  },
  {
    title: "Go PRO",
    description: "One month only",
    descriptionYearly: "One year only",
    price: 24,
    buttonText: "Try for free",
    buttonClass:
      "btn btn-md btn-primary border border-dark dark:border-white dark:border-opacity-15 rounded-pill",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
  },
];

export const pricingPlans5 = [
  {
    title: "Starter",
    description: "For individuals, freelancers",
    price: 24,
    duration: "/ month",
    billed: "Billed once yearly",
    features: ["Fast and Reliable", "Discover Data Everywhere"],
    cta: {
      text: "Try for free",
      link: "https://app.clinicmanager.digital/",
    },
    bgColor: "bg-gray-300 bg-opacity-15 text-white",
  },
  {
    title: "Pro",
    description: "For startups, agencies",
    price: 48,
    duration: "/ month",
    billed: "Billed once yearly",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
    ],
    cta: {
      text: "Try for free",
      link: "https://app.clinicmanager.digital/",
    },
    bgColor: "bg-secondary text-dark shadow-xs",
  },
  {
    title: "Business",
    description: "For large business, companies",
    price: 64,
    duration: "/ month",
    billed: "Billed once yearly",
    features: [
      "Fast and Reliable",
      "Discover Data Everywhere",
      "Enrich Data with Context",
      "Risk Management",
      "Privacy Compliance",
      "Third-Party Management",
    ],
    cta: {
      text: "Get in touch",
      link: "/page-contact-2",
    },
    bgColor: "bg-gray-300 bg-opacity-15 text-white",
  },
];
