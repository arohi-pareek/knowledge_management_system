
import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css';
// import About from "./components/About"
import Login from './components/Login';
import Navbar from "./components/Navbar";
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';
// import Learning from './components/Learning';
import NoteState from "./context/notes/NoteState";
import Explore from "./components/Explore";
import Cart from "./components/Cart";
function App() {
  return (
    
    <>
   <NoteState>
    <BrowserRouter>
    <div className='top'>
    <Navbar/>
    </div>
    <Routes>
          <Route path="/" element={<div className="page"><Login /></div>} />
           <Route exact path="/dashboard" element={<Dashboard />} />
           <Route exact path="/courses" element={<Courses />} />
         
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/explore" element={<Explore/>} />
          
    </Routes>

    

    
  </BrowserRouter>
  </NoteState>
    </>
  );
}

export default App;
