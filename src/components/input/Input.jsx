import React from "react";

function Input({
  type = "text",
  // labelName = "Field Name",
  placeholder = "Your text goes here",
  classStyle = "",
  required = false,
  onChangeFn = () => {},
}) {
  return (
    <div className="group m-3 py-3 pb-0">
      {/* <label
        for={labelName}
        class="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label> */}

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChangeFn}
        required={required}
        className={`${classStyle} w-full border text-base rounded-lg h-10 mx-auto p-3`}
      />
    </div>
  );
}

export default Input;
