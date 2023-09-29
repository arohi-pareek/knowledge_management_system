import "../Forms/style/courses.css"
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
                <p>Rating :{item.rating}</p>
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
                    {item.subscribe ? "UNSUBSCRIBE" : "SUBCRIBE"}
                  </button>
                </div>
              </p>
            );
          })}
        </div>
      {/* </div> */}

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
        fullWidth
        onClose={() => {
          setopendialog(false);
        }}
      >
        <DialogTitle>
          
        </DialogTitle>
        <DialogContent>

        </DialogContent>
      </Dialog>
    </>
  );
};

export default Courses;

