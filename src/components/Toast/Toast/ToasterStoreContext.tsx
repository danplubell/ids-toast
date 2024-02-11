import { createContext, Dispatch } from "react";
import { Action, ToastStore } from "./store.ts";

export type ToasterStoreContext = {
  toastStore: ToastStore;
  dispatch: Dispatch<Action>;
};
export const ToasterStoreContext = createContext<ToasterStoreContext | null>(
  null,
);
