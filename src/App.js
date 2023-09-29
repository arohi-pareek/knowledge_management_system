import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Forms/components/Redux/store";
import Navbar from "./Forms/navbar";
import Footer from "./Forms/components/Footer";
import Login from "./Forms/login";
import Dashboard from "../src/Forms/components/dashboard";
import Courses from "./Forms/courses";
import Learning from "./Forms/components/learning";
import Item1 from "./Forms/items/item1";
import Item2 from "./Forms/items/item2";
import Item3 from "./Forms/items/item3";
import Item4 from "./Forms/items/item4";
import Item5 from "./Forms/items/item5";
import Item6 from "./Forms/items/item6";
import Item7 from "./Forms/items/item7";
import CoursesplayList from "./Forms/components/PlayList/coursesplayList";
import "./App.css";
import Sidebar from "./Forms/components/sidebar";
import CustomizedSnackbars from "./Snackbar";
import Mainfile from "./Forms/components/Coursesmain/mainfile";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginOrSignup = location.pathname === "/login" || location.pathname === "/";

  return (
    <>
    {!isLoginOrSignup && <Navbar />}
    <div className="layout-container">
      {!isLoginOrSignup && <Sidebar />}
      <div className="content">
        {children}
      </div>
    </div>
    {!isLoginOrSignup && <Footer />}
  </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
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
            <Route exact path="/playlist" element={<CoursesplayList />} />
            <Route exact path="/courses/search" element={<Mainfile />} />
          </Routes>
          <CustomizedSnackbars />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


