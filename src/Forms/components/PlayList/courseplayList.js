import React, { useState } from "react";
import {
  Grid,
  List,
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const playlistData = [
  {
    id: 1,
    title: "Introduction to React js ",
    duration: "5:30",
    description: "This is the first video.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
  },
  {
    id: 2,
    title: "How to Setup and Install ",
    duration: "7:15",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    videoUrl:
      "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
  },
  {
    id: 3,
    title: "Props in React js",
    duration: "5:30",
    description: "A brief description of the second video.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
  },
  {
    id: 4,
    title: "Angular vs React js",
    duration: "7:15",
    description: "A brief description of the second video.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
  },
  {
    id: 5,
    title: "How to connect React js with Node js",
    duration: "3:45",
    description: "A brief description of the second video.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
  },
  {
    id: 6,
    title: "Setstate method in react js",
    duration: "5:30",
    description: "A brief description of the second video.",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail:
      "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=",
  },
  // Add more videos to the playlist as needed
];

const CoursesPlaylist = () => {
  const [selectedVideo, setSelectedVideo] = useState(playlistData[0]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    console.log(video);
    setCurrentlyPlaying(video);
  };

  const selectedVideoInfo = playlistData.find(
    (video) => video === selectedVideo
  );

  console.log(selectedVideo?.videoUrl);

  return (
    <>
      <Grid container spacing={2} style={{ padding: "1rem" }}>
        <Grid item xs={8} style={{ paddingRight: "10px" }}>
          <div style={{ marginBottom: "10px", padding: "1rem" }}>
            <h2>VIDEOS</h2>
          </div>

          <div>
            <video
              key={selectedVideo.id}
              controls
              autoPlay
              type="video/mp4"
              style={{
                width: "100%",
                borderRadius: "2rem",
                padding: "1rem",
                height: "30rem",
              }}
            >
              <source src={selectedVideo?.videoUrl} />
            </video>
          </div>

          {selectedVideoInfo && (
            <div style={{ padding: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {selectedVideoInfo.title}
                </h2>
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  color: "#555",
                  marginBottom: "1rem",
                  backgroundColor: "lightgrey",
                  padding: "1rem",
                  overflow: "hidden",
                  position: "relative",
                  borderRadius: "5px",
                }}
              >
                {selectedVideoInfo.description}
              </div>

              {/* {selectedVideoInfo.description.length > 140 && (
                    <div style={{ fontSize: "0.8rem", color: "blue", cursor: "pointer", position: 'absolute', bottom: '0' }}>
                        More...
                    </div>
                )}
 */}
            </div>
          )}
        </Grid>

        <Grid item xs={4} style={{ paddingLeft: "10px" }}>
          <div style={{ marginBottom: "10px", padding: "1rem" }}>
            <h2>PLAYLIST</h2>
          </div>
          <List component="nav">
            {playlistData.map((video) => (
              <Card
                key={video.id}
                onClick={() => handleVideoClick(video)}
                variant={selectedVideo === video ? "outlined" : "elevation"}
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                  display: "flex",
                  backgroundColor:
                    currentlyPlaying === video ? "lightgrey" : "white",
                }}
              >
                {/* <CardContent style={{ width: '65%', padding: '1rem' }}>
                                <Typography variant="subtitle1" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                    {video.title}
                                </Typography>
                                
                                <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
                                    Duration: {video.duration}
                                </Typography>
                            </CardContent> */}

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Chapter {video.id}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="subtitle1"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {video.title}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}
                    >
                      Duration: {video.duration}
                    </Typography> */}
                  </AccordionDetails>
                </Accordion>
              </Card>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default CoursesPlaylist;
