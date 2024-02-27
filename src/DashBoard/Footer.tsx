import React from "react";
import { styled } from '@mui/system';
import { Typography, Link, Container } from "@mui/material";

const FooterContainer = styled('footer')({
  backgroundColor: 'rgb(19, 103, 103)',
  padding: '20px',
  textAlign: 'center',
  color: 'white',

  '@media (max-width: 768px)': {
    padding: '10px',
  },
});

const StyledLink = styled(Link)({
  cursor: 'pointer',
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'left',
  margin: '5px 0',
  // color:"white",
  display: 'inline',
  '&:not(:last-child)': {
    marginRight: '20px',
    textDecoration: 'underline',
  },

  '@media (max-width: 768px)': {
    marginRight: '10px',
    marginBottom: '10px',
  },
});

const Copyright = styled(Typography)({
  fontFamily: 'Roboto, sans-serif',
  fontSize:"25px"
});

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <StyledLink>Help And Support</StyledLink>
      <StyledLink>FAQs</StyledLink>
      <StyledLink>Return Policy</StyledLink>
      <StyledLink>B2B Orders</StyledLink>
      <Container>
        <Copyright variant="h4">&copy; {new Date().getFullYear()} Digitelescope. All rights reserved.</Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
