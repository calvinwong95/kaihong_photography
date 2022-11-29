import React from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";
import { ColourContainer, ColourText, Palette } from "./ColourElements";

const Colours = () => {
  return (
    <SectionWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          p: 2,
          alignItems: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "#181818",
        }}
      >
        <ColourContainer>
          <ColourText>
            <Typography
              fontSize={1.2}
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              Clean
            </Typography>
          </ColourText>
          <Palette colour="#373D20"></Palette>
          <Palette colour="#717744"></Palette>
          <Palette colour="#ABAC7F"></Palette>
          <Palette colour="#FEFEFE"></Palette>
          <Palette colour="#080808"></Palette>
        </ColourContainer>
        <ColourContainer>
          <ColourText>
            <Typography
              fontSize={1.2}
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              Reliable
            </Typography>
          </ColourText>
          <Palette colour="#362417"></Palette>
          <Palette colour="#92817A"></Palette>
          <Palette colour="#F1DABF"></Palette>
          <Palette colour="#FFFBFF"></Palette>
          <Palette colour="#04030F"></Palette>
        </ColourContainer>
        <ColourContainer>
          <ColourText>
            <Typography
              fontSize={1.2}
              sx={{ fontFamily: "Poppins", color: "white" }}
            >
              Luxury
            </Typography>
          </ColourText>
          <Palette colour="#0A0908"></Palette>
          <Palette colour="#49111C"></Palette>
          <Palette colour="#F2F4F3"></Palette>
          <Palette colour="#A9927D"></Palette>
          <Palette colour="#5E543F"></Palette>
        </ColourContainer>
      </div>
    </SectionWrapper>
  );
};

export default Colours;
