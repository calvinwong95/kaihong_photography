import React, { useEffect, useState } from "react";

import { ButtonContainer, ButtonFont } from "./ButtonElements";

const ButtonBorder = ({ onClick, sx, type = "button" }) => {
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
      <ButtonFont hover={colorHover}>Menu</ButtonFont>
    </ButtonContainer>
  );
};

export default ButtonBorder;
