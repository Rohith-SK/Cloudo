import React from "react";
import { Link } from "react-router-dom";
import SignInFormComponent from "./SignInForm";

function SignIn() {
  return (
    <div className="md:flex justify-between px-16 block gap-10 ">
      <div className="w-2/3 border border-blue-700 md:my-48 my-5">
        <h2 className="text-2xl text-center font-bold">
          Hey, enter your details to get sign in to your account
        </h2>
      </div>
      <div className="border border-black shadow-xl mx-auto w-2/5 h-full">
        <SignInFormComponent />
        <div>
          <h2>
            Not yet Registered?
            <Link to="/signup">SignUp</Link> here
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

/*
<div class="grid grid-cols-2 gap-x-6">
      <div class="px-20 py-60 font-bold text-xl">
        <h1></h1>
      </div>
      <div class="ml-96 mt-10 ">
        <div class="border-2 mx-auto rounded-3xl w-2/3 h-full">adadaaada</div>
      </div>
    </div>
*/
