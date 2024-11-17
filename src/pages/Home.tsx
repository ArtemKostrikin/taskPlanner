// Home.tsx
import React, { useState } from "react";
import AddTaskForm from "../components/AddTaskForm";
import TaskList from "../components/TaskList";
import { Task } from "../types/types";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9), // Генерация случайного ID
      title,
      priority,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (taskId: string, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Planner</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};

export default Home;
