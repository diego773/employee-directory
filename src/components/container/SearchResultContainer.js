import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
    };

  // When the component mounts, get a list of all employees
    componentDidMount() {
        API.getRandomEmployee()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }   

    handleInputChange = event => {
        const search = event.target.search;
        const value = event.target.value;
        this.setState({
            [search]: value
        });
    };
  // When the form is submitted, search the Random user API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        API.getRandomEmployee(this.state.search)
            .then(res => {
            if (res.data.results === "error") {
                throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
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

export default SearchResultContainer;

