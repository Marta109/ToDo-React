import React from "react";
import "./todo-list-item.css";

export default class ToDoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      chaked: false,
    };
  }

  onImportant = () => {
    this.setState(({important}) => ({
      important: !important,
    }));
  };
  onChacked = () => {
    this.setState(({chaked}) => ({
      chaked: !chaked,
    }));
  };

  render() {
    const {label} = this.props;
    let {important, chaked} = this.state;
    let del = <span className="app-list-item-label ">{label}</span>;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (chaked) {
      del = (
        <del>
          <span className="app-list-item-label ">{label}</span>
        </del>
      );
    }
    return (
      <div className={classNames}>
        {del}
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-chakbox btn-sm "
            onClick={this.onChacked}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={this.chaked}
            />
          </button>
          <button type="button" className="btn-trash btn-sm ">
            <i className="bi bi-trash-fill"></i>
          </button>
          <button
            type="button"
            className="btn-star btn-star "
            onClick={this.onImportant}>
            <i className="fas fa-star"></i>
          </button>
        </div>
      </div>
    );
  }
}

// const ToDoListItem = ({label, important}) => {
//   let classNames = "app-list-item d-flex justify-content-between";
//   if (important) {
//     classNames += " important";
//   }
//   return (
//     <div className={classNames}>
//       <span className="app-list-item-label ">{label}</span>
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-chakbox btn-sm ">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             value=""
//             id="flexCheckDefault"
//           />
//         </button>
//         <button type="button" className="btn-trash btn-sm ">
//           <i className="bi bi-trash-fill"></i>
//         </button>
//         <button type="button" className="btn-star btn-star ">
//           <i className="fas fa-star"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ToDoListItem;
