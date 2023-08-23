import React from "react";
import "./App.css";
import { TaskProvider } from "./contexts/TaskContext";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <h1>Task Management Dashboard</h1>

      <TaskProvider>
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default App;
