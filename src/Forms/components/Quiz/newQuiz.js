import { Button, Dialog, Paper, Tooltip, Typography } from "@material-ui/core";
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

const NewQuiz = () => {
  const [userAnswers, setUserAnswers] = useState(
    new Array(quizData.length).fill("")
  );
  const [score, setScore] = useState(0);
  const [instruction, setInstruction] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuizSubmission = () => {
    let totalScore = 0;
    for (let i = 0; i < quizData.length; i++) {
      if (userAnswers[i] === quizData[i].correctAnswer) {
        totalScore += quizData[i].weightage;
      }
    }
    setScore(totalScore);
    console.log(score);
  };

  const handleAnswerSelection = (selectedChoice) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = selectedChoice;
    setUserAnswers(newAnswers);
    // Update the name attribute for the radio buttons with the currentQuestion index
    const radioButtons = document.getElementsByName(
      `question${currentQuestion}`
    );
    radioButtons.forEach((radio) => {
      radio.name = `question${currentQuestion}`;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const CloseIntstruction = () => {
    setInstruction(false);
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", margin: "0.5rem" }}>
        {/* <Typography variant="h5" gutterBottom>
           Quiz
        </Typography> */}
        <Tooltip title="INSTRUCTIONS">
          <div
            style={{ marginLeft: "auto", cursor: "pointer" }}
            onClick={() => {
              setInstruction(true);
            }}
          >
            <HelpIcon />
          </div>
        </Tooltip>
      </div>
      <Paper
        style={{
          padding: "1rem",
          margin: "2rem",
          height: "auto",
          marginTop: 0,
        }}
      >
        {currentQuestion < quizData.length ? (
          <div>
            <Typography variant="h5" gutterBottom>
              Question {currentQuestion + 1}
            </Typography>
            <div>
              <Typography style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
                <b>{quizData[currentQuestion].question}</b>
              </Typography>
              {quizData[currentQuestion].choices.map((choice, choiceIndex) => (
                <div key={choiceIndex} className="newquiz-option">
                  <input
                    type="radio"
                    id={`choice${choiceIndex}`}
                    name={`question${currentQuestion}`}
                    value={choice}
                    onChange={() => handleAnswerSelection(choice)}
                    required
                  />
                  <label htmlFor={`choice${choiceIndex}`}>{choice}</label>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <Typography variant="h5" gutterBottom>
              Quiz Complete
            </Typography>
            <Typography>
              Your Score: {score} out of {quizData.length}
            </Typography>
          </div>
        )}
      </Paper>
      <div
        style={{
          marginTop: "1rem",
          marginRight: "2rem",
          display: "flex",
          justifyContent: "end",
          gap: "1rem",
        }}
      >
        {currentQuestion > 0 && (
          <Button
            color="primary"
            variant="outlined"
            onClick={handlePreviousQuestion}
          >
            Previous
          </Button>
        )}
        {currentQuestion < quizData.length - 1 && (
          <Button
            color="primary"
            variant="outlined"
            onClick={handleNextQuestion}
          >
            Next
          </Button>
        )}
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
    </>
  );
};

export default NewQuiz;
