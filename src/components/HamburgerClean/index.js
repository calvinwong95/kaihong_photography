import React, { useEffect, useState } from "react";
import { HamburgerContainer, HamburgerSpan } from "./HamburgerElements";

const HamburgerClean = ({ onClick, openMenu }) => {
  return (
    <HamburgerContainer onClick={onClick}>
      <HamburgerSpan openMenu={openMenu}></HamburgerSpan>
    </HamburgerContainer>
  );
};

export default HamburgerClean;
