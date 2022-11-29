import styled from "styled-components";

export const HamburgerContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1px;
`;

export const HamburgerSpan = styled.span`
  width: 30px;
  height: 5px;
  background-color: #000;
  position: relative;
  transform: ${({ openMenu }) => (openMenu ? "rotate(45deg)" : "rotate(0deg)")};
  transition: 0.5s all ease-in-out;
  -webkit-transition: 0.5s all ease-in-out;
  -moz-transition: 0.5s all ease-in-out;
  -o-transition: 0.5s all ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 4.5px;
    top: ${({ openMenu }) => (openMenu ? "0px" : "-10px")};
    left: 0px;
    opacity: ${({ openMenu }) => (openMenu ? 0 : 1)};
    background-color: #000;
    transition: 0.3s all ease-in-out;
    -webkit-transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 4.5px;
    top: ${({ openMenu }) => (openMenu ? "0px" : "10px")};
    left: 0px;
    background-color: #000;
    transform: ${({ openMenu }) =>
      openMenu ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.3s all ease-in-out;
    -webkit-transition: 0.3s all ease-in-out;
    -moz-transition: 0.3s all ease-in-out;
    -o-transition: 0.3s all ease-in-out;
  }
`;
