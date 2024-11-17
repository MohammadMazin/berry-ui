"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

export default function SidebarLink({ href, text }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`hover:text-black-300 rounded-lg px-2 py-1 hover:bg-purple-700 ${pathname === href ? "font-semibold text-yellow-500" : "text-purple-300"} `}
    >
      <span className="block transform transition-transform hover:translate-x-2">
        {text}
      </span>
    </Link>
  );
}
