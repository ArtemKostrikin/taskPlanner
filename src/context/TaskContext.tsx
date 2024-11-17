// src/context/TaskContext.tsx

import React, { createContext, useState, ReactNode } from "react";
import { Task } from "../types/types"; // путь к вашему типу Task

interface TaskContextValue {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: string) => void;
  editTask: (taskId: string, updatedTask: Task) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

const TaskContext = createContext<TaskContextValue | undefined>(undefined);

export const useTaskContext = () => {
  const context = React.useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => setTasks((prevTasks) => [...prevTasks, task]);
  const deleteTask = (taskId: string) =>
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  const editTask = (taskId: string, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};
