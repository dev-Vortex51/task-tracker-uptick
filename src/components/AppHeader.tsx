import { lazy, Suspense } from "react";
import { PlusIcon } from "lucide-react";
import Logo from "./Logo";
import { useModal } from "../hooks/useModal";

const Modal = lazy(() => import("./Modal"));
const CreateForm = lazy(() => import("./CreateForm"));

const AppHeader = () => {
  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div className="flex items-center justify-between">
      <Logo />
      <button
        className="w-fit sm:w-[200px] px-4 py-2 sm:px-[32px] sm:py-[16px] rounded-[12px] flex items-center gap-[8px] text-white cursor-pointer font-aventa font-semibold text-[20px] transition-all duration-200 ease-in-out bg-accent hover:bg-accent/90"
        onClick={handleOpenModal}
      >
        <PlusIcon />
        <span className="hidden sm:block">New task</span>
      </button>

      {isOpenModal && (
        <Suspense fallback={null}>
          <Modal onClose={handleCloseModal}>
            <CreateForm onClose={handleCloseModal} />
          </Modal>
        </Suspense>
      )}
    </div>
  );
};

export default AppHeader;
