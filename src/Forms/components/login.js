import React from "react";
import "../style/login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { logInSchema } from "../../schemas/index";

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

  return (
    <>
      <div className="back">
        <form className="cover ">
          <h1 className="login">LOGIN</h1>
          <input
            type="text"
            placeholder="Username"
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
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
          <div className="login-btn" onClick={handleSubmit}>
            Login
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
