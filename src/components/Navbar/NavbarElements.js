import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #fff;
  height: ${({ navbarHeight }) => `${navbarHeight}px`};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  position: sticky;
`;

export const NavbarLink = styled(Link)`
  margin-right: 2rem;
  margin-left: 2rem;
  font-size: 1rem;
  background: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 5;
`;

export const NavbarLogo = styled.img`
  width: 100%;
`;

export const NavbarMenu = styled.nav`
  background-color: #fff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 4;
  top: 0;
  ${({ leftNavbar, sidebar }) =>
    leftNavbar
      ? sidebar
        ? { left: "0%" }
        : { left: "-100%" }
      : sidebar
      ? { right: "0%" }
      : { right: "-100%" }};

  transition: ${({ sidebar }) => (sidebar ? "500ms" : "500ms")};

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const NavbarMenuItems = styled.ul`
  width: 100%;
`;

export const NavbarToggle = styled.li`
  background-color: #fff;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: ${({ leftNavbar }) =>
    leftNavbar ? "flex-start" : "flex-end"};
  align-items: center;
`;

export const NavbarTextContainer = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
`;

export const NavbarText = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  position: relative;

  :after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transition: 0.3s all ease-in-out;
  }

  :hover:after {
    transform: scaleX(0.5);
  }
`;

export const NavbarSpan = styled.span`
  /* margin-left: 16px; */
`;
