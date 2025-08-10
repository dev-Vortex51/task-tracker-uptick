import { useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import type { TasksWrapperProps } from "./TasksWrapper";
import { deleteTask } from "../store/slices/taskSlice";

const TaskWrapperBody = ({ tasksList, title }: TasksWrapperProps) => {
  const dispatch = useDispatch();
  let bgClass = "";

  switch (title) {
    case "To Do":
      bgClass = "bg-todo-fill border-todo-border";
      break;
    case "In Progress":
      bgClass = "bg-progress-fill border-progress-border";
      break;
    case "Done":
      bgClass = "bg-done-fill border-done-border";
      break;
    default:
      bgClass = "bg-gray-100 border-gray-300";
      break;
  }

  return (
    <div
      className={`flex flex-col gap-4 p-4 rounded-[12px] border-2 ${bgClass}`}
    >
      {tasksList.length > 0 ? (
        tasksList.map((task) => (
          <TaskCard
            key={task.id}
            name={task.name}
            description={task.description}
            dueDate={task.dueDate}
            tag={task.tag}
            onDelete={() => dispatch(deleteTask(task.id))}
          />
        ))
      ) : (
        <p className="text-gray-500 text-sm italic text-center">
          No tasks available
        </p>
      )}
    </div>
  );
};

export default TaskWrapperBody;
