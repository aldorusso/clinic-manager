"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ComparisonContent() {
    const features = [
        {
            name: "Gestión de Pacientes (CRM)",
            us: true,
            them: true,
            usText: "Ilimitado + Segmentación IA",
            themText: "Básico",
        },
        {
            name: "Automatización de WhatsApp",
            us: true,
            them: false,
            usText: "Recordatorios + Marketing",
            themText: "Manual o Costo Extra",
        },
        {
            name: "Historia Clínica con Fotos",
            us: true,
            them: "partial",
            usText: "Antes/Después + Dibujo",
            themText: "Solo texto o archivos",
        },
        {
            name: "Telemedicina Integrada",
            us: true,
            them: false,
            usText: "Video HD sin costo extra",
            themText: "No incluido",
        },
        {
            name: "Migración de Datos",
            us: true,
            them: false,
            usText: "Gratuita y Asistida",
            themText: "Cobro adicional",
        },
        {
            name: "Soporte Técnico",
            us: true,
            them: "partial",
            usText: "Chat en vivo < 5 min",
            themText: "Ticket (24-48h)",
        },
        {
            name: "Actualizaciones",
            us: true,
            them: false,
            usText: "Mensuales (Gratis)",
            themText: "Pago por versión",
        },
    ];

    return (
        <>
            <div id="hero_header" className="hero-header section panel overflow-hidden">
                <div
                    className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
                    data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                >
                    <div
                        className="position-absolute rotate-45"
                        style={{ top: "30%", left: "18%" }}
                    >
                        <Image
                            className="w-32px text-gray-900 dark:text-white"
                            src="/assets/images/template/star-1.svg"
                            width={193}
                            height={216}
                            alt="star-1"
                            data-uc-svg=""
                        />
                    </div>
                    <div
                        className="position-absolute rotate-45"
                        style={{ top: "15%", right: "18%" }}
                    >
                        <Image
                            className="w-24px text-gray-900 dark:text-white"
                            src="/assets/images/template/star-2.svg"
                            width={69}
                            height={95}
                            alt="star-2"
                            data-uc-svg=""
                        />
                    </div>
                </div>
                <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
                    <div className="container max-w-lg">
                        <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                            <div
                                className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center"
                                data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                            >
                                <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                                    ClinicManager vs Tradicional
                                </h1>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                    Compara y descubre por qué las clínicas modernas están migrando a nuestra plataforma.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section panel overflow-hidden">
                <div className="section-outer panel pb-6 xl:pb-9">
                    <div className="container max-w-xl">
                        <div className="section-inner panel">

                            {/* Desktop Comparison Table */}
                            <div className="panel overflow-hidden rounded-2 border border-gray-200 dark:border-gray-800 shadow-sm d-none md:d-block">
                                <div className="row g-0 text-center fw-bold bg-gray-50 dark:bg-gray-800 border-bottom border-gray-200 dark:border-gray-700">
                                    <div className="col-4 p-4 text-start">Funcionalidad</div>
                                    <div className="col-4 p-4 text-primary fs-5 bg-white dark:bg-gray-900 border-start border-end border-gray-200 dark:border-gray-700">
                                        ClinicManager
                                    </div>
                                    <div className="col-4 p-4 text-gray-500">Software Tradicional</div>
                                </div>

                                {features.map((item, index) => (
                                    <div key={index} className={`row g-0 items-center border-bottom border-gray-100 dark:border-gray-800 ${index % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800 bg-opacity-30"}`}>
                                        <div className="col-4 p-4 fw-medium text-start">{item.name}</div>

                                        {/* Us */}
                                        <div className="col-4 p-4 bg-primary-50 dark:bg-primary-900 bg-opacity-10 border-start border-end border-gray-200 dark:border-gray-700 text-center">
                                            <div className="vstack justify-center items-center gap-1">
                                                {item.us === true && <i className="unicon-checkmark-circle-filled text-primary fs-3"></i>}
                                                <span className="fs-7 fw-bold text-dark dark:text-white">{item.usText}</span>
                                            </div>
                                        </div>

                                        {/* Them */}
                                        <div className="col-4 p-4 text-center opacity-60">
                                            <div className="vstack justify-center items-center gap-1">
                                                {item.them === false && <i className="unicon-close-circle-filled text-danger fs-3"></i>}
                                                {item.them === "partial" && <i className="unicon-subtract-circle-filled text-warning fs-3"></i>}
                                                {item.them === true && <i className="unicon-checkmark-circle text-gray-400 fs-3"></i>}
                                                <span className="fs-7 text-dark dark:text-white">{item.themText}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Comparison Cards */}
                            <div className="vstack gap-3 d-md-none">
                                {features.map((item, index) => (
                                    <div key={index} className="panel p-4 rounded-2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                                        <h5 className="h6 mb-3 border-bottom pb-2">{item.name}</h5>
                                        <div className="row g-3">
                                            <div className="col-6 border-end border-gray-100 dark:border-gray-700">
                                                <span className="fs-8 fw-bold text-uppercase text-primary d-block mb-1">ClinicManager</span>
                                                <div className="vstack gap-1">
                                                    <i className="unicon-checkmark-circle-filled text-primary fs-5"></i>
                                                    <span className="fs-7 fw-bold">{item.usText}</span>
                                                </div>
                                            </div>
                                            <div className="col-6 opacity-70">
                                                <span className="fs-8 fw-bold text-uppercase text-gray-500 d-block mb-1">Otros</span>
                                                <div className="vstack gap-1">
                                                    {item.them === false && <i className="unicon-close-circle-filled text-danger fs-5"></i>}
                                                    {item.them === "partial" && <i className="unicon-subtract-circle-filled text-warning fs-5"></i>}
                                                    {item.them === true && <i className="unicon-checkmark-circle text-gray-400 fs-5"></i>}
                                                    <span className="fs-7">{item.themText}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-6 lg:mt-8">
                                <h4 className="h4 mb-4">¿Listo para modernizar tu clínica?</h4>
                                <div className="hstack gap-3 justify-center">
                                    <Link href="/demo" className="btn btn-primary text-white btn-md lg:btn-lg">Solicitar Demo</Link>
                                    <Link href="/precios" className="btn btn-outline-gray-300 dark:btn-outline-gray-700 text-dark dark:text-white btn-md lg:btn-lg">Ver Precios</Link>
                                </div>
                                <p className="fs-7 opacity-60 mt-3">Migración gratuita incluida en todos los planes anuales.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
