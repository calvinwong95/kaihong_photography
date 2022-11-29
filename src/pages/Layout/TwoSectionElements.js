import styled from "styled-components";

export const ContainerOne = styled.div`
  background-color: grey;
  width: ${({ phase }) => (phase === 1 ? "30%" : "100%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s all ease-in-out;
  padding: 20px;
`;

export const ContainerTwo = styled.div`
  background-color: grey;
  width: ${({ phase }) => (phase === 0 ? "30%" : "100%")};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s all ease-in-out;
  padding: 20px;
`;
