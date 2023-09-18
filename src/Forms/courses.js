import "./courses.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import c1 from "./C1.jpg";
import c2 from "./C2.jpg";
import c3 from "./C3.png";
import c4 from "./C4.jpg";
import c5 from "./C5.png";
import c6 from "./C6.png";
import c7 from "./C7.jpg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const Courses = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // function handlesubscribe() {
  //   dispatch({
  //     type: "subscribe",
  //     payload: {
  //       title: props.title,
  //       desc: props.para,
  //       stars: props.stars,
  //       lecture: props.lecture,
  //     },
  //   });
  //   // navigate("/cart");
  // }

  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState({
    heading: "",
    subheading: "",
    desc: [],
  });

  function handleClick1() {
    navigate("/dashboard");
  }
  function handleClick2() {
    navigate("/courses");
  }
  function handleClick3() {
    navigate("/learning");
  }
  function handleClick4() {
    navigate("/courses/item1");
  }
  function handleClick5() {
    navigate("/courses/item2");
  }
  function handleClick6() {
    navigate("/courses/item3");
  }
  function handleClick7() {
    navigate("/courses/item4");
  }
  function handleClick8() {
    navigate("/courses/item5");
  }
  function handleClick9() {
    navigate("/courses/item6");
  }
  function handleClick10() {
    navigate("/courses/item7");
  }

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a
                  class="nav-item nav-link active"
                  href="#"
                  onClick={handleClick1}
                >
                  Dashboard
                </a>
                <a class="nav-item nav-link" href="#" onClick={handleClick2}>
                  Courses
                </a>
                <a class="nav-item nav-link " href="#" onClick={handleClick3}>
                  My Learning
                </a>
              </div>
            </div>
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div className="coursesTop">
          <div>
            <b className="left">COURSES</b>
          </div>
          <div className="rightt">
            Welcome to the Courses Section of our educational website! Here, we
            have carefully crafted a variety of courses to cater to your
            learning needs and interests. Our goal is to provide you with
            high-quality education that's engaging, interactive, and tailored to
            your pace. Whether you're a beginner looking to explore new subjects
            or an expert seeking to deepen your expertise, we have something for
            everyone. Let's embark on a journey of knowledge together!
          </div>
          {/* <img className="topimg" src={courseBack}  alt="" />    */}
        </div>

        <div className="courseBox">
          <p className="Cbox">
            <img
              className="courseImg"
              src={c1}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "JAVA PROGRAMMING",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to Java",
                      description:
                        "Java is a versatile, object-oriented programming language renowned for its portability and reliability. Developed by Sun Microsystems (now Oracle) in 1995, Java emphasizes write once, run anywhere through its bytecode execution on a Java Virtual Machine (JVM).",
                    },
                    {
                      title: "Variables and Data Types",
                      description:
                        "Declaring and initializing variables, Understanding primitive data types (int, double, char, boolean) and Working with strings",
                    },
                    {
                      title: "Methods",
                      description:
                        "Writing methods,Parameters and return values and Method overloading",
                    },
                    {
                      title: "Object-Oriented Programming (OOP)",
                      description:
                        "Introduction to OOP concepts (classes, objects, inheritance, encapsulation, polymorphism), Creating and using classes and objects and Constructors and instance variables",
                    },
                    {
                      title: "Arrays and Collections",
                      description:
                        "Arrays are essential data structures in Java that allow you to store and manage collections of elements of the same data type. They provide a way to work with multiple values under a single variable name.",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">Java Programming</b>
            </p>
            <p>Category: Programming</p>
            <p>Rating: ⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick4}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p>
          <p className="Cbox">
            <img
              className="courseImg"
              src={c2}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "C++ PROGRAMMING",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to C++",
                      description:
                        "Overview of C++ and its history and Differences between C and C++",
                    },
                    {
                      title: "Variables and Data Types:",
                      description:
                        "Declaring and initializing variables, Fundamental data types (int, float, double, char) and Working with strings",
                    },
                    {
                      title: "Functions",
                      description:
                        "Defining and calling functions, Parameters and return values and Function overloading",
                    },
                    {
                      title: "Object-Oriented Programming (OOP) Basics",
                      description:
                        "Classes and objects, Constructors and destructors and Member functions and data members",
                    },
                    {
                      title: "Arrays and Pointers",
                      description:
                        "Creating and accessing arrays and Introduction to pointers and memory management",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">C++ Programming</b>
            </p>
            <p>Category: Programming</p>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick5}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p>
          {/* <p className="Cbox">
            <img
              className="courseImg"
              src={c3}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "CORE JAVA",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to Programming",
                      description:
                        "Learn the basics of programming concepts and start your journey into the world of coding.",
                    },
                    {
                      title: "Web Development Fundamentals",
                      description:
                        "Explore the foundational technologies of web development, including HTML, CSS, and JavaScript.",
                    },
                    {
                      title: "Data Science Essentials",
                      description:
                        "Discover the essential techniques for analyzing and interpreting data to gain valuable insights.",
                    },
                    {
                      title: "Mobile App Development",
                      description:
                        "Build mobile applications for iOS and Android using popular frameworks like React Native.",
                    },
                    {
                      title: "Machine Learning and AI",
                      description:
                        "Dive into the field of machine learning and artificial intelligence to create intelligent systems.",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">Core Java</b>
            </p>
            <p>Category: Programming</p>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick6}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p> */}
          {/* <p className="Cbox">
            <img
              className="courseImg"
              src={c4}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "ADVANCED JAVA",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to Programming",
                      description:
                        "Learn the basics of programming concepts and start your journey into the world of coding.",
                    },
                    {
                      title: "Web Development Fundamentals",
                      description:
                        "Explore the foundational technologies of web development, including HTML, CSS, and JavaScript.",
                    },
                    {
                      title: "Data Science Essentials",
                      description:
                        "Discover the essential techniques for analyzing and interpreting data to gain valuable insights.",
                    },
                    {
                      title: "Mobile App Development",
                      description:
                        "Build mobile applications for iOS and Android using popular frameworks like React Native.",
                    },
                    {
                      title: "Machine Learning and AI",
                      description:
                        "Dive into the field of machine learning and artificial intelligence to create intelligent systems.",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">Advanced Java</b>
            </p>
            <p>Category: Programming</p>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick7}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p>*/}
        {/* </div> 
        <div className="courseBox"> */}
          <p className="Cbox">
            <img
              className="courseImg"
              src={c5}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "WEB DEVELOPMENT",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to Programming",
                      description:
                        "Learn the basics of programming concepts and start your journey into the world of coding.",
                    },
                    {
                      title: "Web Development Fundamentals",
                      description:
                        "Explore the foundational technologies of web development, including HTML, CSS, and JavaScript.",
                    },
                    {
                      title: "Data Science Essentials",
                      description:
                        "Discover the essential techniques for analyzing and interpreting data to gain valuable insights.",
                    },
                    {
                      title: "Mobile App Development",
                      description:
                        "Build mobile applications for iOS and Android using popular frameworks like React Native.",
                    },
                    {
                      title: "Machine Learning and AI",
                      description:
                        "Dive into the field of machine learning and artificial intelligence to create intelligent systems.",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">Web Development</b>
            </p>
            <p>Category: Development</p>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick8}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p>
          <p className="Cbox">
            <img
              className="courseImg"
              src={c6}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "REACT JS",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to Programming",
                      description:
                        "Learn the basics of programming concepts and start your journey into the world of coding.",
                    },
                    {
                      title: "Web Development Fundamentals",
                      description:
                        "Explore the foundational technologies of web development, including HTML, CSS, and JavaScript.",
                    },
                    {
                      title: "Data Science Essentials",
                      description:
                        "Discover the essential techniques for analyzing and interpreting data to gain valuable insights.",
                    },
                    {
                      title: "Mobile App Development",
                      description:
                        "Build mobile applications for iOS and Android using popular frameworks like React Native.",
                    },
                    {
                      title: "Machine Learning and AI",
                      description:
                        "Dive into the field of machine learning and artificial intelligence to create intelligent systems.",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">ReactJS</b>
            </p>
            <p>Category: Development</p>
            <p>Rating: ⭐⭐⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick9}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p>
          <p className="Cbox">
            <img
              className="courseImg"
              src={c7}
              alt=""
              onClick={() => {
                setOpen(true);
                setCourse({
                  heading: "PYTHON PROGRAMMING",
                  subheading: "TOPICS TO BE COVERD:",
                  desc: [
                    {
                      title: "Introduction to Programming",
                      description:
                        "Learn the basics of programming concepts and start your journey into the world of coding.",
                    },
                    {
                      title: "Web Development Fundamentals",
                      description:
                        "Explore the foundational technologies of web development, including HTML, CSS, and JavaScript.",
                    },
                    {
                      title: "Data Science Essentials",
                      description:
                        "Discover the essential techniques for analyzing and interpreting data to gain valuable insights.",
                    },
                    {
                      title: "Mobile App Development",
                      description:
                        "Build mobile applications for iOS and Android using popular frameworks like React Native.",
                    },
                    {
                      title: "Machine Learning and AI",
                      description:
                        "Dive into the field of machine learning and artificial intelligence to create intelligent systems.",
                    },
                  ],
                });
              }}
            />
            <p>
              <b className="cTop">Python Programming</b>
            </p>
            <p>Category: Programming</p>
            <p>Rating: ⭐⭐⭐⭐</p>
            <p>
              Course Description:{" "}
              <button onClick={handleClick10}>Explore</button>
            </p>
            <div>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </p>
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <h1>{course.heading}</h1>
          <h5>
            <ul>{course.subheading}</ul>
          </h5>
        </DialogTitle>
        <DialogContent className="backdropbox">
          {course.desc.map((item, i) => {
            return (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="dropbox" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Courses;
