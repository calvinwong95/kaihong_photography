import React from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";

const NixieOne = () => {
  return (
    <SectionWrapper>
      <div
        style={{
          width: "100%",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
        }}
      >
        <Typography fontSize={1.2} sx={{ textDecoration: "underline" }}>
          TYPOGRAPHY TYPE
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Nixie One" }}>
          NIXIE ONE
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Nixie One" }}>
          Description:{" "}
        </Typography>
        <Typography fontSize={1} sx={{ fontFamily: "Nixie One" }}>
          Nixie One is a slab serif font that's a stylish update on vintage
          typewriter fonts.
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Nixie One" }}>
          Usage:
        </Typography>
        <Typography
          fontSize={1}
          sx={{ fontFamily: "Nixie One", fontWeight: 300 }}
        >
          Paragraphs Text
        </Typography>
      </div>
    </SectionWrapper>
  );
};

export default NixieOne;
