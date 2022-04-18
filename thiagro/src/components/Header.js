import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolBar } from "./styled";
import { goToHome } from "../../routes/coordinator";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {

  const Navigate = useNavigate()

  return( 
    <AppBar position="static">
      <StyledToolBar>
          <Button onClick={() => goToHome(Navigate)} color="inherit">Thiagro</Button>
      </StyledToolBar>
    </AppBar>
  )  
}

export default Header 