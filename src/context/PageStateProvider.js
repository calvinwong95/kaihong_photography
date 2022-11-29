import React, { createContext, useEffect, useState } from "react";

export const PageStateContext = createContext();

export const PageStateProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(80);
  const [leftNavbar, setLeftNavbar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    if (width <= 768) {
      setIsMobile(true);
    }
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const data = {
    navbarHeight: navbarHeight,
    leftNavbar: leftNavbar,
    isMobile: isMobile,
  };
  return (
    <PageStateContext.Provider value={data}>
      {children}
    </PageStateContext.Provider>
  );
};
