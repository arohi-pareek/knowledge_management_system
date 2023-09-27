import React, { useEffect, useState } from "react";
import navImg from "../logoFinal.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { IconButton, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../../src/Forms/components/navbar.css"
import { useDispatch } from "react-redux";
import { setSnackbar } from "./components/Redux/Actions/firstaction";
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

  const [theme, setTheme] = useState("light-theme");
  const [btnState, setbtnState] = useState("Switch to Dark Mode");
  const [isFavorite, setIsFavorite] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [isSearching, SetIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
    // if (newSearchQuery === null || newSearchQuery.trim() === '') {
    //   navigate('/courses');
    // } else {
    //   navigate(`/courses/search`);
    // }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (searchQuery === null || searchQuery.trim() === '') {
      navigate('/courses');
    } else {
      navigate(`/courses/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const callMessageOut = (msg, type) => {
    dispatch(setSnackbar(true, type, msg));
  };

  const handleLogOut = () => {
    callMessageOut("Logged Out Successfully", "success");
    navigate("/");
  };

  // const handleSearchChange = (event) => {
  //   const searchTerm = event.target.value;
  //   SetIsSearching(searchTerm.length > 0);
  // };

  const openFullScreen = () => {
    setFullScreen(true);

    const elem = document.documentElement;
    console.log(document.documentElement)

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
        <Link to="/" className='navbar-brand text-uppercase ls-1 fw-8'>
          <span style={{ color: "orange" }}>c</span><span style={{ color: "white" }}>oursean</span>
        </Link>
      </div>
      <input
        className="Search"
        type="search"
        placeholder="Search Anything"
        aria-label="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
      />
      {/* <SearchIcon/> */}

      <div className="navbar-right">
        <div className="icon-container">
          <div onClick={() => toggleTheme()} color={isFavorite ? 'secondary' : 'default'}>
            {isFavorite ? <Brightness7Icon style={{ cursor: "pointer" }}/> : <Brightness4Icon style={{ cursor: "pointer" }}/>}</div>
          <ExitToAppIcon onClick={() => handleLogOut()} style={{ cursor: "pointer" }} />
          {fullScreen ? (
                <FullscreenExitIcon style={{ cursor: "pointer" }} onClick={closeFullScreen} />
          ) : (
                  <FullscreenIcon style={{ cursor: "pointer" }} onClick={openFullScreen}/>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

