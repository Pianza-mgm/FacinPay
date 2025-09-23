"use client";

import "./globals.scss";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import cn from '@lib/clsx';
import { usePathname } from 'next/navigation';

export function Header({isFixed}: {isFixed?: boolean}){
  const {data: session} = useSession();
  return (
    <div className={cn("header", isFixed && "isFixed")}>
      <Link className="section" id="project-info" href="/">
        <h3 id="project-name">Facin<span>Pay</span></h3>
      </Link>
      <nav className="section" id="project-links">
        <Link className="header-link" href="/public/course_intro">Cursos</Link>
        <Link className="header-link" href="/public/about">Sobre</Link>
        <Link className="header-link" href="/private/data/dashboard">Dados</Link>
        <Link className="header-link" href="/private/profile">Perfil</Link>
        {session 
        ? (<button className="header-link cursor-pointer" onClick={() => signOut({callbackUrl: "/"})}>Logout</button>) 
        : (null)}
      </nav>
    </div>
  );
};
export default function RootLayout({children}: ReadOnly<{children: React.ReactNode}>){
  const pathname = usePathname();
  const headerFixed = pathname.includes("/about");

  return (
    <html lang="pt-br">
      <body>
        <SessionProvider>
          <Header isFixed={headerFixed} />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
