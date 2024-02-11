import { nanoid } from "nanoid";
import { useEffect, useReducer, useRef } from "react";
import {
  ActionType,
  initializeContainerMap, initialStore,
  toastReducer,
} from "./store.ts";
import { ToastOptions } from "./Toast.tsx";
import { Toaster } from "./Toaster.tsx";
import { ToasterStoreContext } from "./ToasterStoreContext.tsx";

export const useToaster = () => {
  const containerId = useRef(nanoid());
  console.log("containerId", containerId);
  const [toastStore, dispatch] = useReducer(toastReducer, initialStore);
  useEffect(() => {
    initializeContainerMap(toastStore, containerId.current);
  }, []);
  const toast = (title: string, options?: ToastOptions) => {
    const newToastId = nanoid();
    const action = {
      type: "add" as ActionType,
      entry: {
        title: title,
        toastId: newToastId,
        containerId: containerId.current,
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
        <Toaster containerId={containerId.current} />
      </ToasterStoreContext.Provider>
    ),
  };
};
