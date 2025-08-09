import type { TasksWrapperProps } from "./TasksWrapper";

const TaskWrapperHeader = ({ tasksList, title }: TasksWrapperProps) => {
  let bgClass = "";
  let countBg = "";

  switch (title) {
    case "To Do":
      bgClass = "bg-todo-fill border-todo-border";
      countBg = "bg-todo-number";
      break;
    case "In Progress":
      bgClass = "bg-progress-fill border-progress-border";
      countBg = "bg-progress-number";
      break;
    case "Done":
      bgClass = "bg-done-fill border-done-border";
      countBg = "bg-done-number";
      break;
    default:
      bgClass = "bg-gray-100 border-gray-300";
      countBg = "bg-gray-400";
      break;
  }

  return (
    <div
      className={`flex items-center justify-between ${bgClass} border h-[59px] px-4 rounded-[12px] shadow-sm`}
    >
      {/* Title */}
      <p className="text-lg font-aventa font-semibold text-[#212126]">
        {title}
      </p>

      {/* Task Count Badge */}
      <div
        className={`size-[28px] rounded-full ${countBg} flex items-center justify-center text-white font-medium text-sm shadow-md`}
      >
        {tasksList.length}
      </div>
    </div>
  );
};

export default TaskWrapperHeader;
