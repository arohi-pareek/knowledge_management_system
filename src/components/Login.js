import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";
//Formik for Form handler and yup for form validation
import { useFormik } from "formik"; //useformik in formik
import { logInSchema } from "../schemas/index";

const initialValues = {
  name: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: logInSchema,

      onSubmit: (values) => {
        navigate("/Dashboard");
      },
    });

  console.log("~file:Login.js ~line11~Login~errors", errors);

  // function handleClick() {

  //   navigate("/Dashboard");

  // }

  return (
    <>
      <form className="cover">
        {" "}
        {/* Login Form*/}
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <p className="form-error">{errors.name}</p>
        ) : null}
        <input
          type="password"
          placeholder="
         password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password ? (
          <p className="form-error">{errors.password}</p>
        ) : null}
        <div className="btn" onClick={handleSubmit}>
          Login
        </div>
      </form>
      
    </>
  );
};
export default Login;
