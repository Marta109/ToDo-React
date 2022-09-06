import React from "react";
import "./app-header.css";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({todosCount, importantTCount, completedCount}) => {
  return (
    // <div className="app-header d-flex">
    //   <h1>Den Braun</h1>
    //   <h2>10 ToDos</h2>
    // </div>
    <Header>
      <h1>Den Braun</h1>
      <h2>
        {todosCount} ToDos. Completed {completedCount}. Important
        {importantTCount}.
      </h2>
    </Header>
  );
};

export default AppHeader;
