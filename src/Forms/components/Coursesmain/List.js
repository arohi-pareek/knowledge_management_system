import React, { useEffect, useState }  from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import {
  Divider,
  Drawer,
  Grid,
  Tooltip,
} from "@mui/material";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSnackbar, subscribe } from "../Redux/Actions/firstaction";
import c1 from "../../C1.jpg"

const List = (props) => {
  const [Data, setData] = useState("");
  const [opendialog, setopendialog] = useState(false);
  const {filteredCourses} = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    // const CourseArr = useSelector((state) => state.subscribe.subArr);
    const CourseArr = useSelector((state) => state.CourseDetails.CourseData);
    console.log(CourseArr)
    return (
        <div className="container">
        <section className="main-cart-section">
          <div className="cart-items">
            <div className="cart-items-container-list">
              {filteredCourses.filter((item) => !item.subscribed).map((item, i) => (
                <div className="items-info" key={i}> {/* Added key attribute */}
                  <div className="product-img">
                    <img src={c1} alt=""/>
                  </div>
                  <div className="title">
                    <h3>{item.courseName}</h3>
                    <p>Category: {item.type}</p>
                    
                    <p className='listcat'>Rating:  {item.rating}</p>
                    <p className='desc'>Course Description:
                    <h5 className="exp"  
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
                    <button className="sub-btn" onClick={() => handleSubscribe(item)}
                    >
                      {item.subscribe ? "UNSUBSCRIBE" : "SUBSCRIBE"}</button>
                  </div>
                    
                    
                  </div>
                  
                  <div className="PlayList">{/* Add content for Playlist */}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
      </div>
    );
}

export default List

