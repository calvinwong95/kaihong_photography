import styled from "styled-components";

export const FormInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.input`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-bottom: ${({ isErrorShown }) =>
    isErrorShown ? `3px solid red` : `3px solid #ccc`};
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  font-size: 25px;

  &:focus {
    border: 3px solid #555;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  padding: 12px 20px;
`;

export const TextAreaContainer = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-bottom: ${({ isErrorShown }) =>
    isErrorShown ? `3px solid red` : `3px solid #ccc`};
  border-top: 3px solid #fff;
  border-left: 3px solid #fff;
  border-right: 3px solid #fff;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  font-size: 25px;
  resize: none;

  &:focus {
    border: 3px solid #555;
  }
`;