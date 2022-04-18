import { Typography } from "@material-ui/core";
import React from "react";
import { ErrorImage, ErrorPageContainer } from "./styled";


const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src="https://img.lovepik.com/free-png/20210918/lovepik-404-page-error-png-image_400217866_wh1200.png"/>
      <Typography color={"primary"} variant={"h4"} align={"center"}>Página não encontrada 😭</Typography>    
    </ErrorPageContainer>
  )
}

export default ErrorPage 