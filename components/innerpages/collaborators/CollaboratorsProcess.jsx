import React from "react";
import Image from "next/image";

export default function CollaboratorsProcess() {
    const steps = [
        {
            number: "01",
            title: "Regístrate como Partner",
            description: "Completa el formulario de aplicación. Revisaremos tu solicitud y validaremos que eres una agencia o consultor del sector."
        },
        {
            number: "02",
            title: "Recomienda y Conecta",
            description: "Usa tu enlace de afiliado único o presenta a tus clientes directamente a nuestro equipo de ventas para una demo personalizada."
        },
        {
            number: "03",
            title: "Gana y Crece",
            description: "Recibe tus comisiones mensualmente y accede a recursos exclusivos para ofrecer más valor a tus clientes."
        }
    ];

    return (
        <div className="section panel overflow-hidden bg-secondary dark:bg-gray-900">
            <div className="section-outer panel py-6 xl:py-9">
                <div className="container max-w-xl">
                    <div className="section-inner panel">
                        <div className="row items-center g-4 lg:g-8">
                            <div className="col-12 lg:col-5">
                                <div
                                    className="vstack gap-4"
                                    data-anime="targets: >*; translateX: [-24, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                                >
                                    <h2 className="h3 sm:h2 lg:h1 m-0">
                                        Cómo funciona el programa
                                    </h2>
                                    <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                        Hemos simplificado el proceso para que puedas empezar a generar ingresos adicionales de inmediato, sin complicaciones técnicas.
                                    </p>
                                    <div className="panel mt-2">
                                        <Image
                                            src="/assets/images/template/talking.svg"
                                            alt="Working together"
                                            width={400}
                                            height={400}
                                            className="d-none lg:d-block w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col-7">
                                <div className="vstack gap-4">
                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            className="panel p-4 bg-white dark:bg-gray-800 rounded-2 shadow-xs"
                                            data-anime={`translateX: [24, 0]; opacity: [0, 1]; delay: ${300 + (index * 150)};`}
                                        >
                                            <div className="hstack items-start gap-4">
                                                <div className="display-5 fw-bold text-gray-200 dark:text-gray-700 lh-1">
                                                    {step.number}
                                                </div>
                                                <div className="vstack gap-1">
                                                    <h4 className="h5 m-0">{step.title}</h4>
                                                    <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
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
        </div>
    );
}
