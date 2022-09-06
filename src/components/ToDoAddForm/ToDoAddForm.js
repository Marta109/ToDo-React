import React from "react";
import "./todo-add-form.css";
// const ToDoAddForm = ({onAddTodo}) => {
//   return (
//     <div className="bottom-panel d-flex">
//       <input
//         type="text"
//         placeholder="Add new task"
//         className="form-control new-post-label"
//       />
//       <button
//         type="submit"
//         className="btn btn-outline-secondary"
//         onClick={() => {
//           onAddTodo("task4");
//         }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default ToDoAddForm;

export default class ToDoAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  onValueChange = (e) => {
    this.setState({text: e.target.value});
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text && this.state.text !== " ") {
      this.props.onAddTodo(this.state.text);
      this.setState({
        text: "",
      });
    }
  };
  render() {
    // const {onAddTodo} = this.props;
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          className="form-control new-post-label"
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            // onAddTodo(this.state.text);
          }}>
          Add
        </button>
      </form>
    );
  }
}
