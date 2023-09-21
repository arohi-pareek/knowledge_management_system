import React from 'react';
import { Link } from 'react-router-dom';
import './sidenavbar.css'; 

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/about">Courses</Link></li>
        <li><Link to="/contact">My Learning</Link></li>
      </ul>
    </div>
  );
};

export default SideNavbar;
