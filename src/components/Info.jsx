import React from "react";

function Info(props) {
  return (
    <div className="bottom">
      <p className="info-p">{props.email}</p>
      <p className="info-p">{props.number}</p>
    </div>
  );
}

export default Info;
