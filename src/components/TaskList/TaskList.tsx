import React from "react";

import { useTaskContext } from "../../contexts/TaskContext";

const TaskList: React.FC = () => {
  const tasks = useTaskContext();
  return (
    <div className="task-list">
      {tasks.tasks.map((task: any) => {
        return <p>{task.title}</p>;
      })}
    </div>
  );
};

export default TaskList;
