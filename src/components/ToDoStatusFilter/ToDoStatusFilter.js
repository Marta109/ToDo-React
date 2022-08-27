import React from "react";
import "./todo-status-filter.css";
const ToDoStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn  btn-primary">
        All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Important
      </button>
    </div>
  );
};

export default ToDoStatusFilter;
