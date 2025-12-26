import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import Resources from "@/components/innerpages/Resources";

export const metadata = {
    title: "Recursos Gratuitos para Médicos || ClinicManager",
    description: "Descarga plantillas, guías y recursos gratuitos para mejorar la gestión y marketing de tu clínica.",
};

export default function page() {
    return (
        <>
            <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <Resources />
                </div>
                <Footer1 />
            </div>
        </>
    );
}
