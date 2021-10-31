import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000000;
  height: 80px;
  margin-top: -160px; //fix changed this - was too big
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: white; //fix get better colors to match vid background
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  // hamburger
  display: none;

  @media screen and (max-width: 768px) {
    //displays on screens up to 768px?
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none; //does not display on screens below 768px
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)` //important these are the actual WORD LINKS
  color: #fff;
  display: flex; //pulls off top of page and centers
  align-items: center;
  text-decoration: none;
  padding: 0 1rem; //16px apart from one another
  height: 100%; //pulls off top of page and centers
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71; //teal green border bottom for nav words on hover
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)` //important currently just the "sign in" button top right - teal round
  border-radius: 50px; //rounded corner on button
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px; //TOP / RIGHT / BOTTOM / LEFT
  color: #010606; //super dark robins egg blue, basically black
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606; // super dark robins egg blue basically black
  }
`;
