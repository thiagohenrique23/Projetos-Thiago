import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import GamePage from "../pages/GamePage/GamePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SingUpPage from "../pages/SignUpPage/SingUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<LoginPage/>} />
        <Route path="/cadastro" element={<SingUpPage/>} />
        <Route path="/feed" element={<FeedPage/>} />
        <Route path="/jogo-da-velha" element={<GamePage/>} />
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router