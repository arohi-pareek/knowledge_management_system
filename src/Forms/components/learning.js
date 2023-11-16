import React, { useEffect } from "react";
import "../style/learning.css";
import { useNavigate } from "react-router-dom";
import { Button, LinearProgress } from "@material-ui/core";
import { SUBSCRIBE_COURSE__SUCCESS } from "./Redux/Constant/ActionTypes";
import { connect, useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { GetCourse, RemoveSubscribe } from "./Redux/Actions/firstaction";
import c1 from "../C1.jpg";

const Learning = ({ subscribeCourse }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleplayList() {
    navigate("/playlist");
  }

  const subArr = useSelector((state) => state.CourseDetails.CourseData);
  console.log(subArr);

  useEffect(() => {
    dispatch(GetCourse());
  }, []);

  const handleUnsubscribe = (course) =>{
    const formdata = new FormData();
    formdata.append("userId", "6541df204297384ef7b27f32");
    formdata.append("courseId", course.id);
    dispatch(RemoveSubscribe(formdata))
  }

  return (
    <div className="container">
      <div className="subscribe_container">
        <section className="main-cart-section">
          <h1>SUBSCRIBED COURSES</h1>
          <div className="cart-item">
            {subArr
              ?.filter((course) => course.subscribed)
              ?.map((course, index) => (
                <div
                  key={index}
                  className="card"
                  onClick={() => handleplayList(course)}
                >
                  <div className="product-img">
                    <img src={c1} alt="" />
                    <div className="play-icon">▶</div>
                  </div>
                  <div className="card-content">
                    <div className="title">
                      <h3>{course.name}</h3>
                    </div>
                    <div className="course-details">
                      <p>{` ${course.courseName}`}</p>
                    </div>
                    <div className="progress-bar">
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                      />
                      <div className="percentage-text">{`${100}% completed`}</div>
                    </div>
                    <div className="
                    -btn">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUnsubscribe(course)
                        }}
                      >
                        UNSUBSCRIBE
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // subArr: state.subscribe.subArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    subscribeCourse: (course) =>
      dispatch({
        type: SUBSCRIBE_COURSE__SUCCESS,
        payload: { name: course.name },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Learning);
