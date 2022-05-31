import styled from "styled-components"

export const ContainerNews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  column-gap: 3rem ;
  row-gap: 4rem ;
`

export const NewsTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ContainerNewsOne = styled.div`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Teko', sans-serif;
`

export const Title = styled.h3`
  font-weight: bold;
`