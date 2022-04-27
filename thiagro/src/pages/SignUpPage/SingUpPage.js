import { Button, CircularProgress, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { ErrorPassword, InputsContainer, LogoImage, ScreenContainer} from "./styled";
import logo from "../../assets/logo.png"
import { Navigate, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signUp } from "../../services/Request";
import UseForm from "../../hooks/useForm";

const SingUpPage = () => {
  
  const Navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const { form, onChange, clearFields } = UseForm({ name: "", email: "",cpf: "",password: "",confirmation: ""})
  const [isLoading, setIsLoading] = useState(false)
  const body = {
    name: form.name,
    email: form.email,
    cpf: form.cpf,
    password: form.password,
    confirmation: form.confirmation
  }
  
  const submit = (event) => {
    event.preventDefault()
    if (form.password === form.confirmation) {
      signUp(body, clearFields, Navigate, setIsLoading)
    }
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
  <ScreenContainer>
    <LogoImage src={logo} />
    <form onSubmit={submit}> 
    <InputsContainer>
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
          type={"text"}
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
            type={"number"}
            name={"cpf"}
            label={"CPF"}
            placeholder="000.000.000-00"
            inputProps={{pattern: '^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}', title: "O CPF precisa conter no mínimo 11 dígitos!"}}
            value={form.cpf}
            onChange={onChange}
            required
            margin={"normal"}
            fullWidth
          />
       <TextField
            name={"password"}
            label={"Senha"}
            placeholder="Mínimo 6 caracteres"
            inputProps={{ pattern: '^.{6,}', title: "A senha deve conter no mínimo 6 caracteres!" }}
            value={form.password}
            onChange={onChange}
            variant="outlined"
            required
            margin={"normal"}
            fullWidth
            InputLabelProps={{shrink: true,}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleShowPassword}>
                  {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                </InputAdornment>
              )
            }}
          />

          <TextField
            error={
              form.password !== form.confirmation && true
            }
            id="outlined-error-helper-text"
            name={"confirmation"}
            placeholder="Confirmar a senha anterior"
            value={form.confirmation}
            label={"Confirmar"}
            type={showPassword ? "text" : "password"}
            inputProps={{ pattern: '^.{6,}', title: "A senha deve conter no mínimo 6 caracteres!" }}
            InputLabelProps={{shrink: true,}}
            variant="outlined"
            required
            margin={"normal"}
            fullWidth
            onChange={onChange}
            helperText={form.confirmation !== ""
              && form.password !== form.confirmation
              && <ErrorPassword >Deve ser a mesma que a anterior.</ErrorPassword>}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" onClick={handleShowPassword}>
                  {showPassword ? <Visibility cursor="pointer" /> : <VisibilityOff cursor="pointer" />}
                </InputAdornment>
              )
            }}
          />
        
        <Button variant="contained" color={"primary"} margin={"normal"} type="submit" fullWidth> {isLoading ? <CircularProgress color="inherit" size={24}/> : <>Fazer cadastro 😁</>}</Button>
    </InputsContainer>
    </form>  
  </ScreenContainer>   
  );
};

export default SingUpPage