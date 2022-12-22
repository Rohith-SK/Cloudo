import React, { useState } from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/Input";

function SignInFormComponent() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form method="post" className="p-5" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Enter your email"
        labelName="Your email"
        onChangeFn={setEmail}
        required={true}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        labelName="Your password"
        onChangeFn={setPassword}
        required={true}
      />
      <Button name="Submit" type="submit" />
    </form>
  );
}

export default SignInFormComponent;
