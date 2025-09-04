"use client";

import Link from "next/link";

export function Sidebar({ links }: { links: { href: string; label: string }[] }) {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
