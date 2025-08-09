import { X } from "lucide-react";

type TaskCardProps = {
  name: string;
  description: string;
  dueDate: string;
  tag: string;
  onDelete?: () => void;
};

const TaskCard = ({
  name,
  description,
  dueDate,
  tag,
  onDelete,
}: TaskCardProps) => {
  const tagColors: Record<string, string> = {
    high: "bg-priority-high  text-white",
    mid: "bg-priority-mid text-white",
    low: "bg-priority-low text-accent",
  };

  return (
    <div className="w-full h-[224px] bg-white rounded-[12px] p-6 flex flex-col gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 tracking-wide">
          {name}
        </h2>
        <button
          onClick={onDelete}
          className="size-[28px] rounded-full bg-todo-fill text-todo-number flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors cursor-pointer duration-150"
        >
          <X className="size-[14px]" />
        </button>
      </div>

      {/* Task Description */}
      <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

      {/* Due Date */}
      <p className="text-xs font-medium text-gray-500">
        <span className="font-semibold text-gray-700">Due Date:</span> {dueDate}
      </p>

      {/* Priority Tag */}
      <span
        className={`mt-auto w-fit px-3 py-1 text-xs font-medium rounded-md capitalize ${
          tagColors[tag] || "bg-gray-100 text-gray-500"
        }`}
      >
        {tag}
      </span>
    </div>
  );
};

export default TaskCard;
