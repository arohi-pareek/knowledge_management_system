import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import Img from "../Udemy-Symbol.png";

const useStyles = makeStyles({
  loginBtn: {
    width: '40%',
    height: '3em',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
    borderRadius: '0.25em',
    cursor: 'pointer',
    color: 'white',
    '&:hover': {
      transform: 'scale(1.25)',
      backgroundColor: 'black',
    },
  },
});

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);



  const classes = useStyles();

  //  Formik Implimentation 

  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const VALIDATION_SCHEMA = Yup.object().shape({
    username: Yup.string()
      .required("please enter Username")
      .trim()
      .min(4, "Username should be greater then 4 "),
  });

  const formik = useFormik({
    initialValues: INITIAL_STATE,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      let formData = {
        ...values,
      };
      handleClick(formData);
    },
  });

  // function handleClick(e) {

  //     navigate("/dashboard");

  //   e.preventDefault()
  // }

  const handleClick = () => {
    navigate("/dashboard")
  }

  // function userHandler(e) {
  //   let item = e.target.value;
  //   if (item.length < 3) {
  //     setUserErr(true)
  //   }
  //   else {
  //     setUserErr(false)
  //   }
  //   setUser(item)
  // }

  // function passwordHandler(e) {
  //   let item = e.target.value;
  //   if (item.length < 3) {
  //     setPassErr(true)
  //   }
  //   else {
  //     setPassErr(false)
  //   }
  //   setPassword(item)
  // }

  return (
    <>
      <form className="cover" onSubmit={formik.handleSubmit}>


        <h1 className="login">LOGIN</h1>
        {/* <input type="text" placeholder="Username" onChange={userHandler}/>{userErr?<span>Enter atleast 4 letters</span>:""}
          <input type="password" placeholder="Password" onChange={passwordHandler}/>{passErr?<span>Password not valid</span>:""} */}
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button className={classes.loginBtn} type="submit" variant="contained" >
          Login
        </Button>
      </form>



    </>
  );
};
export default Login;
