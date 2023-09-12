import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c3 from "../C3.png";

const Item3 = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <div className="outer">
      <img className="courseImg1" src={c3} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">CORE JAVA</b>
        </p>
        <p>Category: Programming</p>
        <p>Rating: ⭐⭐⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
        <p>
          <b>Course Title: Core Java Mastery: From Fundamentals to Advanced
          Concepts</b> <br /> Unveil the Magic of Java Programming: Your Pathway to
          Mastering Core Java! <br /> Are you ready to embark on a transformative
          journey into the world of Java programming? Our Core Java Mastery
          Course is designed to empower you with a rock-solid foundation in Java
          programming, whether you're a complete beginner or a programmer
          looking to sharpen your skills. With a carefully curated curriculum
          and practical approach, this course equips you with the knowledge and
          hands-on experience to become a confident Java developer. <br /> <b>Course
          Highlights:</b> <br /> <b>● Suitable for All Levels:</b> Whether you're new to programming
          or experienced in other languages, our course starts with the basics
          and progresses to advanced Java concepts, ensuring accessibility for
          learners of all levels. <br /> <b>● Hands-On Learning:</b> Dive into coding exercises
          and real-world projects that translate theory into practice. Develop
          your coding skills and build a strong portfolio of Java applications.
        <br /> <b> ●Expert Guidance:</b> Learn from industry experts who bring years of
          practical experience to the table. Gain insights into best practices,
          coding strategies, and techniques used by professionals. <br /><b>● Comprehensive
          Curriculum:</b> From Java syntax and object-oriented programming to
          advanced topics like collections, multi-threading, and I/O, our course
          covers the full spectrum of Core Java essentials. <br /> <b>● Interactive
          Assessments:</b> Reinforce your understanding through quizzes,
          assessments, and coding challenges. Test your knowledge, identify
          areas for improvement, and track your progress. <br /><b>● Real-World Projects:</b>
          Apply your learning to hands-on projects that mimic real-world
          scenarios. Build confidence by solving practical coding challenges and
          creating functional Java applications. <br /><b>● Lifetime Access:</b> Once enrolled,
          you'll enjoy lifetime access to the course content. Stay updated with
          Java advancements, revisit concepts, and continue learning at your own
          pace. <br /> Whether you aspire to develop web applications, Android apps, or
          venture into software engineering, our Core Java Mastery Course
          provides the stepping stones to success. Join us and uncover the
          limitless possibilities of Java programming! <br />Enroll now to secure your
          spot and embark on a journey to becoming a proficient Java programmer.
        </p>
      </div>
      <p className="back-btn" onClick={handleClick}>
        Back to Courses
      </p>
    </div>
  );
};

export default Item3;
