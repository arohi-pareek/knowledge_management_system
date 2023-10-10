import {
  Button,
  Grid,
  makeStyles,
  IconButton,
  DialogActions,
  DialogContent,
  MenuItem,
} from "@material-ui/core";
import * as Yup from "yup";
import { Field, FieldArray, Form, Formik } from "formik";
import { connect, useDispatch } from "react-redux";
import { Select, TextField, Switch } from "formik-material-ui";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons//Delete";
import { setSnackbar } from "app/camunda_redux/redux/ducks/snackbar";
import { Done } from "@material-ui/icons";
import { useState } from "react";
import { DocType } from "../../../camunda_redux/redux/action";

const Create = (props) => {
  let reset;

  const empty = {
    attributeName: "",
    attributeType: "String",
    value: "",
    isMandatory: false,
  };

  const { dialogClose } = props;
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const attributeType = [
    { title: "String" },
    { title: "Int" },
    { title: "Date" },
  ];

  return (
    <Formik
      initialValues={{
        filetype: "",
        metadata: [empty],
      }}
      validationSchema={Yup.object().shape({
        filetype: Yup.string()
          .required("Your Document Type is required")
          .max(255, "Your Document Type needs to be at most 255 characters"),

        metadata: Yup.array().of(
          Yup.object().shape({
            attributeName: Yup.string()
              .required(" Name is needed")
              .max(32, " Name needs to be at most 32 characters"),

            value: Yup.string()
              .when("attributeType", {
                is: "String",
                then: Yup.string(),
                otherwise: Yup.string(),
              })
              .when("attributeType", {
                is: "Int",
                then: Yup.string().matches(
                  /^\d+$/,
                  "Number field should be a valid number"
                ),
                otherwise: Yup.string(),
              })
              .when("attributeType", {
                is: "Date",
                then: Yup.string(),
                // .matches(/^\d+$/, "Date field should be a valid date"),
                otherwise: Yup.string(),
              }),
          })
        ),
      })}
      onSubmit={(values) => {
        props
          .DocType(values.filetype, values.metadata)
          .then(async (response) => {
            console.log(response);
            try {
              if (response.error) {
                dispatch(setSnackbar(true, "error", response.error));
                reset();
                return;
              } else {
                console.log("res", response);
                const selectEle = document?.getElementById("dd");
                let option = document?.createElement("option");
                option.value = response?.data?.type;
                const capitalizeFirstLetter = (str) =>
                  str.charAt(0).toUpperCase() + str.slice(1);
                option.text = capitalizeFirstLetter(response?.data?.type);
                selectEle?.appendChild(option);

                dispatch(setSnackbar(true, "success", response.msg));
                dialogClose();
                reset();
                return;
              }
            } catch (error) {
              dispatch(setSnackbar(true, "error", error.message));
            }
          })
          .catch((error) => {
            callMessageOut(error.message);
          });
      }}
    >
      {({ values, handleReset, handleChange, errors }) => {
        reset = handleReset;
        console.log("sdsdfew", errors);

        return (
          <Form autoComplete="off">
            <DialogContent dividers>
              <Field
                name="filetype"
                component={TextField}
                label="Document Type"
                fullWidth
                size="small"
              />

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
                          <Grid item xs={3}>
                            <Field
                              name={`metadata.${index}.attributeName`}
                              component={TextField}
                              label="Attribute Name"
                              size="small"
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <Field
                              name={`metadata.[${index}].attributeType`}
                              component={Select}
                              label="Attribute Type"
                              style={{
                                width: "9.5rem",
                              }}
                              size="small"
                              onChange={handleChange}
                            >
                              {attributeType.map((option) => (
                                <MenuItem
                                  key={option.title}
                                  value={option.title}
                                >
                                  {option.title}
                                </MenuItem>
                              ))}
                            </Field>
                          </Grid>

                          <Grid item xs={3}>
                            {type === "String" ? (
                              <Field
                                name={`metadata[${index}].value`}
                                component={TextField}
                                type="text"
                                label="Default Value"
                                size="small"
                                onChange={handleChange}
                              />
                            ) : type === "Int" ? (
                              <Field
                                name={`metadata[${index}].value`}
                                component={TextField}
                                type="number"
                                label="Default Value"
                                size="small"
                                onChange={handleChange}
                              />
                            ) : (
                              <Field
                                type="Date"
                                name={`metadata[${index}].value`}
                                component={TextField}
                                size="small"
                                onChange={handleChange}
                              />
                            )}
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
                            <div
                              style={{
                                marginTop: "-1rem",
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              Mandatory
                              <Field
                                name={`metadata.[${index}].isMandatory`}
                                type="checkbox"
                                component={Switch}
                                label="Mandatory"
                                checked={values.isMandatory}
                                onChange={handleChange}
                              />
                            </div>
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

function mapStateToProps(state) {
  return {
    props: state.props,
  };
}

export default connect(mapStateToProps, {
  DocType,
})(Create);
