import React, { useEffect, useState } from "react";
import UseProtectPage from "../../hooks/useProtectPage";
import { ContainerNews, ContainerNewsOne, NewsTitle, Title } from "./styled";

const NewsPage = () => {
  UseProtectPage()
  const [news, setNews] = useState([])
  
  useEffect(() => {
    fetch(`http://servicodados.ibge.gov.br/api/v3/noticias/`)
    .then(response => response.json())
    .then(data => setNews(data.items))
  })
  

  return (
    <div>
      <NewsTitle>📰 Notícias 📰</NewsTitle>
      <ContainerNews>
        {news.map(news => {
          return (
            <ContainerNewsOne key={news.id}>
              <Title>{news.titulo}</Title>
              <h4>{news.introducao}</h4>
              <h5>Link: {news.link}</h5>
            </ContainerNewsOne>
          )
        })}
      </ContainerNews>
    </div>
  )
}

export default NewsPage;

