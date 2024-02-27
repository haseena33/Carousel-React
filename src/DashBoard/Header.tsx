import React from "react";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const StyledAppBar = styled(AppBar)`
  && {
    position: sticky;
    background-color:rgb(19, 103, 103);
    padding: 10px;
    font-family: 'Roboto', sans-serif;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h4">Digitelescope</Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
