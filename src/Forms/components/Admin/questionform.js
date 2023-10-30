import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik } from "formik";
import { Select, TextField, Switch } from "formik-material-ui";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons//Delete";
import { AddQuiz, setSnackbar } from "../Redux/Actions/firstaction";
import { useDispatch } from "react-redux";
import { Done } from "@material-ui/icons";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Button,
  Grid,
  makeStyles,
  IconButton,
  DialogActions,
  DialogContent,
  MenuItem,
  Tooltip,
  DialogTitle,
} from "@material-ui/core";

const Questionform = (props) => {
  const dispatch = useDispatch();
  const { CloseQuestionform, courseid } = props;
  const [ correctAns , setCorrectAnswer] = useState("tt")

  const empty = {
    question: "",
    choices:[],
    correctAnswer : "",
    id: courseid,
  };
  const callMessageOut = (msg, type) => {
    dispatch(setSnackbar(true, type, msg));
  };

  return (
    <Formik
      initialValues={{
        questions: [empty],
      }}
      const
      validationSchema={Yup.object().shape({
        questions: Yup.array().of(
          Yup.object().shape({
            question: Yup.string().required("Question Name is Required"),
          })
        ),
      })}
      onSubmit={(values) => {
        console.log(values);
        const mapped = values.questions.map((item ,index)=>{
          return (item.choices[0]);
          
        })
        let formData = {
          ...values,
          // correctAnswer:mapped,
        };
        dispatch(AddQuiz(formData));
        CloseQuestionform();
      }}
    >
      {({ values, handleChange }) => {
        return (
          <Form autoComplete="off">
            <DialogTitle
              style={{ cursor: "move" }}
              id="draggable-dialog-title"
              className="dialofAction"
            >
              <Tooltip title="CLOSE">
                <IconButton
                  onClick={() => CloseQuestionform()}
                  aria-label="close"
                  style={{
                    position: "absolute",
                    right: "8px",
                    top: "8px",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
              ADD QUIZ
            </DialogTitle>
            <DialogContent dividers>
              <FieldArray name="questions">
                {({ push, remove }) => (
                  <>
                    {values.questions.map((_, index) => {
                      return (
                        <Grid
                          key={index}
                          container
                          spacing={2}
                          style={{ marginTop: ".5rem" }}
                        >
                          <Grid item xs={12}>
                            <Field
                              name={`questions.${index}.question`}
                              component={TextField}
                              label={`Question ${index + 1}`}
                              size="small"
                              style={{ width: "100%" }}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              name={`questions.${index}.choices[0]`}
                              component={TextField}
                              label="Option1 (Correct option)"
                              size="small"
                              style={{ width: "100%" }}
                              onChange={(e) => {
                                handleChange(e);
                                setCorrectAnswer(e.target.defaultValue); // Update correctAnswer if needed
                              }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              name={`questions.${index}.choices[1]`}
                              component={TextField}
                              label="Option2"
                              size="small"
                              style={{ width: "100%" }}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              name={`questions.${index}.choices[2]`}
                              component={TextField}
                              label="Option3"
                              size="small"
                              style={{ width: "100%" }}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              name={`questions.${index}.choices[3]`}
                              component={TextField}
                              label="Option4"
                              size="small"
                              style={{ width: "100%" }}
                              onChange={handleChange}
                            />
                          </Grid>

                          <Grid
                            item
                            xs={2}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "flex-start",
                            }}
                          ><Tooltip title="DELETE CHAPTER">
                            {values.questions.length === 1 ? (
                              <IconButton aria-label="delete" disabled>
                                <DeleteIcon />
                              </IconButton>
                            ) : (
                              <IconButton
                                color="primary"
                                onClick={() => remove(index)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            )}
                            </Tooltip>
                            <Tooltip title="ADD CHAPTER">
                              <IconButton
                                variant="contained"
                                color="primary"
                                onClick={() => push(empty)}
                              >
                                <AddIcon />
                              </IconButton>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </>
                )}
              </FieldArray>
            </DialogContent>
            <DialogActions>
              <Button
                className="submitBtn"
                type="submit"
                endIcon={<Done />}
                variant="contained"
                color="primary"
              >
                SAVE
              </Button>
            </DialogActions>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Questionform;
