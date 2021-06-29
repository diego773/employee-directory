import React from "react";

function Wrapper(props) {
  return (
    <tr className="table-header">
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.cell}</td>
    </tr>
  );
}

export default Wrapper;
