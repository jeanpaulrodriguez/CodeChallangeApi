import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTaskRequest } from "../api/tasks";

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

// eslint-disable-next-line react/prop-types
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    const res = await getTaskRequest();
    console.log(res);
  };

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
