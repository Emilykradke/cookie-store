import React from "react";

export function Input(props) {
  return (
    <div className="form">
      <input className="inputForm" {...props} />
    </div>
  );
}

export function Button(props) {
  return (
    <button {...props} className="buttonForm">
      {props.children}
    </button>
  );
}