import styled from "styled-components";
import { FaRegArrowAltCircleDown, FaArrowAltCircleDown } from "react-icons/fa";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  padding: 0 30px;
  height: 100vh;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
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
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 30px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media screen and (max-width: 768px) {
    padding: 4px 12px;
  }

  @media screen and (max-width: 480px) {
    padding: 4px 8px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 80px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
`;

export const HeroP = styled.p`
  margin-top: 16px;
  color: #fff;
  font-weight: 400;
  font-size: 30px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: left;
  font-weight: 400;
`;

export const ArrowForward = styled(FaArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(FaRegArrowAltCircleDown)`
  margin-left: 8px;
  font-size: 20px;
`;
