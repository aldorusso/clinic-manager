import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import ComparisonContent from "@/components/innerpages/ComparisonContent";

export const metadata = {
    title: "Comparativa || ClinicManager vs Competencia",
    description: "Compara ClinicManager con el software tradicional y descubre por qué somos la mejor opción.",
};

export default function page() {
    return (
        <>
            <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <ComparisonContent />
                </div>
                <Footer1 />
            </div>
        </>
    );
}
