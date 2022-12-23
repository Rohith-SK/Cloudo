import React from "react";
import { Link } from "react-router-dom";
import SignUpFormComponent from "./SignUpForm";

function SignUp() {
  return (
    <div className="md:flex justify-between px-16 block gap-10 ">
      <div className="w-2/3 border border-blue-700 md:my-48 my-5">
        <h2 className="text-2xl text-center font-bold">
          Register Now to explore !!
        </h2>
      </div>
      <div className="border border-black shadow-xl mx-auto w-2/5 h-full">
        <SignUpFormComponent />
        <div>
          <h2>
            Already Registered?
            <Link to="/signin">Sign in</Link> here
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
