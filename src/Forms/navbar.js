import React from "react";
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
  return (
    <nav className="navbar bg-body-tertiary">
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
            Log out
          </button> 
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
