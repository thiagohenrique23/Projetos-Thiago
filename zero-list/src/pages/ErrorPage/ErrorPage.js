import { Typography } from "@material-ui/core";
import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";


const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src="https://i.pinimg.com/originals/70/3f/b4/703fb43d48efb9fe14a6ee8bf433b968.png"/>
      <Typography color={"primary"} variant={"h4"} align={"center"}>Erro 404 - Página não encontrada</Typography>    
    </ErrorPageContainer>
  )
}

export default ErrorPage