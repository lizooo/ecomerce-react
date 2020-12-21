import React from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";

const Checkout = () => {
  return (
    <Formik
      initialValues={{
        Name: "",
        Surname: "",
        Email: "",
        Gender: "",
        acceptedTermsAndConditions: false,
      }}
      validationSchema={Yup.object({
        Name: Yup.string().required("Your name is mandatory!!!").min(2).max(50),
        Surname: Yup.string()
          .required("Your surname is mandatory!!!")
          .min(2)
          .max(50),
        Email: Yup.string()
          .email("Invalid email adress")
          .required("Email is required"),
        Gender: Yup.string().oneOf(
          ["Male", "Female", "Non Binary"],
          "INvalid gender"
        ),
        acceptedTermsAndConditions: Yup.boolean().oneOf(
          [true],
          "You must accept terms and conditions"
        ),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 3000)
      }}
    >
      {props => (
        <Form>
          <h1> Add some info </h1>
          <CustomTextInput
            label="Name"
            name="Name"
            type="text"
            placeholder="Type your name"
          ></CustomTextInput>
          <CustomTextInput
            label="Surname"
            name="Surname"
            type="text"
            placeholder="Type your surname"
          ></CustomTextInput>
          <CustomTextInput
            label="Age"
            name="Age"
            type="number"
            placeholder="Type your age"
          ></CustomTextInput>
          <CustomTextInput
            label="Email"
            name="Email"
            type="email"
            placeholder="Type your email"
          ></CustomTextInput>
          <CustomSelect label="Ender" name="Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non Binary">Female</option>
          </CustomSelect>
          <button type="submit">
            {props.isSubmitting ? "submiting...." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props}></input>
      {meta.touched && meta.error ? <div> {meta.error}</div> : null}
    </>
  );
};

const CustomCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, "checkbox");

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props}></input>
        {children}
      </label>
      <input>
        {field} {props}
      </input>
      {meta.touched && meta.error ? <div> {meta.error}</div> : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}></select>
      {meta.touched && meta.error ? <div> {meta.error}</div> : null}
    </>
  );
};

export default Checkout;
