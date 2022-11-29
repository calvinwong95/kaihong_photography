import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 30%;
  transition: 0.3s all ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: relative;
  border: 2px solid #fff;
  background: transparent;
  z-index: 3;

  &::before {
    content: "";
    position: absolute;
    top: 6px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% - 12px);
    background: #353535;
    transition: 0.5s ease-in-out;
    transform: scaleY(1);
    transition-delay: 0.2s;
  }

  &:hover::before {
    transform: scaleY(0);
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: #353535;
    transition: 0.5s ease-in-out;
    transform: scaleX(1);
  }

  &:hover::after {
    transform: scaleX(0);
  }
`;

export const ButtonFont = styled.h1`
  font-size: calc(1 * (1.5vh + 1.1vw));

  color: #fff;
  text-transform: uppercase;
  transition: 0.3s all ease-in-out;
  z-index: 1;
`;
