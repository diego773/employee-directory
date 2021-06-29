import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function ResultList() {
  const [state, setState] = useState([]);
  // const [employees, setEmployees] = useState("");

  // When the component mounts, get a list of all employees
  useEffect(() => {
    API.getRandomEmployee()
      .then((employees) => {
        setState(employees[0]);
      })
      .catch((err) => console.log(err));
  });
  console.log("state", state);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Name</th>
            <th className="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="col">Mark Otto</td>
            <td className="col">mark@mail.com</td>
          </tr>

          {state.map((employees) => {
            return (
              <tr>
                <td className="col">
                  {employees.name.first} {employees.name.last}
                </td>
                <td className="col">{employees.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultList;
