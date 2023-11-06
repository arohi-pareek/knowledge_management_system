import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik } from "formik";
import { Select, TextField, Switch } from "formik-material-ui";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons//Delete";
import { AddChapter, setSnackbar } from "../Redux/Actions/firstaction";
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

const AddChapterform = (props) => {
  const dispatch = useDispatch();
  const { CloseChapterform,courseid } = props;

  const empty = {
    title: "",
    description : ""
  };
  const callMessageOut = (msg, type) => {
    dispatch(setSnackbar(true, type, msg));
  };

  return (
    <Formik
      initialValues={{
        metadata: [empty],
      }}
      const
      validationSchema={Yup.object().shape({
        Arraymetadata: Yup.array().of(
          Yup.object().shape({
            title: Yup.string().required("Chapter Name is Required"),
            description: Yup.string().required("Description is Required"),
          })
        ),
       
      })}
      onSubmit={(values) => {
        console.log(values)
        let formData = {
          ...values,
        };
        dispatch(AddChapter(formData.metadata,courseid));
        CloseChapterform()
      }}
    >
      {({ values, handleChange}) => {
        return (
          <Form autoComplete="off">
            <DialogTitle
              style={{ cursor: "move" }}
              id="draggable-dialog-title"
              className="dialofAction"
            >
              <Tooltip title="CLOSE">
                <IconButton
                  onClick={() => CloseChapterform()}
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
              ADD CHAPTER
            </DialogTitle>
            <DialogContent dividers>
              <FieldArray name="metadata">
                {({ push, remove }) => (
                  <>
                    {values.metadata.map((_, index) => {
                      return (
                        <Grid
                          key={index}
                          container
                          spacing={2}
                          style={{ marginTop: ".5rem" }}
                        >
                          <Grid item xs={12}>
                            <Field
                              name={`metadata.${index}.title`}
                              component={TextField}
                              label="Chapter Name "
                              size="small"
                              style={{ width: "100%" }}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid item xs={10}>
                            <Field
                              name={`metadata.${index}.description`}
                              component={TextField}
                              label="Chapter Description "
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
                              justifyContent: "space-between",
                            }}
                          >
                            {values.metadata.length === 1 ? (
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

                            <IconButton
                              variant="contained"
                              color="primary"
                              onClick={() => push(empty)}
                            >
                              <AddIcon />
                            </IconButton>
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

export default AddChapterform;
