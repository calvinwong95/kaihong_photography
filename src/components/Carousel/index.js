import React, { useEffect, useState } from "react";
import {
  CarouselContainer,
  LeftArrow,
  RightArrow,
  CarouselIndicator,
  CarouselContentContainer,
  CarouselFrame,
  LeftArrowIcon,
  RightArrowIcon,
} from "./CarouselElements";
const widthSpan = 100;
const heightSpan = 100;
const FullPageCarousel = ({
  children,
  showIndicator = true,
  showArrow = true,
  infinite,
  timer,
  stopOnManual,
  indicatorColor,
  refId,
  vertical = false,
}) => {
  let interval;
  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [touchEndPosition, setTouchEndPosition] = useState(0);
  const [touched, setTouched] = useState(false);
  const [swiped, setSwiped] = useState(false);
  const [mouseStartPosition, setMouseStartPosition] = useState(0);
  const [mouseEndPosition, setMouseEndPosition] = useState(0);
  const [mouseClicked, setMouseClicked] = useState(false);
  const [mouseSwiped, setMouseSwiped] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(timer !== undefined);

  //Timer for autoplay
  const manageTimer = () => {
    clearInterval(interval);
    if (stopOnManual) {
      setAutoAdvance(false);
    }
  };
  //Left side logic for carousel
  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (infinite) {
      newPosition = children?.length - 1 || 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };
  //Right side logic for carousel
  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < children.length - 1) {
      newPosition = newPosition + 1;
    } else if (infinite) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
  };
  //Onclick Handler
  const prevClickHandler = () => {
    manageTimer();
    prevSlideHandler();
  };
  const nextClickHandler = () => {
    manageTimer();
    nextSlideHandler();
  };

  //Translating Pages
  const translateFullSlides = (newPosition) => {
    let toTranslate = vertical
      ? -heightSpan * newPosition
      : -widthSpan * newPosition;
    for (var i = 0; i < (children.length || 1); i++) {
      let elem = document.getElementById(`${refId}` + i);
      vertical
        ? (elem.style.transform = `translateY(` + toTranslate + `%)`)
        : (elem.style.transform = `translateX(` + toTranslate + `%)`);
    }
  };

  const translatePartialSlides = (toTranslate) => {
    let currentTranslation = vertical
      ? -sliderPosition * heightSpan
      : -sliderPosition * widthSpan;
    let totalTranslation = currentTranslation + toTranslate;
    for (var i = 0; i < (children?.length || 1); i++) {
      let elem = document.getElementById(`${refId}` + i);
      vertical
        ? (elem.style.transform = `translateY(` + totalTranslation + `%)`)
        : (elem.style.transform = `translateX(` + totalTranslation + `%)`);
    }
  };

  const jumpToSlideHandler = (newPosition) => {
    manageTimer();
    setSliderPosition(newPosition);
    translateFullSlides(newPosition);
  };

  //Touch Swiping
  const touchStartHandler = (e) => {
    manageTimer();
    setTouchStartPosition(e.targetTouches[0].clientX);
    setTouchEndPosition(e.targetTouches[0].clientX);
    setTouched(true);
  };
  const touchMoveHandler = (e) => {
    setTouchEndPosition(e.targetTouches[0].clientX);
    const frameWidth = document.getElementById(refId).offsetWidth;
    const translateDist =
      ((touchEndPosition - touchStartPosition) / frameWidth) * 100;
    translatePartialSlides(translateDist);
    if (touched === true) {
      setSwiped(true);
    }
  };
  const touchEndHandler = (e) => {
    if (swiped) {
      if (touchStartPosition - touchEndPosition > 75) {
        nextSlideHandler();
      } else if (touchStartPosition - touchEndPosition < 75) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setTouched(false);
    setSwiped(false);
  };

  //Mouse Swiping
  const mouseStartHandler = (e) => {
    manageTimer();
    e.preventDefault();
    setMouseStartPosition(e.clientX);
    setMouseEndPosition(e.clientX);
    setMouseClicked(true);
  };
  const mouseMoveHandler = (e) => {
    e.preventDefault();
    var frameWidth = document.getElementById(refId).offsetWidth;
    if (mouseClicked) {
      setMouseEndPosition(e.clientX);
      let translateDist =
        ((mouseEndPosition - mouseStartPosition) / frameWidth) * 100;
      translatePartialSlides(translateDist);
      setMouseSwiped(true);
    }
  };
  const mouseEndHandler = (e) => {
    if (mouseSwiped) {
      if (mouseStartPosition - mouseEndPosition > 100) {
        nextSlideHandler();
      } else if (mouseStartPosition - mouseEndPosition < -100) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setMouseSwiped(false);
    setMouseClicked(false);
  };
  //Scroll Swiping
  const onWheelHandler = (e) => {
    manageTimer();
    e.preventDefault();
    let wheeling = true;
    if (e.deltaY > 50 && wheeling) {
      wheeling = false;
      setTimeout(() => {
        nextSlideHandler();
        wheeling = true;
      }, 500);
    } else if (e.deltaY < -50 && wheeling) {
      wheeling = false;
      setTimeout(() => {
        prevSlideHandler();
        wheeling = true;
      }, 500);
    }
  };
  //Frame for displayed children
  const displayItems = children.map((child, index) => (
    <CarouselContentContainer vertical={vertical} id={`${refId}` + index}>
      {child}
    </CarouselContentContainer>
  ));
  //Indicators
  const positionIndicators = children.map((child, index) => {
    let currentItem = sliderPosition === index;
    return (
      <div
        style={{
          width: "1vw",
          height: "1vw",
          boxSizing: "border-box",
          border: "1px solid #E2E2E2",
          borderRadius: "50%",
          margin: "2px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "black",
          },
          "&:active": {
            backgroundColor: "#E2E2E2",
          },
          backgroundColor: currentItem
            ? indicatorColor || "#8A8A8A"
            : "#E2E2E2",
        }}
        onClick={() => jumpToSlideHandler(index)}
      ></div>
    );
  });
  //For autoplay on load
  useEffect(() => {
    if (autoAdvance && !mouseClicked && !touched) {
      // eslint-disable-next-line
      interval = setInterval(() => {
        nextSlideHandler();
      }, timer);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <CarouselContainer>
      {showArrow && (
        <LeftArrow onClick={prevClickHandler}>
          <LeftArrowIcon />
        </LeftArrow>
      )}

      <CarouselFrame
        id={refId}
        onTouchStart={(e) => touchStartHandler(e)}
        onTouchMove={(e) => touchMoveHandler(e)}
        onTouchEnd={(e) => touchEndHandler(e)}
        onMouseDown={(e) => mouseStartHandler(e)}
        onMouseMove={(e) => mouseMoveHandler(e)}
        onMouseUp={(e) => mouseEndHandler(e)}
        onMouseLeave={(e) => mouseEndHandler(e)}
        onWheel={(e) => onWheelHandler(e)}
      >
        {displayItems}
      </CarouselFrame>
      {showArrow && (
        <RightArrow onClick={nextClickHandler}>
          <RightArrowIcon />
        </RightArrow>
      )}
      {showIndicator && (
        <CarouselIndicator vertical={vertical}>
          {positionIndicators}
        </CarouselIndicator>
      )}
    </CarouselContainer>
  );
};

export default FullPageCarousel;
