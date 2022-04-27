import { Button, CircularProgress, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { ContainerInput, ContairnerImg, ButtonSignUpStyle, ContainerField, ButtonStyle } from "./styled"
import logo from "../../assets/logo.png"
import { goToSingUp } from "../../routes/coordinator";
import { Navigate, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../../services/Request";
import UseForm from "../../hooks/useForm";
import Splash from "../../assets/logo.png"

const LoginPage = () => {

  const Navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { form, onChange, clearFields } = UseForm({ email: "", password: "", })
  const [isLoading, setIsLoading] = useState(false)
  
  const submit = (event) => {
    event.preventDefault()
    login(form, clearFields, Navigate, setIsLoading)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
      document.querySelector(`.splash`).style.display = `none`
    },2500);
  })

  return (
    <ContainerInput>
    <div className="splashScreen">

    <div className="splash">
      <img src={Splash} className="fade-in" alt="animação tela inicial"/>
    </div>

    </div>

    <ContairnerImg>
      <img src={logo} alt={"Logo"} />
    </ContairnerImg>

    <form onSubmit={submit}>
      <ContainerField>
        <TextField
          name={"email"}
          placeholder="email@email.com"
          value={form.email}
          label={"E-mail"}
          type={"text"}
          required
          onChange={onChange}
          fullWidth
        />
        <TextField
          name={"password"}
          placeholder="Mínimo 6 caracteres"
          value={form.password}
          label={"Senha"}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          required
          onChange={onChange}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleShowPassword}>
                {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
              </InputAdornment>
            )
          }}
        />

        <ButtonStyle type="submit" > {isLoading ? <CircularProgress color="inherit" size={24}/> :  <>Fazer Login 😁</>}</ButtonStyle>
      </ContainerField>
    </form>

    <ButtonSignUpStyle
      onClick={() => goToSingUp(Navigate)}
    >Não possui conta ? Cadastre-se 😉
    </ButtonSignUpStyle>

  </ContainerInput>
  );
};

export default LoginPage