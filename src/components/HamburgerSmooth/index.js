import React from "react";
import { HamburgerContainer } from "./HamburgerElements";

const HamburgerSmooth = ({ onClick, openMenu }) => {
  return (
    <HamburgerContainer onClick={onClick} openMenu={openMenu}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  );
};

export default HamburgerSmooth;
