import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export const CarouselContainer = styled(Box)`
  margin: 30px;
`;

export const Cart = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0px 15px 0px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1200px) {
    padding: 5px;
  }
`;

export const CardsImage = styled.img`
  max-height: 290px;
  padding-left: 0px;
  transition: transform 0.3s ease-in-out;

  // &:hover {
  //   transform: scale(1.0);
  // }
  @media (max-width: 600px) {
    max-height: 130px; 
    max-width : 100px
  }
  @media (min-width: 601px) and (max-width:900px) {
    max-height: 200px; 
    max-width : 150px
  }
`;

export const NextArrow = styled(ArrowForwardIos)`
  color: #333;
  position: absolute;
  top: 3px;
  right: 30px;
  &:hover {
    color: #555; 
  }
`;

export const PrevArrow = styled(ArrowBackIos)`
  color: #333;
  position: absolute;
  top: 3px;
  left: 1050px;
  &:hover {
    color: #555; 
  }
`;
