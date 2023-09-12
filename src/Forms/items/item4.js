import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c4 from "../C4.jpg";

const Item4 = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <div className="outer">
      <img className="courseImg1" src={c4} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">ADVANCED JAVA</b>
        </p>
        <p>Category: Programming</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
        <p>
          <b>
            Course Title: Advanced Java Programming: Mastering Beyond the Basics
          </b>
          <br /> Elevate Your Java Expertise: Unleash the Power of Advanced Java
          Programming! <br /> Are you ready to take your Java skills to the next
          level? Our Advanced Java Programming Course is designed to propel your
          expertise beyond the basics and into the realm of advanced Java
          concepts and applications. Whether you're an experienced Java
          programmer seeking to expand your horizons or a professional aiming to
          strengthen your skill set, this course empowers you with in-depth
          knowledge and practical insights. <br />
          <b>Course Highlights:</b> <br /> <b>● For Intermediate and Beyond:</b>
          Designed for learners with a solid foundation in Core Java, this
          course delves into complex Java concepts, libraries, and advanced
          techniques. <br /><b>● Practical Deep Dive:</b> Immerse yourself in hands-on coding
          exercises, projects, and real-world examples. Master advanced topics
          by applying theory to practical scenarios. <br /> <b>● Guidance from Experts:</b>
          Learn from industry veterans who bring years of experience to the
          virtual classroom. Gain insights into Java best practices, design
          patterns, and optimization techniques. <br /><b>● Advanced Java Topics:</b> Explore
          topics such as Java EE (Enterprise Edition), Servlets, JSP (JavaServer
          Pages), JDBC (Java Database Connectivity), Spring Framework, and more.
          <br /><b>●Interactive Learning:</b> Reinforce your understanding through
          interactive quizzes, coding challenges, and discussions. Engage with
          fellow learners to deepen your insights. <br /><b>● Real-World Projects:</b> Apply
          your knowledge to sophisticated projects that simulate real industry
          challenges. Create robust web applications and dynamic content using
          advanced Java technologies. <br /><b>● Career Enhancement:</b> Equip yourself with
          skills highly sought after by employers. Whether you're aiming for web
          development, enterprise applications, or server-side programming, this
          course sets you on the right track. <br /><b>● Lifetime Access:</b> Once enrolled,
          you gain lifetime access to the course content. Stay updated with
          advanced Java developments, revisit complex concepts, and continue
          your learning journey. <br />Elevate your coding prowess and open doors to
          exciting career opportunities with our Advanced Java Programming
          Course. Join us to unlock the full potential of advanced Java
          programming! <br />Enroll now to secure your spot and embark on a
          transformative journey towards becoming an expert Java programmer.
        </p>
      </div>
      <p className="back-btn" onClick={handleClick}>
        Back to Courses
      </p>
    </div>
  );
};

export default Item4;
