import { roles } from "@/data/roles";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Roles() {
    return (
        <div id="hero_header" className="hero-header section panel overflow-hidden">
            <div
                className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
                data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
            >
                <div
                    className="position-absolute  rotate-45"
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
                    className="position-absolute  rotate-45"
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
                                Roles
                            </h1>
                            <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                                Explora los diferentes roles disponibles en nuestra plataforma y sus capacidades.
                            </p>
                        </div>
                        <div className="panel">
                            <div
                                className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4 justify-between"
                                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                            >
                                {roles.map((role, index) => (
                                    <div key={index}>
                                        <div className="panel vstack gap-0 rounded lg:rounded-2 border overflow-hidden h-100 bg-white dark:bg-gray-800 transition-all hover:shadow-md">
                                            <div className="position-relative w-100 h-250px overflow-hidden">
                                                <Image
                                                    src={role.heroImage}
                                                    alt={role.name}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                    className="transition-transform duration-700 hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="position-absolute bottom-0 start-0 m-2">
                                                    <span className="badge bg-white text-primary shadow-xs fs-7 fw-bold py-1 px-2 rounded">
                                                        {role.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="panel vstack justify-between gap-4 p-3 sm:p-4 flex-1">
                                                <div className="vstack gap-2">
                                                    <div className="hstack justify-between items-start">
                                                        <h5 className="h5 m-0 text-dark dark:text-white">
                                                            {role.name}
                                                        </h5>
                                                        <i className={`${role.iconClass} fs-4 text-primary opacity-80`} />
                                                    </div>
                                                    <p className="fs-6 opacity-70 dark:opacity-80 line-clamp-3">
                                                        {role.description}
                                                    </p>
                                                </div>
                                                <Link
                                                    href={`/roles/${role.slug}`}
                                                    className="btn btn-sm btn-outline-primary w-100 justify-center mt-auto"
                                                >
                                                    <span>Ver detalles</span>
                                                    <i className="icon icon-narrow unicon-arrow-right rtl:rotate-180" />
                                                </Link>
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
