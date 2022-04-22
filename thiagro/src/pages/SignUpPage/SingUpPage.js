import { Button, TextField } from "@mui/material";
import React from "react";
import useForm from "../../hooks/useForm";
import { InputsContainer, LogoImage, ScreenContainer} from "./styled";
import logo from "../../assets/logo.png"
import { Navigate, useNavigate } from "react-router-dom";

const SingUpPage = () => {
  
  const [form, onChange, clear] = useForm({email: "", password: "",name: ""})

  const Navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    console.log(form)
  }
  
  return (
  <ScreenContainer>
    <LogoImage src={logo} />   
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField 
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          autoFocus
          type={"name"}
        />
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
          Fazer cadastro 😁
        </Button>
      </form>
    </InputsContainer>
  </ScreenContainer>   
  );
};

export default SingUpPage