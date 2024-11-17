// TaskList.tsx
import React, { useState } from "react";
import { Task } from "../types/types";

interface TaskListProps {
  tasks: Task[];
  onEdit: (taskId: string, updatedTask: Task) => void;
  onDelete: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedPriority, setUpdatedPriority] = useState("");

  const handleEditClick = (task: Task) => {
    setEditingTask(task);
    setUpdatedTitle(task.title);
    setUpdatedPriority(task.priority);
  };

  const handleSaveClick = () => {
    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: updatedTitle,
        priority: updatedPriority,
      };
      onEdit(editingTask.id, updatedTask);
      setEditingTask(null); // Скрываем форму редактирования после сохранения
    }
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          {editingTask?.id === task.id ? (
            <div>
              {/* Добавляем метку для поля ввода */}
              <label htmlFor={`task-title-${task.id}`} className="edit-label">
                Task Title
              </label>
              <input
                id={`task-title-${task.id}`}
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                className="edit-input"
                placeholder="Enter task title"
              />

              {/* Добавляем метку для выпадающего списка */}
              <label
                htmlFor={`task-priority-${task.id}`}
                className="edit-label"
              >
                Priority
              </label>
              <select
                id={`task-priority-${task.id}`}
                value={updatedPriority}
                onChange={(e) => setUpdatedPriority(e.target.value)}
                className="edit-select"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <button onClick={handleSaveClick} className="save-button">
                Save
              </button>
            </div>
          ) : (
            <div>
              <h3>{task.title}</h3>
              <p>{task.priority}</p>
              <div className="button-container">
                <button
                  className="edit-button"
                  onClick={() => handleEditClick(task)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
