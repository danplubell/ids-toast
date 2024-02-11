import {ToasterViewPort} from "./ToasterViewPort.tsx";

export const Toaster = (props: {count: number}) => {
    const toastList = [
        { title: "1" },
        { title: "2" },
        { title: "3" },
        { title: "5" },
        { title: "6" },
    ];
    const {count} = props;
    const toasts = toastList.slice(0,count);
    return <ToasterViewPort toasts={toasts}/>
}