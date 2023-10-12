import "../Forms/style/courses.css"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Typography } from '@material-ui/core'

import {
  Divider,
  Drawer,
  Grid,
  Tooltip,
} from "@mui/material";
// import { CoursesArr } from "./StaticContent/Courses";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar, subscribe } from "./components/Redux/Actions/firstaction";
import GridViewIcon from "@mui/icons-material/GridView"
import ViewListIcon from "@mui/icons-material/ViewList"
import List from "./components/Coursesmain/List";
import { Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { Close } from "@material-ui/icons";
import FilterListIcon from '@mui/icons-material/FilterList';


const useStyles = makeStyles((theme) => ({

  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,


  },
  drawerPaperNotOpen: {
    width: drawerWidth,
    top: "5rem",
    height: Number(window.innerHeight - 98),
    visibility: "initial",
    display: "none"
  },
  drawerPaperOpen: {
    width: drawerWidth,
    top: "5rem",
    height: Number(window.innerHeight - 98),
    display: "initial"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
    background: "#ececf399 ",
    boxShadow:" 0 0 10px rgba(0, 0, 0, 0.3)"
   
  },
}));
const drawerWidth = "19%";


const Courses = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const CourseArr = useSelector((state) => state.subscribe.subArr);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [open, setOpen] = useState(false);
  const [opendrawer, setOpenDrawer] = useState(true);
  const [Data, setData] = useState("");
  const [opendialog, setopendialog] = useState(false);
  const [isFavorite, setIsFavorite] = useState(true);
  const [Gridview, setIsGridView] = useState(true);
  const [showstatus, setShowstatus] = useState("");
  const [course, setCourse] = useState({
    heading: "",
    subheading: "",
    desc: [],
  });
  const [selectedFilters, setSelectedFilters] = useState({
    ratings: [],
    languages: [],
    videoDurations: [],
    topics: [],
    features: []
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

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleFilterChange = (filterCategory, filterValue) => {
    setSelectedFilters(prevFilters => {
      if (filterCategory === 'ratings') {
        // Toggle the selected filter value for ratings
        return {
          ...prevFilters,
          ratings: prevFilters.ratings.includes(filterValue)
            ? prevFilters.ratings.filter(value => value !== filterValue)
            : [...prevFilters.ratings, filterValue]
        };

      }
      if (filterCategory === 'languages') {
        // Toggle the selected filter value for ratings
        return {
          ...prevFilters,
          languages: prevFilters.languages.includes(filterValue)
            ? prevFilters.languages.filter(value => value !== filterValue)
            : [...prevFilters.languages, filterValue]
        };

      }

      // if (filterCategory === 'durations') {
      //   // Toggle the selected filter value for ratings
      //   return {
      //     ...prevFilters,
      //     ratings: prevFilters.durations.includes(filterValue)
      //       ? prevFilters.durations.filter(value => value !== filterValue)
      //       : [...prevFilters.durations, filterValue]
      //   };

      // }
      if (filterCategory === 'topics') {
        // Toggle the selected filter value for ratings
        return {
          ...prevFilters,
          topics: prevFilters.topics.includes(filterValue)
            ? prevFilters.topics.filter(value => value !== filterValue)
            : [...prevFilters.topics, filterValue]
        };

      }
      // if (filterCategory === 'features') {
      //   // Toggle the selected filter value for ratings
      //   return {
      //     ...prevFilters,
      //     ratings: prevFilters.features.includes(filterValue)
      //       ? prevFilters.features.filter(value => value !== filterValue)
      //       : [...prevFilters.features, filterValue]
      //   };

      // }

      // Handle similar logic for other filter categories (languages, video durations, topics, features)

      return prevFilters;
    });
  };

  const filteredCourses = CourseArr.filter(item => {
    if (selectedFilters.ratings.length > 0 && !selectedFilters.ratings.includes(item.rating)) {
      return false;
    }
    if (selectedFilters.languages.length > 0 && !selectedFilters.languages.includes(item.language)) {
      return false;
    }
    // if (selectedFilters.durations.length > 0 && !selectedFilters.durations.includes(item.duration)) {
    //   return false;
    // }
    if (selectedFilters.topics.length > 0 && !selectedFilters.topics.includes(item.name)) {
      return false;
    }
    // if (selectedFilters.features.length > 0 && !selectedFilters.features.includes(item.feature)) {
    //   return false;
    // }

    // Add similar filtering logic for other filter categories (languages, video duration, topic, features)

    return true;
  });

  return (
    <>
      {/* <div>
    <Tooltip title="Filter"> <FilterListOutlinedIcon className="filterlist" /></Tooltip>
    </div> */}
      <div style={{
        transition: "width .5s",
        width: opendrawer ? "calc(100% - 20%)" : "100%",
        flexBasis: "initial"
      }}>
        <div style={{
          position: "fixed",
          top: "3.2rem",
          right: "1%",
          cursor: "pointer"
        }}>{isFavorite ? <Tooltip title="SWITCH TO LIST VIEW"><GridViewIcon className="grid" onClick={() => toggleTheme()} /></Tooltip> : <Tooltip title="SWITCH TO GRID VIEW"><ViewListIcon className="grid" onClick={() => toggleTheme()} /></Tooltip>}
        </div>

        <div style={{
          position: "fixed",
          top: "3.2rem",
          right: "4%",
          cursor: "pointer"
        }}><Tooltip title="FILTER"><FilterListIcon className="grid" onClick={() => setOpenDrawer(true)} /></Tooltip>
        </div>

        {Gridview ? <div className="courseBox">
          {filteredCourses.map((item, i) => {
            return (

              <p key={i} className="Cbox">
                <img
                  className="courseImg"
                  src={item.img}

                  alt=""
                  onClick={() => {
                    setopendialog(true);
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
                  <h5 style={{ marginLeft: '9rem', marginTop: '-1.2rem', cursor: 'pointer', color: 'var(--main-heading)' }}
                    onClick={() => {
                      setopendialog(true);
                      setData(item)
                      console.log(item)
                    }}
                  >
                    Explore
                  </h5>
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
        </div> : <List filteredCourses={filteredCourses} />}

        <Drawer
          className={classes.drawer}
          id="drawer"
          variant="persistent"
          anchor="right"
          open={opendrawer}
          classes={{
            paper: !opendrawer ? classes.drawerPaperNotOpen : classes.drawerPaperOpen
          }}
        >
          <div className={classes.drawerHeader}>
            <Tooltip title={"CLOSE"} aria-label="close">
              <Close style={{ cursor: "pointer" }} onClick={handleDrawerClose} />
            </Tooltip>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1rem",
                justifyContent: "center",
                width: "70%",

              }}
            >
              FILTER
            </div>
            {showstatus == "Draft" ? <Tooltip title={"DELETE"} aria-label="close">
              {/* <DeleteIcon color="primary" style={{ cursor: "pointer" }} onClick={handleDeleteDraft} ></DeleteIcon> */}
            </Tooltip> : <></>}

          </div>
          <Divider />
          {/* <Typography> 100 result for searchData </Typography> */}
          <Accordion style={{ backgroundColor: 'var(--form)' }} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><b>Topic</b></Typography>
            </AccordionSummary>
            <AccordionDetails className='rate'>
              <Typography>

                <div>
                  {['Python Programming', 'Web Development', 'C++ Programming', 'Java Programming'].map((label, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox color="primary" />}
                      label={label}
                      checked={selectedFilters.topics.includes(label)}
                      onChange={() => handleFilterChange('topics', label)}
                    />
                  ))}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: 'var(--form)' }} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><b>Language</b></Typography>
            </AccordionSummary>
            <AccordionDetails className='rate'>
              <Typography>

                <div>
                  {['English', 'hindi', 'Espanol', 'portugues'].map((label, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox color="primary" />}
                      label={label}
                      checked={selectedFilters.languages.includes(label)}
                      onChange={() => handleFilterChange('languages', label)}
                    />
                  ))}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: 'var(--form)' }} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='rate'
            >
              <Typography><b >Ratings</b></Typography>
            </AccordionSummary>
            <AccordionDetails className="rate">
              <Typography>
                <div>
                  {['4.5 & more', '4.0 & more', '3.5 & more', '3.0 & more'].map((label, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox color="primary" />}
                      label={label}
                      checked={selectedFilters.ratings.includes(label)}
                      onChange={() => handleFilterChange('ratings', label)}
                    />
                  ))}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion style={{ backgroundColor: 'var(--form)' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><b>Video duration</b></Typography>
            </AccordionSummary>
            <AccordionDetails className='rate'>
              <Typography>
                <div>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="0-1 Hour"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="1-3 Hour"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="3-6 Hour"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="6-17 Hour"
                  />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>



          <Accordion style={{ backgroundColor: 'var(--form)' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><b>Features</b></Typography>
            </AccordionSummary>
            <AccordionDetails className='rate'>
              <Typography>
                <div>
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Subtitles"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Quizzes"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Practice Sets"
                  />
                  <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Coding Exercise"
                  />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Drawer>
      </div>

     

      <Dialog
        open={opendialog}
        id="DescriptionDialog"
        onClose={() => {
          setopendialog(false);
        }}
      >
        <DialogTitle>
          <Tooltip title="CLOSE">
            <IconButton
              onClick={() => setopendialog(false)}
              aria-label="close"
              style={{
                position: "absolute",
                right: "8px",
                top: "8px",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Tooltip>
          COURSE DESCRIPTION
        </DialogTitle>
        <DialogContent dividers>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '25%', position: 'fixed' }}>
              <div style={{ padding: '1rem' }}>
                {/* <b>{Data?.courseDesc?.heading}</b> */}
                <p>
                  <b className="cTop">{Data?.courseDesc?.heading}</b>
                </p>
              </div>
              <img
                src={Data?.img}
                alt=""
                style={{ marginRight: '20px', width: '75%' }}
              />
            </div>
            <div style={{ width: '75%', marginLeft: '25%', overflow: 'auto' }}>


              <>
                {/* <p>
                  <b className="cTop">JAVA PROGRAMMING</b>
                </p> */}
                <p>Category: Programming</p>
                <p>Rating: ⭐⭐⭐</p>
                <p>_______________________________________________</p>
                <Typography>

                  <Accordion style={{ backgroundColor: 'var(--form)' }} defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><b>Course Title: Comprehensive Java Programming Course</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className='rate'>
                      <Typography>
                        <div>
                          Unlock the Power
                          of Java Programming and Launch Your Software Development Journey! Are you eager to become a proficient Java programmer and create dynamic
                          applications? Look no further! Our Comprehensive Java Programming
                          Course is designed to take you from a beginner to a confident Java
                          developer. Whether you're new to programming or seeking to deepen your
                          coding skills, this course offers an immersive learning experience
                          that equips you with the knowledge and practical skills needed to
                          succeed.
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={{ backgroundColor: 'var(--form)' }} defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><b>Course Title: Comprehensive Java Programming Course</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className='rate'>
                      <Typography>
                        <div>
                          Unlock the Power
                          of Java Programming and Launch Your Software Development Journey! Are you eager to become a proficient Java programmer and create dynamic
                          applications? Look no further! Our Comprehensive Java Programming
                          Course is designed to take you from a beginner to a confident Java
                          developer. Whether you're new to programming or seeking to deepen your
                          coding skills, this course offers an immersive learning experience
                          that equips you with the knowledge and practical skills needed to
                          succeed.
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={{ backgroundColor: 'var(--form)' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><b>Course Title: Comprehensive Java Programming Course</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className='rate'>
                      <Typography>
                        <div>
                          Unlock the Power
                          of Java Programming and Launch Your Software Development Journey! Are you eager to become a proficient Java programmer and create dynamic
                          applications? Look no further! Our Comprehensive Java Programming
                          Course is designed to take you from a beginner to a confident Java
                          developer. Whether you're new to programming or seeking to deepen your
                          coding skills, this course offers an immersive learning experience
                          that equips you with the knowledge and practical skills needed to
                          succeed.
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={{ backgroundColor: 'var(--form)' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><b>Course Title: Comprehensive Java Programming Course</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className='rate'>
                      <Typography>
                        <div>
                          Unlock the Power
                          of Java Programming and Launch Your Software Development Journey! Are you eager to become a proficient Java programmer and create dynamic
                          applications? Look no further! Our Comprehensive Java Programming
                          Course is designed to take you from a beginner to a confident Java
                          developer. Whether you're new to programming or seeking to deepen your
                          coding skills, this course offers an immersive learning experience
                          that equips you with the knowledge and practical skills needed to
                          succeed.
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={{ backgroundColor: 'var(--form)' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><b>Course Title: Comprehensive Java Programming Course</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className='rate'>
                      <Typography>
                        <div>
                          Unlock the Power
                          of Java Programming and Launch Your Software Development Journey! Are you eager to become a proficient Java programmer and create dynamic
                          applications? Look no further! Our Comprehensive Java Programming
                          Course is designed to take you from a beginner to a confident Java
                          developer. Whether you're new to programming or seeking to deepen your
                          coding skills, this course offers an immersive learning experience
                          that equips you with the knowledge and practical skills needed to
                          succeed.
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={{ backgroundColor: 'var(--form)' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography><b>Course Title: Comprehensive Java Programming Course</b></Typography>
                    </AccordionSummary>
                    <AccordionDetails className='rate'>
                      <Typography>
                        <div>
                          Unlock the Power
                          of Java Programming and Launch Your Software Development Journey! Are you eager to become a proficient Java programmer and create dynamic
                          applications? Look no further! Our Comprehensive Java Programming
                          Course is designed to take you from a beginner to a confident Java
                          developer. Whether you're new to programming or seeking to deepen your
                          coding skills, this course offers an immersive learning experience
                          that equips you with the knowledge and practical skills needed to
                          succeed.
                        </div>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Typography>
              </>

            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Courses;

