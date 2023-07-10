import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
} from "../api/tasks";

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

  const getTasks = async () => {
    const res = await getTasksRequest();
    setTasks(res.data);
  };

  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id != id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
