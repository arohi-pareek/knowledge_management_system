import { Button, Dialog, Paper, Tooltip, Typography } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import "../Quiz/quiz.css";
import quizData from "../../../../src/question.json";
import HelpIcon from "@mui/icons-material/Help";
import Draggable from "react-draggable";
import Intruction from "./intruction";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState(
    new Array(quizData.length).fill("")
  );
  const [score, setScore] = useState(0);
  const [instruction, setInstruction] = useState(true);

  console.log(score, "score");

  const handleQuizSubmission = () => {
    let totalScore = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (userAnswers[i] === quizData[i].correctAnswer) {
        totalScore += quizData[i].weightage;
      }
    }
    setScore(totalScore);
  };

  const handleAnswerSelection = (questionIndex, selectedChoice) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedChoice;
    setUserAnswers(newAnswers);
  };

  const CloseIntstruction = () => {
    setInstruction(false);
  };

  return (
    <div style={{ padding: "1rem", margin: "1rem" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" gutterBottom>
          Start your Quiz
        </Typography>
        <Tooltip title="INSTRUCTIONS">
          <div style={{ marginLeft: "auto", cursor: "pointer" }} onClick={()=>{setInstruction(true)}}>
            <HelpIcon />
          </div>
        </Tooltip>
      </div>
      <div>
        {quizData.map((question, index) => (
          <Accordion
            key={index}
            style={{
              backgroundColor: "var(--text)",
              width: "100%",
            }}
            className="accord"
            defaultExpanded
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <b>{`${index + 1}. ${question.question}`}</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="List">
                {question.choices.map((choice, choiceIndex) => (
                  <div key={choiceIndex} className="quiz-option">
                    <input
                      type="radio"
                      id={`choice${index}_${choiceIndex}`}
                      name={`question${index}`}
                      value={choice}
                      onChange={() => handleAnswerSelection(index, choice)}
                      required
                    />
                    <label htmlFor={`choice${index}_${choiceIndex}`}>
                      {choice}
                    </label>
                  </div>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <Button
          color="primary"
          variant="outlined"
          onClick={handleQuizSubmission}
          disabled={userAnswers.some((answer) => answer === "")}
        >
          Submit Quiz
        </Button>
      </div>
      <Dialog
        id="instructionForm"
        open={instruction}
        aria-labelledby="draggable-dialog-title"
        PaperComponent={PaperComponent}
      >
        <Intruction CloseIntstruction={CloseIntstruction}
        />
      </Dialog>
    </div>
  );
};

export default Quiz;
