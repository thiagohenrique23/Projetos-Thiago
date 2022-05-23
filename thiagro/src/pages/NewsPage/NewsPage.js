import React, { useEffect, useState } from "react";
import UseProtectPage from "../../hooks/useProtectPage";
import { ContainerNews, NewsTitle } from "./styled";

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
            <div key={news.id}>
              <h3>{news.titulo}</h3>
              <img src={news.imagens}/>
              {news.introducao}
            </div>
          )
        })}
      </ContainerNews>
    </div>
  )
}

export default NewsPage;

