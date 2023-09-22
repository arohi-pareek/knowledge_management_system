import "./courses.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import c1 from "./C1.jpg";
import c2 from "./C2.jpg";
import c3 from "./C3.png";
import c4 from "./C4.jpg";
import c5 from "./C5.png";
import c6 from "./C6.png";
import c7 from "./C7.jpg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
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

  const CourseArr = useSelector((state) => state.subscribe.subArr);

  const [open, setOpen] = useState(false);
  const [opendialog, setopendialog] = useState(false);
  const [course, setCourse] = useState({
    heading: "",
    subheading: "",
    desc: [],
  });

  function handleClick1() {
    navigate("/dashboard");
  }
  function handleClick2() {
    navigate("/courses");
  }
  function handleClick3() {
    navigate("/learning");
  }
  function handleClick4() {
    navigate("/courses/item1");
  }
  function handleClick5() {
    navigate("/courses/item2");
  }
  function handleClick6() {
    navigate("/courses/item3");
  }
  function handleClick7() {
    navigate("/courses/item4");
  }
  function handleClick8() {
    navigate("/courses/item5");
  }
  function handleClick9() {
    navigate("/courses/item6");
  }
  function handleClick10() {
    navigate("/courses/item7");
  }

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
          <div className="rightt">
            Welcome to the Courses Section of our educational website! Here, we
            have carefully crafted a variety of courses to cater to your
            learning needs and interests. Our goal is to provide you with
            high-quality education that's engaging, interactive, and tailored to
            your pace. Whether you're a beginner looking to explore new subjects
            or an expert seeking to deepen your expertise, we have something for
            everyone. Let's embark on a journey of knowledge together!
          </div>
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
                      setopendialog(true);
                    }}
                  >
                    Explore
                  </button>
                </p>
                <div>
                  <button
                    className="subscribe-btn"
                    onClick={() => handleSubscribe(item)}
                  >
                    {item.subscribe ? "Unsubscribe" : "subscribe"}
                  </button>
                </div>
              </p>
            );
          })}
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
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

      <Dialog
        open={opendialog}
        onClose={() => {
          setopendialog(false);
        }}
      >
        <DialogTitle></DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </>
  );
};

export default Courses;
