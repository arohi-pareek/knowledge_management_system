//  import React, { useState } from 'react';
 import './App.css';
import React from "react";
import Login from "./Forms/login";
import SignUp from "./Forms/signUp";
import Navbar from "./Forms/navbar";
import Dashboard from "./Forms/dashboard";
import Courses from "./Forms/courses";
import Learning from "./Forms/components/learning";
import Item1 from "./Forms/items/item1";
import  CoursesPlayList  from './Forms/components/PlayList/courseplayList';
import Item2 from "./Forms/items/item2";
import Item3 from "./Forms/items/item3";
import Item4 from "./Forms/items/item4";
import Item5 from "./Forms/items/item5";
import Item6 from "./Forms/items/item6";
import Item7 from "./Forms/items/item7";
// import Cart from "./Forms/components/cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidenavbar from "./Forms/sidenavbar/sidenavbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="top">
          <Navbar />
          <Sidenavbar />
          
        
        <div className="content">
        <Routes>
          {/* <Route path="/" element={<div className="page"><Login /></div>} /> */}
          <Route path="/login" element={<div className="page"><Login /></div>} />
          <Route path="/" element={<div className="page"><SignUp /></div>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/learning" element={<Learning />} />
          <Route exact path="/courses/item1" element={<Item1 />} />
          <Route exact path="/courses/item2" element={<Item2 />} />
          <Route exact path="/courses/item3" element={<Item3 />} />
          <Route exact path="/courses/item4" element={<Item4 />} />
          <Route exact path="/courses/item5" element={<Item5 />} />
          <Route exact path="/courses/item6" element={<Item6 />} />
          <Route exact path="/courses/item7" element={<Item7 />} />
          <Route exact path="/playlist" element={<CoursesPlayList/>} />
          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
        </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
