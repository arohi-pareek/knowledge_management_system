import React, {useState} from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import Img from "../Udemy-Symbol.png";
import { useFormik } from "formik";
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

  // const[user, setUser] = useState("");
  // const[password, setPassword] = useState("");
  // const[userErr,setUserErr]=useState(false);
  // const[passErr,setPassErr]=useState(false);

  // function handleClick(e) 
  // {
  //   if(user.length<3 || password.length<3)
  //   {
  //     alert("Please fill all required details")
  //   }
  //   else
  //   {
  //     navigate("/dashboard");
  //   }
  //    e.preventDefault()
  //  }

  //    function userHandler(e)
  //    {
  //     let item=e.target.value;
  //     if(item.length<3)
  //     {
  //       setUserErr(true)
  //     }
  //     else
  //     {
  //       setUserErr(false)
  //     }
  //     setUser(item)
  //    }

  //    function passwordHandler(e)
  //    {
  //     let item=e.target.value;
  //     if(item.length<3)
  //     {
  //       setPassErr(true)
  //     }
  //     else
  //     {
  //       setPassErr(false)
  //     }
  //     setPassword(item)
  //    }

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
