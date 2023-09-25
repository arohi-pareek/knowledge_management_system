import React, { useState } from 'react';
import { Grid, List, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./playlist.css"
// const playlistData = [
//     { id: 1, title: 'Introduction to React js ', duration: '5:30', description: 'This is the first video.', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=" },
//     { id: 2, title: 'How to Setup and Install ', duration: '7:15', description: 'A brief description of the second video.', videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4", thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=" },
//     { id: 3, title: 'Props in React js', duration: '5:30', description: 'A brief description of the second video.', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=" },
//     { id: 4, title: 'Angular vs React js', duration: '7:15', description: 'A brief description of the second video.', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=" },
//     { id: 5, title: 'How to connect React js with Node js', duration: '3:45', description: 'A brief description of the second video.', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=" },
//     { id: 6, title: 'Setstate method in react js', duration: '5:30', description: 'A brief description of the second video.', videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk=" },
//     // Add more videos to the playlist as needed
// ];

const playlistData = [
    {
        chapter: "CHAPTER 1 : INTRODUCTION",
        videos: [
            {
                id: 1,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            },
            {
                id: 2,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            },
            {
                id: 2,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            }, {
                id: 2,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            }, {
                id: 2,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            }, {
                id: 2,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            }, {
                id: 2,
                title: 'Introduction to React js',
                duration: '5:30',
                description: 'This is the first video.',
                videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
                thumbnail: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
            },
            // Add more videos for this chapter as needed
        ]
    },
    {
        chapter: "CHAPTER 2 : ANOTHER CHAPTER",
        videos: [
            // Add videos for another chapter as needed
        ]
    },
    // Add more chapters and videos as needed
];

const CoursesPlaylist = () => {
    const [selectedVideo, setSelectedVideo] = useState(playlistData[0]);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        console.log(video)
    };

    const selectedVideoInfo = playlistData.find((video) => video === selectedVideo);

    console.log(selectedVideo?.videoUrl)

    return (
        <Grid container spacing={2} style={{ padding: "1rem" }}>
            <Grid item xs={9} style={{ paddingRight: '10px' }}>
                {/* <div style={{ marginBottom: '10px', padding: "1rem" }}>
                    <h2>VIDEOS</h2>
                </div> */}

                {/* <div style={{ width: '100%', height: '25rem', border: '1px solid #ccc', borderRadius: "8px", padding: "1rem" }}>
                    {selectedVideo ? `Playing Video ${selectedVideo}` : 'Select a video from the playlist'}
                </div> */}

                {/* {selectedVideo && ( */}
                <div>
                    <video key={selectedVideo.id} controls autoPlay type="video/mp4" style={{ background:"black", width: '100%', borderRadius: "1rem", height: "30rem" }}>
                        <source src={selectedVideo?.videoUrl} />
                    </video>
                </div>
                {/* )} */}

                {/* {selectedVideoInfo && ( */}
                <div style={{ padding: "1rem" }}>
                    <div style={{ marginBottom: "1rem" }}>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{"react"}</h2>
                    </div>
                    <div style={{ fontSize: "1.2rem", color: "#555", marginBottom: "1rem" }}>
                        {"intro"}
                    </div>
                </div>
                {/* )} */}
            </Grid>
            <Grid item xs={3} style={{ paddingLeft: '10px' }}>
                <div style={{ marginBottom: '10px', padding: "1rem" }}>
                    <h2>Course content</h2>
                </div>
                {/* <List component="nav">
                    {playlistData.map((video) => (

                        <Card
                            key={video.id}
                            onClick={() => handleVideoClick(video)}
                            variant={selectedVideo === video ? 'outlined' : 'elevation'}
                            style={{ marginBottom: '10px', cursor: 'pointer', display: 'flex' }}
                        >
                            <CardMedia
                                component="img"
                                alt="Video Thumbnail"
                                style={{ width: '35%', height: "5rem" }}  // Adjust width to 50%
                                image={video.thumbnail}
                            />
        

                            <CardContent style={{ width: '65%', maxHeight: '5rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        <Typography variant="subtitle1" style={{ marginBottom: '0.5rem' }}>
                                            {video.title}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="body2" color="textSecondary">
                                            Duration: {video.duration}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>

                        </Card>
                    ))}
                </List> */}

                {playlistData.map((chapterData, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index + 1}-a-content`} id={`panel${index + 1}-a-header`}>
                            <Typography><b>{chapterData.chapter}</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul className="custom-list">
                                    {chapterData.videos.map((video, index) => (
                                        <div key={video.id} onClick={() => handleVideoClick(video)}>
                                            <span className="number">{index + 1}</span>
                                            <span className="video-title">{video.title}</span>
                                        </div>
                                    ))}
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}

            </Grid>
        </Grid>
    );
};

export default CoursesPlaylist;

// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function BasicAccordion() {
//   return (
//     <div>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>Accordion 1</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2a-content"
//           id="panel2a-header"
//         >
//           <Typography>Accordion 2</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
//             malesuada lacus ex, sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion disabled>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3a-content"
//           id="panel3a-header"
//         >
//           <Typography>Disabled Accordion</Typography>
//         </AccordionSummary>
//       </Accordion>
//     </div>
//   );
// }

