import {useState} from "react";

const idsToastStore = {
    toasts: [],
}
export const useStore = () => {
    const [_state, setState ] = useState(idsToastStore);


}