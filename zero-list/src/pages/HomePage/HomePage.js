import React, { useEffect, useState} from "react";
import { BASE_URL } from "../../constants/urls";
import SearchInput from "./SearchInput";
import { CardContainer, CardImg, Img, MainContainer } from "./styled";  


const HomePage = () => {
  
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if (text) {
      setInfo({});

      fetch(
        `${BASE_URL}anime?filter[text]=${text}&page[limit]=12`
      )
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    
    <MainContainer>  
      <SearchInput
          value={text}
          onChange={(search) => setText(search)}
        />
        {text && !info.data && <span>Carregando...</span>}
        {info.data && (
          <CardContainer className="animes-list">
            {info.data.map((anime) => (
              <CardImg key={anime.id}>
                <Img
                  src={anime.attributes.posterImage.small}
                  alt={anime.attributes.canonicalTitle}
                />
                {anime.attributes.canonicalTitle}
              </CardImg>
            ))}
          </CardContainer>
        )}
    </MainContainer>
  );
}

export default HomePage

