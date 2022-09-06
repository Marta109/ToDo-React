import React from "react";
import "./search-panel.css";
// const SearchPanel = () => {
//   return <input className="form-control search-input" type="text" placeholder="Find todos" />;
// };

// export default SearchPanel;

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: "",
    };
  }

  OnUpdateSearch = (e) => {
    const todoName = e.target.value;
    this.setState({todoName});
    this.props.OnUpdateSearch(todoName);
  };

  render() {
    return (
      <input
        className="form-control search-input"
        type="text"
        placeholder="Find todos"
        onChange={this.OnUpdateSearch}
      />
    );
  }
}
