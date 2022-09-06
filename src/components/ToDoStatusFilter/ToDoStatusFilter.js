import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import "./todo-status-filter.css";

export default class ToDoStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {
        name: "all",
        label: "All",
      },
      {name: "important", label: "Important"},
    ];
  }

  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const active = this.props.filter == name;
      const activeClass = active ? "primary" : "outline-secondary";
      return (
        <Button
          key={name}
          variant={activeClass}
          onClick={() => this.props.onFilterSelcet(name)}>
          {label}
        </Button>
      );
    });
    return (
      <div className="btn-group">
        {buttons}
        {/* <Button variant="primary" onClick={filterTodos("all")}>
          All
        </Button>
        <Button
          variant="outline-secondary"
          onClick={filterTodos("important")}>
          Important
        </Button> */}
      </div>
    );
  }
}

// const ToDoStatusFilter = () => {
//   return (
//     <div className="btn-group">
//       <Button variant="primary">
//         All
//       </Button>
//       <Button
//         variant="outline-secondary">
//         Important
//       </Button>
//       {/* <button type="button" className="btn  btn-primary">
//         All
//       </button> */}
//       {/* <button type="button" className="btn btn-outline-secondary">
//         Important
//       </button> */}
//     </div>
//   );
// };

// export default ToDoStatusFilter;
