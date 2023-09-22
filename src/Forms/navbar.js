import React, { useEffect, useState } from "react";
import "./login.css";
import "./signUp.css";
import navImg from "../logoFinal.png";
import { Navigate, useNavigate } from "react-router-dom";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import { IconButton, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../../src/Forms/components/navbar.css"

const Navbar = () => {

  const [theme, setTheme] = useState("light-theme");
  const [btnState, setbtnState] = useState("Switch to Dark Mode");
  const [isFavorite, setIsFavorite] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);

  const navigate = useNavigate();
  
  const openFullScreen = () => {
    setFullScreen(true);

    const elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    setFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme('light-theme');
      setbtnState('Switch to Dark mode');
      setIsFavorite(!isFavorite);
    } else {
      setTheme("dark-theme");
      setbtnState('Switch to Light Mode');
      setIsFavorite(!isFavorite);
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="navbar-left">
        {/* <img src={navImg} alt="Logo" className="logo" style={{ height: "3rem",width:"3rem" }} /> */}
      </div>
      {/* <Tooltip className="tool" title={btnState} arrow placement="left">

        <div className="switch" onClick={() => toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
          {isFavorite ? <Brightness7Icon className="sun" /> : <Brightness4Icon className="sun" />}

        </div>

      </Tooltip> */}
      <div className="navbar-right">
        <div className="icon-container">
          <div onClick={() => toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
          {isFavorite ? <Brightness7Icon/> : <Brightness4Icon className="sun" />}</div>
          <ExitToAppIcon onClick={()=>navigate("/")} style={{cursor:"pointer"}}/>
          <FullscreenIcon style={{cursor:"pointer"}}/>
          {/* {fullScreen ? (
                  <Tooltip
                    title="exit_fullScreen"
                    aria-label="Exit FullScreen"
                  >
                    
                      <IconButton
                        id="closeFullScreen_Button"
                        onClick={this.closeFullScreen}
                      >
                        <FullscreenExitIcon style={{ color: "#fff" }} />
                      </IconButton>
                  </Tooltip>
                ) : (
                  <Tooltip title={t("fullScreen")} aria-label="FullScreen">
                    <span className="hide_menu_topbar">
                      <IconButton
                        id="fullScreen_Button"
                        onClick={this.openFullScreen}
                      >
                        <FullscreenIcon style={{ color: "#fff" }} />
                      </IconButton>
                    </span>
                  </Tooltip>
                )} */}
        </div>  
      </div>
    </nav>
  );
};
export default Navbar;

