import { PlusIcon } from "lucide-react";
import Logo from "./Logo";
import Modal from "./Modal";
import CreateForm from "./CreateForm";
import { useState } from "react";

const AppHeader = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <button
        className="w-fit sm:w-[200px] px-4 py-2 sm:px-[32px] sm:py-[16px] rounded-[12px] flex items-center gap-[8px] text-white cursor-pointer font-aventa font-semibold text-[20px] transition-all duration-200 ease-in-out bg-accent hover:bg-accent/90"
        onClick={() => setIsOpenModal(true)}
      >
        <PlusIcon />
        <span className="hidden sm:block">New task</span>
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateForm onClose={() => setIsOpenModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default AppHeader;
