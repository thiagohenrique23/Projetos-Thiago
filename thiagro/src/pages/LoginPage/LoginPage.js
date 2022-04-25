import { Button, TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer, LogoImage, ScreenContainer, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png"
import { goToSingUp } from "../../routes/coordinator";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../services/user";

const LoginPage = () => {
  
  const [form, onChange, clear] = useForm({email: "", password: ""})

  const Navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, Navigate)
  }
  return (
  <ScreenContainer>
    <LogoImage src={logo} />   
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField 
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"Email"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"email"}
        />
        <TextField 
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          type={"password"}
        />
        <Button
        type={"submit"}
        fullWidth
        variant={"contained"}
        color={"primary"}
        margin={"normal"}
        >
          Fazer Login 😁
        </Button>
      </form>
    </InputsContainer>
    <SignUpButtonContainer>
    <Button
        onClick={() => goToSingUp(Navigate)}
        type={"submit"}
        fullWidth
        variant={"text"}
        color={"primary"}
        >
          Não possui conta ? Cadastre-se 😉
        </Button>

    </SignUpButtonContainer>
  </ScreenContainer>   
  );
};

export default LoginPage