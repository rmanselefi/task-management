import React from "react";
import { Link } from "react-router-dom";

import { useTaskContext } from "../../contexts/TaskContext";

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();
  return (
    <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/6">
      <Link to="/add-task">
        <button
          type="submit"
          className="flex-none float-right rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Add New Task
        </button>
      </Link>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{task.title}</td>
              <td className="border px-4 py-2">{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
