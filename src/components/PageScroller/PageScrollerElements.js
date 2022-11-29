import styled from "styled-components";

export const ScrollerContainer = styled.div`
  width: 50px;
  height: 100px;
  background: transparent;
  position: fixed;
  right: 0;
  top: calc(100vh / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ScrollDot = styled.div`
  width: ${({ active }) => (active ? "14px" : "10px")};
  height: ${({ active }) => (active ? "14px" : "10px")};
  background-color: #111116;
  border-radius: 50%;
  opacity: 0.7;
  display: ${({ showDots }) => (showDots ? "block" : "none")};
  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: ${({ active }) => (active ? "scale(1)" : "scale(1.2)")};
    opacity: 1;
  }
`;
