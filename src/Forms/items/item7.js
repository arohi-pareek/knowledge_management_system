import React from "react";
import "./item.css";
import { useNavigate } from "react-router-dom";
import c7 from "../C7.jpg";

const Item7 = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/courses");
  }
  return (
    <div className="outer">
      <img className="courseImg1" src={c7} alt="" />
      <div className="inside">
        <p>
          <b className="cTop">PYTHON PROGRAMMING</b>
        </p>
        <p>Category: Programming</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>_________________________________________________________________________________________________________________________________________</p>
        <p>
          <b>Course Title: Python Programming Masterclass: From Basics to Advanced</b><br />
          Unlock the World of Python: Your Journey to Becoming a Proficient
          Python Developer! <br /> Are you excited to dive into the realm of Python
          programming and harness its incredible versatility? Our Python
          Programming Masterclass is designed to guide you through the complete
          spectrum of Python, from foundational concepts to advanced techniques.
          Whether you're a newcomer to coding or looking to expand your
          programming toolkit, this course offers a dynamic learning experience
          that empowers you to master Python's capabilities.<br /> <b>Course Highlights:</b><br />          
          <b>●All Skill Levels Welcome:</b> Whether you're a coding novice or have some
          programming experience, our course starts from the fundamentals and
          gradually takes you through more advanced Python concepts. <br /><b>● Practical
          Learning:</b> Immerse yourself in hands-on coding exercises, real-world
          projects, and interactive examples. Create functional programs and
          gain confidence in your Python skills. <br /><b>● Guidance from Experts:</b> Learn
          from experienced Python developers who share their insights, best
          practices, and industry tips. Gain the skills needed to write clean,
          efficient, and effective Python code. <br /><b>● Comprehensive Curriculum:</b> Cover
          a wide range of Python topics, including variables, loops, functions,
          object-oriented programming, data structures, and more. Develop a
          holistic understanding of Python's capabilities. <br /><b>● Interactive
          Challenges: </b>Reinforce your learning with coding challenges, quizzes,
          and assessments. Track your progress and refine your Python
          proficiency. <br /><b>● Real-World Projects:</b> Apply your skills to hands-on
          projects that mirror real industry demands. Create practical
          applications, scripts, and tools that showcase your Python prowess.
          <br /><b>●Career Enhancement:</b> Equip yourself with sought-after skills that have
          applications in web development, data analysis, automation, and more.
          Python is a versatile language that opens doors to various career
          paths. <br /><b>● Lifetime Access:</b> Once enrolled, you'll enjoy lifetime access to
          the course content. Stay updated with Python advancements, revisit
          concepts, and continue learning at your own pace. <br /> Whether you aspire
          to become a web developer, data scientist, or automation specialist,
          our Python Programming Masterclass provides the knowledge and tools to
          succeed. Join us and unlock the full potential of Python programming! <br />
          Enroll now to secure your spot and embark on a transformative journey
          toward becoming a skilled Python developer.
        </p>
      </div>
      <p className="back-btn" onClick={handleClick}>
        Back to Courses
      </p>
    </div>
  );
};

export default Item7;
