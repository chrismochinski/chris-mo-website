import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

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

export const NavLogo = styled(LinkS)`

  color: #29FFB9; //important 
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;


  &:hover {
    color: #fff;
    transition: all 0.4s ease-in-out;

  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;



export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  
  &.active {
    border-bottom: 3px solid #309DE7;
    
  }
`;


export const NavBtnLink = styled.a` //download resume link top right
  border-radius: 10px; //rounded corner on button
  background: #309DE7;
  white-space: nowrap;
  padding: 10px 14px; //TOP / RIGHT / BOTTOM / LEFT
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






// import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

// export const Nav = styled.nav`
//   background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
//   height: 80px;
//   margin-top: -80px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;

//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// export const NavLogo = styled(LinkR)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   margin-right: -22px;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavLinks = styled(LinkS)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid #309DE7;
//   }
// `;


// export const NavBtnLink = styled(LinkR)` //important currently just the "sign in" button top right - teal round
//   border-radius: 50px; //rounded corner on button
//   background: #309DE7;
//   white-space: nowrap;
//   padding: 10px 22px; //TOP / RIGHT / BOTTOM / LEFT
//   color: #010606; //super dark robins egg blue, basically black
//   font-size: 16px;
//   font-weight: 600;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606; // super dark robins egg blue basically black
//   }
// `;
