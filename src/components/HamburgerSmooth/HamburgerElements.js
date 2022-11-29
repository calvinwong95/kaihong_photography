import styled from "styled-components";

export const HamburgerContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5px;

  & :nth-child(1) {
    width: 30px;
    height: 5px;
    background-color: #000;
    transform: ${({ openMenu }) =>
      openMenu ? `translate(0, 10px) rotate(45deg) ` : null};
    transition: 0.5s all ease-in-out;
    -webkit-transition: 0.5s all ease-in-out;
    -moz-transition: 0.5s all ease-in-out;
    -o-transition: 0.5s all ease-in-out;
  }
  & :nth-child(2) {
    width: 30px;
    height: 5px;
    background-color: #000;
    transition: 0.5s all ease-in-out;
    -webkit-transition: 0.5s all ease-in-out;
    -moz-transition: 0.5s all ease-in-out;
    -o-transition: 0.5s all ease-in-out;
    opacity: ${({ openMenu }) => (openMenu ? 0 : 1)};
  }
  & :nth-child(3) {
    width: 30px;
    height: 5px;
    background-color: #000;
    transform: ${({ openMenu }) =>
      openMenu ? `translate(0, -10px) rotate(-45deg) ` : null};
    transition: 0.5s all ease-in-out;
    -webkit-transition: 0.5s all ease-in-out;
    -moz-transition: 0.5s all ease-in-out;
    -o-transition: 0.5s all ease-in-out;
  }
`;
