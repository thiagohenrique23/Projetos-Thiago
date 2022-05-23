import styled from "styled-components";

export const ContainerList = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 6rem;
  row-gap: 6rem;
`

export const ContainerProduts = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  border: solid black 2px;
`

export const ImgProduts = styled.img`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 13vh;
` 

export const TitleProduts = styled.h1`
  display: flex;
  font-family: "Franklin Gothic Medium", Georgia, serif;
`

export const TextProduts = styled.h3`
  display: flex;
  font-family: "Franklin Gothic Medium", Georgia, serif;
`
