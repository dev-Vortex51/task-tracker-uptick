import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskState } from "../../types/type";

const initialState: TaskState = {
  tasks: [
    {
      id: "1",
      name: "Design Homepage",
      description: "Create a responsive homepage layout using TailwindCSS.",
      dueDate: "2025-08-10",
      tag: "low",
      status: "todo",
    },
    {
      id: "2",
      name: "Fix Login Bug",
      description: "Resolve the token expiration issue in the login flow.",
      dueDate: "2025-08-09",
      tag: "mid",
      status: "in progress",
    },
    {
      id: "3",
      name: "Write Documentation",
      description: "Document API endpoints and authentication flow.",
      dueDate: "2025-08-15",
      tag: "high",
      status: "done",
    },
    {
      id: "4",
      name: "Add Payment Integration",
      description: "Integrate Stripe API for one-time and recurring payments.",
      dueDate: "2025-08-20",
      tag: "mid",
      status: "todo",
    },
    {
      id: "5",
      name: "Test User Flows",
      description: "Perform QA testing on all critical user paths.",
      dueDate: "2025-08-18",
      tag: "high",
      status: "in progress",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
