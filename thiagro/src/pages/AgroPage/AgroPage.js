import React from "react";
import { ContainerList, ContainerProduts, ImgProduts, TextProduts, TitleProduts } from "./styled";
import tomate from "../../assets/tomate.jpg"
import canaacucar from "../../assets/canaacucar.jpg"
import milhoverde from "../../assets/milhoverde.jpg"
import arroz from "../../assets/arroz.webp"
import trigo from "../../assets/trigo.jpg"
import leite from "../../assets/leite.jpg"
import vegetais from "../../assets/vegetais.jpg"
import soja from "../../assets/soja.jpg"
import mandioca from "../../assets/mandioca.jpg"
import beterraba from "../../assets/beterraba.webp"
import cevada from "../../assets/cevada.webp"
import suino from "../../assets/suino.png"
import melancia from "../../assets/melancia.webp"
import banana from "../../assets/banana.jpg"
import batatadoce from "../../assets/batatadoce.jpg"
import leitebufala from "../../assets/leitebufala.jpg"
import frango from "../../assets/frango.webp"
import cebola from "../../assets/cebola.jpg"
import maca from "../../assets/maca.webp"
import batata from "../../assets/batata.jpg"

const AgroPage = () => {
  return (
    <div>
      <TitleProduts>Alimentos mais produzidos no mundo. Sabe quais são?</TitleProduts>
      <ContainerList>
        <ContainerProduts>
          <TitleProduts>Cana de açúcar</TitleProduts>
          <ImgProduts src={canaacucar} alt={"Cana de açúcar"}></ImgProduts>
          <TextProduts>Rank 1</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Milho</TitleProduts>
          <ImgProduts src={milhoverde} alt={"Milho"}></ImgProduts>
          <TextProduts>Rank 2</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Arroz</TitleProduts>
          <ImgProduts src={arroz} alt={"Arroz"}></ImgProduts>
          <TextProduts>Rank 3</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Trigo </TitleProduts>
          <ImgProduts src={trigo} alt={"Trigo"}></ImgProduts>
          <TextProduts>Rank 4</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Leite</TitleProduts>
          <ImgProduts src={leite} alt={"Leite"}></ImgProduts>
          <TextProduts>Rank 5</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Batata</TitleProduts>
          <ImgProduts src={batata} alt={"Batata"}></ImgProduts>
          <TextProduts>Rank 6</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Vegetais</TitleProduts>
          <ImgProduts src={vegetais} alt={"Vegetais"}></ImgProduts>
          <TextProduts>Rank 7</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Soja</TitleProduts>
          <ImgProduts src={soja} alt={"Soja"}></ImgProduts>
          <TextProduts>Rank 8</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Mandioca</TitleProduts>
          <ImgProduts src={mandioca} alt={"Mandioca"}></ImgProduts>
          <TextProduts>Rank 9</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Beterraba</TitleProduts>
          <ImgProduts src={beterraba} alt={"Beterraba"}></ImgProduts>
          <TextProduts>Rank 10</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Tomate</TitleProduts>
          <ImgProduts src={tomate} alt={"Tomate"}></ImgProduts>
          <TextProduts>Rank 11</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Cevada</TitleProduts>
          <ImgProduts src={cevada} alt={"Cevada"}></ImgProduts>
          <TextProduts>Rank 12</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Suíno</TitleProduts>
          <ImgProduts src={suino} alt={"Suíno"}></ImgProduts>
          <TextProduts>Rank 13</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Melancia</TitleProduts>
          <ImgProduts src={melancia} alt={"Melancia"}></ImgProduts>
          <TextProduts>Rank 14</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Banana</TitleProduts>
          <ImgProduts src={banana} alt={"Banana"}></ImgProduts>
          <TextProduts>Rank 15</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Batata doce</TitleProduts>
          <ImgProduts src={batatadoce} alt={"Batata Doce"}></ImgProduts>
          <TextProduts>Rank 16</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Leite de búfala</TitleProduts>
          <ImgProduts src={leitebufala} alt={"Leite Búfala"}></ImgProduts>
          <TextProduts>Rank 17</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Frango</TitleProduts>
          <ImgProduts src={frango} alt={"Frango"}></ImgProduts>
          <TextProduts>Rank 18</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Cebola</TitleProduts>
          <ImgProduts src={cebola} alt={"Cebola"}></ImgProduts>
          <TextProduts>Rank 19</TextProduts>
        </ContainerProduts>
        <ContainerProduts>
          <TitleProduts>Maça</TitleProduts>
          <ImgProduts src={maca} alt={"Maça"}></ImgProduts>
          <TextProduts>Rank 20</TextProduts>
        </ContainerProduts>
      </ContainerList>
      <TextProduts>fonte: http://www.farmnews.com.br/mercado/alimentos-mais-produzidos-no-mundo/</TextProduts>
    </div>
  )
}

export default AgroPage