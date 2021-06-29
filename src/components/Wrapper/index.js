import React from "react";

function Wrapper(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phoneNumber}</td>
    </tr>
  );
}

export default Wrapper;
