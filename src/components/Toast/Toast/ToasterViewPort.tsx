import styled from "@emotion/styled";
import { Toast } from "./Toast.tsx";

const StyledToastContainer = styled.div`
  z-index: 999999;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  position: fixed;
  top: 16px;
  right: 16px;
  width: 320px;
`;
interface ToasterViewPortProps {
  toasts: Toast[] | undefined;
}
export const ToasterViewPort = (props: ToasterViewPortProps) => {
  const { toasts } = props;
  console.log("toasterviewport", toasts);
  const toast = toasts
    ? toasts.map((t) => {
        return <Toast title={t.title} containerId={t.containerId} toastId={t.toastId} />;
      })
    : null;
  return <StyledToastContainer>{toast}</StyledToastContainer>;
};
