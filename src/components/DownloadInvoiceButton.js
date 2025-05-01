"use client";

import React, { FC, useState } from "react";
import { DownloadIcon } from "@/icons";
import { useBillingAddress } from "@/hooks/use-billing-address";
import BillingAddressModal from "./BillingAddressModal";
import { useUserCookie } from "@/hooks/use-cookies";
import { useNotifications } from "@toolpad/core/useNotifications";
import { IconButton } from "@mui/material";

const DownloadInvoiceButton = ({ purchaseId, token }) => {
  const [open, setOpen] = useState(false);
  const notify = useNotifications();
  const { user } = useUserCookie();
  const { isBillingAddressLoading, billingAddress } = useBillingAddress();

  const [isInvoiceDownloading, setInvoiceDownloading] = useState(false);

  const handleDownload = async () => {
    if (!billingAddress) {
      setOpen(true);
      return;
    }

    try {
      setInvoiceDownloading(true);

      const response = await fetch(
        `/api/download-invoice?purchaseId=${purchaseId}&token=${token}&userId=${user.id}`
      );

      if (response.ok) {
        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "invoice.pdf";
        link.click();

        notify.show("Invoice downloaded successfully", {
          severity: "success",
          autoHideDuration: 3000,
        });
      } else {
        notify.show(
          "Failed to download, maybe chromium not installed, check version of chromium, to install run npx playwright install chromium",
          {
            severity: "error",
            autoHideDuration: 3000,
          }
        );
      }
    } catch (error) {
      notify.show(
        error instanceof Error ? error.message : "Failed to download",
        {
          severity: "error",
          autoHideDuration: 3000,
        }
      );
    } finally {
      setInvoiceDownloading(false);
    }
  };

  return (
    <>
      <IconButton
        color="success"
        aria-label="download"
        size="medium"
        loading={isInvoiceDownloading}
        disabled={isBillingAddressLoading}
        onClick={handleDownload}
      >
        <DownloadIcon />
      </IconButton>

      <BillingAddressModal open={open} setOpen={setOpen} />
    </>
  );
};

export default DownloadInvoiceButton;
