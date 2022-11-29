import styled from "styled-components";

export const ColourContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ColourText = styled.div`
  width: 50%;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Palette = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${({ colour }) => colour};
`;

export const PaletteContainer = styled.div`
  width: 100%;
  height: 100%;
`;
