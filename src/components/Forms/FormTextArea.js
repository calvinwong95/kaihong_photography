import React from "react";
import Typography from "../Typography";
import { FormInputContainer, FormLabel, TextAreaContainer } from "./FormInputElements";

const FormTextArea = ({label, onChange, maxlength, rows, cols, name}) => {
  return (
    <FormInputContainer>
      <FormLabel htmlFor={label}>
        <Typography>{label}</Typography>
      </FormLabel>
      <TextAreaContainer onChange={onChange} rows={rows} cols={cols} maxlength={10} name={name}>

      </TextAreaContainer>
    </FormInputContainer>
  );
};

export default FormTextArea;
