import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ToDoStatusFilter from "../ToDoStatusFilter/ToDoStatusFilter";
import ToDoList from "../ToDotList/ToDotList";
import ToDoAddForm from "../ToDoAddForm/ToDoAddForm";
import "./app.css";

const App = () => {
  const todoData = [
    {label: "task1", important: true, id:"fbwfes"},
    {label: "task2", important: false, id:"fbwfewdw"},
    {label: "task3", important: true, id:"fbwfedwwd"},
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ToDoStatusFilter />
      </div>
      <ToDoList todos={todoData} />
      <ToDoAddForm />
    </div>
  );
};

export default App;
