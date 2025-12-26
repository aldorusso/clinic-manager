"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { faqCategories, faqData } from "@/data/faq";

export default function FaqPage() {
    const [activeTab, setActiveTab] = useState("general");
    const [activeQuestion, setActiveQuestion] = useState(0);

    const toggleQuestion = (index) => {
        setActiveQuestion(activeQuestion === index ? -1 : index);
    };

    // Reset active question when tab changes
    React.useEffect(() => {
        setActiveQuestion(0);
    }, [activeTab]);

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
                                    Preguntas Frecuentes
                                </h1>
                                <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                    Encuentra respuestas rápidas a las dudas más comunes sobre ClinicManager.
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
                            <div className="row g-4 xl:g-8">
                                {/* Sidebar / Menu */}
                                <div className="col-12 lg:col-4">
                                    <div className="panel vstack gap-4 lg:sticky-top" style={{ top: "40px" }}>
                                        <div className="panel">
                                            <div className="vstack gap-1">
                                                {faqCategories.map((category) => (
                                                    <button
                                                        key={category.id}
                                                        onClick={() => setActiveTab(category.id)}
                                                        className={`btn btn-md text-start justify-start w-100 rounded-1 ${activeTab === category.id
                                                            ? "btn-primary text-white"
                                                            : "btn-outline-gray-200 dark:btn-outline-gray-700 text-dark dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                                                            }`}
                                                    >
                                                        {category.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="panel p-4 bg-secondary dark:bg-gray-800 rounded-1 text-center vstack gap-3">
                                            <div className="cstack w-64px h-64px rounded-circle bg-white dark:bg-gray-900 mx-auto text-primary fs-3">
                                                <i className="unicon-chat"></i>
                                            </div>
                                            <div>
                                                <h5 className="h6 m-0">¿No encuentras tu respuesta?</h5>
                                                <p className="fs-7 opacity-70 mt-1">Nuestro equipo de soporte está listo para ayudarte.</p>
                                            </div>
                                            <Link href="/contacto" className="btn btn-sm btn-primary text-white w-100 rounded-1">Contáctanos</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="col-12 lg:col-8">
                                    <div className="panel">
                                        <div className="vstack gap-4">
                                            <h3 className="h4 m-0 border-bottom pb-2">
                                                {faqCategories.find(c => c.id === activeTab)?.label}
                                            </h3>
                                            <ul className="gap-2 vstack">
                                                {faqData[activeTab]?.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        className={`panel p-3 rounded-1 bg-secondary dark:bg-gray-800 transition-all duration-200 ${activeQuestion === index ? "uc-open" : ""}`}
                                                    >
                                                        <a
                                                            className="uc-accordion-title fs-6 fw-bold text-dark dark:text-white text-none d-flex justify-between items-center cursor-pointer"
                                                            onClick={(e) => { e.preventDefault(); toggleQuestion(index); }}
                                                            role="button"
                                                        >
                                                            {item.question}
                                                            <i className={`icon-1 unicon-chevron-down text-primary transition-transform duration-300 ${activeQuestion === index ? "rotate-180" : ""}`}></i>
                                                        </a>
                                                        <div
                                                            className={`uc-accordion-content overflow-hidden transition-all duration-300 ${activeQuestion === index ? "mt-2 opacity-100" : "max-h-0 opacity-0 m-0"}`}
                                                            style={{ maxHeight: activeQuestion === index ? "200px" : "0px" }}
                                                        >
                                                            <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
