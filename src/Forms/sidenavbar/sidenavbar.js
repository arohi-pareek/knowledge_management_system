import React from 'react';
import { Link } from 'react-router-dom';
import './sidenavbar.css'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookIcon from '@mui/icons-material/Book';
import Tooltip from '@mui/material/Tooltip';

const Sidenavbar = () => {
  return (
    <div className="side-navbar">
      <ul className='icon'>
        <li><Tooltip title="Dashboard" arrow><Link to="/dashboard">  <DashboardIcon /> </Link></Tooltip></li>
        <li><Tooltip title="Courses" arrow><Link to="/courses"><BookIcon /></Link></Tooltip></li>
        <li><Tooltip title="My Learning" arrow><Link to="/learning"><BookmarksIcon /></Link></Tooltip></li>
      </ul>
    </div>
  );
};

export default Sidenavbar;
