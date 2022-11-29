import React, { useState } from "react";
import HamburgerClean from "../../components/HamburgerClean";
import HamburgerMinimal from "../../components/HamburgerMinimal";
import HamburgerSmooth from "../../components/HamburgerSmooth";
import SectionWrapper from "../../service/SectionWrapper";

const HamburgerButton = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
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
          <HamburgerClean onClick={showSidebar} openMenu={sidebar} />
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
          <HamburgerSmooth onClick={showSidebar} openMenu={sidebar} />
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
          <HamburgerMinimal onClick={showSidebar} openMenu={sidebar} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HamburgerButton;
