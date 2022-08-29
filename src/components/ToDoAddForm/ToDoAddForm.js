import React from "react";
import "./todo-add-form.css";
const ToDoAddForm = ({onAddTodo}) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Add new task"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => {
          onAddTodo("task4");
        }}>
        Add
      </button>
    </div>
  );
};

export default ToDoAddForm;
