import React from "react";
import "../style/learning.css";
import { useNavigate } from "react-router-dom";
import c1 from "../C1.jpg";
import { Button, LinearProgress } from "@material-ui/core";
import { SUBSCRIBE_COURSE__SUCCESS } from "./Redux/Constant/ActionTypes";
import { connect } from "react-redux";

const Learning = ({ subArr, subscribeCourse }) => {


  console.log(subArr, "subArr")
  const navigate = useNavigate();

  function handleplayList() {
    
    navigate("/playlist")
  }

  const handleSubscribe = (course) => {
    // Dispatch an action to subscribe/unsubscribe to a course
    // You would need to implement the action creator
    subscribeCourse(course);
  };
  return (
    <div className="container">

      {/* <section className="main-cart-section">
        <h1>SUBSCRIBED COURSES</h1>

        <div className="cart-items">
          <div className="cart-items-container">

            {subArr?.filter((course) => course.subscribe)?.map((course, index) => (
              <div key={index} className="items-info">
                <div className="product-img">
                  <img src={course.img} alt="" />
                </div>
                <div className="title">
                  <h3>{course.name}</h3>
                </div>
                <div className="PlayList">

                  <Button variant="contained" onClick={handleplayList}>GO TO PLAYLIST</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <div className="subscribe_container">
        <section className="main-cart-section">
          <h1>SUBSCRIBED COURSES</h1>

          <div className="cart-items">
            <div className="cart-items-container">
              {subArr?.filter((course) => course.subscribe)?.map((course, index) => (
                <div key={index} className="card" onClick={() => handleplayList(course)} >
                  <div className="product-img">
                    <img src={course.img} alt="" />
                    <div className="play-icon">▶</div>
                  </div>
                  <div className="title">
                    <h3>{course.name}</h3>
                  </div>
                  <div className="progress-bar">
                    <LinearProgress variant="determinate" value={course.progress} />
                    <div className="percentage-text">{`${100}% completed`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

     </div> 
  )
};

const mapStateToProps = (state) => {
  return {
    subArr: state.subscribe.subArr,
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






