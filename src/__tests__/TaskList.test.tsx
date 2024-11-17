import { render, screen, fireEvent } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { Task } from "../types/types";

test("renders tasks correctly and handles edit and delete", () => {
  const tasks: Task[] = [
    { id: "1", title: "Test Task 1", priority: "High" },
    { id: "2", title: "Test Task 2", priority: "Low" },
  ];

  // Создаем заглушки для onEdit и onDelete
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();

  render(
    <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
  );

  // Проверка, что задачи рендерятся
  expect(screen.getByText("Test Task 1")).toBeInTheDocument();
  expect(screen.getByText("Test Task 2")).toBeInTheDocument();

  // Проверка кнопок для редактирования и удаления
  const editButton1 = screen.getByText("Edit");
  const deleteButton1 = screen.getByText("Delete");

  expect(editButton1).toBeInTheDocument();
  expect(deleteButton1).toBeInTheDocument();

  // Проверка клика по кнопке "Edit"
  fireEvent.click(editButton1);
  expect(handleEdit).toHaveBeenCalledWith("1", {
    id: "1",
    title: "Test Task 1",
    priority: "High",
  });

  // Проверка клика по кнопке "Delete"
  fireEvent.click(deleteButton1);
  expect(handleDelete).toHaveBeenCalledWith("1");
});
