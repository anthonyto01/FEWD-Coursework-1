import React, { Component } from "react";
import Home from "./Home";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };
  }

  change = (e) => {
    return this.setState({ searchField: e.target.value });
  };

  render() {
    let filtered = this.props.details.filter((entry) => {
      return entry.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div>
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Search ..."
            onChange={this.change}
          />
        </div>
        <Home recipes={filtered} />
      </div>
    );
  }
}

export default Search;
