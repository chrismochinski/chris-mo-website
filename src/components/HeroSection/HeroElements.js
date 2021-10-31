import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
background: #0c0c0c; //super dark gray on red scale - almost black
display: flex;
justify-content: center; //research
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1; //research

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2; //higher = darker
}
`;

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover; //research
object-fit: cover;
background: #232a34; //very dk gray with hint of blue 

`;

export const HeroContent = styled.div`
z-index: 3; //research
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 768px) { //shrink on smaller screen
        font-size: 40px;
    }

    @media screen and (max-width: 480px) { //shrink MORE on smallest screen
        font-size: 32px;
    }


`;

export const HeroP = styled.p`
margin-top: 12px;
color: #fff;
font-weight: 200;
font-size: 24px;
text-align: center;
max-width: 600px;


@media screen and (max-width: 768px) { //shrink on smaller screen
        font-size: 24px;
    }

    @media screen and (max-width: 480px) { //shrink MORE on smallest screen
        font-size: 18px;
    }

`;

export const HeroBtnWrapper = styled.div`
margin-top: 24px;
display: flex;
flex-direction: column;
align-items: center;
font-weight: 600;

`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;

`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;

`;