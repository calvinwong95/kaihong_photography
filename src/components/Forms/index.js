import React from "react";
import Typography from "../Typography";
import {
  ErrorContainer,
  FormInputContainer,
  FormLabel,
  InputContainer,
} from "./FormInputElements";

const FormInputComponent = ({
  label,
  type,
  placeholder = "PLACEHOLDER",
  errorMessage,
  isErrorShown = false,
  name,
  onChange,
  value,
}) => {
  return (
    <FormInputContainer>
      <FormLabel htmlFor={label}>
        <Typography>{label}</Typography>
      </FormLabel>
      <InputContainer
        isErrorShown={isErrorShown}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      ></InputContainer>
      {isErrorShown && (
        <ErrorContainer>
          <Typography
            fontSize={0.8}
            sx={{ color: "red", textTransform: "uppercase" }}
          >
            {errorMessage}
          </Typography>
        </ErrorContainer>
      )}
    </FormInputContainer>
  );
};

export default FormInputComponent;
