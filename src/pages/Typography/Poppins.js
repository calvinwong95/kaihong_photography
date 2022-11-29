import React from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";

const Poppins = () => {
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
        <Typography fontSize={1.2} sx={{ fontFamily: "Poppins" }}>
          POPPINS
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Poppins" }}>
          Description:{" "}
        </Typography>
        <Typography fontSize={1} sx={{ fontFamily: "Poppins" }}>
          Poppins is a geometric sans serif typeface. Each letterform is nearly
          monolinear, with optical corrections applied to stroke joints where
          necessary to maintain an even typographic color.
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Poppins" }}>
          Usage:
        </Typography>
        <Typography
          fontSize={1}
          sx={{ fontFamily: "Poppins", fontWeight: 300 }}
        >
          Paragraphs Text, Heading, Titles
        </Typography>
      </div>
    </SectionWrapper>
  );
};

export default Poppins;
