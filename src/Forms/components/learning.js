// import React from "react";
// import "./learning.css";
// import { useNavigate } from "react-router-dom";
// import c1 from "../C1.jpg";
// import { Button } from "@material-ui/core";

// const Learning = () => {

//   const navigate = useNavigate();

//   function handleClick1() {
//     navigate("/dashboard");
//   }
//   function handleClick2() {
//     navigate("/courses");
//   }
//   function handleClick3() {
//     navigate("/learning");
//   }

//   function handleplayList (){
//     navigate("/playlist")
//   }

  
//   const courseCompletions = {
//     "JAVA PROGRAMMING": 50, 
//   };


//   return (
//     <div className="container">

//       <section className="main-cart-section">
//         <h1>SUBSCRIBED COURSES</h1>

//         <div className="cart-items">

//           <div className="cart-items-container">
//           {Object.keys(courseCompletions).map((course) => (
//             <div className="items-info" key={course}>
//               <div className="product-img">
//                 <img src={c1} alt="" />
//               </div>
//               <div className="title">
//                 <h3>JAVA PROGRAMMING</h3>
//               </div>

//               <div className="completion-bar">
//                   <div
//                     className="completion-progress"
//                     style={{
//                       width: `${courseCompletions[course]}%`,
//                     }}
//                   >
//                    <div className="percentage-text">
//                       {courseCompletions[course]}%
//                     </div>

//                   </div>
//                 </div>

//               <div className="PlayList">
//                 <Button variant="contained" onClick={handleplayList}>GO TO PLAYLIST</Button>
//               </div>
//             </div>
//                ))}
//             <div className="items-info">
//               <div className="product-img">
//                 <img src={c1} alt="" />
//               </div>
//               <div className="title">
//                 <h3>JAVA PROGRAMMING</h3>
//               </div>
//             </div>
//             <div className="items-info">
//               <div className="product-img">
//                 <img src={c1} alt="" />
//               </div>
//               <div className="title">
//                 <h3>JAVA PROGRAMMING</h3>
//               </div>
//             </div>
//             <div className="items-info">
//               <div className="product-img">
//                 <img src={c1} alt="" />
//               </div>
//               <div className="title">
//                 <h3>JAVA PROGRAMMING</h3>
//               </div>
//             </div>
//             <div className="items-info">
//               <div className="product-img">
//                 <img src={c1} alt="" />
//               </div>
//               <div className="title">
//                 <h3>JAVA PROGRAMMING</h3>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>

//     </div>
//   )
// };

// export default Learning;







import React from "react";
import "./learning.css";
import { useNavigate } from "react-router-dom";
import { Button, LinearProgress } from "@material-ui/core";
import { SUBSCRIBE_COURSE__SUCCESS } from "./Redux/Constant/ActionTypes";
import { connect } from "react-redux";

const Learning = ({ subArr, subscribeCourse }) => {


  console.log(subArr, "subArr")
  const navigate = useNavigate();

  function handleplayList() {
    navigate("/playlist")
  }

  return (
    <div className="container">


      <div className="subscribe_container">
        <section className="main-cart-section">
          <h1>SUBSCRIBED COURSES</h1>

          {/* <div className="cart-items">
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
          </div> */}
           <div className="cart-items">
        <div className="cart-items-container">
          {subArr?.filter((course) => course.subscribe)?.map((course, index) => (
            <div key={index} className="card" onClick={() => handleplayList(course)}>
              <div className="product-img">
                <img src={course.img} alt="" />
                <div className="play-icon">▶</div>
              </div>
              <div className="card-content">
                <div className="title">
                  <h3>{course.name}</h3>
                </div>
                <div className="course-details">
                  <p>{` ${course.instructor}`}</p>
                </div>
                <div className="progress-bar">
                    <LinearProgress variant="determinate" value={course.progress} />
                    <div className="percentage-text">{`${100}% completed`}</div>
                  </div>
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






