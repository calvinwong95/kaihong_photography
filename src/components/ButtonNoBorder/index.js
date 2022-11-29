import React, { useEffect, useState } from "react";
import { ButtonContainer, ButtonFont } from "./ButtonElements";

const ButtonNoBorder = ({ children, onClick, sx, sxText, type = "button" }) => {
  const [hover, setHover] = useState(false);
  const [colorHover, setColorHover] = useState(true);

  useEffect(() => {
    setColorHover(true);
  }, [hover]);
  return (
    <ButtonContainer
      hover={colorHover}
      style={{ ...sx }}
      onHover={() => setHover(!hover)}
      onClick={onClick}
      type={type}
    >
      <ButtonFont style={{ ...sxText }}>{children}</ButtonFont>
    </ButtonContainer>
  );
};

export default ButtonNoBorder;
