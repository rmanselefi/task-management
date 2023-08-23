import React from "react";

import { createBrowserRouter } from "react-router-dom";
import TaskDetail from "./components/TaskDetail/TaskDetail";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/task/:id",
    element: <TaskDetail  />,
  },
  {
    path: "/add-task",
    element: <TaskForm />,
  },
]);

export default router;
