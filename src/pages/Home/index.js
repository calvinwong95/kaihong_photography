import React from "react";
import SectionWrapper from "../../service/SectionWrapper";

const Home = () => {
  return (
    <>
      <SectionWrapper>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            flexDirection: "column",
          }}
        >
          <h1 style={{ textTransform: "uppercase" }}>
            Browse through minimalist designs and components to add on to your
            website.
          </h1>
          <h1 style={{ textTransform: "uppercase" }}>
            Click on the top right menu to start!
          </h1>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
