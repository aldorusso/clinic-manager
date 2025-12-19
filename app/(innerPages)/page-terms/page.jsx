import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import React from "react";

export const metadata = {
    title: "Términos y Condiciones || Clinik.download",
    description: "Términos y condiciones legales de Clinik.download.",
};

export default function TermsPage() {
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
                                        <h1 className="h2 lg:h1">Términos y Condiciones</h1>
                                        <div className="panel vstack gap-2 text-justify">
                                            <p>
                                                Bienvenido a Clinik.download. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Clinik.download.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Uso del Servicio</h3>
                                            <p>
                                                Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de Clinik.download si no aceptas todos los términos y condiciones establecidos en esta página.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Licencia</h3>
                                            <p>
                                                A menos que se indique lo contrario, Clinik.download y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en Clinik.download. Todos los derechos de propiedad intelectual están reservados. Puedes ver y/o imprimir páginas desde https://clinik.download para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
                                            </p>
                                            <h3 className="h5 lg:h4 mt-2">Restricciones</h3>
                                            <p>
                                                No debes:
                                            </p>
                                            <ul className="list-disc list-inside">
                                                <li>Publicar material desde https://clinik.download</li>
                                                <li>Vender, alquilar o sub-licenciar material de https://clinik.download</li>
                                                <li>Reproducir, duplicar o copiar material de https://clinik.download</li>
                                                <li>Redistribuir contenido de Clinik.download (a menos que el contenido se haga específicamente para la redistribución).</li>
                                            </ul>
                                            <h3 className="h5 lg:h4 mt-2">Responsabilidad del Contenido</h3>
                                            <p>
                                                No tendremos ninguna responsabilidad u obligación por cualquier contenido que aparezca en su Sitio Web. Usted acepta indemnizarnos y defendernos contra todas las reclamaciones que surjan de o se basen en su Sitio Web.
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
