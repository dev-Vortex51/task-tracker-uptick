import { createPortal } from "react-dom";
import { useEffect } from "react";

export type ModalProps = {
  children?: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 bg-[#000B30]/50 flex items-center justify-center z-50 animate-fadeIn px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[12px] shadow-lg p-6 sm:p-8 w-full max-w-lg flex flex-col gap-8 
                   sm:w-[354px] "
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
