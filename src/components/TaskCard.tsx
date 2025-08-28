import { SquarePen, X } from "lucide-react";
import React from "react";
import Modal from "./Modal";
import EditForm from "./EditForm";
import { useModal } from "../hooks/useModal";

type TaskCardProps = {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  tag: string;
  onDelete?: () => void;
  onEdit?: () => void;
};

const TaskCard = React.memo(function TaskCard({
  id,
  name,
  description,
  dueDate,
  tag,
  onDelete,
  onEdit,
}: TaskCardProps) {
  const { handleCloseModal, isOpenModal, handleOpenModal } = useModal();

  const tagColors: Record<string, string> = {
    high: "bg-priority-high text-white",
    mid: "bg-priority-mid text-white",
    low: "bg-priority-low text-accent",
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
    handleOpenModal();
  };

  return (
    <div className="w-full h-[224px] bg-white rounded-[12px] p-6 flex flex-col gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
          {name}
        </h2>
        <button
          className="size-[28px] rounded-full bg-accent text-white flex items-center justify-center  transition-colors cursor-pointer duration-150"
          onClick={handleEdit}
        >
          <SquarePen className="size-[14px]" />
        </button>
      </div>
      <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      <p className="text-xs font-medium text-gray-500">
        <span className="font-semibold text-gray-700">Due Date:</span> {dueDate}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span
          className={`mt-auto w-fit px-3 py-1 text-xs font-medium rounded-md capitalize ${
            tagColors[tag] || "bg-gray-100 text-gray-500"
          }`}
        >
          {tag}
        </span>
        <button
          onClick={onDelete}
          className="size-[28px] rounded-full bg-todo-fill text-todo-number flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors cursor-pointer duration-150"
        >
          <X className="size-[14px]" />
        </button>
      </div>

      {isOpenModal && (
        <Modal onClose={handleCloseModal}>
          <EditForm onClose={handleCloseModal} taskId={id} />
        </Modal>
      )}
    </div>
  );
});
export default TaskCard;
