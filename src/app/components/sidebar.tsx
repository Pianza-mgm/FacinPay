"use client";

import Link from "next/link";

export function Sidebar({ links }: { links: { href: string; label: string }[] }) {
  return (
    <aside id="sidebar">
      <div id="profile-pic-container"></div>
      <nav>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="link">
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
