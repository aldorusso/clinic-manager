# Clink.download - Documentación del Proyecto

## 📋 Información General
**Nombre del Proyecto:** Clink.download
**Descripción:** Motor de crecimiento diseñado específicamente para el sector estético que gestiona todo el ciclo de vida desde que un lead ve un anuncio hasta que completa su tratamiento.

---

## 🎯 1. Propuesta de Valor (Para el Marketing de la Web)

### Transforma tus prospectos en pacientes leales

Clink.download no es solo un CRM, es un motor de crecimiento diseñado específicamente para el sector estético. Gestiona todo el ciclo de vida, desde que un lead ve un anuncio en Instagram hasta que completa su tratamiento.

#### Características Principales:

- **Segmentación Inteligente:** Diferenciamos claramente entre un Lead (oportunidad) y un Paciente (historial clínico), permitiendo estrategias de marketing y atención médica personalizadas.

- **Pipeline de Conversión Visual:** Controla en qué etapa se encuentra cada interesado: ¿Nuevo, Contactado, Cita Agendada o No-Show? Evita que las oportunidades se enfríen.

- **Gestión Multi-Rol:** Siete niveles de acceso (desde el Dueño hasta el Paciente) para que cada miembro del equipo vea solo lo que necesita.

- **Estadísticas en Tiempo Real:** Olvida las hojas de cálculo. Visualiza el ROI de tus campañas y el rendimiento de tus comerciales y médicos al instante.

---

## 🔄 2. El Ecosistema de Trabajo (Workflow)

### El Viaje del Lead en Clink.download

1. **Captura Omnicanal:** Los leads entran automáticamente desde Facebook, Instagram, Google Ads o WhatsApp.

2. **Asignación Inteligente:** El sistema distribuye los leads equitativamente (Round-robin) o por especialidad médica.

3. **Nutrición y Venta:** Los Closers gestionan el contacto inicial y agendan la cita directamente en el calendario integrado.

4. **Conversión Médica:** Una vez que el lead asiste a la cita, el sistema lo transforma en Paciente, abriendo su historial de tratamientos y sesiones.

---

## ⚙️ 3. Especificaciones Técnicas

| Característica | Detalle Técnico | Beneficio para la Clínica |
|---|---|---|
| **Arquitectura** | Multi-tenant con aislamiento de datos | La información de tu clínica es privada y segura |
| **Seguridad** | Autenticación JWT con HttpOnly Cookies | Protección máxima contra ataques y robo de sesiones |
| **Disponibilidad** | Infraestructura Dockerizada | Sistema rápido, estable y con actualizaciones sin interrupciones |
| **Integraciones** | API First (FastAPI) | Capacidad de conectar con WhatsApp, Agendas externas y Pasarelas de pago |

---

## 🧭 4. Estructura Sugerida para el Menú de la Web

### Navegación Principal:

1. **Inicio:** El "Hero" con la propuesta de valor y captura de leads

2. **Funcionalidades:**
   - **CRM de Ventas:** El pipeline y las fuentes de captura
   - **Agenda Médica:** El calendario avanzado y gestión de citas
   - **Portal del Paciente:** Donde el cliente ve su historial y consentimientos

3. **Roles:** Explicación de qué hace el Manager, el Médico y el Comercial

4. **Precios:** Planes basados en el modelo Tenant

5. **Documentación:** Para usuarios técnicos

---

## 👥 Niveles de Acceso del Sistema

1. **Dueño** - Acceso total al sistema
2. **Manager** - Gestión operativa y reportes
3. **Médico** - Historial clínico y agenda
4. **Comercial/Closer** - Pipeline de ventas y leads
5. **Recepcionista** - Agenda y citas
6. **Asistente** - Soporte administrativo
7. **Paciente** - Portal personal

---

## 📊 Métricas Clave a Mostrar

- ROI de campañas publicitarias
- Tasa de conversión Lead → Paciente
- Rendimiento por comercial/médico
- Valor promedio por paciente
- Tiempo promedio en el pipeline
- Rate de no-show en citas

---

## 🎨 Sectores Objetivo

- Clínicas de medicina estética
- Centros de cirugía plástica
- Consultorios dermatológicos
- Spas médicos
- Centros de bienestar integral

---

*Última actualización: Diciembre 2025*
