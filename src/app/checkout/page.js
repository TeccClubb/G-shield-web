"use client";

import React, { FC, Suspense } from "react";
import { usePlans } from "@/hooks/usePlans";
import CheckoutForm from "@/components/CheckoutForm";
import { notFound, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useBillingAddress } from "@/hooks/use-billing-address";
import { Card, CardContent, Divider, Skeleton } from "@mui/material";

const CheckOutPage = () => {
  const searchParams = useSearchParams();
  const planId = searchParams.get("planId");
  const { isPlansLoading, plans } = usePlans();
  const { isBillingAddressLoading, billingAddress } = useBillingAddress();

  if (!planId) {
    notFound();
  }
  const plan = plans.find((plan) => plan.id === +planId);

  return (
    <section className="bg-white w-full flex flex-col items-center justify-center pt-4">
      <div className="w-full max-w-7xl min-h-[calc(100vh-4rem)] flex flex-col flex-wrap items-center justify-center p-4">
        <div className="inline-block px-4 py-1 mb-4 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          Check out
        </div>
        <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
          {plan?.name} ${plan?.price}
        </h2>

        <div className="w-full flex flex-col lg:flex-row items-start gap-8">
          {(isPlansLoading || isBillingAddressLoading) &&
            Array.from({ length: 2 }).map((_, index) => (
              <Card
                key={index}
                className={cn(
                  "p-6 w-full animate-pulse",
                  index === 0 ? "lg:w-1/3" : "lg:w-2/3"
                )}
              >
                <CardContent className="gap-4">
                  <Skeleton className="h-6 w-1/3 rounded"></Skeleton>
                  <Divider />

                  <Skeleton className="h-6 w-1/2 rounded  mt-8 mb-2"></Skeleton>
                  <div className="flex items-center justify-between mb-6">
                    <Skeleton className="h-4 w-1/3 rounded"></Skeleton>
                    <Skeleton className="h-4 w-1/4 rounded"></Skeleton>
                  </div>
                  <Divider />
                  <div className="flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                      <Skeleton className="h-6 w-1/4 rounded"></Skeleton>
                      <Skeleton className="h-6 w-1/4 rounded"></Skeleton>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

          {!isPlansLoading && !isBillingAddressLoading && plan && (
            <>
              <Card className="p-6 w-full lg:w-1/3">
                <CardContent className="gap-4">
                  <h3 className="text-lg font-bold">Order Summary</h3>
                  <Divider />

                  <h3 className="text-lg font-bold mt-8 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-between text-md font-medium mb-6">
                    <p>
                      {plan.duration} {plan.duration_unit} of VPN
                    </p>
                    <p className="text-default-500">${plan.price}</p>
                  </div>

                  <Divider />
                  <div className="flex-col gap-4">
                    <div className="w-full flex items-center justify-between">
                      <h3 className="text-lg font-bold">Total</h3>
                      <span className="text-lg font-bold">${plan.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <CheckoutForm
                planId={plan.id}
                amount={+plan.price * 100}
                billingAddress={billingAddress}
                className="w-full lg:w-2/3"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const Page = () => (
  <Suspense>
    <CheckOutPage />
  </Suspense>
);

export default Page;
