import "../Forms/style/courses.css"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
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

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CourseArr = useSelector((state) => state.subscribe.subArr);
  const [isDrawerOpen,setIsDrawerOpen]=useState(true);
  const [open, setOpen] = useState(false);
  const [opendialog, setopendialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  const [Gridview, setIsGridView] = useState(true);
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

  return (
    <>
    <div>
    <Tooltip title="Filter"> <FilterListOutlinedIcon className="filterlist" /></Tooltip>
    </div>
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
                  {item.subscribe ? "UNSUBSCRIBE" : "SUBSCRIBE"}
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

