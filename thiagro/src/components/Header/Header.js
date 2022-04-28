import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Title } from "./styled";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {

  const Navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Title onClick={() => goToFeed(Navigate)}>Thiagro</Title>
          </Typography>
          <Button onClick={() => goToLogin(Navigate)} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header