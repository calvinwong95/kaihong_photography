import React, { useState, useEffect } from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";
import { ContainerOne, ContainerTwo } from "./TwoSectionElements";

const TwoSection = () => {
  const [phase, setPhase] = useState(0);
  const [swapView, setSwapView] = useState(false);
  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setPhase((current) => current + 1);
    } else if (e.deltaY < 0) {
      setPhase((current) => current - 1);
    }
  };

  useEffect(() => {
    if (phase <= 0) {
      setPhase(0);
    } else if (phase >= 2) {
      setPhase(2);
    }
  }, [phase]);

  return (
    <SectionWrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          backgroundColor: "#c3c3c3",
        }}
        onClick={() => setSwapView(!swapView)}
        onWheel={handleWheel}
      >
        {swapView ? (
          <>
            <ContainerOne phase={phase}>
              <Typography fontSize={1}>
                You can insert paragraph here
              </Typography>
            </ContainerOne>
            <ContainerTwo phase={phase}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F3F3F3",
                }}
              ></div>
            </ContainerTwo>
          </>
        ) : (
          <>
            <ContainerTwo phase={phase}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F3F3F3",
                }}
              ></div>
            </ContainerTwo>
            <ContainerOne phase={phase}>
              <Typography fontSize={1}>
                You can insert paragraph here
              </Typography>
            </ContainerOne>
          </>
        )}
      </div>
    </SectionWrapper>
  );
};

export default TwoSection;
