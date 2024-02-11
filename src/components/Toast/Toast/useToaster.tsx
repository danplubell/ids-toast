import { nanoid } from "nanoid";
import { useReducer } from "react";
import {
  ActionType,
  IDS_TOAST_CONTAINER_ID,
  IDS_TOAST_STORE,
  toastReducer,
} from "./store.ts";
import { ToastOptions } from "./Toast.tsx";
import { Toaster } from "./Toaster.tsx";
import { ToasterStoreContext } from "./ToasterStoreContext.tsx";

export const useToaster = () => {
  const [toastStore, dispatch] = useReducer(toastReducer, IDS_TOAST_STORE);

  const toast = (title: string, options?: ToastOptions) => {
    const newToastId = nanoid();
    const action = {
      type: "add" as ActionType,
      entry: {
        title: title,
        toastId: newToastId,
        containerId: IDS_TOAST_CONTAINER_ID,
        onClick: options?.onClick,
        description: options?.description,
        media: options?.media,
      },
    };
    dispatch(action);
  };
  return {
    toast: toast,
    toaster: (
      <ToasterStoreContext.Provider value={{ toastStore, dispatch }}>
        <Toaster containerId={IDS_TOAST_CONTAINER_ID} />
      </ToasterStoreContext.Provider>
    ),
  };
};
