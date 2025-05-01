"use client";

import React from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "@/store/store";
import { NotificationsProvider } from "@toolpad/core/useNotifications";

export const Providers = ({ children }) => (
  <CookiesProvider>
    <Provider store={store}>
      <NotificationsProvider>
        {children}
      </NotificationsProvider>
    </Provider>
  </CookiesProvider>
);
