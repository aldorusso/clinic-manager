import React from "react";

export default function CollaboratorsBenefits() {
    const benefits = [
        {
            icon: "unicon-money-bill",
            title: "Comisiones Recurrentes",
            description: "Gana un porcentaje mensual de por vida por cada clínica que traigas a ClinicManager. Crea un flujo de ingresos pasivos para tu agencia."
        },
        {
            icon: "unicon-chart-pie",
            title: "Mejores Resultados para tus Clientes",
            description: "Al usar ClinicManager, tus clientes convertirán más leads en pacientes, lo que hará que tu trabajo de marketing brille más y retengas mejor a tus cuentas."
        },
        {
            icon: "unicon-collaborate",
            title: "Soporte Dedicado",
            description: "Tendrás línea directa con nuestro equipo de soporte y ventas para ayudarte a cerrar tratos y resolver dudas técnicas de tus clientes."
        },
        {
            icon: "unicon-workspace",
            title: "Panel de Partner",
            description: "Accede a un panel exclusivo donde podrás ver tus referidos, tus comisiones acumuladas y materiales de marketing listos para usar."
        }
    ];

    return (
        <div id="beneficios" className="section panel overflow-hidden">
            <div className="section-outer panel py-6 xl:py-9">
                <div className="container max-w-xl">
                    <div className="section-inner panel">
                        <div className="vstack gap-4 text-center mb-6 lg:mb-9">
                            <span className="fs-7 fw-bold text-primary dark:text-secondary">
                                ¿Por qué ser Partner?
                            </span>
                            <h2 className="h3 sm:h2 lg:h1 m-0">
                                Beneficios diseñados para tu crecimiento
                            </h2>
                            <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-700px mx-auto">
                                No solo es un software, es una alianza estratégica. Queremos que tu agencia escale junto con nosotros.
                            </p>
                        </div>

                        <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-6 g-4 col-match">
                            {benefits.map((benefit, index) => (
                                <div key={index}>
                                    <div
                                        className="panel p-4 sm:p-6 rounded-2 border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 transition-all hover:bg-secondary dark:hover:bg-gray-700 hover:scale-105"
                                        data-anime={`opacity: [0, 1]; translateY: [24, 0]; delay: ${200 + (index * 100)};`}
                                    >
                                        <div className="vstack gap-3">
                                            <div className="icon-box w-64px h-64px rounded-circle bg-primary bg-opacity-10 text-primary d-flex items-center justify-center mb-2">
                                                <i className={`${benefit.icon} fs-3`}></i>
                                            </div>
                                            <h3 className="h5 m-0">{benefit.title}</h3>
                                            <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                                                {benefit.description}
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
    );
}
