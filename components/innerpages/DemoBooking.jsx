"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function DemoBooking() {
    const [formStatus, setFormStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => {
            setFormStatus("success");
        }, 1500);
    };

    return (
        <div id="demo_header" className="section panel overflow-hidden">
            <div className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block z-0">
                <div
                    className="position-absolute rotate-45"
                    style={{ top: "20%", left: "10%" }}
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
                    style={{ bottom: "20%", right: "10%" }}
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

            <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9 relative z-1">
                <div className="container max-w-xl">
                    <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
                        <div className="row child-cols-12 lg:child-cols-6 g-6 xl:g-8 items-center">

                            {/* Left Column: Value Prop */}
                            <div>
                                <div className="vstack gap-4" data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100);">
                                    <div>
                                        <span className="fw-bold text-primary text-uppercase tracking-widest fs-7">
                                            Demostración Gratuita
                                        </span>
                                        <h1 className="h2 sm:h1 lg:display-6 m-0 mt-2">
                                            Agenda tu sesión personalizada
                                        </h1>
                                    </div>
                                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                        Descubre en 30 minutos cómo ClinicManager puede transformar la gestión de tu clínica. Sin compromiso.
                                    </p>

                                    <div className="vstack gap-3 mt-2">
                                        <div className="hstack gap-3 items-start">
                                            <div className="cstack w-40px h-40px rounded-circle bg-primary-100 dark:bg-primary-900 text-primary flex-none">
                                                <i className="unicon-checkmark fs-5"></i>
                                            </div>
                                            <div>
                                                <h5 className="h6 m-0">Tour completo de la plataforma</h5>
                                                <p className="fs-7 opacity-70">Te mostraremos las funciones clave para tu especialidad.</p>
                                            </div>
                                        </div>
                                        <div className="hstack gap-3 items-start">
                                            <div className="cstack w-40px h-40px rounded-circle bg-primary-100 dark:bg-primary-900 text-primary flex-none">
                                                <i className="unicon-chart-pie fs-5"></i>
                                            </div>
                                            <div>
                                                <h5 className="h6 m-0">Análisis de tus necesidades</h5>
                                                <p className="fs-7 opacity-70">Entenderemos tus retos actuales para ofrecerte soluciones.</p>
                                            </div>
                                        </div>
                                        <div className="hstack gap-3 items-start">
                                            <div className="cstack w-40px h-40px rounded-circle bg-primary-100 dark:bg-primary-900 text-primary flex-none">
                                                <i className="unicon-locked fs-5"></i>
                                            </div>
                                            <div>
                                                <h5 className="h6 m-0">Resolución de dudas en vivo</h5>
                                                <p className="fs-7 opacity-70">Pregunta todo lo que necesites sobre precios, migración y seguridad.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-3 rounded-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                        <div className="hstack gap-3">
                                            <Image
                                                src="/assets/images/avatars/01.png"
                                                width={48}
                                                height={48}
                                                alt="Agent"
                                                className="rounded-circle"
                                            />
                                            <div>
                                                <p className="fs-7 fw-medium m-0">"La demo me ayudó a entender lo fácil que es migrar mis datos. ¡Recomendado!"</p>
                                                <span className="fs-8 opacity-60 text-uppercase fw-bold mt-1 d-block">– Dra. Ana Martínez</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Calendar/Form */}
                            <div>
                                <div className="panel p-4 sm:p-6 rounded-2 bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800">
                                    {formStatus === "success" ? (
                                        <div className="vstack gap-4 items-center text-center py-8">
                                            <div className="cstack w-80px h-80px rounded-circle bg-green-100 text-green-600 mb-2">
                                                <i className="unicon-checkmark-circle fs-1"></i>
                                            </div>
                                            <div>
                                                <h3 className="h4 m-0">¡Solicitud Recibida!</h3>
                                                <p className="fs-6 opacity-70 mt-2">
                                                    Uno de nuestros expertos te contactará por WhatsApp/Email en menos de 24 horas para coordinar la hora exacta.
                                                </p>
                                            </div>
                                            <button onClick={() => setFormStatus("idle")} className="btn btn-outline-primary mt-2">Volver al formulario</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="vstack gap-3">
                                            <div className="text-center mb-2">
                                                <h3 className="h5 m-0">Solicitar Demo</h3>
                                                <p className="fs-7 opacity-70">Completa tus datos para agendar.</p>
                                            </div>

                                            <div className="row child-cols-12 sm:child-cols-6 g-3">
                                                <div>
                                                    <label className="form-label fs-7 fw-medium mb-1">Nombre</label>
                                                    <input className="form-control" type="text" placeholder="Tu nombre" required />
                                                </div>
                                                <div>
                                                    <label className="form-label fs-7 fw-medium mb-1">Apellido</label>
                                                    <input className="form-control" type="text" placeholder="Tu apellido" required />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="form-label fs-7 fw-medium mb-1">Correo Electrónico</label>
                                                <input className="form-control" type="email" placeholder="nombre@clinica.com" required />
                                            </div>

                                            <div>
                                                <label className="form-label fs-7 fw-medium mb-1">Teléfono (WhatsApp)</label>
                                                <input className="form-control" type="tel" placeholder="+34 600 000 000" required />
                                            </div>

                                            <div>
                                                <label className="form-label fs-7 fw-medium mb-1">Nombre de la Clínica</label>
                                                <input className="form-control" type="text" placeholder="Clínica..." required />
                                            </div>

                                            <div>
                                                <label className="form-label fs-7 fw-medium mb-1">Software actual (Opcional)</label>
                                                <select className="form-select text-gray-900 dark:text-white">
                                                    <option value="">Selecciona una opción</option>
                                                    <option value="none">Ninguno (Papel/Excel)</option>
                                                    <option value="other">Otro Software</option>
                                                </select>
                                            </div>

                                            <button
                                                className={`btn btn-primary text-white w-100 mt-2 ${formStatus === "submitting" ? "loading" : ""}`}
                                                type="submit"
                                                disabled={formStatus === "submitting"}
                                            >
                                                {formStatus === "submitting" ? "Enviando..." : "Solicitar Demo Gratis"}
                                            </button>

                                            <p className="fs-8 text-center opacity-60 m-0">
                                                Sin tarjeta de crédito requerida. Tus datos están 100% seguros.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
