import "./courses.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  Typography,
} from "@mui/material";
// import { CoursesArr } from "./StaticContent/Courses";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar, subscribe } from "./components/Redux/Actions/firstaction";
import GridViewIcon from "@mui/icons-material/GridView"
import ViewListIcon from "@mui/icons-material/ViewList"
import List from "./components/Coursesmain/List";
import C8 from "./C8.jpg";

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const CourseArr = useSelector((state) => state.subscribe.subArr);

  const [open, setOpen] = useState(false);
  const [opendialog, setopendialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  const [Gridview, setIsGridView] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [course, setCourse] = useState({
    heading: "",
    subheading: "",
    desc: [],
  });

  const toggleTheme = () => {
    if (isFavorite === true) {
      setIsFavorite(!isFavorite);
      setIsGridView(!Gridview);
    }
    else {
      setIsFavorite(!isFavorite);
      setIsGridView(!Gridview);
    }
  };

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





  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div style={{
        position: "fixed",
        top: "3.2rem",
        right: "1%",
        cursor: "pointer"
      }}>{isFavorite ? <Tooltip title="SWITCH TO LIST VIEW"><GridViewIcon className="grid" onClick={() => toggleTheme()} /></Tooltip> : <Tooltip title="SWITCH TO GRID VIEW"><ViewListIcon className="grid" onClick={() => toggleTheme()} /></Tooltip>}
      </div>{Gridview ? <div className="courseBox">
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
                  {item.subscribe ? "UNSUBCRIBE" : "SUBCRIBE"}
                </button>
              </div>
            </p>
          );
        })}
      </div> : <List />}

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
      <Dialog open={opendialog} fullWidth maxWidth="md" onClose={() => setopendialog(false)}>
        <DialogTitle><h1>JAVA PROGRAMMING</h1></DialogTitle>
        <DialogContent>
          <div className="content-container">
            <div>
            <img src={C8} alt="Course Image" className="course-image" />
            </div>
            <div className="course-details">
              <Typography variant="h5" className="topics-heading" sx={{ marginBottom: 0 }}>
                <h4>Topics To Be Covered:</h4>
              </Typography>
              <Accordion
                className="exploreAccordion" // Add the className here
                expanded={expanded === "panel1"}
                onChange={handleAccordionChange("panel1")}
              >
                <AccordionSummary>
                  <Typography  variant="h7"><b>Getting Started</b> </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className="section-header"> 
               <Typography variant="h7"></Typography>
               </div>
               <div className="section-content">
                  <Typography variant="h7">
                  Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
                  It is one of the most popular programming language in the world
                  It has a large demand in the current job market
                  It is easy to learn and simple to use

                  </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="exploreAccordion" // Add the className here
                expanded={expanded === "panel2"}
                onChange={handleAccordionChange("panel2")}
              >
                <AccordionSummary>
                  <Typography variant="h7">Programming Tool Setups</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div className="section-header"> 
               <Typography variant="h7"></Typography>
               </div>
               <div className="section-content">
                  <Typography variant="h7">
                  The most basic tools are a source code editor and a compiler or interpreter, which are used ubiquitously and continuously. Other tools are used more or less depending on the language, development methodology, and individual engineer, often used for a discrete task, like a debugger or profiler
                  </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="exploreAccordion" // Add the className here
                expanded={expanded === "panel3"}
                onChange={handleAccordionChange("panel3")}
              >
                <AccordionSummary>
                  <Typography variant="h7">IntelliJ Basics </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h7">
                  IntelliJ IDEA is an Integrated Development Environment (IDE) for Java and Kotlin designed to maximize developer productivity
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="exploreAccordion" // Add the className here
                expanded={expanded === "panel4"}
                onChange={handleAccordionChange("panel4")}
              >
                <AccordionSummary>
                  <Typography variant="h7">Expressions,Statements & More </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h7">
                    Content of Accordion Section 1 goes here.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="exploreAccordion" // Add the className here
                expanded={expanded === "panel5"}
                onChange={handleAccordionChange("panel5")}
              >
                <AccordionSummary>
                  <Typography variant="h7">Inheritence </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h7">
                    Content of Accordion Section 1 goes here.
                  </Typography>
                </AccordionDetails>
              </Accordion>
           
              
            </div>
          </div>
        </DialogContent>
      </Dialog>

     
    </>
  );
};

export default Courses;

