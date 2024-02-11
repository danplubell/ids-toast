import styled from "@emotion/styled";
import { Toast } from "./Toast.tsx";

const StyledToastContainer = styled.div`
  border: 1px solid red;
  min-height: 600px;
  min-width: 400px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
`;
interface ToasterViewPortProps {
  toasts: Toast[];
}
export const ToasterViewPort = (props: ToasterViewPortProps) => {
  const { toasts } = props;
  const toast = toasts.map((t) => {
    return <Toast title={t.title} />;
  });
  return <StyledToastContainer>{toast}</StyledToastContainer>;
};
