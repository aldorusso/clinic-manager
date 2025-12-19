import Link from "next/link";
import { menuItems } from "@/data/menu";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.href} className={pathname === item.href ? "text-primary" : ""}>
            {item.label}
          </Link>
        </li>
      ))}
    </>
  );
}
