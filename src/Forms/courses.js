import "../Forms/style/courses.css"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Drawer,
  Grid,
  Tooltip,
  Typography,
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
  const [opendrawer, setOpenDrawer] = useState(false);
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
    {/* <div>
    <Tooltip title="Filter"> <FilterListOutlinedIcon className="filterlist" /></Tooltip>
    </div> */}
      <div style={{
        transition: "width .5s",
        width: opendrawer ? "calc(100% - 17%)" : "100%",
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
                    setData(item)
                    console.log(item)
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
            STATUS
          </div>
          {showstatus == "Draft" ? <Tooltip title={"DELETE"} aria-label="close">
            {/* <DeleteIcon color="primary" style={{ cursor: "pointer" }} onClick={handleDeleteDraft} ></DeleteIcon> */}
          </Tooltip> : <></>}

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


              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="dropbox" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{""}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{""}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>

            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Courses;


