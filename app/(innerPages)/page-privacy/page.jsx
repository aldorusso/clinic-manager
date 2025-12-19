import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Aviso de Privacidad || Clinik.download",
    description: "Política de privacidad y protección de datos de Clinik.download.",
};

export default function PrivacyPage() {
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
                                        <h1 className="h2 lg:h1">Aviso de Privacidad</h1>
                                        <div className="panel vstack gap-2 text-justify">
                                            <p>
                                                Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                            <p>
                                                En <strong>Clinik.download</strong>, accesible desde clinik.download, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que son recopilados y registrados por Clinik.download y cómo los usamos.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Log Files</h3>
                                            <p>
                                                Clinik.download sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de alojamiento hacen esto y es parte del análisis de los servicios de alojamiento. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, proveedor de servicios de Internet (ISP), fecha y hora, páginas de referencia/salida y posiblemente el número de clics.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Cookies y Web Beacons</h3>
                                            <p>
                                                Como cualquier otro sitio web, Clinik.download utiliza 'cookies'. Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios personalizando el contenido de nuestra página web según el tipo de navegador de los visitantes y/u otra información.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Políticas de Privacidad de Terceros</h3>
                                            <p>
                                                La Política de Privacidad de Clinik.download no se aplica a otros anunciantes o sitios web. Por lo tanto, le recomendamos que consulte las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo optar por no participar en ciertas opciones.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Consentimiento</h3>
                                            <p>
                                                Al utilizar nuestro sitio web, usted acepta nuestra Política de Privacidad y acepta sus Términos y Condiciones.
                                            </p>
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
