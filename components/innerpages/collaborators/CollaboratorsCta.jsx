import React from "react";
import Link from "next/link";

export default function CollaboratorsCta() {
    return (
        <div className="section panel overflow-hidden">
            <div className="section-outer panel py-6 xl:py-9">
                <div className="container max-w-xl">
                    <div
                        className="panel p-6 sm:p-8 lg:p-10 bg-primary text-white rounded-3 overflow-hidden position-relative"
                        data-anime="scale: [0.95, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450;"
                    >
                        {/* Background decoration */}
                        <div className="position-absolute top-0 end-0 p-8 d-none lg:d-block opacity-10">
                            <i className="unicon-collaborate display-1"></i>
                        </div>

                        <div className="vstack gap-4 items-center text-center max-w-700px mx-auto position-relative z-1">
                            <h2 className="h3 sm:h2 lg:display-6 m-0 text-white">
                                ¿Tienes una agencia y gestionas clínicas?
                            </h2>
                            <p className="fs-6 sm:fs-5 text-white text-opacity-80">
                                No dejes pasar la oportunidad de diferenciarte de la competencia y aumentar tus ingresos. Hablemos hoy mismo.
                            </p>
                            <div className="hstack gap-3 flex-wrap justify-center">
                                <Link
                                    href="/contacto"
                                    className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-0"
                                >
                                    Aplicar ahora
                                </Link>
                                <Link
                                    href="/contacto"
                                    className="btn btn-lg btn-outline-white hover:bg-white hover:text-primary"
                                >
                                    Agendar llamada
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
