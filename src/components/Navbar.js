import React, { useContext, createContext,useState,useEffect } from "react";
import practice from "../Practicenerd.png";
import "../style/Navbar.css";
import LightModeOutlinedIcon from '@mui/icons-material/LightMode';


import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { IconButton, Tooltip } from "@mui/material";
import { Subscriptions } from "@mui/icons-material";

import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

const Navbar = () => {
  const navigate = useNavigate();
  const navi = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function handleCart() {
    navi("/Cart");
  }
  function handleclick() {
    navigate("/wishList");
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
  // const {totalItems}=useContext(CartContext);
  return (
    <>
      <nav className="navbar bg-body">
      
      <Tooltip className="tool" title={btnState} arrow placement="left">
     
      <div className="switch"  onClick={()=> toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
        {isFavorite ? <NightlightOutlinedIcon className="sun" /> : <LightModeOutlinedIcon className="sun"/>}</div>
        
        </Tooltip>
          <label></label>
        <div className="container">
        
          <a className="navbar-brand" href="#">
            <img
              className="image"
              src={practice}
              alt="Udemy"
              width="10"
              height="15"
            />{" "}
            {/*udemy Logo*/}
          </a>
        
          
         

          <button type="button" className=" btn-dark">
            Sign Up
          </button>
          <button
            type="button"
            className="btn2 btn-Light"
            onClick={handleClick}
          >
            Log In
          </button>
          
         
          
          <form className="d-flex-inline bar" role="search">
            <input
              className="form-control "
              type="search"
              placeholder="Search For Anything"
              aria-label="Search "
            />
            <SearchOutlinedIcon className="magni" />
          </form>
          <div >
          
    
    </div>
        </div>
       
      </nav>
    </>
  );
};

export default Navbar;
