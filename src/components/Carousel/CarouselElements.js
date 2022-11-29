import styled from "styled-components";
import * as FaIcons from "react-icons/fa";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  vertical-align: middle;
  overflow: hidden;
`;

export const LeftArrow = styled.div`
  width: 15%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-in-out;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const RightArrow = styled.div`
  width: 15%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s all ease-in-out;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const LeftArrowIcon = styled(FaIcons.FaChevronLeft)`
  font-size: 50px;
`;

export const RightArrowIcon = styled(FaIcons.FaChevronRight)`
  font-size: 50px;
`;

export const CarouselFrame = styled.div`
  width: 100vw;
  height: 100%;
  margin: auto;
  text-align: center;
  overflow-y: hidden;
  overflow-x: hidden;
  white-space: nowrap;
  touch-action: none;
`;

export const CarouselContentContainer = styled.div`
  width: 100%;
  display: ${({ vertical }) => (vertical ? null : "inline-block")};
  vertical-align: top;
  white-space: normal;
  transition: all 500ms ease-in-out;
`;

export const CarouselIndicator = styled.div`
  width: ${({ vertical }) => (vertical ? "5%" : "100%")};
  height: ${({ vertical }) => (vertical ? "100%" : "5%")};
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  align-items: center;
  justify-content: center;
`;
