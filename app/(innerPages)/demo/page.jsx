import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import DemoBooking from "@/components/innerpages/DemoBooking";

export const metadata = {
    title: "Agenda una Demo || ClinicManager",
    description: "Descubre cómo ClinicManager puede ayudarte a gestionar tu clínica de manera eficiente.",
};

export default function page() {
    return (
        <>
            <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <DemoBooking />
                </div>
                <Footer1 />
            </div>
        </>
    );
}
