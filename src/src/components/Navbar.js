import React, { useContext, createContext } from "react";
import practice from "../Practicenerd.png";
import cart from "../cart.png";
import { CartContext } from "./Cart";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { IconButton } from "@mui/material";
import { Subscriptions } from "@mui/icons-material";

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
  // const {totalItems}=useContext(CartContext);
  return (
    <>
      <nav className="navbar bg-body">
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

          <IconButton onClick={() => navigate("/cart")}>
            <Subscriptions />
          </IconButton>

          <button type="button" className="btn1 btn-dark">
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
