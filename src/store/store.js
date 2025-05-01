import { configureStore } from "@reduxjs/toolkit";
import app from "./app.slice";
import plans from "./plans.slice";

const store = configureStore({
  reducer: { app, plans },
});

export default store;
