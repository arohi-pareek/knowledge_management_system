import React from "react";
import "./dashboard.css";
import Carousel from "./carousel";
// import bgImg from "../bg1.png";
import Img from "../logoFinal.png";
import b1 from "./img1.svg";
import b2 from "./img2.svg";
import b3 from "./img3.svg";
import b4 from "./img4.svg";
import b5 from "./img5.svg";
import b6 from "./img6.svg";
import b7 from "./img7.svg";
import b8 from "./img8.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  function handleClick1() {
    navigate("/dashboard");
  }
  function handleClick2() {
    navigate("/courses");
  }
  function handleClick3() {
    navigate("/learning");
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#" onClick={handleClick1}>
                Dashboard
              </a>
              <a class="nav-item nav-link" href="#" onClick={handleClick2}>
                Courses
              </a>
              <a class="nav-item nav-link " href="#" onClick={handleClick3}>
                My Learning
              </a>
            </div>
          </div>

          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <Carousel />
      {/* <img className="bgimage" src={bgImg} alt="" /> */}
      <div className="brands">
        <p className="brandsInside">
          Trusted by over 14,400 companies and millions of learners around the
          world
        </p>
        <div className="brandsImage">
          <img className="img1" src={b1} alt="" />
          <img className="img1" src={b2} alt="" />
          <img className="img1" src={b3} alt="" />
          <img className="img1" src={b4} alt="" />
          <img className="img1" src={b5} alt="" />
          <img className="img1" src={b6} alt="" />
          <img className="img1" src={b7} alt="" />
          <img className="img1" src={b8} alt="" />
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">A broad selection of courses</h1>
          <p className="lead">
            Choose from over 210,000 online video courses with new additions
            published every month
            <br />
            <div className="explore-btn" onClick={handleClick2}>
              Explore
            </div>
          </p>
        </div>
      </div>
      <div className="grid">
        <p className="gridInside">
          How learners like you are achieving their goals
        </p>
        <div className="box">
          <p className="box1">
            <b className="comma">❝</b>
            <p>
              I am proud to say that after a few months of taking this
              course...I passed my exam and am now an AWS Certified Cloud
              Practitioner! This content was exactly what the CCP exam covered.
            </p>
          </p>
          <p className="box1">
            <b className="comma">❝</b>
            <p>
              This course helped me freshen up on my product manager skills and
              land a job at Facebook! Thanks guys :)
            </p>
          </p>
          <p className="box1">
            <b className="comma">❝</b>
            <p>
              One of the best courses on management and leadership I have come
              across so far. The advice is practical, and examples highly
              relatable. Would help anyone become a better manager.
            </p>
          </p>
          <p className="box1">
            <b className="comma">❝</b>
            <p>
              I highly recommend this course for all budding data scientists.
              Even people with no prior knowledge of any visualization tools can
              become a master after completing this course.
            </p>
          </p>
        </div>
      </div>
      
       {/* <div className="footer">
        <div className="f">© 2023 Educom-Let Us Study, Inc.</div>
      </div>  */}

<div className="footer">
<footer>
      
        
      

      <div className="columns">
        <div className="column">
          <p>
                Business
          </p>
          <p>
               Teach 
          </p>
          <p>
               Get the app
          </p>
          <p>
               About us
          </p>
          <p>
               Contact us
          </p>
        </div>

        <div className="column">
        <p>
               Careers
          </p>
          <p>
               Blog
          </p>
          <p>
               Help and Support
          </p>
          <p>
               Affiliate
          </p>
          <p>
               Investors
          </p>
        </div>

        <div className="column">
        <p>
               Terms
          </p>
          <p>
               Privacy Policy
          </p>
          <p>
               Cookie settings
          </p>
          <p>
               Sitemap
          </p>
          <p>
               Accessibility statement
          </p>
        </div>
      </div>
      <br />
      <p className="copy">&copy;{ new Date().getFullYear()} Letusstudy,Inc.</p>

    </footer>
</div>



    </div>
  );
};
export default Dashboard;
