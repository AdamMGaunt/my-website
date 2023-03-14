import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const AppHeading = styled.div`
  text-align: center;
  font-family: pacifico;
  color: #ffffff;
`;

const MyAppbar = styled.div`
  background-color: #56CCF2;
`;

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyAppbar position="static">
        <Toolbar>
          <AppHeading variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blind Munk Studios
          </AppHeading>
        </Toolbar>
      </MyAppbar>
    </Box>
  );
}
