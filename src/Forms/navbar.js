import React, { useEffect, useState } from "react";
import "./login.css";
import "./signUp.css";
import navImg from "../logoFinal.png";
// import cartImg from "../cart.png";
import { useNavigate } from "react-router-dom";
import LightModeOutlinedIcon from '@mui/icons-material/LightMode';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { IconButton, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../../src/Forms/components/navbar.css"

const Navbar = () => {

  const [theme, setTheme] = useState("light-theme");
  const [btnState, setbtnState] = useState("Switch to Dark Mode");
  const [isFavorite, setIsFavorite] = useState(true);

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
      <Tooltip className="tool" title={btnState} arrow placement="left">

        <div className="switch" onClick={() => toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
          {isFavorite ? <NightlightOutlinedIcon className="sun" /> : <LightModeOutlinedIcon className="sun" />}</div>

      </Tooltip>

      {/* <Tooltip title="logout" aria-label="Logout">
        <IconButton
          id="logout_Button"
          // onClick={this.handleSignOut}
          color="secondary"
          className="hide_menu_topbar"
        >
          <ExitToAppIcon style={{ fontSize: "1.2rem" }} />
        </IconButton>
      </Tooltip> */}
      <div className="container">
      </div>
    </nav>
  );
};
export default Navbar;

