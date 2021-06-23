import React from "react";
import "./style.css";

function ResTable(props) {
    return(
        <table className="table table-hover">
            {props.results.map(result => (
                <thead key={result} className="table">
                    <tr>
                        <img src={result.picture.thumbnail} alt={fullName} />
                        <th scope="row">
                            image
                        </th>
                        <th scope="row" data-field="name" data-sortable="true">
                            <span onClick={() => props.handleInputChange("name", "last", "first")}>
                                Name
                            </span>
                        </th>
                        <th scope="row">
                            <span onClick={() => props.handleInputChange("phone")}>
                                Phone
                            </span>
                        </th>
                        <th scope="row">
                            <span onClick={() => props.handleInputChange("email")}>
                                Email
                            </span>
                        </th>
                    </tr>                
                </thead>
            ))}
      </table> 
    )   
}
    

export default ResTable;
