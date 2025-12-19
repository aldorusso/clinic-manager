import { features8 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div
      id="main_features"
      className="main-features section panel overflow-hidden"
    >
      <div className="section-outer panel pt-6 md:pt-8 xl:pt-10">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 max-w-650px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                Funcionalidades
              </span>
              <h2 className="h3 lg:h2 m-0">
                Te cubrimos durante todo el{" "}
                <span className="text-tertiary dark:text-primary">
                  ciclo de vida
                </span>
              </h2>
              <p className="fs-6 xl:fs-5 xl:px-8">
                Equipos médicos y administrativos pueden automatizar procesos
                desde una sola plataforma integral.
              </p>
            </div>
            <div
              className="row child-cols-12 md:child-cols-6 lg:child-cols-4 col-match g-2 lg:g-4"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              {features8.map((feature, index) => (
                <div key={index}>
                  <div className="panel overflow-hidden bg-secondary text-gray-900 dark:bg-tertiary-700 dark:text-white rounded-2 lg:rounded-3">
                    <div className="panel p-2 pb-0">
                      <Image
                        className="rounded-1-5"
                        alt=""
                        src={feature.imgSrc}
                        width={680}
                        height={680}
                      />
                    </div>
                    <div className="panel vstack items-start gap-2 p-3 lg:p-4">
                      <h4 className="h4 m-0 text-inherit">{feature.title}</h4>
                      <a
                        href="/page-features"
                        className="btn btn-sm btn-primary border px-2 mt-2"
                      >
                        <span>Probar ahora</span>
                        <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div className="md:col-6">
                <div className="panel overflow-hidden bg-primary-300 text-gray-900 rounded-2 lg:rounded-3">
                  <div className="panel vstack items-center text-center gap-2 p-3 lg:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit">
                      Planes escalables para cualquier tamaño
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0">
                      Maximiza tu productividad conectando nuestra solución SaaS
                      a las otras apps de tu negocio.
                    </p>
                  </div>
                  <div className="panel px-3 lg:px-4 xl:px-6 mb-2 lg:mb-5">
                    <Image
                      alt="builder-tools"
                      src="/assets/images/template/home-06-builder-tools.png"
                      width={1280}
                      height={800}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 lg:col-6">
                <div className="panel overflow-hidden min-h-450px bg-tertiary text-white rounded-2 lg:rounded-3 uc-dark">
                  <div className="panel vstack items-center text-center gap-2 p-3 md:p-4 xl:p-6">
                    <h4 className="h4 m-0 text-inherit">
                      Soporte al cliente dedicado
                    </h4>
                    <p className="fs-6 md:fs-5 lg:fs-4 m-0 xl:px-4 text-center">
                      Confía en nuestro equipo de soporte para ayudarte a sacar
                      el máximo provecho de nuestra plataforma.
                    </p>
                    <a
                      href="/page-contact"
                      className="btn btn-sm btn-primary border px-2 mt-2"
                    >
                      <span>Contáctanos</span>
                      <i className="icon icon-narrow unicon-arrow-right fw-bold rtl:rotate-180" />
                    </a>
                  </div>
                  <div className="panel min-h-200px md:min-h-250px xl:min-h-300px position-absolute bottom-0 start-0 end-0">
                    <video
                      className="position-cover blend-plus-lighter"
                      data-uc-video=""
                      src="/assets/images/media/animated-globe.mp4"
                      loop=""
                    />
                    <div
                      className="position-cover"
                      data-anime="targets: >*; scale: [0.5, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
                    >
                      <div
                        className="position-absolute"
                        style={{ bottom: "25%", left: "8%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/01.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "60%", left: "28%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/02.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "25%", right: "8%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/03.png"
                          width={150}
                          height={150}
                        />
                      </div>
                      <div
                        className="position-absolute"
                        style={{ bottom: "60%", right: "28%" }}
                      >
                        <Image
                          className="w-48px md:w-56px xl:w-64px p-narrow bg-white bg-opacity-50 backdrop-1 rounded-circle"
                          alt="user"
                          src="/assets/images/avatars/08.png"
                          width={150}
                          height={150}
                        />
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
