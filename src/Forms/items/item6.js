import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c6 from "../C6.png";

const Item6 = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <div className="outer">
      <img className="courseImg1" src={c6} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">REACT JS</b>
        </p>
        <p>Category: Development</p>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
        <p>
          <b>Course Title: Mastering React: Build Dynamic User Interfaces with
          Confidence</b> <br />Unleash the Power of React: Your Gateway to Building Modern
          Web Applications! <br /> Are you eager to become a proficient React developer
          and create cutting-edge user interfaces? Look no further! Our
          Mastering React Course is designed to guide you through the ins and
          outs of React, from the fundamentals to advanced techniques. Whether
          you're new to frontend development or seeking to upgrade your skills,
          this course offers a hands-on learning experience that empowers you to
          craft dynamic, interactive web applications.<br /><b>Course Highlights:</b><br />●All
          Levels Welcome: Whether you're a beginner or have some programming
          experience, our course starts with the basics and progressively
          introduces you to the world of React development. <br /><b>● Practical Learning:</b>
          Immerse yourself in coding exercises, real-world projects, and
          interactive demos. Build real applications and gain confidence in your
          React skills. <br /><b>● Expert Instruction:</b> Learn from seasoned developers who
          bring their industry insights to the forefront. Benefit from their
          expertise, best practices, and real-world solutions. <br /><b>● Comprehensive
          Curriculum:</b> Cover everything from React components and state
          management to routing, API integration, and testing. Gain a
          comprehensive understanding of the React ecosystem. <br /><b>● Interactive
          Challenges:</b> Reinforce your knowledge with coding challenges and
          quizzes. Apply what you learn and solidify your grasp of React
          concepts. <br /><b>● Real-World Projects:</b> Put theory into action by completing
          practical projects that mirror real industry scenarios. Create web
          applications that showcase your React proficiency <br />. <b>● Career Enhancement:</b>
          Equip yourself with skills highly sought after by employers. Whether
          you're aiming for frontend development, UI/UX design, or full-stack
          roles, React is an invaluable asset. <br /> <b>● Lifetime Access:</b> Once enrolled,
          you'll have lifetime access to the course materials. Stay updated with
          React's evolving landscape, revisit concepts, and continue learning at
          your own pace. Join us on a journey to master React and elevate your
          frontend development abilities. <br />Whether you dream of building
          interactive web apps, progressive web applications, or contributing to
          open-source projects, our Mastering React Course is your stepping
          stone to success. <br />Enroll now to secure your spot and embark on a
          transformative path to becoming a skilled React developer.
        </p>
      </div>
      <p className="back-btn" onClick={handleClick}>
        Back to Courses
      </p>
    </div>
  );
};

export default Item6;
