import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import { IconButton, TextField, Tooltip, makeStyles } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../../src/Forms/components/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SearchByTitle,
  setSnackbar,
} from "./components/Redux/Actions/firstaction";
import SearchIcon from "@mui/icons-material/Search";
import Courses from "./courses";
import Login from "./login";
import ReactDOM from "react-dom";
import { setSearchQuery } from "./components/Redux/Reducers/searchReducer";
import { Autocomplete } from "@mui/material";
import { CoursesArr } from "./StaticContent/Courses";
import { debounce } from "../Util/Util";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "20px",
    backgroundColor: "white",
    height: "2rem",
    "&:focus": {
      outline: "none",
      borderColor: "#4CAF50",
    },
  },
}));

const Navbar = () => {
  const [theme, setTheme] = useState("light-theme");
  const [btnState, setbtnState] = useState("Switch to Dark Mode");
  const [isFavorite, setIsFavorite] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [isSearching, SetIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchedData = useSelector((state) => state.CourseDetails.CourseData);

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
      dispatch(SearchByTitle(inputValue));
      navigate("/subject");
  };

  const handleSearch = (newvalue) => {
    setSearchQuery(newvalue)
  }

  const optimizedFn = useCallback(debounce(handleSearchChange, []));

  const classes = useStyles();
  // const handleSearchChange = (event) => {
  //   const newSearchQuery = event.target.value;
  //   if (newSearchQuery.length >= 3) {
  //     dispatch(setSearchQuery(newSearchQuery));
  //   }
  // };

  const optionsArray = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ];

  const course = CoursesArr.map((item) => {
    return item.name;
  });

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const callMessageOut = (msg, type) => {
    dispatch(setSnackbar(true, type, msg));
  };

  const handleLogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  // const handleSearchChange = (event) => {
  //   const searchTerm = event.target.value;
  //   SetIsSearching(searchTerm.length > 0);
  // };

  const openFullScreen = () => {
    setFullScreen(true);

    const elem = document.documentElement;
    console.log(document.documentElement);

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
      setTheme("light-theme");
      setbtnState("Switch to Dark mode");
      setIsFavorite(!isFavorite);
    } else {
      setTheme("dark-theme");
      setbtnState("Switch to Light Mode");
      setIsFavorite(!isFavorite);
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="navbar-left">
        <Link to="/dashboard" className="navbar-brand text-uppercase ls-1 fw-8">
          <span style={{ color: "orange" }}>c</span>
          <span style={{ color: "white" }}>oursean</span>
        </Link>
      </div>
      <input
        className="Search"
        type="search"
        placeholder="Search Anything"
        aria-label="Search"
        // value={searchQuery}
        // onChange={handleSearchChange}
        onChange={(e) => {
          optimizedFn(e);
        }}
        onClick={handleSearch}
      />

      {/* <Autocomplete
        className="searchnav"
        options={course}
        value={searchQuery}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Anything"
            className={classes.searchInput}
            autoComplete="off"
          />
        )}
        onChange={handleSearchChange}
      /> */}

      {/* <Autocomplete
        freeSolo
        options={searchedData || []}
        getOptionLabel={(option) => {
          return typeof option === "string"
            ? ""
            : `${option.courseName}`;
        }}
        id="tags-outlined"
        // value={searchQuery}
        onChange={(event, newValue) => {
          handleSearch(newValue);
        }}
        onInputChange={(e, newVal) => {
          newVal.length >= 3 && optimizedFn(newVal);
        }}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.searchInput}
            variant="outlined"
            placeholder="Search Anything"
          />
        )}
      /> */}

      <div className="navbar-right">
        <div className="icon-container">
          <div
            onClick={() => toggleTheme()}
            color={isFavorite ? "secondary" : "default"}
          >
            {isFavorite ? (
              <Brightness7Icon style={{ cursor: "pointer" }} />
            ) : (
              <Brightness4Icon style={{ cursor: "pointer" }} />
            )}
          </div>
          <ExitToAppIcon
            onClick={() => handleLogOut()}
            style={{ cursor: "pointer" }}
          />
          {fullScreen ? (
            <FullscreenExitIcon
              style={{ cursor: "pointer" }}
              onClick={closeFullScreen}
            />
          ) : (
            <FullscreenIcon
              style={{ cursor: "pointer" }}
              onClick={openFullScreen}
            />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
