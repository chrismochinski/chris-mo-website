import styled from "styled-components";
// import {Link} from 'react-router-dom';
import { Link as LinkS } from "react-scroll";



export const FooterContainer = styled.footer`
background-color: #101522;
`;

export const FooterWrap = styled.div`
padding: 30px 24px; //optimize height test
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;

/* @media screen and (max-width: 480px) {
  padding-top: //fix??
} */
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;


  @media screen and (max-width: 820px) {
    padding-top: 8px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
/* align-items: flex-start; */ //moved to center
margin: 8px;
text-align: center;
width: 160px;
box-sizing: border-box; //research
color: #fff;

@media screen and(max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

// export const FooterLinkTitle = styled.h1`
// font-size: 14px;
// margin-bottom: 16px;
// color: #fff;

// `;

export const FooterLink = styled(LinkS)`
color: #fff;
text-decoration: none;
margin-bottom: 9px;
font-size: 18px;
cursor: pointer;

&:hover {
    color: #29FFB9;
    transition: 0.3s ease-out; //research
}
`;

export const ResumeLink = styled.a`
color: #fff;
text-decoration: none;
margin-bottom: 9px;
font-size: 18px;
cursor: pointer;

&:hover {
    color: #29FFB9;
    transition: 0.3s ease-out; //research
}
`;



export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
margin-top: 12px;
     flex-direction: column;
    text-align: center;
  max-width: 1100px;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
    text-align: center;
  }
`;


export const WebsiteRights = styled.small`
  color: #fff;
  text-align: center;
`;

