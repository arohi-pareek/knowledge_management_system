import React,{useEffect} from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c1 from "../C1.jpg";

const Item1 = () => {
    const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <div className="outer">
      <img className="courseImg1" src={c1} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">JAVA PROGRAMMING</b>
        </p>
        <p>Category: Programming</p>
        <p>Rating: ⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
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
      </div>
      <p className="back-btn" onClick={handleClick}>Back to Courses</p>
    </div>
  );
};

export default Item1;
