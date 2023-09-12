import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c2 from "../C2.jpg";

const Item2 = () => { 
    const navigate = useNavigate();

    function handleClick() {
      navigate("/courses");
    }
  return (
    <div className="outer">
      <img className="courseImg1" src={c2} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">C++</b>
        </p>
        <p>Category: Programming</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
        <p>
          <b>Course Title: Comprehensive C++ Programming <br /></b> Course Unleash Your Coding
          Potential with C++: Master the Art of Software Development! <br /> Are you
          ready to dive into the world of C++ programming and elevate your
          coding skills? Our Comprehensive C++ Programming Course is your ticket
          to mastering one of the most powerful and versatile programming
          languages. Whether you're a newcomer to coding or an experienced
          programmer looking to expand your skill set, this course is designed
          to empower you with the knowledge and hands-on experience needed to
          excel. <br /> <b>Course Highlights: <br /></b>● Beginner-Friendly Approach: No prior
          programming knowledge? No problem! Our course starts with the
          fundamentals and gradually guides you through more advanced concepts,
          ensuring a smooth learning curve for all levels. <br /> <b>● Practical Learning:</b>
          Theory comes alive with practical coding exercises and challenges.
          Build real-world projects, reinforce your understanding, and gain
          confidence in your C++ proficiency. <br /> <b>● Expert Guidance:</b> Learn from
          seasoned instructors with extensive industry experience. Benefit from
          their insights, coding strategies, and best practices to write
          efficient, readable, and industry-standard C++ code. <br /><b>● Comprehensive
          Curriculum:</b> From the basics of variables and loops to advanced topics
          like object-oriented programming, memory management, and STL, our
          course covers the full spectrum of C++ essentials.  <br /><b>● Interactive
          Quizzes:</b> Test your knowledge and reinforce your learning with
          interactive quizzes after each module. Identify areas for improvement
          and solidify your grasp of C++ concepts. <br /> <b>● Hands-On Projects:</b> Put theory
          into practice by completing a real-world project that showcases your
          newly acquired C++ skills. Gain the confidence to tackle coding
          challenges independently. <br /> <b>● Lifetime Access:</b> Once you're enrolled,
          you'll have lifetime access to the course materials. Stay up-to-date
          with C++ advancements, revisit concepts, and continue your learning
          journey at your own pace. <br /> Whether your ambition is to develop software
          applications, create games, or dive into systems programming, our
          Comprehensive C++ Programming Course equips you with the tools to
          succeed. Join us and unlock the full potential of C++ programming! <br />
          Enroll now to secure your spot and embark on a transformative journey
          towards becoming a proficient C++ programmer.
        </p>
      </div>
      <p className="back-btn" onClick={handleClick}>Back to Courses</p>
    </div>
  );
};

export default Item2;
