"use client";

import React from "react";
import DashboardSection from "@/components/DashboardSection";
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useUserCookie } from "@/hooks/use-cookies";
import { useAppState } from "@/hooks/use-app-state";
import { useBillingAddress } from "@/hooks/use-billing-address";

import ChangeEmailDialog from "@/components/ChangeEmailDialog";
import ChangeNameDialog from "@/components/ChangeNameDialog";
import ChangePasswordDialog from "@/components/ChangePasswordDialog";
import DeleteAccountDialog from "@/components/DeleteAccountDialog";
import ChangeBillingAddressDialog from "@/components/ChangeBillingAddressDialog";
import PaymentHistoryTable from "@/components/PaymentHistoryTable";

const BillingDetailsPage = () => {
  const { isAppMounted } = useAppState();
  const { user } = useUserCookie();
  const { isBillingAddressLoading, billingAddress } = useBillingAddress();
  return (
    <>
      <DashboardSection title="My Account" heading="User Information">
        <Card className="p-6">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl font-semibold">Name</h3>
              {isAppMounted && user && (
                <p className="text-default-500 text-lg font-normal">
                  {user.name}
                </p>
              )}
            </div>
            <ChangeNameDialog />
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl font-semibold">Email Address</h3>
              {isAppMounted && user && (
                <p className="text-default-500 text-lg font-normal">
                  {user.email}
                </p>
              )}
            </div>
            <ChangeEmailDialog />
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl font-semibold">Password</h3>
              <p className="text-default-500 text-lg font-normal">**********</p>
            </div>
            <ChangePasswordDialog />
          </CardContent>
        </Card>

        <Card className="p-6">
          <h3 className="text-2xl font-bold">Account management</h3>
          <Divider />
          <CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 md:w-2/3">
              <h3 className="text-2xl font-semibold">Delete</h3>

              <p className="text-default-500 text-lg font-normal">
                Delete your account and its associated data in accordance with
                our Privacy Policy. You may choose to do it immediately or once
                your subscription ends and its
              </p>
            </div>
            <DeleteAccountDialog />
          </CardContent>
        </Card>
      </DashboardSection>

      <DashboardSection title="Billing Details" heading="Payment History">
        <PaymentHistoryTable />

        <Card className="p-6">
          <h3 className="text-2xl font-bold">Billing Address</h3>
          <Divider />
          <CardContent className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {isBillingAddressLoading && (
              <Box display="flex" justifyContent="center" p={4}>
                <CircularProgress color="success" />
              </Box>
            )}

            {!isBillingAddressLoading && !billingAddress && (
              <p className="text-default-500 text-lg font-normal">
                No Billing Address Found
              </p>
            )}

            {!isBillingAddressLoading && billingAddress && (
              <div className="space-y-2 md:w-2/3">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Name:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.name}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Email Address:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {user.email}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Address:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.address}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">City:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.city}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">State:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.state}
                  </span>
                </div>

                <Divider className="sm:hidden" />

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <h4 className="text-xl font-semibold w-40">Postal Code:</h4>
                  <span className="text-default-500 text-lg font-normal ml-2">
                    {billingAddress.postal_code}
                  </span>
                </div>
              </div>
            )}

            {!isBillingAddressLoading && <ChangeBillingAddressDialog />}
          </CardContent>
        </Card>
      </DashboardSection>
    </>
  );
};

export default BillingDetailsPage;
