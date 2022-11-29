import React, {useRef} from "react";
import SectionWrapper from "../../service/SectionWrapper";
import { FormContainer} from "./FormElements";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonNoBorder from "../../components/ButtonNoBorder";
import FormInputComponent from "../../components/Forms";
import emailjs from '@emailjs/browser';
import FormTextArea from "../../components/Forms/FormTextArea";

const Forms = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const form = useRef();

  
  const sendEmail = () => {

      emailjs.sendForm('service_13joris', 'template_9fjcgvt', form.current, 'ZD3yFUyYuBVREhjmU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  };

  return (
    <SectionWrapper>
      <Formik
        initialValues={{ name: "", contact: "", email: "",message:"" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          contact: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={()=>sendEmail()}
        // onSubmit={(values)=>console.log(JSON.stringify(values,2,null))}
      >
        {({ errors, touched, values, handleChange }) => {
          return (
            <Form ref={form}>
              <FormContainer>
                <Field
                  as={FormInputComponent}
                  label="NAME"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  errorMessage={<ErrorMessage name="name" />}
                  isErrorShown={errors.name && touched.name}
                ></Field>
                <Field
                  as={FormInputComponent}
                  label="CONTACT"
                  name="contact"
                  type="text"
                  value={values.contact}
                  onChange={handleChange}
                  errorMessage={<ErrorMessage name="contact" />}
                  isErrorShown={errors.contact && touched.contact}
                ></Field>
                <Field
                  as={FormInputComponent}
                  label="EMAIL"
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  errorMessage={<ErrorMessage name="email" />}
                  isErrorShown={errors.email && touched.email}
                ></Field>
                <Field
                  as={FormTextArea}
                  label="MESSAGE"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  maxlength={2}
                  rows={4}
                  cols={5}
                />
                <ButtonNoBorder type="submit">Submit</ButtonNoBorder>
              </FormContainer>
            </Form>
          );
        }}
      </Formik>
      

    </SectionWrapper>
  );
};

export default Forms;
