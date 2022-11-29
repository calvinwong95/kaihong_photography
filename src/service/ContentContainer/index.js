import React, { useContext } from "react";
import { PageStateContext } from "../../context/PageStateProvider";
import { ContentWrap } from "./ContentContainerElements";

const ContentContainer = ({ children }) => {
  const { navbarHeight } = useContext(PageStateContext);
  return <ContentWrap navbarHeight={navbarHeight}>{children}</ContentWrap>;
};

export default ContentContainer;
