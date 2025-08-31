import React from "react";
import TaskWrapperBody from "./TaskWrapperBody";
import TaskWrapperHeader from "./TaskWrapperHeader";

type Task = {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  tag: string;
  status: string;
};

export type TasksWrapperProps = {
  title?: string;
  tasksList: Task[];
};

const TasksWrapperComponent = ({ tasksList, title }: TasksWrapperProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <TaskWrapperHeader title={title} tasksList={tasksList} />
      <TaskWrapperBody title={title} tasksList={tasksList} />
    </div>
  );
};

export const TasksWrapper = React.memo(TasksWrapperComponent);
export default TasksWrapper;
