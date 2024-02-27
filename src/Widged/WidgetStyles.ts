import styled from 'styled-components';
import { Box, Grid, Typography } from "@mui/material";

export const Root = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
});

export const CardContainer = styled(Grid)`
  width: 30%;
  margin: 10px;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`;

export const ImageContainer = styled(Grid)({
  position: "relative",
  overflow: "hidden",
});

export const ContentOverlay = styled(Box)`
  background-color: gray;
  max-width: 400px;
  position: sticky;
  margin-top: -75px;
  margin-left: 15px;
  padding: 15px;
  height: auto;
  color: white;
  font-size: 20px;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  width: 80%;

  @media screen and (max-width: 1199px) and (min-width: 768px) {
    width: 73%;
    font-size: 10px;
    margin-top: -40px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const H5 = styled(Typography)({
  color: 'black',
  margin: 'auto',
  paddingLeft: '30px',
  fontFamily: 'Roboto, sans-serif',
});
