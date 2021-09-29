import React from "react";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p className="id-p">{props.id}</p>
        <h2 className="heading">{props.name}</h2>
      </div>
      <Info number={props.number} email={props.email} />
    </div>
  );
}

export default Card;
