import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaTimes } from "react-icons/fa"; 


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d; //super dark gray on red scale?
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')}; //optimize
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; //optimize
`;

export const CloseIcon = styled(FaTimes)` //the close (X) button in the open nav 
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;

export const SidebarWrapper = styled.div`
color: #fff;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr; //research
grid-template-rows: repeat(6, 80px); //research --fix shrink second number, first numb ??
text-align: center;

@media screen and (max-width: 480px) { //fix breakpoint, change later //research
    grid-template-rows: repeat(6, 60px) //fix //research
}
`;

export const SidebarLink = styled(LinkS)` //react SCROLL
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1.5rem;
 text-decoration: none;
 list-style: none;
 transition: 0.2s ease-in-out;
 text-decoration: none;
 color: #fff;
 cursor: pointer;

 &:hover {
     color: #01bf71; //the same teal green
     transition: 0.2 ease-in-out;
 }
`;

export const SideBtnWrap = styled.div`
display: flex;
justify-content: center;
`;

export const SidebarRoute = styled(LinkR)` //react router link
border-radius: 50px;
background: #01bf71; //same teal green
white-space: nowrap; //https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
padding: 16px 64px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`; 