import React from "react";
import "./todo-list-item.css";
// import {ListGroup, Button} from "react-bootstrap";

// export default class ToDoListItem extends React.Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     important: false,
//     chaked: false,
//     active: false,
//   };
// }

// onImportant = () => {
//   this.setState(({important}) => ({
//     important: !important,
//   }));
// };
// onChacked = () => {
//   this.setState(({chaked}) => ({
//     chaked: !chaked,
//   }));
// };
// onActive = () => {
//   this.setState(({active}) => ({
//     active: !active,
//   }));
// };

// render() {
//   const {
//     label,
//     onDelete,
//     onChecked,
//     onImportant,
//     important,
//     chaked,
//     // active,
//   } = this.props;
//   // let {important, chaked} = this.state;
//   let del = <span className="app-list-item-label ">{label}</span>;
//   let classNames = "app-list-item d-flex justify-content-between";
//   if (important) {
//     classNames += " important";
//   }
//   if (chaked) {
//     del = (
//       <del>
//         <span className="app-list-item-label ">{label}</span>
//       </del>
//     );
//   }
// return (
// <div className={classNames}>
//   {del}
//   <div className="d-flex justify-content-center align-items-center">
//     <button type="button" className="btn-chakbox btn-sm ">
//       <input
//         className="form-check-input"
//         type="checkbox"
//         value=""
//         id="flexCheckDefault"
//         onClick={onChecked}
//         checked={chaked}
//         // onClick={this.onChacked}
//         // checked={this.chaked}
//         // onClick={onActive}
//         // onClick={onChacked}
//       />
//     </button>
//     <button
//       type="button"
//       className="btn-trash btn-sm "
//       onClick={onDelete}>
//       <i className="bi bi-trash-fill"></i>
//     </button>
//     <button
//       type="button"
//       className="btn-star btn-star "
//       // onClick={this.onImportant}>
//       onClick={onImportant}>
//       <i className="fas fa-star"></i>
//     </button>
//   </div>
// </div>
// <div className={classNames}>
//   {del}
//   <ListGroup.Item as="li" active={active}>
//     {label}
//     <Button type="button" className="btn-chakbox btn-sm ">
//       <input
//         className="form-check-input"
//         type="checkbox"
//         value=""
//         id="flexCheckDefault"
//         onClick={this.onChacked}
//         checked={this.chaked}
//       />
//     </Button>
//     <Button type="button" className="btn-trash btn-sm ">
//       <i className="bi bi-trash-fill"></i>
//     </Button>
//     <Button
//       type="button"
//       className="btn-star btn-star "
//       onClick={this.onImportant}>
//       <i className="fas fa-star"></i>
//     </Button>
//   </ListGroup.Item>
// </div>
//     );
//   }
// }

const ToDoListItem = ({
  label,
  onDelete,
  onChecked,
  onImportant,
  important,
  chaked,
}) => {
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
        <button type="button" className="btn-chakbox btn-sm ">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            defaultChecked={chaked}
            onChange={onChecked}
          />
        </button>
        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={onDelete}>
          <i className="bi bi-trash-fill"></i>
        </button>
        <button
          type="button"
          className="btn-star btn-star "
          onClick={onImportant}>
          <i className="fas fa-star"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
