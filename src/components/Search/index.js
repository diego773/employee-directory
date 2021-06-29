import React from "react";

// Using the datalist element we can create an array from props.employees
function Search(props) {
  return (
    <nav className="navbar navbar-light bg justify-content-center">
      <form className="mb-3 align-items-center">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for employees"
          id="search"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn"
        >
          Search
        </button>
      </form>
    </nav>
  );
}

export default Search;
