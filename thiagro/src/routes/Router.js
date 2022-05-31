import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import AgroPage from "../pages/AgroPage/AgroPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import GamePage from "../pages/GamePage/GamePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import SingUpPage from "../pages/SignUpPage/SingUpPage";

const Router = ({rightButtonText,setRightButtonText}) => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route path="/" element={<LoginPage rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>}/>
        <Route path="/cadastro" element={<SingUpPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>
        <Route path="/jogo-da-velha" element={<GamePage/>}/>
        <Route path="/noticias" element={<NewsPage/>}/>
        <Route path="/agro" element={<AgroPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router