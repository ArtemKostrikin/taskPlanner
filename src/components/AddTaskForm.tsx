import React, { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (title: string, priority: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(title, priority);
    setTitle(""); // Очищаем поле после отправки
    setPriority("Low"); // Сбрасываем приоритет
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <div className="form-group">
        <label htmlFor="task-title">Task Title</label>
        <input
          type="text"
          id="task-title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="task-priority">Priority</label>
        <select
          id="task-priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Task priority" // Добавлен aria-label для доступности
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
