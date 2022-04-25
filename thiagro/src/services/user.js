import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const login = (body, clear, Navigate) => {
  axios.post(`${BASE_URL}/user/login`, body)
  .then((res)=>{
    localStorage.setItem("token",res.data.token)
    clear()
    goToFeed(Navigate)
  })
  .catch((err)=>alert("Erro no Login"))
}