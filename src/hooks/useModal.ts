import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = useCallback(() => setIsOpenModal(true), []);
  const handleCloseModal = useCallback(() => setIsOpenModal(false), []);

  return {
    isOpenModal,
    handleOpenModal,
    handleCloseModal,
  };
};
