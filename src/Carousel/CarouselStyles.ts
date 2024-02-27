import styled from 'styled-components';
import { Box } from '@mui/material';

export const CarouselContainer = styled(Box)`
  position: relative;
  width: 90%;
  margin: auto;
  margin-top: 30px;
`;

export const DotsContainer = styled(Box)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  padding-bottom: 0;
  border-radius: 13px;
  display: inline-block;
  align-items: center;
`;

export const CustomDot = styled(Box)`
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 8px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #fff;
    width: 15px;
    height: 15px;
  }
`;

export const SlickArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border-radius: 60%;
  cursor: pointer;
  font-size: 20px;
  color: black;
  outline: none;
`;

export const ArrowPrev = styled(SlickArrow)`
  left: 10px;
`;

export const ArrowNext = styled(SlickArrow)`
  right: 10px;
`;

export const Image = styled(Box)`
  border-radius: 15px;
  overflow: hidden;
  height: auto;
`;
