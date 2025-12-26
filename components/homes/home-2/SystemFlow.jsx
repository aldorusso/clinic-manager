import React from "react";

export default function SystemFlow() {
    const steps = [
        {
            id: 1,
            title: "Captación de Leads",
            description: "Recibimos y centralizamos leads de todas tus fuentes (Ads, Redes, Web).",
            icon: "unicon-user-multiple",
        },
        {
            id: 2,
            title: "Clasificación Inteligente",
            description: "Filtramos y calificamos los contactos para priorizar oportunidades reales.",
            icon: "unicon-chart-pie",
        },
        {
            id: 3,
            title: "Automatización",
            description: "Secuencias automáticas (WhatsApp/Email) nutren al paciente hasta que agenda.",
            icon: "unicon-chat",
        },
        {
            id: 4,
            title: "Cita y Atención",
            description: "El paciente acude a la cita. Gestión de recordatorios para evitar ausencias.",
            icon: "unicon-calendar",
        },
        {
            id: 5,
            title: "Historia Clínica",
            description: "El médico accede al perfil completo y registra evolución y tratamientos.",
            icon: "unicon-document",
        },
    ];

    return (
        <div className="section panel overflow-hidden bg-white dark:bg-gray-900 border-top border-gray-100 dark:border-gray-800 relative z-1">
            <div className="section-outer panel py-8 xl:py-10">
                <div className="container max-w-xl">
                    <div className="section-inner panel vstack gap-6 sm:gap-8 xl:gap-10">
                        <div
                            className="panel vstack items-center gap-2 xl:gap-3 text-center max-w-700px mx-auto"
                            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                        >
                            <span className="fw-bold text-primary text-uppercase tracking-widest fs-7">
                                Pipeline Automatizado
                            </span>
                            <h2 className="h3 lg:h2 xl:h1 m-0">El Flujo del Sistema</h2>
                            <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                                Así transformamos desconocidos en pacientes fieles: un proceso integrado de principio a fin.
                            </p>
                        </div>

                        <div className="panel">
                            <div
                                className="row child-cols-12 sm:child-cols-6 lg:child-cols text-center g-3 justify-center"
                                data-anime="targets: >*; translateX: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 300});"
                            >
                                {steps.map((step, index) => (
                                    <div key={index} className="col-12 sm:col-6 lg:col">
                                        <div className="panel vstack gap-3 items-center p-4 rounded-2 bg-white dark:bg-gray-800 shadow-xs hover:shadow-md transition-all duration-300 h-100 relative group border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary">

                                            {/* Connector Arrow */}
                                            {index !== steps.length - 1 && (
                                                <div className="d-none lg:d-block position-absolute top-50 start-100 translate-middle-y z-1" style={{ right: '-10%' }}>
                                                    <i className="unicon-arrow-right text-gray-300 dark:text-gray-600 fs-4"></i>
                                                </div>
                                            )}

                                            <div className="cstack w-80px h-80px rounded-circle bg-primary text-white mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                                <i className={`icon fs-3 ${step.icon}`}></i>
                                            </div>
                                            <div className="vstack gap-2">
                                                <h5 className="h5 m-0 text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">{step.title}</h5>
                                                <p className="fs-7 text-dark dark:text-white text-opacity-70 px-2 lg:px-0">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
