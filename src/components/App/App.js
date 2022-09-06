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
        {
          label: "task1",
          important: true,
          id: "fbwfes",
          chaked: false,
        },
        {
          label: "task2",
          important: false,
          id: "fbwfewdw",
          chaked: true,
        },
        {
          label: "task3",
          important: true,
          id: "fbwfedwwd",
          chaked: false,
        },
      ],
      todoName: "",
      filter: "all",
    };
  }

  changeData = (id, todoData, changeData) => {
    const newData = todoData.map((todo) => {
      if (todo.id == id) {
        if (changeData) {
          let important = !todo.important;
          return {...todo, important};
        } else {
          let chaked = !todo.chaked;
          return {...todo, chaked};
        }
      }
      return todo;
    });

    return newData;
  };

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

  onImportant = (id) => {
    this.setState(({todoData}) => {
      const newData = this.changeData(id, todoData, "important");
      return {
        todoData: newData,
      };
      // const newData = todoData.map((todo) => {
      //   if (todo.id == id) {
      //     const important = !todo.important;
      //     return {...todo, important};
      //   }
      //   return todo;
      // });

      // return {
      //   todoData: newData,
      // };
    });
  };

  onChecked = (id) => {
    this.setState(({todoData}) => {
      const newData = this.changeData(id, todoData);
      return {
        todoData: newData,
      };
      // const newData = todoData.map((todo) => {
      //   if (todo.id == id) {
      //     const chaked = !todo.chaked;
      //     // const active = !todo.active;
      //     return {...todo, chaked};
      //   }
      //   return todo;
      // });

      // return {
      //   todoData: newData,
      // };
    });
  };

  searchTodos = (todos, todoName) => {
    if (todoName == "") {
      return todos;
      // console.log(todoName);
    } else {
      return todos.filter((todo) => {
        // return todo.label == todoName;
        return todo.label.indexOf(todoName) > -1;
      });
    }
  };

  OnUpdateSearch = (todoName) => {
    this.setState({todoName});
  };

  filterTodos = (todos, filter) => {
    if (filter == "important") {
      return todos.filter((todo) => todo.important);
    } else {
      return this.searchTodos(
        this.state.todoData,
        this.state.todoName
      );
    }
  };

  onFilterSelcet = (filter) => {
    this.setState({filter});
  };

  render() {
    const searchedTodos = this.filterTodos(
      this.searchTodos(this.state.todoData, this.state.todoName),
      this.state.filter
    );
    const importantTodos = this.state.todoData.filter((el) => {
      return el.important == true;
    }).length;
    const completedTodos = this.state.todoData.filter((el) => {
      return el.chaked == true;
    }).length;
    return (
      <AppBlock>
        {/* <div className="app"> */}
        <AppHeader
          todosCount={this.state.todoData.length}
          importantTCount={importantTodos}
          completedCount={completedTodos}
        />
        <ToDoAddForm onAddTodo={this.onAddItem} />
        <div className="search-panel d-flex">
          <SearchPanel OnUpdateSearch={this.OnUpdateSearch} />
          <ToDoStatusFilter
            filter={this.state.filter}
            onFilterSelcet={this.onFilterSelcet}
          />
        </div>
        <ToDoList
          todos={searchedTodos.sort((a, b) => a.chaked - b.chaked)}
          onDelete={this.onDeleteItem}
          onImportant={this.onImportant}
          onChecked={this.onChecked}
        />
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
