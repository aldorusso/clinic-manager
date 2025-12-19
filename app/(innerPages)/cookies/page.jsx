import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
    title: "Política de Cookies || Clinik.download",
    description: "Información sobre el uso de cookies en Clinik.download.",
};

export default function CookiesPage() {
    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <div className="section panel overflow-hidden">
                        <div className="section-outer panel py-6 xl:py-9">
                            <div className="container max-w-lg">
                                <div className="section-inner panel">
                                    <div className="panel vstack gap-4 lg:gap-6">
                                        <h1 className="h2 lg:h1">Política de Cookies</h1>
                                        <div className="panel vstack gap-2 text-justify">
                                            <p>
                                                Esta Política de Cookies explica qué son las Cookies y cómo las utilizamos. Debe leer esta política para comprender qué tipo de cookies utilizamos, la información que recopilamos mediante cookies y cómo se utiliza esa información.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">¿Qué son las Cookies?</h3>
                                            <p>
                                                Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeños fragmentos de información. Se almacenan en su dispositivo cuando el sitio web se carga en su navegador. Estas cookies nos ayudan a hacer que el sitio web funcione correctamente, hacerlo más seguro, proporcionar una mejor experiencia de usuario y comprender cómo funciona el sitio web y analizar qué funciona y dónde necesita mejoras.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">¿Cómo usamos las Cookies?</h3>
                                            <p>
                                                Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies propias y de terceros para varios propósitos. Las cookies de origen son principalmente necesarias para que el sitio web funcione correctamente y no recopilan ninguno de sus datos de identificación personal.
                                            </p>
                                            <p>
                                                Las cookies de terceros utilizadas en nuestro sitio web son principalmente para comprender cómo funciona el sitio web, cómo interactúa con nuestro sitio web, mantener nuestros servicios seguros, proporcionar anuncios que sean relevantes para usted y, en general, brindarle una experiencia de usuario mejorada.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Tipos de Cookies que utilizamos</h3>
                                            <ul className="list-disc list-inside">
                                                <li><strong>Esenciales:</strong> Algunas cookies son esenciales para que pueda experimentar la funcionalidad completa de nuestro sitio. Nos permiten mantener las sesiones de los usuarios y prevenir amenazas de seguridad. No recopilan ni almacenan ninguna información personal.</li>
                                                <li><strong>Estadísticas:</strong> Estas cookies almacenan información como el número de visitantes del sitio web, el número de visitantes únicos, qué páginas del sitio web han sido visitadas, la fuente de la visita, etc. Estos datos nos ayudan a comprender y analizar qué tan bien funciona el sitio web.</li>
                                                <li><strong>Funcionales:</strong> Estas son las cookies que ayudan a ciertas funcionalidades no esenciales en nuestro sitio web. Estas funcionalidades incluyen incrustar contenido como videos o compartir contenido del sitio web en plataformas de redes sociales.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer1 />
            </div>
        </>
    );
}
