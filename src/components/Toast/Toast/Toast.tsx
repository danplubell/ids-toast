import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;
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
const StyledToast = styled.div`
  border: 1px solid blue;
  min-width: 320px;
  max-width: 320px;
  min-height: 40px;
  transition: transform 0.35s cubic-bezier(0.06, 0.71, 0.55, 1.275);
  animation: ${()=>fadeIn} 0.5s 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  -webkit-animation: ${()=>fadeIn} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;
export interface Toast {
  title?: string;
  description?: string;
}
export const Toast = (props: Toast) => {
  const { title } = props;
  return <StyledToast>{title}</StyledToast>;
};
