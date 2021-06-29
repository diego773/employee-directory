import React from "react";
import Wrapper from "../Wrapper/index";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="col">
            <span onClick={() => props.sortBy("firstName")}>First Name</span>
          </th>
          <th className="col">
            <span onClick={() => props.sortBy("lastName")}>Last Name</span>
          </th>
          <th className="col">
            <span onClick={() => props.sortBy("email")}>Email</span>
          </th>
          <th className="col">
            <span onClick={() => props.sortBy("phoneNumber")}>
              Phone Number
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employees) => {
if (props.employees !== undefined) {//run the map function}
return (
            <Wrapper
              key={employees.id.value}
              firstName={employees.firstName}
              lastName={employees.lastName}
              email={employees.email}
              phone={employees.phoneNumber}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
