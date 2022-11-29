import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 30%;
  border: 2px solid white;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-in-out;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
  &:hover h1 {
    color: #000;
  }
`;

export const ButtonFont = styled.h1`
  font-size: calc(1 * (1.5vh + 1.1vw));
  color: #fff;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;
`;
