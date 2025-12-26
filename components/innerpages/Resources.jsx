"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const resources = [
    {
        id: 1,
        title: "Plantilla Excel de Control de Gastos",
        category: "Gestión",
        description: "Organiza las finanzas de tu clínica con esta plantilla automatizada. Incluye categorías médicas y gráficos de rentabilidad.",
        image: "/assets/images/template/blog-01.jpg", // Using existing placeholder
        icon: "unicon-document-layout-center",
    },
    {
        id: 2,
        title: "Guía de Marketing para Doctores",
        category: "Marketing",
        description: "Aprende a captar pacientes en Instagram y Google sin depender de agencias. Estrategias éticas y efectivas.",
        image: "/assets/images/template/blog-02.jpg",
        icon: "unicon-bullhorn",
    },
    {
        id: 3,
        title: "Checklist de Apertura de Consultorio",
        category: "Legal",
        description: "No olvides ningún trámite. Lista completa de requisitos COFEPRIS/Sanidad y equipamiento mínimo necesario.",
        image: "/assets/images/template/blog-03.jpg",
        icon: "unicon-clipboard-notes",
    },
    {
        id: 4,
        title: "Consentimientos Informados (Pack)",
        category: "Legal",
        description: "Modelos redactados por abogados para los 10 procedimientos estéticos más comunes. Protege tu práctica.",
        image: "/assets/images/template/blog-04.jpg",
        icon: "unicon-locked",
    },
];

export default function Resources() {
    const [email, setEmail] = useState("");
    const [activeRes, setActiveRes] = useState(null);

    const handleDownload = (e) => {
        e.preventDefault();
        if (email) {
            alert(`¡Gracias! Hemos enviado el recurso a ${email}. (Simulación)`);
            setActiveRes(null);
            setEmail("");
        }
    };

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
                                    Recursos Gratuitos
                                </h1>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                    Herramientas, guías y plantillas para potenciar la gestión de tu clínica.
                                </p>
                            </div>

                            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4 lg:g-6">
                                {resources.map((res) => (
                                    <div key={res.id}>
                                        <div className="panel vstack gap-2 h-100 rounded-2 overflow-hidden border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300 group">
                                            <div className="position-relative overflow-hidden w-100 ratio ratio-3x2">
                                                {/* Fallback pattern if image fails or just use a colored div with icon */}
                                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gray-50 dark:bg-gray-800 flex-center">
                                                    <i className={`icon fs-1 text-primary opacity-20 ${res.icon}`}></i>
                                                </div>
                                            </div>
                                            <div className="panel vstack gap-2 p-4 flex-1">
                                                <div className="hstack gap-2 mb-1">
                                                    <span className="badge bg-primary-100 dark:bg-primary-900 text-primary fs-8 fw-bold py-1 px-2 rounded">
                                                        {res.category}
                                                    </span>
                                                </div>
                                                <h5 className="h6 m-0 text-dark dark:text-white group-hover:text-primary transition-colors">
                                                    {res.title}
                                                </h5>
                                                <p className="fs-7 opacity-70 mb-4 line-clamp-3">
                                                    {res.description}
                                                </p>
                                                <button
                                                    onClick={() => setActiveRes(res.id)}
                                                    className="btn btn-sm btn-outline-primary mt-auto w-100"
                                                >
                                                    <i className="unicon-download"></i> Descargar
                                                </button>
                                            </div>

                                            {/* Inline Form Overlay (Simple simulation) */}
                                            {activeRes === res.id && (
                                                <div className="position-absolute top-0 left-0 w-100 h-100 bg-white dark:bg-gray-900 z-1 p-4 vstack justify-center text-center fade-in">
                                                    <h6 className="mb-1">¿A dónde te lo enviamos?</h6>
                                                    <p className="fs-8 opacity-60 mb-3">Ingresa tu email para recibir el enlace.</p>
                                                    <form onSubmit={handleDownload} className="vstack gap-2">
                                                        <input
                                                            type="email"
                                                            className="form-control form-control-sm"
                                                            placeholder="tu@email.com"
                                                            required
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <div className="hstack gap-2 justify-center">
                                                            <button type="submit" className="btn btn-sm btn-primary text-white w-100">Enviar</button>
                                                            <button type="button" onClick={() => setActiveRes(null)} className="btn btn-sm btn-outline-gray-200 text-dark w-100">Cancelar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
