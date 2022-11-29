import React from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";

const UnicaOne = () => {
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
        <Typography fontSize={1.2} sx={{ fontFamily: "Unica One" }}>
          UNICA ONE
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Unica One" }}>
          Description:{" "}
        </Typography>
        <Typography
          fontSize={1}
          sx={{ fontFamily: "Unica One", textTransform: "uppercase" }}
        >
          Unica one is one of the default minimalist design but it requires to
          be capslock for all text.
        </Typography>
        <Typography fontSize={1.2}>Usage:</Typography>
        <Typography
          fontSize={1}
          sx={{ fontFamily: "Unica One", fontWeight: 300 }}
        >
          Paragraphs Text, Heading, Titles
        </Typography>
      </div>
    </SectionWrapper>
  );
};

export default UnicaOne;
