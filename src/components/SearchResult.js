import React, { Component } from "react";
import Navbar from "./Hero";
import SearchForm from "./Search";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResult extends Component {
  state = {
    search: "",
    sortOrder: "",
    employees: [],
    results: [],
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

  sortByFirstName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.first > a.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees });
  };

  sortByLastName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
    if (this.state.sortOrder === "DESC") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    this.setState({ results: sortedEmployees });
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
    return (
      <div>
        <Navbar />
        <SearchForm
          value={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResult;
