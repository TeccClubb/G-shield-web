"use client";

import React, { useState } from "react";
import {
  DashboardIcon,
  SettingsIcon,
  SignOutIcon,
  SubscriptionIcon,
} from "@/icons";
import Divider from "@mui/material/Divider";
import { cn } from "@/lib/utils";
import {
  BILLING_DETAILS_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  SUBSCRIPTION_PAGE_PATH,
} from "@/lib/pathnames";
import Link from "next/link";
import { useLogout } from "@/hooks/useLogout";
import { Button, Drawer, IconButton, Tooltip } from "@mui/material";

const SideBar = ({ className }) => {
  const { handleLogout } = useLogout();
  return (
    <aside className={cn("w-52 py-8", className)}>
      <ul>
        <li>
          <Button
            component={Link}
            href={DASHBOARD_PAGE_PATH}
            className="w-full"
            sx={{
              color: "black",
              borderRadius: "9999px",
              textTransform: "capitalize",
              borderRadius: "none",
              paddingBlock: "1.50rem",
              paddingInline: "1.5rem",
              gap: "0.75rem",
              fontWeight: "700",
              justifyContent: "stretch",
            }}
          >
            <DashboardIcon />
            <span className="text-sm font-medium">Dashboard</span>
          </Button>
          <Divider />
        </li>

        {[
          {
            href: SUBSCRIPTION_PAGE_PATH,
            name: "Subscription",
            Icon: SubscriptionIcon,
          },
          {
            href: BILLING_DETAILS_PAGE_PATH,
            name: "Account & Billing",
            Icon: SettingsIcon,
          },
        ].map(({ href, name, Icon }) => (
          <li key={href}>
            <Button
              component={Link}
              href={href}
              className="w-full"
              sx={{
                color: "black",
                borderRadius: "9999px",
                textTransform: "capitalize",
                borderRadius: "none",
                paddingBlock: "1.50rem",
                paddingInline: "1.5rem",
                gap: "0.75rem",
                fontWeight: "700",
                justifyContent: "stretch",
              }}
            >
              <Icon />
              <span className="text-sm font-medium">{name}</span>
            </Button>
          </li>
        ))}

        <li>
          <Divider />
          <Button
            onClick={handleLogout}
            className="w-full"
            sx={{
              color: "black",
              borderRadius: "9999px",
              textTransform: "capitalize",
              borderRadius: "none",
              paddingBlock: "1.50rem",
              paddingInline: "1.5rem",
              gap: "0.75rem",
              fontWeight: "700",
              justifyContent: "stretch",
            }}
          >
            <SignOutIcon />
            <span className="text-sm font-medium">Sign Out</span>
          </Button>
        </li>
      </ul>
    </aside>
  );
};

const DashboardLayout = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="w-full min-h-[calc(100vh-4rem)] flex bg-white text-black">
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="w-52"
      >
        <SideBar />
      </Drawer>

      <SideBar className="hidden lg:block" />

      <div className="hidden lg:block">
        <Divider orientation="vertical" />
      </div>

      <div className="flex-1 pt-20 lg:pt-14">
        <Tooltip title="dashboard">
          <span className="lg:hidden">
            <IconButton
              onClick={() => setOpenDrawer(true)}
              className="absolute -top-14 left-4 p-2"
            >
              <DashboardIcon />
            </IconButton>
          </span>
        </Tooltip>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
