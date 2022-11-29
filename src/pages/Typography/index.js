import React from "react";
import FullPageCarousel from "../../components/Carousel";

import Chivo from "./Chivo";
import Comfortaa from "./Comfortaa";
import NixieOne from "./NixieOne";
import Poppins from "./Poppins";
import UnicaOne from "./UnicaOne";

const Typography = () => {
  return (
    <FullPageCarousel
      refId="typography"
      showArrow={false}
      infinite
      vertical={true}
    >
      <Chivo></Chivo>
      <Comfortaa></Comfortaa>
      <NixieOne></NixieOne>
      <Poppins></Poppins>
      <UnicaOne></UnicaOne>
    </FullPageCarousel>
  );
};

export default Typography;
