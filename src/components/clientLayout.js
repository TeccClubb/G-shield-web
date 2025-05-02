// src/components/ClientLayout.jsx
"use client";

import { usePathname } from "next/navigation";
 import Navbar from "./navBar";
 import Footer from "./footer";
import { DASHBOARD_PAGE_PATH, INVOICE_PAGE_PATH } from "@/lib/pathnames";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Add any route(s) where you want to hide Navbar/Footer
   
 

  return (
    <>
      {pathname !== INVOICE_PAGE_PATH && <Navbar />}
      <div>{children}</div>
      {(pathname !== INVOICE_PAGE_PATH &&    !pathname.includes(DASHBOARD_PAGE_PATH)) && <Footer />}
      {/* {(!pathname.includes(DASHBOARD_PAGE_PATH)) && <Footer />} */}
    </>
  );
}
