import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  DialogProps,
} from "@headlessui/react";
import { PropsWithChildren } from "react";

interface IModalProps extends DialogProps {
  title?: string;
  description?: string;
}
const Modal = ({
  children,
  title,
  description,
}: PropsWithChildren<IModalProps>) => {
  return (
    <Dialog open={true} className="relative z-50" onClose={() => {}}>
      <DialogBackdrop className="fixed inset-0 bg-background-overlay" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-[480px] w-full space-y-4 bg-background-surface1 p-12 rounded-32">
          {title && (
            <DialogTitle className="text-h3 text-center">{title}</DialogTitle>
          )}
          {description && <Description>{description}</Description>}
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
export default Modal;
