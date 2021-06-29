import React from "react";
import Wrapper from "../Wrapper/index";

function Table(props) {
  // if (props.employees !== undefined) {
  //   {
  //     props.employees.map((employees) => {
  //       // console.log("map", employees);
  //       return (
  //         <Wrapper
  //           key={employees.id.value}
  //           firstName={employees.firstName}
  //           lastName={employees.lastName}
  //           email={employees.email}
  //           phone={employees.phoneNumber}
  //         />
  //       );
  //     });
  //   }
  // }
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
            <span onClick={() => props.sortBy("cell")}>Cell</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.employees &&
          props.employees.map((employees) => {
            return (
              <Wrapper
                key={employees.id.value}
                picture={employees.image}
                firstName={employees.name.first}
                lastName={employees.name.last}
                email={employees.email}
                cell={employees.cell}
              />
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
