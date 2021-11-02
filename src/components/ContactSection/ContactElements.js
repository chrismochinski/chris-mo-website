import styled from "styled-components";
import photo from '../../images/phonePhoto.jpg'

export const ContactContainer = styled.div`

/* background-image: url("../images/phonePhoto.jpg"); //fix */

  /* background: #f9f9f9; */
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`;

export const PBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover; //research
object-fit: cover;
background: #232a34; //very dk gray with hint of blue 

`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 350px;
  /* width: 100%; */
  /* max-width: 1100px; */
  /* margin-right: auto;
  margin-left: auto; */
  margin-top: 100px;

  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    margin-left: 0;
    justify-content: center;

}

    @media screen and (max-width: 480px) {
    margin-top: 35px;
    height: 280px;

  
  }
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr); //research
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`}; //research

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`}; //research
  }
`;


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TopLine = styled.div`
  color: #309DE7;
  font-size: 22px;
  line-height: 16px; //research
  font-weight: 700;
  letter-spacing: 1.4px; //research
  text-transform: uppercase; //research
  margin-bottom: 12px;
`;

export const Heading = styled.h1`

  margin-bottom: 8px;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 768px) {
    /* margin-right: 50px;  */
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    /* margin-right: 50px; */
  }
`;


export const Icon = styled.a`
font-size: 55px;
margin: 0 8px;

display: inline-block;
  position: relative;
  color: #0087ca;
 

&::after {
    content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform-origin: center;
  transition: transform 0.25s ease-out;
};

&:hover::after {
    transform: scaleX(1);
  transform-origin: center;
}

@media screen and (max-width: 768px) {
    font-size: 55px;
    /* margin-right: 50px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
    /* margin-right: 50px; */
  }
`;

export const IconRow = styled.div`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;



