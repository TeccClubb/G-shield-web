"use client";

import React from "react";
import DashboardSection from "@/components/DashboardSection";
// import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { useActivePlan } from "@/hooks/usePlans";
import { getFormattedDate } from "@/lib/utils";
import { Button, Card, CardContent, CardHeader, Divider } from "@mui/material";

const SubscriptionPage = () => {
  const { activePlan } = useActivePlan();
  return (
    <DashboardSection title="My Subscription" heading="Subscription Details">
      {activePlan && (
        <Card
          className="p-4"
          sx={{
            borderRadius: "1rem",
            borderColor: "#808080",
            borderWidth: "1px",
          }}
        >
          <CardContent className="flex flex-col gap-4">
            <div className="flex-col items-start gap-3">
              <h5 className="text-default-500 text-sm font-bold">
                Vpn Services
              </h5>

              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <h4 className="text-lg font-bold">
                  {activePlan.plan.duration} {activePlan.plan.duration_unit} of
                  VPN
                </h4>
              </div>

              <Divider />
            </div>
            <p className="text-base font-medium">
              Your Plan ends on {getFormattedDate(activePlan.end_date)}. You’ll
              be billed when your subscription starts on{" "}
              {getFormattedDate(activePlan.start_date)}.
            </p>

            <h5 className="text-default-500 text-sm font-bold">Plan Details</h5>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 border-2 border-default-200 rounded-lg">
              <div className="h-16 flex items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold">
                    ${activePlan.amount_paid}
                  </h3>
                  <span className="text-xs">
                    {activePlan.plan.duration} {activePlan.plan.duration_unit}
                  </span>
                </div>

                <Divider orientation="vertical" />

                <div>
                  <h3 className="text-xl font-bold">On</h3>
                  <span className="text-xs">Automatic renewal</span>
                </div>
              </div>

              <Button
                variant="contained"
                color="error"
                sx={{ borderRadius: "9999px" }}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </DashboardSection>
  );
};

export default SubscriptionPage;
