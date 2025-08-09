import { useSelector } from "react-redux";
import AppHeader from "./components/AppHeader";
import TasksWrapper from "./components/TasksWrapper";
import "./index.css";
import type { RootState } from "./store/store";

function App() {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const todoTask = tasks.filter((task) => task.status === "todo");
  const progressTask = tasks.filter((task) => task.status === "in progress");
  const doneTask = tasks.filter((task) => task.status === "done");

  return (
    <div className="flex items-center justify-center py-10 ">
      <div className=" w-[95%] p-4 sm:max-w-6xl md:max-w-7xl mx-auto flex flex-col gap-10">
        <AppHeader />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TasksWrapper title="To Do" tasksList={todoTask} />
          <TasksWrapper title="In Progress" tasksList={progressTask} />
          <TasksWrapper title="Done" tasksList={doneTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
