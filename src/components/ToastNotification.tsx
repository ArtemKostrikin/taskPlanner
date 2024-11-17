import React, { useEffect, useState } from "react";
import "./ToastNotification.css"; // Импортируем стили

interface ToastNotificationProps {
  message: string;
  duration?: number; // Длительность отображения
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  duration = 3000, // По умолчанию 3 секунды
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`toast-notification duration-${duration}`}>{message}</div>
  );
};

export default ToastNotification;
