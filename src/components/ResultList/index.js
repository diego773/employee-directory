import React from "react";
import API from "../../utils/API";
import Table from "../Table/index";
import Search from "../Search/index";
import Wrapper from "../Wrapper/index";

class ResultList extends React.Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };
  // When the component mounts, get a list of all employees
  componentDidMount() {
    API.getRandomEmployee()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const value = event.target.search;
      this.setState({
        search: value,
      });
    }
  };

  // When the form is submitted, search the Random user API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getRandomEmployee(this.state.search)
      .then((res) => {
        if (res.data.results === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    console.log("employees", this.state.employees);

    return (
      <div>
        <Search
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Table results={this.state.employees} />
        <Wrapper />
      </div>
    );
  }
}

export default ResultList;
