"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function RoleDetail({ role }) {
    return (
        <div className="page-wrapper">
            {/* Hero Section */}
            <div className="hero-header section panel overflow-hidden bg-secondary dark:bg-gray-900">
                <div className="section-outer panel py-6 xl:py-9">
                    <div className="container max-w-xl">
                        <div className="row items-center g-4">
                            <div className="col-12 lg:col-6">
                                <div className="vstack gap-2">
                                    <span className="fs-6 fw-bold text-primary dark:text-secondary">
                                        {role.category}
                                    </span>
                                    <h1 className="h2 sm:h1 lg:display-6 m-0">
                                        Rol: {role.name}
                                    </h1>
                                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                        {role.fullDescription}
                                    </p>
                                    <div className="hstack gap-2 mt-2">
                                        <Link
                                            href="/page-pricing"
                                            className="btn btn-primary text-white"
                                        >
                                            Empezar ahora
                                        </Link>
                                        <Link
                                            href="/page-contact"
                                            className="btn btn-outline-primary"
                                        >
                                            Solicitar demo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-6">
                                <div className="panel rounded-2 overflow-hidden">
                                    <Image
                                        src={role.heroImage}
                                        alt={role.name}
                                        width={800}
                                        height={600}
                                        className="w-100 h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsibilities Section */}
            <div className="section panel overflow-hidden">
                <div className="section-outer panel py-6 xl:py-9">
                    <div className="container max-w-lg">
                        <div className="section-inner">
                            <div className="vstack gap-4 text-center mb-6">
                                <h2 className="h3 sm:h2 lg:h1 m-0">
                                    Responsabilidades Principales
                                </h2>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-600px mx-auto">
                                    Las tareas clave que este rol desempeña en la clínica
                                </p>
                            </div>
                            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4">
                                {role.responsibilities.map((responsibility, index) => (
                                    <div key={index}>
                                        <div className="panel vstack gap-2 p-3 bg-secondary dark:bg-gray-800 rounded-2 h-100">
                                            <div className="hstack gap-2">
                                                <i className="unicon-checkmark-circle text-primary fs-4" />
                                                <span className="fs-6 fw-medium">{responsibility}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="section panel overflow-hidden bg-secondary dark:bg-gray-900">
                <div className="section-outer panel py-6 xl:py-9">
                    <div className="container max-w-lg">
                        <div className="section-inner">
                            <div className="vstack gap-4 text-center mb-6">
                                <h2 className="h3 sm:h2 lg:h1 m-0">
                                    Funcionalidades del Sistema
                                </h2>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-600px mx-auto">
                                    Herramientas diseñadas específicamente para este rol
                                </p>
                            </div>
                            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4">
                                {role.features.map((feature, index) => (
                                    <div key={index}>
                                        <div className="panel vstack gap-3 p-4 bg-white dark:bg-gray-800 rounded-2 h-100">
                                            <div className="panel w-64px h-64px bg-primary bg-opacity-10 rounded-2 d-flex items-center justify-center">
                                                <Image
                                                    src={feature.icon}
                                                    alt={feature.title}
                                                    width={32}
                                                    height={32}
                                                    className="text-primary"
                                                />
                                            </div>
                                            <h3 className="h6 m-0">{feature.title}</h3>
                                            <p className="fs-7 text-dark dark:text-white text-opacity-70">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="section panel overflow-hidden">
                <div className="section-outer panel py-6 xl:py-9">
                    <div className="container max-w-lg">
                        <div className="section-inner">
                            <div className="vstack gap-4 text-center mb-6">
                                <h2 className="h3 sm:h2 lg:h1 m-0">
                                    Beneficios Clave
                                </h2>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-600px mx-auto">
                                    Cómo nuestro CRM mejora tu trabajo diario
                                </p>
                            </div>
                            <div className="row child-cols-12 sm:child-cols-6 g-3">
                                {role.benefits.map((benefit, index) => (
                                    <div key={index}>
                                        <div className="panel hstack gap-2 p-3 bg-secondary dark:bg-gray-800 rounded-2">
                                            <i className="unicon-checkmark-circle text-primary fs-5" />
                                            <span className="fs-6">{benefit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Use Cases Section (if available) */}
            {role.useCases && role.useCases.length > 0 && (
                <div className="section panel overflow-hidden bg-secondary dark:bg-gray-900">
                    <div className="section-outer panel py-6 xl:py-9">
                        <div className="container max-w-lg">
                            <div className="section-inner">
                                <div className="vstack gap-4 text-center mb-6">
                                    <h2 className="h3 sm:h2 lg:h1 m-0">
                                        Casos de Uso
                                    </h2>
                                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 max-w-600px mx-auto">
                                        Ejemplos reales de cómo usar el sistema en tu día a día
                                    </p>
                                </div>
                                <div className="vstack gap-4">
                                    {role.useCases.map((useCase, index) => (
                                        <div key={index} className="panel p-4 bg-white dark:bg-gray-800 rounded-2">
                                            <h3 className="h5 mb-2">{useCase.title}</h3>
                                            <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                                                {useCase.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="section panel overflow-hidden">
                <div className="section-outer panel py-6 xl:py-9">
                    <div className="container max-w-lg">
                        <div className="panel p-4 sm:p-6 lg:p-8 bg-primary rounded-3 text-center">
                            <div className="vstack gap-3 max-w-600px mx-auto">
                                <h2 className="h3 sm:h2 text-white m-0">
                                    ¿Listo para optimizar tu trabajo?
                                </h2>
                                <p className="fs-6 text-white text-opacity-90">
                                    Únete a cientos de profesionales que ya están usando nuestro CRM para mejorar su práctica diaria.
                                </p>
                                <div className="hstack gap-2 justify-center mt-2">
                                    <Link
                                        href="/page-pricing"
                                        className="btn btn-white text-primary"
                                    >
                                        Ver planes
                                    </Link>
                                    <Link
                                        href="/page-contact"
                                        className="btn btn-outline-white"
                                    >
                                        Contactar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
