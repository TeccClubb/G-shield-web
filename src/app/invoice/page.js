import React, { Suspense } from "react";
import Invoice from "@/components/Invoice";

export const metadata = {
  title: "Invoice",
};

const InvoicePage = () => (
  <Suspense>
    <Invoice />
  </Suspense>
);

export default InvoicePage;
