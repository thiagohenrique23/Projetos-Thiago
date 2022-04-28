import { Typography } from "@mui/material";
import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";


const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src="https://www.kindpng.com/picc/m/164-1647065_pc-error-pink-tumblr-aesthetic-windows-computer-aesthetic.png"/>
      <Typography color={"primary"} variant={"h4"} align={"center"}>Erro 404 - Página não encontrada</Typography>    
    </ErrorPageContainer>
  )
}

export default ErrorPage