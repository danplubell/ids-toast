import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

/*
const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

 */
const fadeIn = keyframes`
    from {
        transform: translate3d(110%, 0, 0);
        visibility: visible;
        opacity: 0;
    }
    to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

`;
const fadeOut = keyframes`
  from {
    translateX(0%);
    visibility: visible;
  }
  to {
    transform: translateX(110%);
  }

`;

/*
  0% {
    transform: translateX(1000px);
    -webkit-transform: translateX(1000px);
    -moz-transform: translateX(1000px);
    -ms-transform: translateX(1000px);
    -o-transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    opacity: 1;
  }

 */
/*
.slide-in-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

 */
type StyledProps = {
  deleting: boolean;
}
const StyledToast = styled.div<StyledProps>`
  border: 1px solid blue;
  min-width: 320px;
  max-width: 320px;
  min-height: 40px;
  transition: transform 0.35s cubic-bezier(0.06, 0.71, 0.55, 1.275);
  animation: ${(props) => !props.deleting? fadeIn : fadeOut} 0.5s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  -webkit-animation: ${(props) => !props.deleting? fadeIn : fadeOut} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

export type ContainerId = string;
export type ToastId = string;
export type ToastOptions = {
  onClick?: (e: MouseEvent) => void;
  description?: string;
  media?: string;
}
export interface Toast {
  title?: string;
  description?: string;
  containerId: ContainerId;
  toastId: ToastId;
  onClick?: (e: MouseEvent) => void;
}
export const Toast = (props: Toast) => {
  const { title } = props;
  const [dismiss, setDismiss] = useState(false);
  useEffect(()=> {
    setTimeout(()=> {console.log("dismiss"); setDismiss(true)}, 5000);
  })
  return <StyledToast deleting={dismiss}>{title}</StyledToast>;
};
