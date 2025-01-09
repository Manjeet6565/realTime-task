import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const AddTaskModal = ({ handleAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = () => {
    if (!taskName.trim()) {
      toast.error("Task name is required");
      return;
    }
    handleAddTask(taskName, status);
    setTaskName("");
    setStatus("Pending");
    document.querySelector("#addTaskModal .btn-close").click();
  };

  return (
    <div>
      <button
        className="btn btn-primary mb-3"
        data-bs-toggle="modal"
        data-bs-target="#addTaskModal"
      >
        Add Task
      </button>

      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex="-1"
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addTaskModalLabel">
                Add New Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="taskName" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskName"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddTaskModal.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default AddTaskModal;
