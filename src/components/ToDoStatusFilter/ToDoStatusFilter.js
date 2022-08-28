import React from "react";
import Button from "react-bootstrap/Button";
import "./todo-status-filter.css";
const ToDoStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button variant="primary">All</Button>
      <Button variant="outline-secondary">Important</Button>
      {/* <button type="button" className="btn  btn-primary">
        All
      </button> */}
      {/* <button type="button" className="btn btn-outline-secondary">
        Important
      </button> */}
    </div>
  );
};

export default ToDoStatusFilter;
