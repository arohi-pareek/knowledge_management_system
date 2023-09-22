//  import React, { useState } from 'react';
import "./App.css";
import React from "react";
import Login from "./Forms/components/login";

import Navbar from "./Forms/components/navbar";
import Dashboard from "./Forms/components/dashboard";
import Courses from "./Forms/components/courses";
import Learning from "./Forms/components/learning";
import Item1 from "./Forms/items/item1";
import Item2 from "./Forms/items/item2";
import Item3 from "./Forms/items/item3";
import Item4 from "./Forms/items/item4";
import Item5 from "./Forms/items/item5";
import Item6 from "./Forms/items/item6";
import Item7 from "./Forms/items/item7";
import CoursesplayList from "../src/Forms/components/PlayList/coursesplayList";
// import Cart from "./Forms/components/cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursesPlaylist from "../src/Forms/components/PlayList/coursesplayList";
import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import Footer from "./Forms/components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginOrSignup =
    location.pathname === "/login" || location.pathname === "/";

  return (
    <>
      {!isLoginOrSignup && <Navbar />}
      {children}
      {!isLoginOrSignup && <Footer />}
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<div className="page"><Login /></div>} /> */}
            <Route
              path="/"
              element={
                <div className="page">
                  <Login />
                </div>
              }
            />

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
            <Route exact path="/playlist" element={<CoursesPlaylist />} />
            {/* <Route exact path="/cart" element={<Cart />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
