import { trend,findMovie } from '../../constants/url'
import { useRequestData } from '../../hook/useRequestData'
import { Card, ContainerCheck, ContainerSection2, Data, DivImage, Footer, Header, Image, input, InfoCard, Main, Section1, Section2, Section3, SenctionFind } from './styled'
import { BasicPag } from '../../components/pag'
import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import { goToDetailsPageMovie, goToDetailsPageTV } from '../../router/cordinate'

export const HomePage = () => {
   const navigate = useNavigate()
   const [page, setPage] = useState(1);
   const [textfield, setTextfield] = useState('')
   const [findMovie1, setFindmovie1] = useRequestData(`${textfield.length === 0 ? trend : findMovie}&page=${page}&query=${textfield}&language=pt-BR&region=BR`)

   const handleChange = (event, value) => {
      setPage(value);
      window.scrollTo(0, 0);
   };

   const onChangeSearchMovie = (event) => {
      setTextfield(event.target.value)
   }
   
   const pafhVerify = (movie) => {
      
      if(movie.media_type === 'tv') {
         goToDetailsPageTV(navigate, movie.id)
         window.scrollTo(0, 0)
         
      }  else {
         goToDetailsPageMovie(navigate, movie.id)
         window.scrollTo(0, 0)
      }
   }



   const movies = findMovie1 && findMovie1.results.map((movie, key) => {

      return (

         <Card key={key} >
            <DivImage>
               <Image onClick={()=> pafhVerify(movie)} type="image" src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}></Image>
            </DivImage>
            <InfoCard>
               {movie.title === undefined ? movie.name : movie.title}
            </InfoCard>
            <Data>{movie.release_date === undefined ? movie.first_air_date : movie.release_date}</Data>
            
         </Card>
      )
   })

   return (
      <>
         <Header>Filmes TMDB</Header>
         <Main>
            <Section1>
               <ContainerCheck>Açao<Checkbox /></ContainerCheck>
               <ContainerCheck>Aventura<Checkbox /></ContainerCheck>
               <ContainerCheck>Comedy<Checkbox /></ContainerCheck>
               <ContainerCheck>Crime<Checkbox /></ContainerCheck>
               <ContainerCheck>Documentary<Checkbox /></ContainerCheck>
               <ContainerCheck>Drama<Checkbox /></ContainerCheck>
               <ContainerCheck>Family<Checkbox /></ContainerCheck>
               <ContainerCheck>Fantasy<Checkbox /></ContainerCheck>
               <ContainerCheck>History<Checkbox /></ContainerCheck>
               <ContainerCheck>Horror<Checkbox /></ContainerCheck>
               <ContainerCheck>Music<Checkbox /></ContainerCheck>
               <ContainerCheck>Mystery<Checkbox /></ContainerCheck>
               <ContainerCheck>Romance<Checkbox /></ContainerCheck>
               <ContainerCheck>Science Fiction<Checkbox /></ContainerCheck>
               <ContainerCheck>TV Movie<Checkbox /></ContainerCheck>
               <ContainerCheck>Thriller<Checkbox /></ContainerCheck>
               <ContainerCheck>War<Checkbox /></ContainerCheck>
               <ContainerCheck>Western<Checkbox /></ContainerCheck>
               <SenctionFind>
               <TextField sx={input} id="filled-basic" 
               onChange={onChangeSearchMovie}
               value={textfield}
               label="Busque seu filme favorito aqui ! :D" variant="filled" />
               </SenctionFind>
            </Section1>

            <Section2>
               <ContainerSection2>
                  {movies}
               </ContainerSection2>
            </Section2>

            <Section3>
               <BasicPag
                  color="primary"
                  onChange={handleChange}
                  count={findMovie1 ? findMovie1.total_pages : 1 }
               ></BasicPag>
            </Section3>
         </Main>

         <Footer>
            Todos os direitos reservados !
         </Footer>
      </>
   )
}
