import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ref, onValue, push, remove, update } from "firebase/database";
import database from "./Component/firebaseConfig/firebaseConfig";
import { TaskTable } from "./Component/TaskTable";
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
  const onDelete = async (id) => {
    try {
      const taskRef = ref(database, `tasks/${id}`);
      console.log("Deleting task at path:", `tasks/${id}`);
      await remove(taskRef);
      toast.success("Task deleted successfully");
    } catch (error) {
      console.log("Error deleting task:", error.message);
      toast.error("Error deleting task");
    }
  };
  const onEdit = async (id, updatedData) => {
    try {
      const taskRef = ref(database, `tasks/${id}`);
      console.log("Editing task at path:", `tasks/${id}`);
      console.log("Updated data:", updatedData);

      await update(taskRef, updatedData); // Update the task with new data
      toast.success("Task updated successfully");
    } catch (error) {
      console.log("Error updating task:", error.message);
      toast.error("Error updating task");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-primary">Task Management Dashboard</h1>
      <TaskTable tasks={tasks} onDelete={onDelete} onEdit={onEdit} />
      <AddTaskModal handleAddTask={handleAddTask} />
      <ToastContainer />
    </div>
  );
};

export default App;
