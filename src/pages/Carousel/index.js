import React from "react";
import FullPageCarousel from "../../components/Carousel";
import SectionWrapper from "../../service/SectionWrapper";

const Carousel = () => {
  return (
    <SectionWrapper>
      <FullPageCarousel vertical={false} refId={"carousel"}>
        <SectionWrapper>Page 1</SectionWrapper>
        <SectionWrapper>Page 2</SectionWrapper>
        <SectionWrapper>Page 3</SectionWrapper>
      </FullPageCarousel>
    </SectionWrapper>
  );
};

export default Carousel;
