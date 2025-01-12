import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
export const TaskTable = ({ tasks, onDelete, onEdit }) => {
  const handleEditClick = (task) => {
    const updatedName = prompt("Enter new task name:", task.name);
    const updatedStatus = prompt("Enter new task status:", task.status);

    if (updatedName && updatedStatus) {
      const updatedData = { name: updatedName, status: updatedStatus };
      onEdit(task.id, updatedData);
    } else {
      alert("Both task name and status are required to update.");
    }
  };

  return (
    <table className="table table-hover table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Task ID</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>
              <span
                className={`badge ${
                  task.status === "Completed"
                    ? "bg-success"
                    : "bg-warning text-dark"
                }`}
              >
                {task.status}
              </span>
            </td>
            <td>{new Date(task.created_at).toLocaleString()}</td>
            <td>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => onDelete(task.id)}
              >
                <FaTrash /> Delete
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => handleEditClick(task)}
              >
                <FaEdit /> Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
