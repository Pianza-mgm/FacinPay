"use client";
import "./globals.scss";
import { SessionProvider } from "next-auth/react";
import Link from 'next/link';

const Header = () => {
  return (
    <div id="header">
      <div className="section" id="project-info">
        <div id="project-logo"></div>
        <h3 id="project-name">Facin<span>Pay</span></h3>
      </div>
      <nav className="section" id="project-links">
        <Link className="header-link" href="/public/courses">Cursos</Link>
        <Link className="header-link" href="/public/about">Sobre</Link>
        <Link className="header-link" href="/private/data/dashboard">Dados</Link>
        <Link className="header-link" href="/private/profile">Perfil</Link>
      </nav>
    </div>
  );
};
export default function RootLayout({children}:Readonly<{children: React.ReactNode;}>){
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
