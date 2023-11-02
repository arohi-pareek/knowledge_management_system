import React  , { useState, useEffect }from 'react';
import './sidebar.css';
import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import BookIcon from '@mui/icons-material/Book';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const snackbarData = useSelector((state) => {
    console.log(state);
    return state.subscribe.subArr;
  });
   // Function to filter and count items with subscribe: true
   const countSubscribedItems = () => {
    
    const subscribedItems = snackbarData?.filter(item => item.subscribe === true);
    return subscribedItems.length;
  };
  

  return (
    <div className="sidebar">
      <ul className='icon'>
        <li><Tooltip title="Dashboard" placement="right-start" arrow><Link to="/dashboard" >  <DashboardIcon fontSize="small"/> </Link></Tooltip></li>
        <li><Tooltip title="Courses" placement="right-start" arrow><Link to="/subject"><BookIcon fontSize="small"/></Link></Tooltip></li>
        <li><Tooltip title="My Learning" placement="right-start" arrow><Link to="/learning"><Badge badgeContent={countSubscribedItems()} color="primary"><BookmarksIcon fontSize="small"/></Badge>
        </Link></Tooltip></li>
        <li><Tooltip title="Admin" placement="right-start" arrow><Link to="/adminPanel"><AdminPanelSettingsIcon fontSize="small"/></Link></Tooltip></li>
      </ul>
    </div>
  );
};

export default Sidebar;
