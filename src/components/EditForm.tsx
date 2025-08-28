import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../store/slices/taskSlice";
import type { RootState } from "../store/store";
import type { ModalProps } from "./Modal";

interface EditFormProps extends ModalProps {
  taskId: string;
}

const EditForm = ({ onClose, taskId }: EditFormProps) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const task = tasks.find((t) => t.id === taskId);
  const dispatch = useDispatch();

  const [taskName, setTaskName] = useState<string>(task?.name || "");
  const [description, setDescription] = useState<string>(
    task?.description || ""
  );
  const [dueDate, setDueDate] = useState<string>(task?.dueDate || "");
  const [tag, setTag] = useState<string>(task?.tag || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!task) return;

    dispatch(
      editTask({
        id: taskId,
        updatedTask: {
          name: taskName,
          description,
          dueDate,
          tag,
        },
      })
    );

    onClose();
  };

  const isFormValid =
    taskName.trim() !== "" &&
    description.trim() !== "" &&
    dueDate.trim() !== "" &&
    tag.trim() !== "";

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
      <HeadLogo />
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* Task Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Task name</label>
          <input
            className="border border-input-stroke py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            type="text"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        {/* Task Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Task description
          </label>
          <textarea
            className="border border-input-stroke py-3 px-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            placeholder="Describe the task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Due date</label>
          <input
            className="border border-input-stroke py-3 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Tags (Choose one)
          </label>
          <div className="flex gap-2 flex-wrap">
            {["high", "mid", "low"].map((t) => (
              <span
                key={t}
                onClick={() => setTag(t)}
                className={`px-4 py-1 capitalize rounded-full text-sm cursor-pointer transition-colors
                  ${
                    tag === t
                      ? "bg-accent text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            type="reset"
            onClick={onClose}
            className="py-3 cursor-pointer px-6 bg-cancel text-accent rounded-lg font-semibold hover:bg-cancel/70 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`py-3 px-6 rounded-lg font-semibold transition-colors
              ${
                isFormValid
                  ? "bg-accent text-white hover:bg-accent cursor-pointer"
                  : "bg-[#666D83] text-white cursor-not-allowed"
              }`}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;

function HeadLogo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/Group 2.png" alt="Tasky Logo" className="h-[23px]" />
      <h1 className="text-xl font-bold text-gray-900">Edit Task</h1>
    </div>
  );
}
