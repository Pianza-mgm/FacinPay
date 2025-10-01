"use client";
import { ReactNode } from "react";
import { Sidebar } from "@/app/components/sidebar";
import { usePathname } from "next/navigation";
import styles from './datalayout.module.scss';

export const daysInMonth = Array.from(
    { length: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() },
    (_, i) => ("Dia " + (i + 1).toString())
)
export const aleatoryMonthData = Array.from(
    { length: 30 }, 
    () => {return Math.random() < 0.7 ? 0 : Math.floor(Math.random() * 100) + 1}
);

export default function DataLayout({ children }: { children: ReactNode }) {
  const links=[
    { href: "/private/data/dashboard", label: "Dashboard" },
    { href: "/private/data/flow"     , label: "Entradas"  },
    { href: "/private/data/flow"     , label: "Saídas"    },
    { href: "/private/data/constants", label: "Constantes"},
  ]
 //use URL to define which data will be used in 'flow/'
  return (
    <div className={styles.layout}>
      {children}
      <Sidebar links={links} active={usePathname().split('/').pop() || ""}/>
    </div>
  );
}
