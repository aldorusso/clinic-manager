"use client";
import { pricingPlans3 } from "@/data/pricing";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [showFullFeatures, setShowFullFeatures] = useState(false);
  return (
    <div id="pricing" className="pricing section panel overflow-hidden">
      <div className="section-outer panel py-6 xl:py-9 lg:mx-2 mt-2 lg:rounded-2 bg-secondary dark:bg-tertiary-700">
        <div className="container">
          <div className="section-inner panel">
            <div
              className="pricing-tables panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <div
                className="section-header vstack items-center gap-2 lg:gap-3"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill">
                  Precios
                </span>
                <h2 className="h4 sm:h3 lg:h2 m-0 text-center max-w-650px mx-auto">
                  Planes accesibles y escalables{" "}
                  <span className="text-tertiary dark:text-primary">
                    para cualquier tamaño de clínica
                  </span>
                </h2>
              </div>
              <div
                className="panel w-100"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <ul
                  className="uc-subnav uc-subnav-pill gap-1 uc-child-width-expand rounded-1-5 p-narrow max-w-xs mx-auto bg-white shadow-xs"
                  data-uc-switcher="swiping: false;"
                  role="tablist"
                >
                  <li
                    className={!isYearly ? "uc-active" : ""}
                    onClick={() => setIsYearly(false)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Mensual
                    </a>
                  </li>
                  <li
                    className={isYearly ? "uc-active" : ""}
                    onClick={() => setIsYearly(true)}
                  >
                    <a className="d-flex justify-center text-dark">
                      Anual
                    </a>
                  </li>
                </ul>
                <div className="uc-switcher mt-4 lg:mt-6">
                  <li
                    className="uc-active"
                    id="uc-switcher-24"
                    role="tabpanel"
                    aria-labelledby="uc-switcher-23"
                  >
                    <Swiper
                      spaceBetween={24}
                      slidesPerView={1.1}
                      breakpoints={{
                        0: {
                          slidesPerView: 1.1,
                        },
                        640: { slidesPerView: 2.1, spaceBetween: 16 },
                        768: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                      }}
                      observeSlideChildren
                      className="swiper overflow-unset lg:overflow-hidden swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                    >
                      {pricingPlans3.map((plan, index) => (
                        <SwiperSlide key={index}>
                          <div className="pricing-box panel p-2 md:p-3 lg:p-4 xl:p-5 vstack items-start rounded-1-5 lg:rounded-2 bg-white text-dark shadow-xs">
                            <span className="pricing-box-title fs-6 fw-bold py-narrow px-2 border rounded-pill mb-2">
                              {plan.title}
                            </span>
                            <p className="pricing-box-desc opacity-70">
                              {plan.description}
                            </p>
                            <div className="pricing-box-price hstack gap-narrow items-end mt-2">
                              <h4 className="price h1 lg:display-5 m-0 text-inherit">
                                ${isYearly ? plan.price * 10 : plan.price}
                              </h4>
                              <span className="duration fs-7 opacity-70">
                                / {isYearly ? "año" : "mes"}
                              </span>
                            </div>
                            <p className="pricing-box-bill fs-7 opacity-70">
                              Facturado {isYearly ? "anualmente" : "mensualmente"}
                            </p>
                            <hr />
                            <ul className="nav-y gap-1 fs-6">
                              <li className="mb-1">
                                <b>Incluye:</b>
                              </li>
                              {plan.features.map((feature, i) => (
                                <li key={i}>
                                  <i
                                    className={`icon icon-narrow ${plan.included[i]
                                      ? "unicon-checkmark"
                                      : "unicon-close"
                                      } fw-bold ltr:me-1 rtl:ms-1`}
                                  />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <div className="pricing-box-cta vstack gap-1 justify-center text-center mt-4">
                              <Link
                                href={plan.link}
                                className={`btn btn-md ${plan.buttonClass} border`}
                              >
                                {plan.title === "Empresarial"
                                  ? "Contáctanos"
                                  : "Prueba gratis"}
                              </Link>
                              {plan.title !== "Empresarial" && (
                                <span className="fs-7 opacity-70">
                                  ¡Sin tarjeta de crédito!
                                </span>
                              )}
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </div>
                <p className="text-center mt-4 lg:mt-6">
                  *Descuento anual disponible en planes seleccionados.
                </p>
              </div>
              <a
                onClick={() => setShowFullFeatures((pre) => !pre)}
                className="pricing-full-features-toggle btn btn-md btn-outline-tertiary dark:text-primary border px-3 rounded-pill"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <span>
                  <i className="icon-1 fw-bold unicon-add" /> Lista completa de funciones
                </span>
              </a>
            </div>
            {showFullFeatures && (
              <div
                className="pricing-features panel overflow-auto p-2 bg-white text-dark rounded-1-5 lg:rounded-2 mt-4 lg:mt-6"
                id="pricing-full-features"
                hidden=""
              >
                <table className="uc-table uc-table-divider uc-table-light">
                  <thead className="table-head sticky-top z-1">
                    <tr className="table-row border-white">
                      <th className="table-header-cell min-w-300px" scope="row">
                        <div className="text-transparent">
                          <span>Detalles del plan</span>
                        </div>
                      </th>
                      <th
                        className="table-header-cell min-w-150px w-1/5"
                        scope="col"
                        id="plan-1"
                      >
                        <div className="title">
                          <div className="h6 lg:h5 m-0 text-dark">
                            <span>Inicial</span>
                          </div>
                        </div>
                      </th>
                      <th
                        className="table-header-cell min-w-150px w-1/5"
                        scope="col"
                        id="plan-2"
                      >
                        <div className="title">
                          <div className="h6 lg:h5 m-0 text-dark">
                            <span>Crecimiento</span>
                          </div>
                        </div>
                      </th>
                      <th
                        className="table-header-cell min-w-150px w-1/5"
                        scope="col"
                        id="plan-3"
                      >
                        <div className="title">
                          <div className="h6 lg:h5 m-0 text-dark">
                            <span>Empresarial</span>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default">
                          <span>Gestión Clínica</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Usuarios / Médicos
                          </span>
                          <div
                            data-uc-tooltip="Número de usuarios permitidos"
                            tabIndex={0}
                            aria-expanded="false"
                            role="tooltip"
                          >
                            <i className="icon icon-narrow unicon-information-filled mt-px" />
                          </div>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span>1 médico</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Hasta 5 médicos</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Ilimitados</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Agenda Médica Inteligente
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Portal del Paciente
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Almacenamiento
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span>10 GB</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>100 GB</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Ilimitado</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default">
                          <span>Marketing y Automatización</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Recordatorios por WhatsApp
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Campañas de Email Marketing
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            CRM Avanzado
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="table-body">
                    <tr className="table-row table-heading border-0">
                      <th scope="colgroup" colSpan={4} className="py-1 px-0">
                        <div className="h6 m-0 bg-secondary text-tertiary w-100 p-2 rounded-default">
                          <span>Soporte y Seguridad</span>
                        </div>
                      </th>
                    </tr>
                    <tr className="table-row border-0">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Nivel de Soporte
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span>Email</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Prioritario</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>Dedicado 24/7</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Copias de Seguridad
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span>Diarias</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>En tiempo real</span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span>En tiempo real</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="table-row border-gray-100 dark:border-gray-600">
                      <th className="" scope="row">
                        <div className="hstack gap-1 justify-start">
                          <span className="fs-6 fw-normal text-dark">
                            Migración de Datos
                          </span>
                        </div>
                      </th>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary-50 text-tertiary-400">
                            <i className="icon-narrow unicon-close fw-bold" />
                          </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <span className="cstack w-24px h-24px rounded-circle bg-tertiary text-white">
                            <i className="icon-narrow unicon-checkmark fw-bold" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <div
              className="pricing-benefits panel vstack gap-2 lg:gap-3 mt-6 lg:mt-8"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h4
                className="h4 m-0"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                Lo que incluyen todos los planes
              </h4>
              <div
                className="row child-cols-6 lg:child-cols g-2 col-match"
                style={{ transform: "translateY(0px)", opacity: 1 }}
              >
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-01.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Gestión integral de pacientes y riesgos
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-08.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Panel de control intuitivo y personalizable
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-07.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Reportes y análisis automáticos
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-04.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Planes escalables para tu crecimiento
                    </span>
                  </div>
                </div>
                <div>
                  <div className="vstack items-start justify-between gap-2 lg:gap-4 p-2 xl:p-3 min-h-200px border bg-white text-dark rounded-1-5 shadow-xs">
                    <span className="icon mb-narrow">
                      <Image
                        className="w-40px"
                        alt="icon"
                        src="/assets/images/custom-icons/home-8-icon-05.svg"
                        width={24}
                        height={24}
                      />
                    </span>
                    <span className="fs-6 fw-medium mb-narrow text-inherit">
                      Integraciones y herramientas IA
                    </span>
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
