import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  height: 100vh;
  padding-top: clamp(50px, 5vh, 280px);

  @media screen and (max-width: 768px) {
    padding: 140px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 90px 0;
  }
`;

export const TechnologiesWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    align-items: unset !important;
    padding-top: 220px;
  }

  @media screen and (max-width: 480px) {
    align-items: unset !important;
    padding-top: 50px;
  }
`;

export const TechnologiesRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  padding: 0 24px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 580px;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
  text-align: right;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TopLine = styled.div`
  color: #309de7;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 0;
  font-size: 46px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 10px;
  margin-right: 0;
  font-size: 22px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#f7f8fa")};

  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 450px;
  height: 100%;

  @media screen and (max-width: 768px) {
    max-width: 500px;
    margin-bottom: 110px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;
