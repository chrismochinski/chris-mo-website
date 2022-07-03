import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
border-radius: 10px;
background: ${({primary}) => (primary ? '#309DE7' : '#010606')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 30px' : '12px 20px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '30px' : '20px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ffffff' : '#01BF71')};
  }
`;

