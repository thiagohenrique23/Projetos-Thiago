import styled from "styled-components"

export const ContainerNews = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`

export const NewsTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`
