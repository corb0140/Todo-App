"use client";

import { store } from "@/app/redux/store";
import { Provider } from "react-redux";

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
