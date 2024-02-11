import { ToasterViewPort } from "./ToasterViewPort.tsx";
import { useContext, useEffect, useState } from "react";
import { ContainerId, Toast } from "./Toast.tsx";
import { ToasterStoreContext } from "./ToasterStoreContext.tsx";

export interface Toaster {
  containerId: ContainerId;
}
export const Toaster = (props: Toaster) => {
  const { containerId } = props;
  const context = useContext(ToasterStoreContext);
  
  const [_toasts, setToasts] = useState<Toast[] | undefined>(undefined);

  useEffect(() => {
    if(context?.toastStore){
      const containerMap = context.toastStore.get(containerId);
      
      
    }
  }, [context, containerId]);
  return <ToasterViewPort toasts={_toasts} />;
};
