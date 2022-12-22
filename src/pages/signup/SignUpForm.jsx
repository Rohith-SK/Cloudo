import React, { useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/Input";

function SignUpFormComponent() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form method="post" className="p-5" onSubmit={handleSubmit}>
      <Input
        type="name"
        placeholder="Enter your name"
        labelName="Enter name"
        onChangeFn={setEmail}
        required={true}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        labelName="Enter email"
        onChangeFn={setEmail}
        required={true}
      />
      <Input
        type="mobileNo"
        placeholder="Enter your Mobile Number"
        labelName="Enter Mobile Number"
        onChangeFn={setEmail}
        required={true}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        labelName="Enter password"
        onChangeFn={setPassword}
        required={true}
      />
      <Input
        type="confirmPassword"
        placeholder="Confirm Password"
        labelName="Confirm Password"
        onChangeFn={setEmail}
        required={true}
      />
      <Button name="Submit" type="submit" />
    </form>
  );
}

export default SignUpFormComponent;
