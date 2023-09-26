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
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import c1 from "../C1.jpg";

const Learning = () => {
  const subscribedCourses = [
    {
      title: "Java Programming",
      completion: 50,
      link: "/playlist", // Specify the link to navigate to
    },
    {
      title: "Web Development",
      completion: 30,
      link: "/web-development", // Specify the link to navigate to
    },
    {
      title: "Machine Learning",
      completion: 20,
      link: "/machine-learning", // Specify the link to navigate to
    },
    {
      title: "Data Science",
      completion: 40,
    },
    {
      title: "React Development",
      completion: 60,
    },
    
  ];

  return (
    <div className="container">
      <section className="main-cart-section">
        <h1>SUBSCRIBED COURSES</h1>

        <div className="cart-items">
          <div className="cart-items-container">
            {subscribedCourses.map((course, index) => (
              // Wrap the entire card in a Link component
              <Link to={course.link} key={index} className="course-card">
                <div className="course-image">
                  <img src={c1} alt="" />
                </div>
                <br />
                <div className="course-details">
                  <h3 className="course-title">{course.title}</h3>
                  <br />
                  <div className="completion-bar">
                    <div
                      className="completion-progress"
                      style={{
                        width: `${course.completion}%`,
                      }}
                    ></div>
                  </div>
                  <div className="percentage-label">
                    {course.completion}% Completed
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning;
