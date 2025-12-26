import React from "react";
import Header2 from "@/components/headers/Header2";
import Footer1 from "@/components/footers/Footer1";
import CollaboratorsHero from "@/components/innerpages/collaborators/CollaboratorsHero";
import CollaboratorsBenefits from "@/components/innerpages/collaborators/CollaboratorsBenefits";
import CollaboratorsProcess from "@/components/innerpages/collaborators/CollaboratorsProcess";
import CollaboratorsCta from "@/components/innerpages/collaborators/CollaboratorsCta";

export const metadata = {
    title: "Programa de Partners para Agencias || ClinicManager",
    description: "Únete al programa de afiliados de ClinicManager. Ideal para agencias de marketing especializadas en clínicas estéticas.",
};

export default function CollaboratorsPage() {
    return (
        <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden dom-ready">
            <Header2 />
            <div id="wrapper" className="wrap">
                <CollaboratorsHero />
                <CollaboratorsBenefits />
                <CollaboratorsProcess />
                <CollaboratorsCta />
            </div>
            <Footer1 />
        </div>
    );
}
