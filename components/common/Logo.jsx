import Link from "next/link";

export default function Logo({ className = "" }) {
    return (
        <Link
            href="/"
            className={`text-none ${className}`}
            style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                display: "inline-block",
            }}
        >
            Clinic Manager
        </Link>
    );
}
