import "./courses.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import c1 from "./C1.jpg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,

} from "@mui/material";
// import { CoursesArr } from "./StaticContent/Courses";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar, subscribe } from "./components/Redux/Actions/firstaction";

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [popup, setPopup] = useState({
    heading: "",
    subheading: "",
  }
  );

  const CourseArr = useSelector((state) => state.subscribe.subArr);

  const [open, setOpen] = useState(false);
  const [opendialog, setopendialog] = useState(false);
  const [course, setCourse] = useState({
    heading: "",
    subheading: "",
    desc: [],
  }
  );

  const handleSubscribe = (payload) => {
    if (!payload.subscribe) {
      dispatch(subscribe(payload));
      callMessageOut(`Subscribed To ${payload.name}`, "success");
    } else {
      dispatch(subscribe(payload));
      callMessageOut(`Unsubscribed To ${payload.name}`, "success");
    }
  };

  const callMessageOut = (msg, type) => {
    dispatch(setSnackbar(true, type, msg));
  };

  return (
    <>
      <div className="container">
        <div className="coursesTop">
          <div>
            <b className="left">COURSES</b>
          </div>
          {/* <div className="rightt">
            Welcome to the Courses Section of our educational website! Here, we
            have carefully crafted a variety of courses to cater to your
            learning needs and interests. Our goal is to provide you with
            high-quality education that's engaging, interactive, and tailored to
            your pace. Whether you're a beginner looking to explore new subjects
            or an expert seeking to deepen your expertise, we have something for
            everyone. Let's embark on a journey of knowledge together!
          </div> */}
          {/* <img className="topimg" src={courseBack}  alt="" />    */}
        </div>

        <div className="courseBox">
          {CourseArr.map((item, i) => {
            return (
              <p key={i} className="Cbox">
                <img
                  className="courseImg"
                  src={item.img}
                  alt=""
                  onClick={() => {
                    setOpen(true);
                    setCourse(item.courseDesc);
                  }}
                />
                <p>
                  <b className="cTop">{item.name}</b>
                </p>
                <p>Category: {item.category}</p>
                <p>Rating {item.rating}</p>
                <p>
                  Course Description:{" "}
                  <button 
              onClick={() => {
                setOpenPopup(true);
                setPopup({
                  heading: "C++ PROGRAMMING",
                  subheading: "Category: Programming  |  Rating: ⭐⭐⭐⭐"
                  
                });
              }}
              >Explore</button>
                </p>
                <div>
                  <button
                    className="subscribe-btn"
                    onClick={() => handleSubscribe(item)}
                    // onClick={() => handleSubscribeColor(item)}
                  >
                    {item.subscribe ? "Unsubscribe" : "subscribe"}
                  </button>
                </div>
              </p>
            );
          })}
        </div>
      
      </div>

      <Dialog open={open} fullWidth onClose={() => setOpen(false)}>
        <DialogTitle>
          <h1>{course.heading}</h1>
          <h5>
            <ul>{course.subheading}</ul>
          </h5>
        </DialogTitle>
        <DialogContent className="backdropbox">
          {course.desc.map((item, i) => {
            return (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="dropbox" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </DialogContent>
      </Dialog>


      <Dialog open={openPopup} onClose={() => setOpenPopup(false)} >
        <DialogTitle>
            <h2 >{popup.heading}<button className="dialogButton" onClick={()=>{setOpenPopup(false)}}><b>X</b></button></h2>
            <h5>
            <ul>{popup.subheading}</ul>
            </h5>
        </DialogTitle>
        <DialogContent  className="dialogBox">

        <div className="outer">
             <img className="dialogImage" src={c1} alt="" />
             <div className="inside">
        
        <p>
          <b>Course Title: Comprehensive Java Programming Course</b> <p>Unlock the Power
          of Java Programming and Launch Your Software Development Journey!</p> <p>Are you eager to become a proficient Java programmer and create dynamic
          applications? Look no further! Our Comprehensive Java Programming
          Course is designed to take you from a beginner to a confident Java
          developer. Whether you're new to programming or seeking to deepen your
          coding skills, this course offers an immersive learning experience
          that equips you with the knowledge and practical skills needed to
          succeed.</p>


          <b>Course Highlights:</b> <p><b>● Beginner-Friendly Approach:</b>No prior
          programming experience? No problem! Our course starts with the basics
          and gradually builds a strong foundation, ensuring learners of all
          levels can follow along.</p> <p><b>● Hands-On Learning:</b> Theory comes to life
          through hands-on exercises and coding challenges. Develop real-world
          applications and solidify your understanding of Java concepts.</p><p><b>● Expert
          Guidance:</b> Our experienced instructors bring years of industry
          expertise to the table. Benefit from their insights, tips, and best
          practices for writing clean, efficient, and industry-standard Java
          code.</p><p><b>● Comprehensive Curriculum:</b> From core Java fundamentals to
          advanced topics like GUI programming, networking, and concurrency, our
          course covers it all. Gain a well-rounded understanding of Java's
          versatility.</p> <p><b>● Interactive Quizzes:</b> Reinforce your learning with
          interactive quizzes after each module. Test your knowledge, identify
          areas for improvement, and boost your confidence. </p><p><b>● Real-World Project:</b>
          Apply your skills to a hands-on project, bringing together the
          concepts learned throughout the course. Showcase your abilities in
          building a complete Java application.</p> <p><b>● Lifetime Access:</b> Once enrolled,
          you'll have lifetime access to the course content. Review materials,
          stay updated with Java advancements, and continue learning at your own
          pace. </p><p>Whether you aspire to develop web applications, mobile apps, or
          delve into the world of software engineering, our Comprehensive Java
          Programming Course provides the stepping stones to achieve your goals.
          Join us on this exciting journey and unlock the potential of Java
          programming!</p> <p>Enroll now to secure your spot and embark on a path to
          becoming a confident Java programmer.</p>
        </p>
      </div>
      </div>


        </DialogContent>
      </Dialog>
      {/* <Popup 
       openPopup = {openPopup}
       setOpenPopup = {setOpenPopup}
      >
      </Popup> */}
    </>
  );
  };
export default Courses;

