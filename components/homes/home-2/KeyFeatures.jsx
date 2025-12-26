import { roles } from "@/data/roles";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function KeyFeatures() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden bg-secondary dark:bg-gray-800"
    >
      <div className="section-outer panel py-6 xl:py-9">
        <div className="container sm:max-w-lg xl:max-w-xl">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 id="roles" className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto">
                Niveles de Acceso del Sistema
              </h2>
              <div className="panel">
                <div
                  className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 items-center justify-center col-match g-3"
                  data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  {roles.slice(0, 6).map((role, index) => (
                    <div key={index}>
                      <div
                        className="feature-item panel p-4 rounded-2 bg-white dark:bg-gray-800 hover:scale-105 duration-150 transition-all"
                      >
                        <div className="vstack panel min-h-250px">
                          <div className="vstack items-center text-center justify-between gap-3 h-100">
                            <div className="panel w-128px h-128px rounded-circle overflow-hidden border border-2 border-primary border-opacity-20 mt-2">
                              <Image
                                src={role.heroImage}
                                alt={role.name}
                                width={128}
                                height={128}
                                className="w-100 h-100 object-cover"
                              />
                            </div>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0">
                                  {role.name}
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  {role.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/roles`}
                className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                style={{
                  transform: "translateY(0.0097341px)",
                  opacity: "0.999797",
                }}
              >
                <span>Descubre más sobre los roles</span>
                <i className="icon icon-1 unicon-arrow-right rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
