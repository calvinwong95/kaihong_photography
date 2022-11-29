import React, { useContext } from "react";
import { PageStateContext } from "../context/PageStateProvider";

const MobileWrapper = ({ children, sx }) => {
  const { navbarHeight } = useContext(PageStateContext);
  return (
    <div
      style={{
        width: "100%",
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        ...sx,
      }}
    >
      {children}
    </div>
  );
};

export default MobileWrapper;
