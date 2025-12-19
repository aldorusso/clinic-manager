export const roles = [
    {
        id: 1,
        slug: "medico",
        name: "Doctor",
        category: "Médico",
        description: "Gestiona historias clínicas, citas y recetas de forma sencilla y eficiente.",
        iconClass: "unicon-briefcase",
        imageAlt: "Icono Doctor",
        heroImage: "/assets/images/roles/doctor-hero.jpg",
        fullDescription: "El rol de Médico en nuestro CRM está diseñado para optimizar tu práctica diaria, permitiéndote enfocarte en lo más importante: la atención al paciente. Gestiona historias clínicas digitales, agenda consultas y prescribe tratamientos desde una plataforma intuitiva y segura.",
        responsibilities: [
            "Gestión completa de historias clínicas digitales",
            "Programación y seguimiento de citas médicas",
            "Prescripción de recetas electrónicas",
            "Registro de diagnósticos y tratamientos",
            "Seguimiento de evolución de pacientes",
            "Generación de reportes médicos"
        ],
        features: [
            {
                iconClass: "unicon-briefcase",
                title: "Historias Clínicas Digitales",
                description: "Accede al historial completo del paciente en segundos. Toda la información médica organizada y segura."
            },
            {
                iconClass: "unicon-calendar",
                title: "Agenda Inteligente",
                description: "Visualiza tus citas del día, semana o mes. Recibe notificaciones automáticas de próximas consultas."
            },
            {
                iconClass: "unicon-document-layout-right",
                title: "Recetas Electrónicas",
                description: "Prescribe medicamentos digitalmente. Envía recetas directamente al paciente por email o WhatsApp."
            },
            {
                iconClass: "unicon-chart-pie",
                title: "Seguimiento de Tratamientos",
                description: "Monitorea la evolución de tratamientos estéticos. Compara fotos de antes y después."
            },
            {
                iconClass: "unicon-shield-check",
                title: "Seguridad y Privacidad",
                description: "Cumplimiento total con normativas de protección de datos médicos. Encriptación de extremo a extremo."
            },
            {
                iconClass: "unicon-mobile-android",
                title: "Acceso Móvil",
                description: "Consulta información desde cualquier dispositivo. App móvil disponible para iOS y Android."
            }
        ],
        benefits: [
            "Reduce el tiempo administrativo en un 60%",
            "Mejora la calidad de atención al paciente",
            "Elimina el papeleo y archivos físicos",
            "Acceso instantáneo a historial médico completo",
            "Comunicación directa con pacientes vía WhatsApp",
            "Reportes automáticos para análisis de casos"
        ],
        useCases: [
            {
                title: "Consulta Inicial",
                description: "El paciente llega a consulta. Accedes a su historial completo, revisas tratamientos anteriores, alergias y condiciones previas en segundos."
            },
            {
                title: "Durante el Tratamiento",
                description: "Registras el procedimiento realizado, tomas fotos de antes/después, y prescribes el tratamiento post-procedimiento directamente en el sistema."
            },
            {
                title: "Seguimiento",
                description: "El sistema te recuerda automáticamente hacer seguimiento al paciente. Envías un mensaje de WhatsApp preguntando cómo va la recuperación."
            }
        ]
    },
    {
        id: 2,
        slug: "paciente",
        name: "Paciente",
        category: "Usuario",
        description: "Accede a tu historial médico, reserva citas y consulta tus recetas.",
        iconClass: "unicon-user",
        imageAlt: "Icono Paciente",
        heroImage: "/assets/images/roles/patient-hero.jpg",
        fullDescription: "Como paciente, tendrás acceso completo a tu información médica, podrás agendar citas en línea y recibir recordatorios automáticos. Tu salud y bienestar al alcance de un clic.",
        responsibilities: [
            "Gestionar tus citas médicas",
            "Acceder a tu historial clínico",
            "Consultar recetas y tratamientos",
            "Actualizar información personal",
            "Comunicarte con tu médico",
            "Recibir recordatorios de citas"
        ],
        features: [
            {
                iconClass: "unicon-calendar",
                title: "Reserva de Citas Online",
                description: "Agenda tu cita en cualquier momento. Ve la disponibilidad en tiempo real y elige el horario que mejor te convenga."
            },
            {
                iconClass: "unicon-document-layout-right",
                title: "Historial Médico",
                description: "Accede a todos tus registros médicos, tratamientos anteriores y resultados de procedimientos."
            },
            {
                iconClass: "unicon-bell",
                title: "Recordatorios Automáticos",
                description: "Recibe notificaciones por WhatsApp y email sobre tus próximas citas y tratamientos de seguimiento."
            },
            {
                iconClass: "unicon-chat",
                title: "Comunicación Directa",
                description: "Envía consultas a tu médico directamente desde la plataforma. Respuestas rápidas y seguras."
            },
            {
                iconClass: "unicon-mobile-android",
                title: "App Móvil",
                description: "Gestiona todo desde tu smartphone. Disponible para iOS y Android."
            },
            {
                iconClass: "unicon-shield-check",
                title: "Privacidad Garantizada",
                description: "Tus datos médicos están protegidos con los más altos estándares de seguridad."
            }
        ],
        benefits: [
            "Agenda citas 24/7 sin llamar",
            "Acceso inmediato a tu historial médico",
            "Recordatorios automáticos de citas",
            "Comunicación directa con tu médico",
            "Consulta tus recetas en cualquier momento",
            "Seguimiento de tu evolución"
        ]
    },
    {
        id: 3,
        slug: "administrador",
        name: "Administrador",
        category: "Admin",
        description: "Supervisa las operaciones de la clínica, gestiona el personal y genera informes.",
        iconClass: "unicon-setting",
        imageAlt: "Icono Admin",
        heroImage: "/assets/images/roles/admin-hero.jpg",
        fullDescription: "El rol de Administrador te da control total sobre las operaciones de la clínica. Gestiona personal, analiza métricas de negocio y toma decisiones basadas en datos en tiempo real.",
        responsibilities: [
            "Supervisión de operaciones diarias",
            "Gestión de personal y roles",
            "Análisis de métricas de negocio",
            "Generación de reportes financieros",
            "Control de inventario",
            "Configuración del sistema"
        ],
        features: [
            {
                iconClass: "unicon-chart-pie",
                title: "Dashboard Ejecutivo",
                description: "Visualiza KPIs en tiempo real: ingresos, citas, conversión de leads, satisfacción del paciente."
            },
            {
                iconClass: "unicon-users-alt",
                title: "Gestión de Personal",
                description: "Administra médicos, recepcionistas y personal. Asigna roles y permisos de forma granular."
            },
            {
                iconClass: "unicon-document-layout-right",
                title: "Reportes Avanzados",
                description: "Genera reportes personalizados de ingresos, tratamientos más solicitados, rendimiento por médico."
            },
            {
                iconClass: "unicon-money-bill",
                title: "Control Financiero",
                description: "Seguimiento de pagos, facturas pendientes, proyecciones de ingresos mensuales."
            },
            {
                iconClass: "unicon-setting",
                title: "Configuración Global",
                description: "Personaliza la plataforma según las necesidades de tu clínica. Horarios, servicios, precios."
            },
            {
                iconClass: "unicon-shield-check",
                title: "Auditoría y Seguridad",
                description: "Registro completo de todas las acciones en el sistema. Control de accesos y permisos."
            }
        ],
        benefits: [
            "Visibilidad completa del negocio en tiempo real",
            "Toma de decisiones basada en datos",
            "Optimización de recursos y personal",
            "Reducción de costos operativos",
            "Mejora en la eficiencia administrativa",
            "Control total sobre la clínica"
        ]
    },
    {
        id: 4,
        slug: "recepcionista",
        name: "Recepcionista",
        category: "Personal",
        description: "Gestiona la recepción, el registro de pacientes y las consultas generales.",
        iconClass: "unicon-chat",
        imageAlt: "Icono Recepcionista",
        heroImage: "/assets/images/roles/receptionist-hero.jpg",
        fullDescription: "Como Recepcionista, eres el primer punto de contacto con los pacientes. Nuestro sistema te facilita la gestión de citas, registro de nuevos pacientes y atención de consultas de forma eficiente.",
        responsibilities: [
            "Atención al paciente presencial y telefónica",
            "Gestión de agenda de citas",
            "Registro de nuevos pacientes",
            "Confirmación de citas",
            "Manejo de consultas generales",
            "Coordinación con médicos"
        ],
        features: [
            {
                iconClass: "unicon-calendar",
                title: "Gestión de Agenda",
                description: "Visualiza y gestiona la agenda de todos los médicos. Agenda, reagenda y cancela citas fácilmente."
            },
            {
                iconClass: "unicon-user",
                title: "Registro de Pacientes",
                description: "Crea perfiles de nuevos pacientes en minutos. Captura toda la información necesaria de forma ordenada."
            },
            {
                iconClass: "unicon-phone",
                title: "Llamadas Integradas",
                description: "Realiza llamadas directamente desde el sistema. Historial completo de comunicaciones con cada paciente."
            },
            {
                iconClass: "unicon-bell",
                title: "Recordatorios Automáticos",
                description: "El sistema envía recordatorios automáticos por WhatsApp. Reduce las ausencias en un 40%."
            },
            {
                iconClass: "unicon-list-ul",
                title: "Lista de Espera",
                description: "Gestiona lista de espera para citas canceladas. Optimiza la ocupación de la agenda."
            },
            {
                iconClass: "unicon-chat",
                title: "Chat con Pacientes",
                description: "Responde consultas por WhatsApp directamente desde la plataforma. Todo centralizado."
            }
        ],
        benefits: [
            "Reduce tiempo de atención por paciente",
            "Elimina errores en agendamiento",
            "Mejora la experiencia del paciente",
            "Centraliza toda la comunicación",
            "Automatiza tareas repetitivas",
            "Aumenta la eficiencia operativa"
        ]
    },
    {
        id: 5,
        slug: "closer",
        name: "Closer",
        category: "Ventas",
        description: "Cierra ventas de tratamientos estéticos y maximiza la conversión de leads en pacientes.",
        iconClass: "unicon-money-bill",
        imageAlt: "Icono Closer",
        heroImage: "/assets/images/roles/closer-hero.jpg",
        fullDescription: "El rol de Closer está diseñado para profesionales de ventas enfocados en convertir consultas en tratamientos confirmados. Gestiona el pipeline de ventas, realiza seguimiento de leads calificados y cierra acuerdos con herramientas especializadas de CRM.",
        responsibilities: [
            "Cierre de ventas de tratamientos estéticos",
            "Seguimiento de leads calificados",
            "Gestión del pipeline de ventas",
            "Negociación de paquetes y precios",
            "Registro de objeciones y soluciones",
            "Alcance de metas de conversión"
        ],
        features: [
            {
                iconClass: "unicon-money-bill",
                title: "Pipeline de Ventas",
                description: "Visualiza tu embudo de ventas completo. Leads calificados, en negociación, cerrados y perdidos en un solo dashboard."
            },
            {
                iconClass: "unicon-phone",
                title: "Llamadas Integradas",
                description: "Realiza y registra llamadas directamente desde el CRM. Historial completo de conversaciones con cada lead."
            },
            {
                iconClass: "unicon-chart-pie",
                title: "Métricas de Conversión",
                description: "Monitorea tu tasa de cierre, ticket promedio y tiempo de conversión. Identifica oportunidades de mejora."
            },
            {
                iconClass: "unicon-document-layout-right",
                title: "Scripts de Venta",
                description: "Accede a scripts probados para cada etapa del proceso. Maneja objeciones con respuestas efectivas."
            },
            {
                iconClass: "unicon-bell",
                title: "Recordatorios Automáticos",
                description: "Nunca pierdas un seguimiento. El sistema te recuerda cuándo contactar a cada lead."
            },
            {
                iconClass: "unicon-users-alt",
                title: "Gestión de Paquetes",
                description: "Crea y gestiona paquetes personalizados de tratamientos. Envía cotizaciones profesionales por WhatsApp."
            }
        ],
        benefits: [
            "Aumenta tu tasa de cierre en un 40%",
            "Reduce el ciclo de ventas",
            "Nunca pierdas un lead por falta de seguimiento",
            "Identifica patrones de objeciones comunes",
            "Gestiona múltiples leads simultáneamente",
            "Alcanza tus metas de ventas consistentemente"
        ],
        useCases: [
            {
                title: "Lead Calificado Entra",
                description: "Recibes una notificación de un lead calificado por el Gestor de Leads. Revisas su perfil, intereses y presupuesto antes de la llamada."
            },
            {
                title: "Primera Llamada",
                description: "Realizas la llamada desde el CRM, siguiendo el script sugerido. Registras objeciones, intereses y nivel de urgencia."
            },
            {
                title: "Seguimiento y Cierre",
                description: "El sistema te recuerda hacer seguimiento. Envías cotización personalizada por WhatsApp y cierras la venta."
            }
        ]
    },
    {
        id: 6,
        slug: "gestor-de-leads",
        name: "Gestor de Leads",
        category: "Marketing",
        description: "Gestiona, califica y distribuye leads para maximizar la conversión de la clínica.",
        iconClass: "unicon-users-alt",
        imageAlt: "Icono Gestor de Leads",
        heroImage: "/assets/images/roles/lead-manager-hero.jpg",
        fullDescription: "El Gestor de Leads es responsable de administrar todo el flujo de leads entrantes, desde la captación hasta la asignación a closers. Califica leads, gestiona campañas de marketing y optimiza la conversión mediante análisis de datos.",
        responsibilities: [
            "Gestión de leads entrantes de todas las fuentes",
            "Calificación y scoring de leads",
            "Distribución de leads a closers",
            "Seguimiento de campañas de marketing",
            "Análisis de fuentes de leads",
            "Optimización de conversión del funnel"
        ],
        features: [
            {
                iconClass: "unicon-users-alt",
                title: "Dashboard de Leads",
                description: "Visualiza todos los leads en tiempo real. Filtra por fuente, estado, calificación y fecha de entrada."
            },
            {
                iconClass: "unicon-chart-pie",
                title: "Lead Scoring Automático",
                description: "El sistema califica automáticamente cada lead según comportamiento, interés y presupuesto."
            },
            {
                iconClass: "unicon-setting",
                title: "Distribución Inteligente",
                description: "Asigna leads a closers automáticamente según disponibilidad, especialidad y rendimiento."
            },
            {
                iconClass: "unicon-document-layout-right",
                title: "Análisis de Fuentes",
                description: "Identifica qué canales generan los mejores leads. Facebook, Instagram, Google, referencias, etc."
            },
            {
                iconClass: "unicon-bell",
                title: "Alertas de Leads Calientes",
                description: "Recibe notificaciones instantáneas cuando entra un lead de alta calidad que requiere atención inmediata."
            },
            {
                iconClass: "unicon-mobile-android",
                title: "Integración con Campañas",
                description: "Conecta con Facebook Ads, Google Ads y WhatsApp. Todos los leads se centralizan automáticamente."
            }
        ],
        benefits: [
            "Reduce tiempo de respuesta a leads en 80%",
            "Aumenta la calidad de leads asignados",
            "Optimiza el ROI de campañas de marketing",
            "Elimina leads duplicados automáticamente",
            "Identifica mejores fuentes de conversión",
            "Maximiza la eficiencia del equipo de ventas"
        ],
        useCases: [
            {
                title: "Lead Entra por Facebook",
                description: "Un lead completa un formulario en Facebook. El sistema lo captura automáticamente, lo califica y te notifica."
            },
            {
                title: "Calificación y Asignación",
                description: "Revisas el perfil del lead, ajustas su calificación si es necesario y lo asignas al closer más adecuado."
            },
            {
                title: "Monitoreo de Conversión",
                description: "Haces seguimiento del lead a través del funnel. Analizas qué fuentes convierten mejor para optimizar presupuesto."
            }
        ]
    }
];
