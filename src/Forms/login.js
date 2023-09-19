import React, {useState} from "react";
import "./login.css";
import navImg from "../logoFinal.png";
import { useNavigate } from "react-router-dom";
import Img from "../Udemy-Symbol.png";

const Login = () => {
  const navigate = useNavigate();
  
  const[user, setUser] = useState("");
  const[password, setPassword] = useState("");
  const[userErr,setUserErr]=useState(false);
  const[passErr,setPassErr]=useState(false);

  function handleClick(e) 
  {
    if(user.length<3 || password.length<3)
    {
      alert("Please fill all required details")
    }
    else
    {
      navigate("/dashboard");
    }
     e.preventDefault()
   }

     function userHandler(e)
     {
      let item=e.target.value;
      if(item.length<3)
      {
        setUserErr(true)
      }
      else
      {
        setUserErr(false)
      }
      setUser(item)
     }

     function passwordHandler(e)
     {
      let item=e.target.value;
      if(item.length<3)
      {
        setPassErr(true)
      }
      else
      {
        setPassErr(false)
      }
      setPassword(item)

     }
    

  return (
  <>
    <form className="cover">  
          <h1 className="login">LOGIN</h1>
          <input type="text" placeholder="Username" onChange={userHandler}/>{userErr?<span>Enter atleast 4 letters</span>:""}
          <input type="password" placeholder="Password" onChange={passwordHandler}/>{passErr?<span>Password not valid</span>:""}

          <div className="login-btn" onClick={handleClick}>
            Login
          </div>  
    </form>
  </>
  );
};
export default Login;
