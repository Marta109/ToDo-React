import React from "react";
import ToDoListItem from "../ToDoListItem/ToDoListItem";
import ListGroup from "react-bootstrap/ListGroup";
import "./todo-list.css";
const ToDoList = ({todos}) => {
  const todoElm = todos.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="list-group-item">
        {/* <ToDoListItem
          label={item.label}
          important={item.important}
        /> */}
        <ToDoListItem
          {...itemProps} // using spred poerator
        />
      </li>
    );
  });

  return (
    // <ul className="app-list list-group">{todoElm}</ul>
    <ListGroup as="ul" className="app-list list-group" > {todoElm}</ListGroup>
  );
};

export default ToDoList;
