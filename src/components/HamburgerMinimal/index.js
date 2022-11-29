import React, { useEffect, useState } from "react";
import { HamburgerContainer } from "./HamburgerElements";

const HamburgerMinimal = ({ openMenu, onClick }) => {
  return (
    <HamburgerContainer onClick={onClick} openMenu={openMenu}>
      <span></span>
    </HamburgerContainer>
  );
};

export default HamburgerMinimal;
