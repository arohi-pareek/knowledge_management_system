import React from "react";
import "../style/dashboard.css";
import Carousel from "./carousel";
import Nav from './nav';
import Img from "../Images/logoFinal.png";
import b1 from "../Images/img1.svg";
import b2 from "../Images/img2.svg";
import b3 from "../Images/img3.svg";
import b4 from "../Images/img4.svg";
import b5 from "../Images/img5.svg";
import b6 from "../Images/img6.svg";
import b7 from "../Images/img7.svg";
import b8 from "../Images/img8.svg";
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


  function startLearning() {
    window.location.href = '/start-learning'; 
  }

  return (
    <div className="DashBoard_container">
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
      </nav> */}
      <Carousel />
      <br />
      <br />
      <br />
{/*       
      <h1 className="head">Let's Start Learning</h1>
       <button className="start-learning-button" onClick={handleClick3}>
        Start Learning
      </button> */}
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

    </div>
  );
};
export default Dashboard;
