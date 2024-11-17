import React, { Suspense } from "react";
import { TaskProvider } from "./context/TaskContext"; // Импортируем провайдер

const Home = React.lazy(() => import("./pages/Home")); // Ленивая загрузка страницы

const App: React.FC = () => {
  return (
    <TaskProvider>
      {" "}
      {/* Оборачиваем в TaskProvider */}
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </TaskProvider>
  );
};

export default App;
