export const faqCategories = [
  { id: "general", label: "General" },
  { id: "funcionalidades", label: "Funcionalidades" },
  { id: "facturacion", label: "Facturación y Planes" },
  { id: "seguridad", label: "Seguridad y Soporte" },
];

export const faqData = {
  general: [
    {
      question: "¿Qué es ClinicManager y para quién es?",
      answer: "ClinicManager es un CRM y sistema de gestión integral diseñado específicamente para clínicas estéticas y centros médicos. Ayuda a dueños, médicos y personal administrativo a gestionar pacientes, citas, ventas y marketing en una sola plataforma.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usarlo?",
      answer: "No, nuestra plataforma es extremadamente intuitiva. Hemos diseñado la interfaz pensando en la facilidad de uso para que cualquier miembro de tu equipo pueda empezar a usarla desde el primer día.",
    },
    {
      question: "¿Puedo acceder desde mi móvil?",
      answer: "Sí, ClinicManager es 100% basado en la nube y responsivo. Puedes acceder a todas las funcionalidades desde tu smartphone, tablet o computadora en cualquier lugar.",
    },
  ],
  funcionalidades: [
    {
      question: "¿El sistema envía recordatorios automáticos?",
      answer: "Sí, el sistema envía recordatorios automáticos por WhatsApp y correo electrónico para confirmar citas, reduciendo drásticamente el ausentismo (No-Show).",
    },
    {
      question: "¿Puedo gestionar historias clínicas con fotos?",
      answer: "Absolutamente. Nuestro módulo de historia clínica permite cargar y comparar fotos de antes y después, dibujar sobre ellas y registrar notas de evolución detalladas.",
    },
    {
      question: "¿Se integra con mis redes sociales?",
      answer: "Sí, centralizamos todos los leads provenientes de Meta (Facebook/Instagram) y tu sitio web en un solo buzón de entrada para que no pierdas ninguna oportunidad de venta.",
    },
  ],
  facturacion: [
    {
      question: "¿Hay un contrato de permanencia?",
      answer: "No, creemos en la libertad de nuestros clientes. Nuestros planes son mensuales y puedes cancelar o cambiar de plan en cualquier momento sin penalizaciones.",
    },
    {
      question: "¿Ofrecen descuentos por pago anual?",
      answer: "Sí, ofrecemos un descuento de dos meses gratis si decides contratar el plan anual (pagas 10 meses y recibes 12).",
    },
    {
      question: "¿Tienen periodo de prueba?",
      answer: "Sí, ofrecemos una prueba gratuita de 14 días con acceso completo a todas las funcionalidades para que puedas evaluar si ClinicManager es ideal para tu clínica.",
    },
  ],
  seguridad: [
    {
      question: "¿Qué tan seguros están los datos de mis pacientes?",
      answer: "La seguridad es nuestra prioridad. Utilizamos encriptación de grado bancario (AES-256), servidores seguros en la nube y cumplimos con normativas de protección de datos como GDPR y HIPAA.",
    },
    {
      question: "¿Hacen copias de seguridad de mis datos?",
      answer: "Sí, realizamos copias de seguridad automáticas diarias para garantizar que tu información esté siempre protegida y disponible ante cualquier eventualidad.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer: "Ofrecemos soporte por chat en vivo y correo electrónico en todos los planes. Los planes Pro y Enterprise incluyen soporte prioritario y sesiones de onboarding personalizadas.",
    },
  ],
};

// Manteniendo compatibilidad con componentes antiguos si es necesario
export const accordionItems = [
  {
    id: 1,
    question: "¿Necesito conocimientos técnicos para usar ClinicManager?",
    answer:
      "No, nuestra plataforma es intuitiva y está diseñada para ser utilizada por todo el equipo de la clínica sin necesidad de conocimientos de programación.",
    controls: "uc-accordion-24",
    expanded: true,
  },
  {
    id: 2,
    question: "¿Puedo migrar los datos de mi clínica actual?",
    answer:
      "Sí, ofrecemos servicios de migración para importar tus pacientes e historiales desde otros sistemas de gestión.",
    controls: "uc-accordion-26",
    expanded: false,
  },
  {
    id: 3,
    question: "¿Es seguro almacenar los datos de mis pacientes?",
    answer:
      "Absolutamente. Utilizamos encriptación de grado bancario y cumplimos con todas las normativas de protección de datos (RGPD/HHS) para garantizar la privacidad.",
    controls: "uc-accordion-28",
    expanded: false,
  },
  {
    id: 4,
    question: "¿Hay un contrato de permanencia?",
    answer:
      "No, nuestros planes son mensuales y puedes cancelar en cualquier momento sin penalizaciones.",
    controls: "uc-accordion-30",
    expanded: false,
  },
  {
    id: 5,
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí, todos nuestros planes incluyen soporte. Los planes superiores cuentan con un gestor de cuenta dedicado y soporte prioritario.",
    controls: "uc-accordion-32",
    expanded: false,
  },
];
