import * as Yup from "yup"; //get all data from yup

export const logInSchema=Yup.object({
    name:Yup.string()
    .min(4).max(25).required("Please enter your name"),
    password:Yup.string().min(6).required("Please enter your password"),
});
