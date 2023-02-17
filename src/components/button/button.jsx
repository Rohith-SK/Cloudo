import React from "react";
import "./button.scss";

function Button({ name = "", type = "button", classStyle = "" }) {
  return (
    <button
      type={type}
      title={name}
      className={`${classStyle} w-full border rounded-lg p-1 mt-8 form-button`}
    >
      {name}
    </button>
  );
}

export default Button;
