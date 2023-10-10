import React, { useEffect } from "react";
import '../style/nav.css'
import { useNavigate, useLocation } from "react-router-dom";
function Nav(){
    const navigate = useNavigate();

  function handleClick1() {
    navigate("/dashboard");
  }

  function handleClick2() {
    navigate("/courses");
  }
  function handleClick3() {
    navigate("/learning");
  }
    return (
        <div className="container">
          <nav className=" navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#" onClick={handleClick1}>
                    Dashboard
                  </a>
                  <a class="nav-item nav-link" href="#" onClick={handleClick2}>
                    Courses
                  </a>
                  <a class="nav-item nav-link " href="#" onClick={handleClick3}>
                    My Learning
                  </a>
                </div>
              </div>
    
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          </div>
    );
}
export default Nav;