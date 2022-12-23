import React, { useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/Input";

function SignUpFormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form method="post" className="p-5" onSubmit={handleSubmit}>
      <Input
        type="name"
        placeholder="Enter your name"
        labelName="Enter name"
        onChangeFn={setName}
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
        type="tel"
        placeholder="Enter your Mobile Number"
        labelName="Enter Mobile Number"
        onChangeFn={setMobileNo}
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
        type="password"
        placeholder="Confirm Password"
        labelName="Confirm Password"
        onChangeFn={setConfirmPassword}
        required={true}
      />
      <Button name="Sign Up" type="submit" />
    </form>
  );
}

export default SignUpFormComponent;
