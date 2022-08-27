import React from "react";
import "./todo-add-form.css";
const ToDoAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input type="text" placeholder="Add new task" className="form-control new-post-label" />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};

export default ToDoAddForm;
