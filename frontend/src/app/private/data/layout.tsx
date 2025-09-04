import { ReactNode } from "react";
import { Sidebar } from "@/app/components/sidebar";


export default function DataLayout({ children }: { children: ReactNode }) {
  const links=[
    { href: "app/private/data/dashboard", label: "Dashboard" },
    { href: "app/private/data/inflow", label: "Entradas" },
    { href: "app/private/data/outflow", label: "Saídas" },
    { href: "app/private/data/persisting_values", label: "Valores Persistetes" },
  ]
    return (
        <div className="flex min-h-screen">
          <main className="flex-1 p-6">{children}</main>
          <Sidebar links={links}/>
        </div>
    );
}
