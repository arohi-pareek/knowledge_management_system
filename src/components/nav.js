import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// const courseArr = ['Development','Finance & Accounting','Design','IT & Software','Design','Marketing','Health & Fitness','Business']

// const courseArr = [
//   {
//     name: "Courses",
//     path: "course",
//   },
  
//   {
//     name: "DashBoard",
//     path: "fin",
//   },
//   {
//     name: "Design",
//     path: "des",
//   },
//   {
//     name: "IT & Software",
//     path: "IT",
//   },
//   {
//     name: "Marketing",
//     path: "market",
//   },
//   {
//     name: "Health & Fitness",
//     path: "fit",
//   },
//   {
//     name: "Business",
//     path: "busi",
//   },
// ];

function Nav() {
  const navigate = useNavigate();

  // function handleClick(path) {
  //   navigate(`/courses/${path}`);
  // }
   function handleClick(){
    navigate("/Dashboard")
   }
   function handleClick1(){
    navigate("/Cart")
   }
   function handleClick2(){
    navigate("/Courses")
   }
   

  return (
    <div>
      <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <button
          classNameName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div  className="navbar-nav ">
             <a className="nav-item nav-link active" onClick={handleClick} href="#">Dashboard</a>
             <a className="nav-item nav-link active" onClick={handleClick1} href="#">Learning</a>
             <a className="nav-item nav-link active" onClick={handleClick2} href="#">Courses</a>
            </div>
          </div>
          <span classNameName="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Nav;
