"use client";

import React, { useState } from "react";
import { useBillingAddress } from "@/hooks/use-billing-address";
import BillingAddressModal from "./BillingAddressModal";
import { Button } from "@mui/material";

const ChangeBillingAddressDialog = () => {
  const [open, setOpen] = useState(false);
  const { billingAddress } = useBillingAddress();

  return (
    <>
      <Button color="success" variant="contained" onClick={() => setOpen(true)}>
        {billingAddress ? "Update" : "Add"} Billing Address
      </Button>

      <BillingAddressModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ChangeBillingAddressDialog;
