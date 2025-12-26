import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CollaboratorsHero() {
    return (
        <div id="hero_header" className="hero-header section panel overflow-hidden bg-secondary dark:bg-gray-900">
            <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
                <div className="container max-w-xl">
                    <div className="row items-center g-4 lg:g-8">
                        <div className="col-12 lg:col-6">
                            <div
                                className="vstack gap-4"
                                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                            >
                                <div className="d-inline-flex">
                                    <span className="fs-7 fw-bold py-1 px-3 border border-primary text-primary rounded-pill">
                                        Programa de Partners exclusivo
                                    </span>
                                </div>
                                <h1 className="h2 sm:h1 lg:display-5 m-0">
                                    Potencia tu Agencia y maximiza los resultados de tus clínicas.
                                </h1>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                    Únete al programa de colaboradores de ClinicManager. Ofrece a tus clientes la herramienta definitiva para convertir leads en pacientes leales y genera una nueva fuente de ingresos para tu agencia.
                                </p>
                                <div className="hstack gap-2 mt-2">
                                    <Link
                                        href="/contacto"
                                        className="btn btn-primary text-white"
                                    >
                                        Convertirse en Partner
                                    </Link>
                                    <Link
                                        href="#beneficios"
                                        className="btn btn-outline-primary"
                                    >
                                        Ver Beneficios
                                    </Link>
                                </div>

                                <div className="hstack gap-4 mt-4 py-4 border-top border-gray-100 dark:border-gray-800">
                                    <div className="vstack gap-1">
                                        <h5 className="h4 m-0 text-primary">+30%</h5>
                                        <span className="fs-7 text-opacity-70">Comisión Recurrente</span>
                                    </div>
                                    <div className="vstack gap-1">
                                        <h5 className="h4 m-0 text-primary">24/7</h5>
                                        <span className="fs-7 text-opacity-70">Soporte Prioritario</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col-6">
                            <div
                                className="panel"
                                data-anime="opacity: [0, 1]; translateX: [48, 0]; easing: spring(1, 80, 10, 0); duration: 450; delay: 400;"
                            >
                                <figure className="featured-image m-0 rounded-2 overflow-hidden ratio ratio-4x3">
                                    <Image
                                        className="media-cover image"
                                        alt="Agencia Partner"
                                        src="/assets/images/template/career.jpg"
                                        width="800"
                                        height="600"
                                    />
                                </figure>
                                {/* Decorative elements */}
                                <div className="position-absolute bottom-0 start-0 z-1 ms-n6 mb-n6 d-none lg:d-block">
                                    <div className="panel p-3 bg-white dark:bg-gray-800 rounded-2 shadow-lg">
                                        <div className="hstack gap-3">
                                            <div className="icon-box w-48px h-48px rounded-circle bg-primary text-white d-flex items-center justify-center">
                                                <i className="unicon-chart-bar-up fs-4"></i>
                                            </div>
                                            <div>
                                                <h6 className="m-0">Crecimiento Real</h6>
                                                <span className="fs-7 text-success">Resultados probados</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
