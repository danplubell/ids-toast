import { ContainerId, ToastId } from "./Toast.tsx";
import { createContext } from "react";
import { nanoid } from "nanoid";
export type ActionType = "add" | "remove";
export type ToastStoreEntry = {
  toastId: ToastId;
  containerId: ContainerId;
};
export type ContainerMap = Map<ToastId, ToastStoreEntry>;
export type Action = {
  type: ActionType;
  entry: ToastStoreEntry;
};
export type ToastStore = Map<ContainerId, ContainerMap>;


export const initializeContainerMap = (
  store: ToastStore,
  containerId: ContainerId,
) => {
  const containerMap = new Map() as ContainerMap;
  store.set(containerId, containerMap);
  return containerMap;
};
export const ToasterStoreContext = createContext(null);
export const toastReducer = (state: ToastStore, action: Action) => {
  const containerMap = state.get(action.entry.containerId);
  switch (action.type) {
    case "add":
      if (containerMap) {
        containerMap.set(action.entry.toastId, action.entry);
        return state.set(action.entry.containerId, containerMap);
      }
      return state;
    case "remove":
      if (containerMap) {
        containerMap.delete(action.entry.toastId);
        return state.set(action.entry.containerId, containerMap);
      }
      return state;
    default:
      return state;
  }
};

export const createStore = () => {
  const store  = new Map() as ToastStore;
  const containerId = nanoid();
  initializeContainerMap(store, containerId);
  return {IDS_TOAST_STORE: store, IDS_TOAST_CONTAINER_ID: containerId};
};

export const {IDS_TOAST_STORE, IDS_TOAST_CONTAINER_ID} = createStore();
