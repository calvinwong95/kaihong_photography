import React, { useState, useEffect } from "react";
import { ScrollDot, ScrollerContainer } from "./PageScrollerElements";

const PageScroller = ({ active, setActive, refArray, showDots }) => {
  useEffect(() => {
    refArray.map((ref, index) => {
      if (active === index) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    });
  }, [active]);

  const scrollTo = (ref, currentDiv) => {
    setActive(currentDiv);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <ScrollerContainer>
        {refArray.map((ref, index) => {
          return (
            <ScrollDot
              showDots={showDots}
              active={active === index ? true : false}
              onClick={() => scrollTo(ref, index)}
            ></ScrollDot>
          );
        })}
      </ScrollerContainer>
    </>
  );
};

export default PageScroller;
