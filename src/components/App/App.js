import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ToDoStatusFilter from "../ToDoStatusFilter/ToDoStatusFilter";
import ToDoList from "../ToDotList/ToDotList";
import ToDoAddForm from "../ToDoAddForm/ToDoAddForm";
import "./app.css";
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const App = () => {
  const todoData = [
    {label: "task1", important: true, id: "fbwfes"},
    {label: "task2", important: false, id: "fbwfewdw"},
    {label: "task3", important: true, id: "fbwfedwwd"},
  ];
  return (
    <AppBlock>
      {/* <div className="app"> */}
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ToDoStatusFilter />
      </div>
      <ToDoList todos={todoData} />
      <ToDoAddForm />
      {/* </div> */}
    </AppBlock>
  );
};

export default App;
