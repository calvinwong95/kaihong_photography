import React from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";

const Comfortaa = () => {
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
        <Typography fontSize={1.2} sx={{ fontFamily: "Comfortaa" }}>
          COMFORTAA
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Comfortaa" }}>
          Description:{" "}
        </Typography>
        <Typography fontSize={1} sx={{ fontFamily: "Comfortaa" }}>
          Comfortaa Light is a rounded geometric sans serif type design created
          to mimic Gill Sans.
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Comfortaa" }}>
          Usage:
        </Typography>
        <Typography
          fontSize={1}
          sx={{ fontFamily: "Comfortaa", fontWeight: 300 }}
        >
          Display, Wide letterforms are intended for large sizes
        </Typography>
      </div>
    </SectionWrapper>
  );
};

export default Comfortaa;
