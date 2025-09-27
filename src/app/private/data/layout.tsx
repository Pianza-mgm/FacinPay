"use client";
import { ReactNode } from "react";
import { Sidebar } from "@/app/components/sidebar";
import { usePathname } from "next/navigation";


export default function DataLayout({ children }: { children: ReactNode }) {
  const links=[
    { href: "/private/data/dashboard"        , label: "Dashboard" , ID: "dashboard" },
    { href: "/private/data/inflow"           , label: "Entradas"  , ID: "inflow"    },
    { href: "/private/data/outflow"          , label: "Saídas"    , ID: "outflow"   },
    { href: "/private/data/persisting_values", label: "Constantes", ID: "constants" },
  ]

  return (
    <div style={{height: "90vh"}}>
      {children}
      <Sidebar links={links} active={usePathname().split('/').pop() || ""}/>
    </div>
  );
}
