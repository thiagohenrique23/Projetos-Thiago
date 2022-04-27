import axios from "axios"
import { alerts } from '../constants/alerts'
import { BASE_URL } from "../constants/urls"
import { goToFeed } from "../routes/coordinator"

export const login = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      clear()
      setIsLoading(false)
      goToFeed(navigate)
    })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })
}

export const signUp = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true)
  axios.post(`${BASE_URL}/signup`, body, navigate)
    .then((responde) => {
      localStorage.setItem("token", responde.data.token)
      clear()
      setIsLoading(false)
      goToFeed(navigate)
    })
    .catch((error) => {
      alerts("error", error.response.data.message)
    })

}