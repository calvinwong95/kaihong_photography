import React from "react";
import Typography from "../../components/Typography";
import SectionWrapper from "../../service/SectionWrapper";

const Chivo = () => {
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
        <Typography fontSize={1.2} sx={{ fontFamily: "Chivo" }}>
          CHIVO
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Chivo" }}>
          Description:
        </Typography>
        <Typography fontSize={1} sx={{ fontFamily: "Chivo" }}>
          Chivo is a grotesque sans serif font family that's an an indispensable
          ally to any designer.
        </Typography>
        <Typography fontSize={1.2} sx={{ fontFamily: "Chivo" }}>
          Usage:
        </Typography>
        <Typography fontSize={1} sx={{ fontFamily: "Chivo", fontWeight: 300 }}>
          Headlines, Highlights, Reading
        </Typography>
      </div>
    </SectionWrapper>
  );
};

export default Chivo;
