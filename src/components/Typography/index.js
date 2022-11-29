import React from "react";

const Typography = ({ children, fontSize = 1, sx }) => {
  return (
    <h1 style={{ fontSize: `calc(${fontSize}*(1.5vh + 1.1vw))`, ...sx }}>
      {children}
    </h1>
  );
};

export default Typography;
