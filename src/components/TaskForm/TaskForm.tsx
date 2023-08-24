import React, { useState } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { Task } from "../../model/task";
import { useNavigate } from "react-router-dom";

const TaskForm: React.FC = () => {
  const navigate = useNavigate();
  const { addTask } = useTaskContext();
  const [formData, setFormData] = useState<Task>({
    id: 0,
    title: "",
    priority: "Low",
    description: "",
    dueDate: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    addTask(formData);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block text-gray-600">
            Priority
          </label>
          <input
            type="text"
            id="priority"
            name="priority"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.priority}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-gray-600">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600">
            Description{" "}
          </label>
          <textarea
            id="description"
            name="description"
            className="mt-1 p-2 w-full border rounded-md"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
