import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; //mui icons
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const card = () => {
  return (
    <div className="thought">
      <p className="learn">How learners like you are achieving their goals</p>
      <ArrowBackIosNewIcon className="arrow3" style={{ fontsize: 10 }} />
      <ArrowForwardIosIcon className="arrow4" style={{ fontsize: 30 }} />
      <Box width="300px" className="box">
        <card className="card-box">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              🙶
            </Typography>
            <Typography variant="body2" color="text-secondary">
              I am proud to say that after a few months of taking this course...
              I passed my exam and am now an AWS Certified Cloud Practitioner!
              This content was exactly what the CCP exam covered.
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              <br></br>
              Will A
            </Typography>
            <hr></hr>
          </CardContent>
        </card>
      </Box>
      <Box width="300px" className="box1">
        <card className="card-box">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              🙶
            </Typography>
            <Typography variant="body2" color="text-secondary">
              This course helped me freshen up on my product manager skills and
              land a job at Facebook! Thanks guys :)
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              <br></br>
              Ron F
            </Typography>
            <hr></hr>
          </CardContent>
        </card>
      </Box>
      <Box width="300px" className="box2">
        <card className="card-box">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              🙶
            </Typography>
            <Typography variant="body2" color="text-secondary">
              One of the best courses on management and leadership I have come
              across so far. The advice is practical, and examples highly
              relatable. Would help anyone become a better manager.
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              <br></br>
              Phillip W
            </Typography>
            <hr></hr>
          </CardContent>
        </card>
      </Box>
      <Box width="300px" className="box3">
        <card className="card-box">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              🙶
            </Typography>
            <Typography variant="body2" color="text-secondary">
              I highly recommend this course for all budding data scientists.
              Even people with no prior knowledge of any visualization tools can
              become a master after completing this course.
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              <br></br>
              Surya M
            </Typography>
            <hr></hr>
          </CardContent>
        </card>
      </Box>
    </div>
  );
};
export default card;
