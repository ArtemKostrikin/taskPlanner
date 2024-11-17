import React from "react";
import { Task } from "../types/types";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.priority}</p>
    </div>
  );
};

export default TaskItem;
