import { Button, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { goToAgro, goToGame, goToMovie, goToNews } from "../../routes/coordinator";
import { ContainerButton, ContairnerImg } from "./styled";
import logo from "../../assets/logo.png"
import UseProtectPage from "../../hooks/useProtectPage";

const FeedPage = () => {

  const Navigate = useNavigate()
  UseProtectPage()

  return (
  <div>
      <ContairnerImg>
        <img src={logo} alt={"Logo"} />
      </ContairnerImg>

      <Typography align="center" variant="h2" component="div" sx={{ flexGrow: 1 }}>
        Thiagro é tech, Thiagro é pop, Thiagro é tudo 🐮 
      </Typography>

    <ContainerButton>
      
      <Button variant="contained" color={"primary"} margin={"normal"} onClick={() => goToNews(Navigate)}>Notícias</Button>

      <Button variant="contained" color={"primary"} margin={"normal"} onClick={() => goToGame(Navigate)}>Jogo da Velha</Button>

      <Button variant="contained" color={"primary"} margin={"normal"} onClick={() => goToAgro(Navigate)}>Produtos Agro</Button>
    </ContainerButton>
  </div>  
  );
};

export default FeedPage