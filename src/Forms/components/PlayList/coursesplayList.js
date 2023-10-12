import React, { useEffect, useState } from "react";
import {
  Grid,
  List,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Tabs,
  Tab,
  CircularProgress,
  Tooltip,
} from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./playlist.css";
import ImgTrophy from "../../../../src/Images/trophy.jpg";

const playlistData = [
  {
    chapter: "CHAPTER 1 : INTRODUCTION",
    videos: [
      {
        id: 1,
        title: "Introduction to React js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: true,
      },
      {
        id: 2,
        title: "How to Setup and Install",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl:
          "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: true,
      },
      {
        id: 3,
        title: "Props in React js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: true,
      },
      {
        id: 4,
        title: "Angular vs React js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: true,
      },
      {
        id: 5,
        title: "How to connect React js with Node js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: true,
      },
      {
        id: 6,
        title: "Setstate method in react js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: false,
      },
    ],
  },
  {
    chapter: "CHAPTER 2 : ANOTHER CHAPTER",
    videos: [
      {
        id: 7,
        title: "Setstate method in react js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
      },
      {
        id: 8,
        title: "Angular vs React js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
        watched: true,
      },
      {
        id: 9,
        title: "How to connect React js with Node js",
        duration: "5:30",
        description: "This is the first video.",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        thumbnail:
          "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
      },
    ],
  },
];

const tabs = ["Overview", "Q&A", "Notes", "Reviews", "Learning Tools"];

const calculateOverallProgress = () => {
  const totalVideos = playlistData.reduce(
    (total, chapter) => total + chapter.videos.length,
    0
  );
  const watchedVideos = playlistData.reduce((total, chapter) => {
    return total + chapter.videos.filter((video) => video.watched).length;
  }, 0);

  return (watchedVideos / totalVideos) * 100;
};

const overallProgress = calculateOverallProgress();

const CoursesPlaylist = () => {
  const [selectedVideo, setSelectedVideo] = useState(playlistData[0]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [isChapter1Finished, setIsChapter1Finished] = useState(false);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const updateVideoTime = (videoId, currentTime) => {
    localStorage.setItem(`video-${videoId}-time`, currentTime.toString());
  };

  const playVideo = (video, currentTime) => {
    const videoElement = document.getElementById("videoPlayer");
    videoElement.currentTime = currentTime;
    videoElement.addEventListener("timeupdate", () => {
      const currentTime = videoElement.currentTime;
      updateVideoTime(video.id, currentTime);
    });

    if (videoElement.readyState >= 2) {
      videoElement
        .play()
        .catch((error) => console.error("Error playing the video:", error));
    } else {
      videoElement.addEventListener("loadedmetadata", () => {
        videoElement
          .play()
          .catch((error) => console.error("Error playing the video:", error));
      });
    }
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    const storedTime = localStorage.getItem(`video-${video.id}-time`);
    const currentTime = storedTime ? parseFloat(storedTime) : 0;
    playVideo(video, currentTime);

    console.log(storedTime, currentTime);

    const isChapter1Finished = playlistData[0].videos.every((video) => {
      return console.log(video), video.watched;
    });
    setIsChapter1Finished(isChapter1Finished);
  };

  const selectedVideoInfo = playlistData.find(
    (video) => video === selectedVideo
  );

  const totalVideos = playlistData.reduce(
    (total, chapter) => total + chapter.videos.length,
    0
  );

  const TotalVid = `${Math.floor(
    (overallProgress / 100) * totalVideos
  )} VIDEOS OF ${totalVideos} VIDEOS COMPLETE`;

  return (
    <Grid
      container
      spacing={2}
      style={{
        padding: "1rem",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Grid item xs={9} style={{ paddingRight: "10px" }}>
        <div>
          <video
            key={selectedVideo.id}
            id={"videoPlayer"}
            controls
            autoPlay
            type="video/mp4"
            style={{
              background: "black",
              width: "100%",
              borderRadius: "1rem",
              height: "30rem",
            }}
            currentTime={localStorage.getItem(`video-${selectedVideo.id}-time`)}
          >
            <source src={selectedVideo?.videoUrl} />
          </video>
        </div>

        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab} />
          ))}
        </Tabs>

        {/* Content for each tab */}
        {selectedTab === 0 && (
          <div style={{ padding: "1rem" }}>
            <h2>About the Course</h2>
            <p>
              This course covers the fundamentals of React.js, including
              concepts like components, state, props, and more. You'll also
              learn how to set up and manage a React.js application, handle
              events, and work with forms.
            </p>
            <br></br>
            <h2>Target Audience</h2>

            <p>
              This course is designed for web developers who want to enhance
              their skills in building dynamic user interfaces using React.js.
              Familiarity with HTML, CSS, and JavaScript is recommended.
            </p>
          </div>
        )}
        {selectedTab === 1 && (
          <div style={{ padding: "1rem" }}>
            <h3>Q&A Content</h3>
            {/* Add content for the Q&A tab */}
          </div>
        )}
        {selectedTab === 2 && (
          <div style={{ padding: "1rem" }}>
            <h3>Notes Content</h3>
            {/* Add content for the Notes tab */}
          </div>
        )}
        {selectedTab === 3 && (
          <div style={{ padding: "1rem" }}>
            <h3>Reviews Content</h3>
            {/* Add content for the Reviews tab */}
          </div>
        )}
        {selectedTab === 4 && (
          <div style={{ padding: "1rem" }}>
            <h3>Learning Tools Content</h3>
            {/* Add content for the Learning Tools tab */}
          </div>
        )}
      </Grid>
      <Grid
        item
        xs={3}
        style={{
          padding: "1px",
          backgroundColor: "var(--form)",
          maxHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            padding: "1.1rem",
            border: "1px solid",
            position: "fixed",
            zIndex: 100,
            width: "22%",
            marginTop: "0.5rem",
            borderRadius: "0.5rem",
            backgroundColor: "white",
          }}
        >
          <h2 className="content1">Course content</h2>
          <div>
            <CircularProgress
              variant="determinate"
              value={overallProgress}
              style={{
                position: "absolute",
                top: "0.8rem",
                right: "3.5%",
                width: "2.5rem",
                height: "2.5rem",
              }}
            />
            <Tooltip title={TotalVid}>
              <img
                src={ImgTrophy}
                alt="Trophy"
                style={{
                  position: "absolute",
                  top: "2rem",
                  right: "0.3rem",
                  transform: "translate(-50%, -50%)",
                  width: "1.8rem",
                  height: "1.8rem",
                  borderRadius: "1rem",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          </div>
        </div>
        <div className="playlist-container">
          {playlistData.map((chapterData, index) => (
            <Accordion
              style={{
                backgroundColor: "var(--text)",
                width: "21.9rem",
                marginLeft: "-17px",
              }}
              className="accord"
              key={index}
              disabled={index !== 0 && !isChapter1Finished}
              defaultExpanded={index === 0}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}-a-content`}
                id={`panel${index + 1}-a-header`}
              >
                <Typography>
                  <b>{chapterData.chapter}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="List">
                  <ul className="custom-list">
                    {chapterData.videos.map((video, index) => (
                      <li
                        key={video.id}
                        onClick={() => handleVideoClick(video)}
                        className={`playlist-video ${
                          video === selectedVideo ? "playing" : ""
                        }`}
                      >
                        <div className="video-info">
                          <span className="number">{index + 1}</span>
                          <span className="video-title">{video.title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default CoursesPlaylist;
