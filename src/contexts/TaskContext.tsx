import React, { createContext, useContext, useState } from "react";
import { Task } from "../model/task";



interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updateTask: Task) => void;
  deleteTask: (taskId: number) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

interface providerProps {
  children: any;
}

export function TaskProvider(props: providerProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updateTask: Task) => {
    const update = tasks.map((task) =>
      task.id === updateTask.id ? updateTask : task
    );
    setTasks(update);
  };

  const deleteTask = (taskId: number) => {
    const updateTask = tasks.filter((task) => task.id !== taskId);
    setTasks(updateTask);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
