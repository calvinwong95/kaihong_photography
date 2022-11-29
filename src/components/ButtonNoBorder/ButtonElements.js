import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: rgba(0, 0, 0, 0.5);
  width: 30%;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background: rgba(0, 0, 0, 1);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 1;
    transition: 0.3s all ease-in-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
  &:hover {
    background: rgba(0, 0, 0, 1);
  }
`;

export const ButtonFont = styled.h1`
  font-size: calc(1 * (1.5vh + 1.1vw));
  color: #fff;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;
  z-index: 1;
`;
