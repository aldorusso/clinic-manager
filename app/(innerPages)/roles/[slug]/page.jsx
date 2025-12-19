import Header2 from "@/components/headers/Header2";
import Footer2 from "@/components/footers/Footer2";
import RoleDetail from "@/components/innerpages/RoleDetail";
import { roles } from "@/data/roles";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const role = roles.find((r) => r.slug === slug);

    if (!role) {
        return {
            title: "Rol no encontrado - Clinik.download",
        };
    }

    return {
        title: `${role.name} - Roles | Clinik.download`,
        description: role.fullDescription,
    };
}

export async function generateStaticParams() {
    return roles.map((role) => ({
        slug: role.slug,
    }));
}

export default async function RoleDetailPage({ params }) {
    const { slug } = await params;
    const role = roles.find((r) => r.slug === slug);

    if (!role) {
        notFound();
    }

    return (
        <>
            <div className="page-wrapper uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden">
                <Header2 />
                <div id="wrapper" className="wrap">
                    <RoleDetail role={role} />
                </div>
                <Footer2 />
            </div>
        </>
    );
}
