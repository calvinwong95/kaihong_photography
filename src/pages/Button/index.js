import React from "react";
import FullPageCarousel from "../../components/Carousel";
import DefaultButton from "./DefaultButton";
import HamburgerButton from "./HamburgerButton";

const Button = () => {
  return (
    <FullPageCarousel vertical={true} showArrow={false} showIndicator={false} refId={'buttonPage'}>
      <DefaultButton />
      <HamburgerButton />
    </FullPageCarousel>
  );
};

export default Button;
