import React from "react";
import "./style.css";

// Using the datalist element we can create an array from props.employees
function SearchForm(props) {
    return (
        <nav className="navbar navbar-light bg-light justify-content-center">
            <form className="mb-3 align-items-center" onClick={props.handleFormSubmit}>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search for employees"
                    id="search"
                />
            </form>
        </nav>
    );
};

export default SearchForm;