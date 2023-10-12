import React, { useState } from "react";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik } from "formik";
import { Select, TextField, Switch } from "formik-material-ui";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons//Delete";
import { AddCourse } from "../Redux/Actions/firstaction";
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

const AddChapter = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [fileName, SetFileName] = useState("");
  const { CloseChapterform } = props;
  let reset;
  const empty = {
    CourseTitle: "",
    CourseDesc: "",
    upload: "",
  };

  const attributeType = [
    { title: "String" },
    { title: "Int" },
    { title: "Date" },
  ];

  const fileChange = (e, index) => {
    let file = e.target.files[0];
    // formik.setFieldValue(`contact[${index}].files`, file);
    // Update the file name in the state
    const updatedFileNames = [...fileName];
    updatedFileNames[index] = file ? file.name : "";
    SetFileName(updatedFileNames);
    console.log(updatedFileNames);
  };

  return (
    <Formik
      initialValues={{
        Chapter: "",
        metadata: [empty],
      }}
      const
      validationSchema={Yup.object().shape({
        CourseTitle: Yup.string().required("Course ID is required"),
        CourseDesc: Yup.string()
          .notRequired() // Makes the field not required
          .max(100, "Course Description must not exceed 100 characters"),
        upload: Yup.mixed()
          .required("A file is required")
          .test("fileFormat", "VIDEO only", (value) => {
            return (
              value && ["video/mp4", "video/quicktime"].includes(value.type)
            );
          }),
      })}
      onSubmit={(values) => {
        let formData = {
          ...values,
          registeredUsers: ["1400"],
          uploadedBy: "1400",
        };
        dispatch(AddCourse(formData));
      }}
    >
      {({ values, handleReset, handleChange, errors }) => {
        reset = handleReset;
        console.log("sdsdfew", errors);

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
                  <React.Fragment>
                    {values.metadata.map((_, index) => {
                      let type = _.attributeType;
                      setSelected(type);
                      console.log("erf", selected);
                      return (
                        <Grid
                          key={index}
                          container
                          spacing={2}
                          style={{ marginTop: ".5rem" }}
                        >
                          <Grid item xs={10}>
                            <Field
                              name={`metadata.${index}.CourseTitle`}
                              component={TextField}
                              label="Chapter Name "
                              size="small"
                              style={{width:"100%"}}
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
                  </React.Fragment>
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

export default AddChapter;
