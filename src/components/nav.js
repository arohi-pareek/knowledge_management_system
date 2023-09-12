import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// const courseArr = ['Development','Finance & Accounting','Design','IT & Software','Design','Marketing','Health & Fitness','Business']

const courseArr = [
  {
    name: "Development",
    path: "dev",
  },
  
  {
    name: "Finance & Accounting",
    path: "fin",
  },
  {
    name: "Design",
    path: "des",
  },
  {
    name: "IT & Software",
    path: "IT",
  },
  {
    name: "Marketing",
    path: "market",
  },
  {
    name: "Health & Fitness",
    path: "fit",
  },
  {
    name: "Business",
    path: "busi",
  },
];

function Nav() {
  const navigate = useNavigate();

  function handleClick(path) {
    navigate(`/courses/${path}`);
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
            <div div className="navbar-nav ">
              {courseArr.map((item, i) => {
                return (
                  <a
                    key={i}
                    class="nav-item nav-link active "
                    href="#"
                    onClick={() => handleClick(item.path)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
          <span classNameName="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Nav;
