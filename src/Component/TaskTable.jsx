import React from "react";

const TaskTable = ({ tasks }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Task Name</th>
        <th>Status</th>
        <th>Created At</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.name}</td>
          <td>{task.status}</td>
          <td>{new Date(task.created_at).toLocaleString()}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TaskTable;