import { Button, Typography } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import "../Quiz/quiz.css";
import quizData from "../../../../src/question.json"

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState(
    new Array(quizData.length).fill("")
  );
  const [score, setScore] = useState(0);

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

  return (
    <div style={{ padding: "1rem", margin: "2rem" }}>
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
                <b>{question.question}</b>
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
    </div>
  );
};

export default Quiz;
