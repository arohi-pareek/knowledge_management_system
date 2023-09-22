import React ,{useState,useEffect}from "react";
import { IconButton, Tooltip } from "@mui/material";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import "../style/login.css";
import "../style/signUp.css";
import "../style/navbar.css";

import navImg from "../Images/logoFinal.png";
// import cartImg from "../cart.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

    function handleClick1()
    {
      navigate("/")
    }
    function handleClick2()
    {
      navigate("/login")
    }
    const [theme,setTheme]=useState("light-theme");
    const [btnState,setbtnState]=useState("Switch to Dark Mode");
    const [isFavorite, setIsFavorite] = useState(true);
  
    const toggleTheme = () => {
      if(theme=== "dark-theme"){
        setTheme('light-theme');
        setbtnState('Switch to Dark mode');
        setIsFavorite(!isFavorite);
      } else {
        setTheme("dark-theme");
        setbtnState('Switch to Light Mode');
        setIsFavorite(!isFavorite);
      }
    };
  useEffect(()=> {
    document.body.className=theme;
  }, [theme]);
  return (
    <nav className="navbar  bg-body-tertiary">
    <Tooltip className="tool" title={btnState} arrow placement="left">
     
    <div className="switch" onClick={() => toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
          {isFavorite ? <Brightness7Icon className="sun" /> : <Brightness4Icon className="sun" />}</div>
      </Tooltip>
      
        <label></label>
        
      <div className="container">
      <LogoutTwoToneIcon className="logout"/>
        <a className="navbar-brand" href="#">
          {/*<img className="image" src={navImg} alt="" />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Anything"
              aria-label="Search"/>
          </form>
          {/* <img className="cart" src={cartImg} alt="" /> */}
         
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
