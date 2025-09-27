"use client";

import { link } from "fs";
import Link from "next/link";

export function Sidebar({ links, active }: { links: { href: string; label: string; }[], active: string }) {
  
  return (
    <aside id="sidebar">
      <div id="profile-pic-container"></div>
      <nav>
        {links.map((link, index) =>{
          const id =
          link.href
            .split("/")
            .pop()
            ?.replace(/^#/, "") || "";

          return (
          <Link key={index} href={link.href} className={`link ${active === id ? "activatedLink" : ""}`} id={id}>
            {link.label}
          </Link>
        )})}
      </nav>
    </aside>
  );
}
