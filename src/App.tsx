import React from "react";
import "./index.css";
import { TaskProvider } from "./contexts/TaskContext";
import TaskList from "./components/TaskList/TaskList";
import { RouterProvider } from "react-router-dom";
import router from "./Routes";

function App() {
  return (
    <div className="App">
     <header className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl text-center font-semibold">Task Management</h1>
    </header>

      <TaskProvider>
        <RouterProvider router={router}  />
      </TaskProvider>
    </div>
  );
}

export default App;
