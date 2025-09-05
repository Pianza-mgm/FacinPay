"use client";
import "./globals.scss";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Link from 'next/link';

function Header(){
  const {data: session} = useSession();
  return (
    <div id="header">
      <Link className="section" id="project-info" href="/">
        <div id="project-logo"></div>
        <h3 id="project-name">Facin<span>Pay</span></h3>
      </Link>
      <nav className="section" id="project-links">
        <Link className="header-link" href="/public/courses">Cursos</Link>
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
export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>){
  return (
    <html lang="pt-br">
      <body>
        <SessionProvider><Header/></SessionProvider>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
