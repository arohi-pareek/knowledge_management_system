import React,{useEffect} from "react";
import { useNavigate ,useLocation} from 'react-router-dom'

const courseArr = ['Web Development','React','JavaScript','Angular','CSS','Mobile Development','Programming Languages','Data Science']   
function Nav() {
  const navigate = useNavigate();

  function handleClick() {
  
    for(let i=0;i<courseArr.length;i++){
         navigate("/courses/dev/web");
    }
   
  
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
            <div div className="navbar-nav " >
              
            {
              courseArr.map((item,i)=>{
                   return <a key={i} class="nav-item nav-link active " href="#" onClick={handleClick}>{item}</a>
             })
            
  }
         
             </div>
              
            
             
          </div>
          <span classNameName="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}

export default Nav;

