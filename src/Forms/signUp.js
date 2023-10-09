import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }
  function handleClick1() {
    navigate("/login");
  }

  return (
    <>
      <form className="cover">
        <h1 className="signUp">Create Account !</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <div className="signUp-btn" onClick={handleClick}>
          Sign-Up
        </div>
        <p className="color">
          Already have an account??<a href="#" onClick={handleClick1}>LOGIN
          </a>
        </p>
      </form>
    </>
  );
};
export default SignUp;
