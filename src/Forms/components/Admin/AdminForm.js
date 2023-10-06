import React, { useEffect } from "react";
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
import { AddCourse } from "../Redux/Actions/firstaction";
import { useDispatch } from "react-redux";

const statusS = [
  { label: "Commit" },
  { label: "Low" },
  { label: "High" },
  { label: "Week" },
  { label: "Fast" },
];

const AdminForm = (props) => {
  const { CloseAdminform } = props;
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    type: "",
    courseName: "",
    courseDescription: "",
  };

  const validationSchema = Yup.object().shape({
    id: Yup.number().required("Course ID is required"),
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
      CloseAdminform()
        let formData = {
            ...values,
            registeredUsers: ["1400"],
            uploadedBy : "1400",
          };
        dispatch(
            AddCourse(formData)
          );
    },
  });

  return (
    <>
      <form  onSubmit={formik.handleSubmit} style={{backgroundColor:'var(--comp)'}}>
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
         <h3 style={{color:"var(--main-heading)",fontStyle:"initial"}}> ADD COURSE </h3>
        </DialogTitle>
        <DialogContent  dividers>
          <Grid  container spacing={2}>
            <Grid item xs={6}>
              <TextField 
                fullWidth
                name="id"
                id="outlined-basic"
                label="COURSE ID"
               
                autoComplete="off"
                size="small"
               
                onChange={formik.handleChange}
                value={formik.values.id}
                error={formik.touched.id && Boolean(formik.errors.id)}
                helperText={formik.touched.id && formik.errors.id}
              />
            </Grid>
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
                helperText={formik.touched.courseName && formik.errors.courseName}
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
                  formik.touched.courseDescription && formik.errors.courseDescription
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
