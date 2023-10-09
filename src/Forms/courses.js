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
import FilterCourses from "./components/Coursesmain/FilterCourses";

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
    background: "	#cecbdf ",
  },
}));
const drawerWidth = "19%";


const Courses = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();

  const CourseArr = useSelector((state) => state.subscribe.subArr);
  const [isDrawerOpen,setIsDrawerOpen]=useState(true);
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

  return (
    <>
   
      <div style={{
        transition: "width .5s",
        // width: opendrawer ? "calc(100% - 15%)" : "100%",
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
        left: "22%",
        cursor: "pointer"
      }}><Tooltip title="FILTER"><FilterListIcon className="grid" onClick={() => setOpenDrawer(true)} /></Tooltip>
      </div>

      {Gridview ? <div className="courseBox">
        {CourseArr.map((item, i) => {
          return (
            
            <p key={i} className="Cbox">
              <img style={{cursor:'pointer'}}
                className="courseImg"
                src={item.img}
                alt=""
                onClick={() => {
                  setOpen(true);
                  setCourse(item.courseDesc);
                  setopendialog(true);
                    setData(item)
                    console.log(item)
                }}
              />
              <p>
                <b className="cTop">{item.name}</b>
              </p>
              <p>Category: {item.category}</p>
              <p>Rating: {item.rating}</p>
              <p>
                Course Description:{" "}
                <h5 style={{marginLeft:'9rem',marginTop:'-1.2rem',cursor:'pointer',color:'var(--main-heading)'}}
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
      </div> : <List />}

      <Drawer
        className={classes.drawer}
        id="drawer"
        variant="persistent"
        anchor="left"
        open={opendrawer}
        classes={{
          paper: !opendrawer ? classes.drawerPaperNotOpen : classes.drawerPaperOpen
        }}
      >
        <div className={classes.drawerHeader} style={{backgroundColor:'var(--bg-clr)',height:'50rem',border:'none',marginLeft:'0rem',width:'106%'}}>
        <Tooltip title={"CLOSE"} aria-label="close">
            <Close style={{ cursor: "pointer" }} onClick={handleDrawerClose} />
          </Tooltip>
          <div
            style={{
              display: "flex",
              flexWrap:'wrap',
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1rem",
              justifyContent: "center",
              width: "112%",
              marginLeft:'-0.4rem',
              marginTop:'-20rem',
              

            }}
          >
         
          <Accordion style={{backgroundColor:'var(--form)'}} defaultExpanded >
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='rate' 
                >
                    <Typography><b >Ratings</b></Typography>
                </AccordionSummary>
                <AccordionDetails className='rate'>
                    <Typography >
                        <div >
                            <FormControlLabel   
                                control={<Checkbox color="primary" />}
                                label="4.5 & more"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="4.0 & more"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="3.5 & more"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="3.0 & more"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion style={{backgroundColor:'var(--form)'}}>
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
            <Accordion style={{backgroundColor:'var(--form)'}}>
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
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Python"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Web development"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="React js"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Angular"
                        />
                    </div>
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion style={{backgroundColor:'var(--form)'}}>
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
        <Accordion  style={{backgroundColor:'var(--form)'}}defaultExpanded>
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
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="English"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="hindi"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Espanol"
                            />
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="portugues"
                            />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
           
          </div>
          

        </div>
        <Divider />
        {/* <List>
              {historyData.map((item, index) => {
                if (index === 0) {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1rem",
                      }}
                    >
                      <div style={{ marginTop: "1rem" }}>
                        <b>Subject : </b>
                        {item.subject}
                      </div>

                    

                      {showstatus !== "Draft" ? <div style={{ marginTop: "1rem" }}>
                        <b>From : </b>
                        {item.to}
                      </div> : <></>}
                      <div style={{ marginTop: "0.5rem" }}>
                        <b> Status : </b>
                        <span style={{ fontWeight: "bold", color: item.status == "Pending" ? "red" : item.status == "Responded and Closed" ? "green" : "" }}>{item.status}</span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "1rem",
                      }}
                    >

                      <div style={{ marginTop: "2rem" }}>
                        <b>From : </b>
                        {item.to}
                      </div>

                      <div style={{ marginTop: "0.5rem" }}>
                        <b>Status : </b>
                        <span style={{ fontWeight: "bold", color: item.status == "Pending" ? "red" : item.status == "Responded and Closed" ? "green" : "" }}>{item.status}</span>
                      </div>
                    </div>
                  );
                }

              })}
            </List> */}
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
          <Grid container spacing={2}>
            <Grid xs={4} style={{ padding: "1rem" }}>
              
              <div style={{ padding: "1rem" }}>
                <b>{Data?.courseDesc?.heading}</b>
              </div>
              <img
                src={Data?.img}  // Make sure to replace with the correct item
                alt=""
                style={{ marginRight: '20px', }}  // Adjust margin as needed
              />
            
              
            </Grid>

            <Grid xs={8} style={{ padding: "1rem" }}>
            <p>
            <b className="cTop">JAVA PROGRAMMING</b>
          </p>
          <p>Category: Programming</p>
          <p>Rating: ⭐⭐⭐</p>
          <p>_______________________________________________</p>
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

            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Courses;

