// import React, { useState } from "react";
// import App from "../App";
// import "./login.css";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
// // import Img from "../Udemy-Symbol.png";
// import {
//   createAccount,
//   setSnackbar,
// } from "./components/Redux/Actions/firstaction";
// import { useDispatch } from "react-redux";
// import ReactDOM from "react-dom";
// import CryptoJS from "crypto-js";

// const useStyles = makeStyles({
//   loginBtn: {
//     width: "40%",
//     height: "3em",
//     backgroundColor: "black",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     transition: "0.5s",
//     borderRadius: "0.25em",
//     cursor: "pointer",
//     color: "white",
//     "&:hover": {
//       transform: "scale(1.25)",
//       backgroundColor: "black",
//     },
//   },
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");
//   const [userErr, setUserErr] = useState(false);
//   const [passErr, setPassErr] = useState(false);
//   const [Cred, setCred] = useState({
//     username: "",
//     password: "",
//     error: "",
//   });

//   const classes = useStyles();

//   const callMessageOut = (msg, type) => {
//     dispatch(setSnackbar(true, type, msg));
//   };

//   //  For encryption if needed

//   function encryptFun(password, username) {
//     var keybefore = username + "appolocomputers";
//     var ivbefore = username + "costacloud012014";
//     var key = CryptoJS.enc.Latin1.parse(keybefore.substring(0, 16));
//     var iv = CryptoJS.enc.Latin1.parse(ivbefore.substring(0, 16));
//     var ciphertext = CryptoJS.AES.encrypt(password, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.ZeroPadding,
//     }).toString();
//     return ciphertext;
//   }

// const INITIAL_STATE = {
//   username: "",
//   password: "",
// };

// const VALIDATION_SCHEMA = Yup.object().shape({
//   username: Yup.string()
//     .required("please enter Username")
//     .trim()
//     .min(4, "Username should be greater then 4 "),
// });

// const formik = useFormik({
//   initialValues: INITIAL_STATE,
//   validationSchema: VALIDATION_SCHEMA,
//   onSubmit: (values) => {
//     let formData = {
//       ...values,
//     };
//     handleClick(formData);
//   },
// });

//   // const handleClick = async (value) => {

//   //   try {
//   //     const headers = {
//   //       "Content-Type": "application/x-www-form-urlencoded",
//   //       Accept: "application/json",
//   //     };

//   //     const formData = new URLSearchParams();
//   //     formData.append("username", value.username);
//   //     formData.append("password", value.password);
//   //     formData.append("client_id", "costa_client");
//   //     formData.append("grant_type", "password");
//   //     formData.append("client_secret", "Ty2YvrBETIcQ6IR0tc9gs8NKktXkVuQe");

//   //     const login = await fetch("http://11.0.0.70:8880/realms/master/protocol/openid-connect/token", {
//   //       method: "POST",
//   //       headers,
//   //       body: formData.toString(),
//   //     }).then(response => response.json());

//   //     if (login.message) {
//   //       setCred({
//   //         ...Cred,
//   //         error: login.message,
//   //       });
//   //     } else {
//   //       sessionStorage.setItem("jwt_token", login.access_token);
//   //       sessionStorage.setItem("sessionId", login.session_state);
//   //       localStorage.setItem("refresh_token", login.refresh_token);
//   //       localStorage.setItem("client_id", "costa_cloud");
//   //       localStorage.setItem("username", Cred.username);
//   //       localStorage.setItem("expires_in", login.expires_in);
//   //       document.body.style.zoom = "95%";
//   //       ReactDOM.render(<App />, document.getElementById("root"));
//   //       navigate("/dashboard");
//   //     }
//   //   } catch (error) {
//   //     setCred({
//   //       ...Cred,
//   //       error: error.message,
//   //     });
//   //   }
//   // };

//   const handleClick = () => {
//     callMessageOut("Logged In Successfully", "success");
//     navigate("/dashboard");
//   };

//   return (
//     <>
//       <form className="cover" onSubmit={formik.handleSubmit}>
//         <h1 className="login">LOGIN</h1>
//         <TextField
//           name="username"
//           label="Username"
//           variant="outlined"
//           value={formik.values.username}
//           onChange={formik.handleChange}
//           error={formik.touched.username && Boolean(formik.errors.username)}
//           helperText={formik.touched.username && formik.errors.username}
//         />

//         <TextField
//           name="password"
//           label="Password"
//           type="password"
//           variant="outlined"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />

//         <Button className={classes.loginBtn} type="submit" variant="contained">
//           Login
//         </Button>
//       </form>
//     </>
//   );
// };
// export default Login;



import Google from "../../src/Images/google.png";
import Facebook from "../../src/Images/facebook.png";
import Github from "../../src/Images/github.png";
import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import {
  createAccount,
  setSnackbar,
} from "./components/Redux/Actions/firstaction";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import App from "../App";
import CryptoJS from "crypto-js";

const useStyles = makeStyles({
  loginBtn: {
    height: "3em",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
    borderRadius: "0.25em",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
  },
});

const Login = () => {

  const [Cred, setCred] = useState({
        username: "",
        password: "",
        error: "",
      });

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callMessageOut = (msg, type) => {
    dispatch(setSnackbar(true, type, msg));
  };

  // const handleClick = () => {
  //   callMessageOut("Logged In Successfully", "success");
  //   navigate("/dashboard");
  // };

  const handleClick = async (value) => {
        try {
          const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json",
          };
    
          const formData = new URLSearchParams();
          formData.append("username", value.username);
          formData.append("password", value.password);
          formData.append("client_id", "costa_backend");
          formData.append("grant_type", "password");
          formData.append("client_secret", "bf982585-cf30-42da-9872-2868746fe42c");
    
          const login = await fetch("/auth/realms/master/protocol/openid-connect/token", {
            method: "POST",
            headers,
            body: formData.toString(),
          }).then(response => response.json());
    
          if (login.message) {
            setCred({
              ...Cred,
              error: login.message,
            });
          } else {
            sessionStorage.setItem("jwt_token", login.access_token);
            // sessionStorage.setItem("sessionId", login.session_state);
            // localStorage.setItem("refresh_token", login.refresh_token);
            // localStorage.setItem("client_id", "costa_cloud");
            // localStorage.setItem("username", Cred.username);
            // localStorage.setItem("expires_in", login.expires_in);
            document.body.style.zoom = "95%";
            // ReactDOM.render(<App />, document.getElementById("root"));
            navigate("/dashboard");
          }
        } catch (error) {
          setCred({
            ...Cred,
            error: error.message,
          });
        }
      };

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const github = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };

  const facebook = () => {
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google} >
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          {/* <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" /> */}
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  name="username"
                  label="Username"
                  variant="outlined"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  name="password"
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  style={{ marginBottom: "0.7rem" }}
                />
              </Grid>
            </Grid>
            <Button className={classes.loginBtn} fullWidth type="submit" variant="contained">
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;