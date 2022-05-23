import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { actorsList, detalhe, video } from "../../constants/url";
import { useRequestData } from "../../hook/useRequestData";
import { goToDetailsPageMovie } from "../../router/cordinate";
import { ContainerSection2, Info, Image, DivImage, DivOverview, Footer, Header, Main, Section1, Section2, Section3, Person, DivImagePerson, ContainerSection3 } from "./styled";

export const MovieDetailsPage = () => {

   const navigate = useNavigate()

   const { id } = useParams();

   const [movie] = useRequestData(`${detalhe}${id}?api_key=9e6c3df50cc7a5e4e6dd9424b942e068&append_to_response=videos&language=pt-BR`)

   const [castFull] = useRequestData(`${actorsList}/${id}/casts?api_key=9e6c3df50cc7a5e4e6dd9424b942e068`)

   const [trailers] = useRequestData(`${video}/${id}/videos?api_key=9e6c3df50cc7a5e4e6dd9424b942e068&language=pt-BR`)

   const atc = castFull && castFull.cast.filter(x => x.profile_path !== null)

   const director = castFull && castFull.crew.filter(x => x.department === 'Directing')

   const [related] = useRequestData(`${actorsList}/${id}/similar?api_key=9e6c3df50cc7a5e4e6dd9424b942e068&language=pt-BR`)


   const actors = atc && atc.map((actors, key) => {

      return (
         <Person key={key}>
            <a target="_blank" href={`https://google.com/search?q=${actors.name}`} ><DivImagePerson>
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${actors.profile_path}`} ></img>
               {actors.name} como<br></br>
               <strong>{actors.character}</strong>
            </DivImagePerson></a>
         </Person>
      )
   })

   const pafhVerify = (movie) => {

      goToDetailsPageMovie(navigate, movie.id)
      window.scrollTo(0, 0);
   }

   const related1 = related && related.results.map((similar, key) => {

      return (
         <Person key={similar.id}>
            <DivImagePerson onClick={() => pafhVerify(similar)} >
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${similar.backdrop_path}`} ></img>
               <strong>{similar.title}</strong>
            </DivImagePerson>

         </Person>
      )
   })



   return (

      <>
         <Header>Filmes TMDB</Header>
         <Main>
            <Section1 backGround={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} >
               <DivImage>
                  <Image><img src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie && movie.poster_path}`}></img>
                  </Image>
                  <Info>
                     <div>Diretor {director && director[0] && director[0].hasOwnProperty('name') && director[0].name}</div>
                     <br></br>
                     <div>Lançamento: {movie && movie.release_date}</div>
                     <div>Imdb: {movie && movie.vote_average}</div>
                  </Info>
               </DivImage>
               <DivOverview>Sinopse<br></br> {movie && movie.overview}</DivOverview>
            </Section1>

            <Section2>
               <strong>Principais atores</strong>
               <ContainerSection2>
                  {actors}
               </ContainerSection2>
               <strong>Trailer</strong>
               <ContainerSection3>
                  <iframe width="1000" height="700" src={`https://www.youtube.com/embed/${trailers && trailers.hasOwnProperty('results') && trailers.results.length != 0 ? trailers.results[0].key : ''}`}
                     title="YouTube video player" allow="accelerometer; autoplay; 
                  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen="allowfullscreen"
                     mozallowfullscreen="mozallowfullscreen"
                     msallowfullscreen="msallowfullscreen"
                     oallowfullscreen="oallowfullscreen"
                     webkitallowfullscreen="webkitallowfullscreen">
                  </iframe>
               </ContainerSection3>

            </Section2>

            <Section3>
            <strong>Relacionados</strong>
               <ContainerSection2>
                  {related1}
               </ContainerSection2>
            </Section3>

         </Main>

         <Footer>
            Todos os direitos reservados !
            <button onClick={() => console.log(director)}>xxx</button>
         </Footer>
      </>

   )

}


