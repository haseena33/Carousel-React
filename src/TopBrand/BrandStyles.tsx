import styled from '@emotion/styled';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/material';
interface ArrowProps {
    disabled?: boolean;
  }
   
  export const PrevArrow: React.FC<ArrowProps> = ({ disabled = false, ...rest }) => {
    return (
      <StyledArrowBackIos disabled={disabled} {...rest} />
    );
  };
   
  export const NextArrow: React.FC<ArrowProps> = ({ disabled = false, ...rest }) => {
    return (
      <StyledArrowForwardIos disabled={disabled} {...rest} />
    );
  };
   
  const StyledArrowBackIos = styled(ArrowBackIos)<ArrowProps>`
    color: ${(props) => (props.disabled ? 'gray' : 'black')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: #ccc; 
    border-radius: 50%;
    padding: 3px;
    &:hover {
          color: #555; 
       }
  `;
   
  const StyledArrowForwardIos = styled(ArrowForwardIos, { shouldForwardProp: (prop) => prop !== 'disabled' })<ArrowProps>`
    color: ${(props) => (props.disabled ? 'gray' : 'black')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: #ccc; 
    border-radius: 50%;
    padding: 3px;
    &:hover {
      color: #555; 
   }
  `;
   
export const CarouselContainer = styled(Box)`
  margin: 30px;
`;

export const BrandCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  
`;

export const BrandImage = styled.img`
  width:100%;

  // @media (max-width: 600px) {
  //   max-height: 50px; 
  // }
  // @media (min-width: 601px) and (max-width:900px){
  //   max-height: 150px; 
  // }
  // @media (min-width: 901px) and (max-width:1200px){
  //   max-height: 180px; 
  // }
`;

// export const NextArrow = styled(ArrowForwardIos)`
//   color: #333;
// //   background-color: #ccc; 
// //   padding: 5px; 
// //   border-radius: 50%; 
//   &:hover {
//     color: #555; 
//   }
// `;

// export const PrevArrow = styled(ArrowBackIos)`
//   color: #333;
// //   background-color: #ccc; 
// //   padding: 5px; 
// //   border-radius: 50%;
//   &:hover {
//     color: #555; 
//   }
// `;
