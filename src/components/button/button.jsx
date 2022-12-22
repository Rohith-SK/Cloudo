import React from "react";

function Button({ name = "", type = "button", classStyle = "" }) {
  return (
    <button
      type={type}
      title={name}
      className={`${classStyle} border rounded-lg p-1`}
    >
      {name}
    </button>
  );
}

export default Button;
