import React, {Component} from "react";
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: [
        {label: "task1", important: true, id: "fbwfes"},
        {label: "task2", important: false, id: "fbwfewdw"},
        {label: "task3", important: true, id: "fbwfedwwd"},
      ],
    };
  }

  onDeleteItem = (id) => {
    this.setState(({todoData}) => {
      let newToDoDate = todoData.filter((todo) => {
        return todo.id !== id;
      });
      return {
        todoData: newToDoDate,
      };
    });
  };
  onAddItem = (newItem) => {
    const newToDoItem = {
      label: newItem,
      important: false,
      id: String(Math.random()),
    };
    this.setState(({todoData}) => {
      const newData = [...todoData, newToDoItem];
      return {
        todoData: newData,
      };
    });
  };

  render() {
    return (
      <AppBlock>
        {/* <div className="app"> */}
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <ToDoStatusFilter />
        </div>
        <ToDoList
          todos={this.state.todoData}
          onDelete={this.onDeleteItem}
        />
        <ToDoAddForm onAddTodo={this.onAddItem} />
        {/* </div> */}
      </AppBlock>
    );
  }
}

// const App = () => {
//   const todoData = [
//     {label: "task1", important: true, id: "fbwfes"},
//     {label: "task2", important: false, id: "fbwfewdw"},
//     {label: "task3", important: true, id: "fbwfedwwd"},
//   ];
//   return (
//     <AppBlock>
//       {/* <div className="app"> */}
//       <AppHeader />
//       <div className="search-panel d-flex">
//         <SearchPanel />
//         <ToDoStatusFilter />
//       </div>
//       <ToDoList todos={todoData} />
//       <ToDoAddForm />
//       {/* </div> */}
//     </AppBlock>
//   );
// };

// export default App;
