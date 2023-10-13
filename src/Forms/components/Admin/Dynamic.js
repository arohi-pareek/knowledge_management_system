import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik } from "formik";
import { Select, TextField, Switch } from "formik-material-ui";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons//Delete";
import { AddCourse, GetChapter,UploadPlayList } from "../Redux/Actions/firstaction";
import { useDispatch, useSelector } from "react-redux";
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

const Dynamic = (props) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [fileName, SetFileName] = useState("");
  const [uploadedfile, setUploadedFile] = useState("");
  const [chapters, setChapters] = useState([]);
  const { CloseUploadform, courseid } = props;

  const empty = {
    CourseTitle: "",
    CourseDesc: "",
    upload: "",
  };

  const videoRef = useRef(null);

  const fileChange = (e, index) => {
    let file = e.target.files[0];
    // formik.setFieldValue(`contact[${index}].files`, file);
    // Update the file name in the state
    const updatedFileNames = [...fileName];
    updatedFileNames[index] = file ? file.name : "";
    SetFileName(updatedFileNames);
    setUploadedFile(file)
    console.log(updatedFileNames);
    const video = videoRef.current;
    video.src = URL.createObjectURL(file);
  };

  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = Math.floor(durationInSeconds % 60);

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  const handleVideoMetadata = () => {
    // Access the video's duration
    const video = videoRef.current;
    const durationInSeconds = video.duration;
    const formattedDuration = formatDuration(durationInSeconds);
    console.log("Video duration:", formattedDuration);
  };

  const chapterData = useSelector((state) => state.ChapterDetails.ChapterData);
  console.log(chapterData, "chapterData");

  useEffect(() => {
    dispatch(GetChapter(courseid))
  }, [courseid, dispatch]);

  return (
    <Formik
      initialValues={{
        Chapter: "",
        metadata: [empty],
      }}
      const
      validationSchema={Yup.object().shape({
        // CourseTitle: Yup.string().required("Course ID is required"),
        // CourseDesc: Yup.string()
        //   .notRequired() // Makes the field not required
        //   .max(100, "Course Description must not exceed 100 characters"),
        // upload: Yup.mixed()
        //   .required("A file is required")
        //   .test("fileFormat", "VIDEO only", (value) => {
        //     return (
        //       value && ["video/mp4", "video/quicktime"].includes(value.type)
        //     );
        //   }),
      })}
      onSubmit={(values) => {
        let formData = {
          // ...values,
          file: uploadedfile,
        };
        dispatch(UploadPlayList(formData,"","","","",""));
        CloseUploadform()
      }}
    >
      {({ values, handleChange, errors }) => {
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
                  onClick={() => CloseUploadform()}
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
              UPLOAD PLAYLIST
            </DialogTitle>
            <DialogContent dividers>
              <Field
                name="Chapter"
                component={TextField}
                label="CHAPTER NAME "
                fullWidth
                size="small"
              />

              {/* <Field
                name={"Chapter"}
                component={Select}
                // label="CHAPTER NAME"
                style={{
                  width: "35rem",
                }}
                size="small"
                onChange={handleChange}
                value={""}
              >
                <MenuItem value="" disabled>
                  <p>Select Chapter</p>
                </MenuItem>
                {chapterData && chapterData[0]?.map((chapter) => (
                  <MenuItem key={chapter.id} value={chapter}>
                    {chapter.id}
                  </MenuItem>
                ))}
              </Field> */}

              <FieldArray name="metadata">
                {({ push, remove }) => (
                  <>
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
                          <Grid item xs={3}>
                            <Field
                              name={`metadata.${index}.CourseTitle`}
                              component={TextField}
                              label="Video Title"
                              size="small"
                              onChange={handleChange}
                            />
                          </Grid>

                          <Grid item xs={4}>
                            <Field
                              name={`metadata.${index}.CourseDesc`}
                              component={TextField}
                              label="Video Description"
                              size="small"
                              onChange={handleChange}
                            />
                          </Grid>

                          <Grid item xs={2}>
                            <Field
                              name={`metadata.${index}.video`}
                              component={TextField}
                              placeholder="upload"
                              size="small"
                              value={fileName[index] && fileName[index]}
                              InputProps={{ readOnly: true }}
                              onChange={handleChange}
                            />
                          </Grid>
                          <Grid
                            item
                            xs={3}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <IconButton
                              style={{
                                height: "1rem",
                                width: "1rem",
                                backgroundColor: "rgb(5 100 200)",
                              }}
                            >
                              <label className="input_style">
                                <UploadIcon
                                  style={{
                                    fontSize: "19",
                                    color: "#fff",
                                  }}
                                />
                                <input
                                  name={`metadata.${index}.upload`}
                                  component={TextField}
                                  label="Upload"
                                  size="small"
                                  type="file"
                                  accept="video/*"
                                  onChange={(e) => fileChange(e, index)}
                                />

                                <video
                                  ref={videoRef}
                                  onLoadedMetadata={handleVideoMetadata}
                                  style={{ display: "none" }}
                                />
                              </label>
                            </IconButton>
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

export default Dynamic;
