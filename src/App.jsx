import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, onValue, push } from "firebase/database";
import database from "./Component/firebaseConfig/firebaseConfig";
import TaskTable from "./Component/TaskTable";
import AddTaskModal from "./Component/AddTaskModal";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = () => {
    const tasksRef = ref(database, "tasks/");
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const taskList = data
        ? Object.entries(data).map(([id, task]) => ({ id, ...task }))
        : [];
      setTasks(taskList);
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (taskName, status) => {
    try {
      const tasksRef = ref(database, "tasks/");
      await push(tasksRef, { name: taskName, status, created_at: Date.now() });
      toast.success("Task added successfully");
    } catch (error) {
      toast.error("Error adding task");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Management Dashboard</h1>
      <TaskTable tasks={tasks} />
      <AddTaskModal handleAddTask={handleAddTask} />
      <ToastContainer />
    </div>
  );
};

export default App;
