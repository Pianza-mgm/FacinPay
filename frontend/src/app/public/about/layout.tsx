import { Sidebar } from "../../components/sidebar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Sidebar links={[{ href: "/about", label: "About" }]} />
    </div>
  );
}