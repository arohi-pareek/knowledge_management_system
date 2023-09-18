import React ,{useState,useEffect}from "react";
import { IconButton, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightMode';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import "./login.css";
import "./signUp.css";
import navImg from "../logoFinal.png";
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
    <nav className="navbar bg-body-tertiary">
    <Tooltip className="tool" title={btnState} arrow placement="left">
     
    <div className="switch"  onClick={()=> toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
      {isFavorite ? <NightlightOutlinedIcon className="sun" /> : <LightModeOutlinedIcon className="sun"/>}</div>
      
      </Tooltip>
        <label></label>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="image" src={navImg} alt="" />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Anything"
              aria-label="Search"/>
          </form>
          {/* <img className="cart" src={cartImg} alt="" /> */}
          <button type="button" className="btn2 btn-light" onClick={handleClick1}>
            Sign-Up
          </button>
          <button type="button" className="btn1 btn-light" onClick={handleClick2}>
            Login
          </button> 
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
