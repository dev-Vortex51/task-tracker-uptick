export type Task = {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  tag: string;
  status: string;
};

export interface TaskState {
  tasks: Task[];
}
