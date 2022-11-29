import styled from "styled-components";

export const HamburgerContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  & :nth-child(1) {
    background: #000;
    position: absolute;
    width: 40px;
    height: 5px;
    transform: ${({ openMenu }) => (openMenu ? `rotate(45deg)` : null)};
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  & :nth-child(1)::before,
  & :nth-child(1)::after {
    background: #000;
    content: "";
    position: absolute;
    width: 40px;
    height: 5px;
    left: 0;

    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  & :nth-child(1)::before {
    margin-top: ${({ openMenu }) => (openMenu ? 0 : "-10px")};

    -webkit-transition: 0.3s ease-in-out 0.1s;
    -moz-transition: 0.3s ease-in-out 0.1s;
    -o-transition: 0.3s ease-in-out 0.1s;
    transition: 0.3s ease-in-out 0.1s;
  }

  & :nth-child(1)::after {
    margin-top: ${({ openMenu }) => (openMenu ? 0 : "10px")};
    transform: ${({ openMenu }) => (openMenu ? `rotate(90deg)` : null)};
    -webkit-transition: 0.3s ease-in-out 0.2s;
    -moz-transition: 0.3s ease-in-out 0.2s;
    -o-transition: 0.3s ease-in-out 0.2s;
    transition: 0.3s ease-in-out 0.2s;
  }
`;
