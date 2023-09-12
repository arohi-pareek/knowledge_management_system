import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c5 from "../C5.png";

const Item5 = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <div className="outer">
      <img className="courseImg1" src={c5} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">WEB DEVELOPMENT</b>
        </p>
        <p>Category: Programming</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
        <p>
          <b>Course Title: Comprehensive Web Development Bootcamp Launch Your Web
          Development Journey:</b> <br /> Master the Art of Building Dynamic Websites! <br />Are
          you ready to dive into the world of web development and create
          stunning, interactive websites from scratch? Our Comprehensive Web
          Development Bootcamp is designed to equip you with the skills and
          knowledge needed to become a confident web developer. Whether you're a
          complete beginner or looking to enhance your coding abilities, this
          course offers a hands-on learning experience that empowers you to
          bring your web development ideas to life. <br /><b>Course Highlights:</b><br /><b>● Suitable
          for All Levels:</b> Whether you're a coding newbie or have some
          programming experience, our course starts with the basics and
          progressively guides you through the intricacies of web development. <br />
          <b>●Practical Learning:</b> Dive into real-world coding projects and exercises
          that mirror industry scenarios. Develop a strong portfolio of
          responsive and feature-rich websites. <br /><b>● Expert Guidance:</b> Learn from
          experienced web developers who share practical insights, best
          practices, and techniques that are highly relevant in today's
          fast-paced tech landscape. <br /><b>● Comprehensive Curriculum: </b>Cover the full
          spectrum of web development essentials, including HTML, CSS,
          JavaScript, front-end and back-end frameworks, databases, and
          deployment. <br /><b>● Interactive Quizzes and Challenges:</b> Reinforce your
          learning with interactive quizzes, coding challenges, and assessments.
          Monitor your progress and identify areas for improvement. <br /><b>● Real-World
          Projects:</b> Apply your skills to hands-on projects that mimic real
          client demands. Develop a range of websites, from static portfolios to
          dynamic e-commerce platforms. <br /><b>● Career-Ready Skills:</b> Acquire the
          technical and problem-solving skills needed to pursue a career in web
          development. Master key technologies and tools that employers value.
          <br /><b>●Lifetime Access:</b> Enroll once and enjoy lifetime access to the course
          content. Keep up with evolving web technologies, revisit concepts, and
          continue learning at your own pace. <br /> Whether you're aiming to become a
          front-end developer, back-end engineer, or a full-stack wizard, our
          Comprehensive Web Development Bootcamp provides the foundation you
          need to thrive in the dynamic world of web development. <br />Enroll now to
          secure your spot and embark on an exciting journey toward becoming a
          skilled web developer.
        </p>
      </div>
      <p className="back-btn" onClick={handleClick}>
        Back to Courses
      </p>
    </div>
  );
};

export default Item5;
