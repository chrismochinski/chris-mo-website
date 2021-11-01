import styled from "styled-components";

export const TechnologiesContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; //first is white on a red scale

@media screen and (max-width: 768px) {
    padding: 100px 0;
}
`;

export const TechnologiesWrapper = styled.div` //important //fix THIS WILL BECOME MY TECH SCROLLER ICONS!!!!
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TechnologiesRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr); //research
align-items: center;
grid-template-areas: ${({imgStart}) => 
(imgStart ? `'col2 col1'` : `'col1 col2'`)}; //research

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => 
    (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}; //research
}
`;

export const Column1 = styled.div`
/* margin-bottom: 15px; */
padding: 0 15px;
grid-area: col1;

`;

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
text-align: right;

@media screen and (max-width: 768px) {
  text-align: center;    
  }
`;

export const TopLine = styled.div`
  color: #027BCE;
  font-size: 18px;
  /* line-height: 16px; //research */
  font-weight: 700;
  letter-spacing: 1.6px; //research
  text-transform: uppercase; //research
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 0;
font-size: 40px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};


@media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.p`
/* max-width: 440px; //research */
margin-top: 10px;
margin-right: 0;
font-size: 22px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#f7f8fa')};

@media screen and (max-width: 768px) {
  text-align: center; 
  font-size: 18px;   
  }
`;

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start; //research
`;

export const ImgWrap = styled.div`
max-width: 450px;
height: 100%;

@media screen and (max-width: 768px) {
  max-width: 500px;
  }
`;


export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;

