import React from "react";
import Button from "../../components/Button";
import ButtonBorder from "../../components/ButtonBorder";
import ButtonNoBorder from "../../components/ButtonNoBorder";
import SectionWrapper from "../../service/SectionWrapper";

const DefaultButton = () => {
  return (
    <SectionWrapper>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#353535",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Button sx={{ width: "100%" }}></Button>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          
          }}
        >
          <ButtonNoBorder sx={{ width: "100%" }}>Menu</ButtonNoBorder>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <ButtonBorder sx={{ width: "100%" }}></ButtonBorder>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DefaultButton;
