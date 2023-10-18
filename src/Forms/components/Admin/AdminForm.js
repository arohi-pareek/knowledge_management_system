import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import {
  Tooltip,
  IconButton,
  Grid,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AddCourse, setSnackbar } from "../Redux/Actions/firstaction";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles({
  input: {
    display: 'none',
  },
  button: {
    border: '1px solid #c2b8b8e8',
    padding: '7px 14px',
    cursor: 'pointer',
    display: 'inline-block',
    width:"100%",
    borderRadius:"0.3rem",
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  icon: {
    marginRight: '15px',
    verticalAlign: 'middle',
  },
});

const AdminForm = (props) => {
  const classes = useStyles();
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [upload, setupload] = useState('');

  const { CloseAdminform } = props;
  const dispatch = useDispatch();

  const initialValues = {
    // courseThumbnail: null,
    type: "",
    courseName: "",
    courseDescription: "",
  };

  const validationSchema = Yup.object().shape({
    // id: Yup.number().required("Course ID is required"),
    type: Yup.string().required("type is required"),
    courseName: Yup.string().required("Course Title is required"),
    courseDescription: Yup.string()
      .notRequired() // Makes the field not required
      .max(100, "Course Description must not exceed 100 characters"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: function (values) {
      CloseAdminform();
      let formData = {
        ...values,
        registeredUsers: ["1400"],
        // courseThumbnail:upload,
        uploadedBy: "1400",
      };
      dispatch(AddCourse(formData));
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      setupload(file)
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle
          style={{ cursor: "move" }}
          id="draggable-dialog-title"
          className="dialofAction"
        >
          <Tooltip title="CLOSE">
            <IconButton
              onClick={() => CloseAdminform()}
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
          <h3 style={{ color: "var(--main-heading)", fontStyle: "initial" }}>
            {" "}
            ADD COURSE{" "}
          </h3>
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="type"
                id="outlined-basic"
                label="TYPE"
                variant="outlined"
                autoComplete="off"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.type}
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
              />
            </Grid>

            <Grid item xs={6}>
              {/* <TextField 
                fullWidth
                name="courseThumbnail"
                id="outlined-basic"
                type="file"
                autoComplete="off"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.courseThumbnail}
                error={formik.touched.courseThumbnail && Boolean(formik.errors.courseThumbnail)}
                helperText={formik.touched.courseThumbnail && formik.errors.courseThumbnail}
              /> */}
              <label htmlFor="file" className={classes.button}>
              <CloudUploadIcon className={classes.icon} />
                {uploadedFileName || "Upload Thumbnail"}
              </label>
              <input
                accept="image/*"
                className={classes.input}
                id="file"
                type="file"
                onChange={handleFileChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="courseName"
                id="outlined-basic"
                label="COURSE TITLE"
                variant="outlined"
                autoComplete="off"
                size="small"
                onChange={formik.handleChange}
                value={formik.values.courseName}
                error={
                  formik.touched.courseName && Boolean(formik.errors.courseName)
                }
                helperText={
                  formik.touched.courseName && formik.errors.courseName
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="courseDescription"
                id="outlined-basic"
                label="COURSE DESCRIPTION"
                variant="outlined"
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.courseDescription}
                error={
                  formik.touched.courseDescription &&
                  Boolean(formik.errors.courseDescription)
                }
                helperText={
                  formik.touched.courseDescription &&
                  formik.errors.courseDescription
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            className="reset-button"
            type="reset"
            variant="contained"
            color="primary"
            disableElevation
          >
            RESET
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            style={{ backgroundColor: " #FFAF38", color: "black" }}
          >
            SUBMIT
          </Button>
        </DialogActions>
      </form>
    </>
  );
};

export default AdminForm;
