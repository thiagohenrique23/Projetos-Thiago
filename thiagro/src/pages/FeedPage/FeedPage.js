import { Button, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { goToGame } from "../../routes/coordinator";
import { ContainerButton, ContairnerImg } from "./styled";
import logo from "../../assets/logo.png"

const FeedPage = () => {

  const Navigate = useNavigate()

  return (
  <div>
      <ContairnerImg>
        <img src={logo} alt={"Logo"} />
      </ContairnerImg>

      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Por enquanto um texto qualquer
      </Typography>

    <ContainerButton>
      <Button variant="contained" color={"primary"} margin={"normal"} onClick={() => goToGame(Navigate)}>Jogo da Velha</Button>

      <Button variant="contained" color={"primary"} margin={"normal"}>Qualquer coisa</Button>

      <Button variant="contained" color={"primary"} margin={"normal"}>Qualquer coisa</Button>

      <Button variant="contained" color={"primary"} margin={"normal"}>Qualquer coisa</Button>

      <Button variant="contained" color={"primary"} margin={"normal"}>Qualquer coisa</Button>

      <Button variant="contained" color={"primary"} margin={"normal"}>Qualquer coisa</Button>
    </ContainerButton>
  </div>  
  );
};

export default FeedPage