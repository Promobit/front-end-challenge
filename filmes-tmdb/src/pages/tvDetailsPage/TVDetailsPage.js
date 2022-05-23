import { useNavigate, useParams } from "react-router-dom";
import { actorsListTV, detalheTV } from "../../constants/url";
import { useRequestData } from "../../hook/useRequestData";
import {  goToDetailsPageTV } from "../../router/cordinate";
import { ContainerSection2, ContainerSection3, DivImage, DivImagePerson, DivOverview, Footer, Header, Image, Info, Main, Person, Section1, Section2, Section3 } from "./styled";

export const TVDetailsPage = () => {

   const navigate = useNavigate()

   const { id } = useParams();

   const [serieTV] = useRequestData(`${detalheTV}${id}?api_key=9e6c3df50cc7a5e4e6dd9424b942e068&language=pt-BR`)

   const [castFull] = useRequestData(`${actorsListTV}/${id}/credits?api_key=9e6c3df50cc7a5e4e6dd9424b942e068`)

   const atc = castFull && castFull.cast.filter(x => x.profile_path !== null)

   const director = castFull && castFull.crew.filter(x => x.known_for_department === "Production")

   const [trailers] = useRequestData(`${actorsListTV}/${id}/videos?api_key=9e6c3df50cc7a5e4e6dd9424b942e068&language=pt-BR`)

   const [relatedTV] = useRequestData(`${actorsListTV}/${id}/similar?api_key=9e6c3df50cc7a5e4e6dd9424b942e068&language=pt-BR`)

   const actors = atc && atc.map((actors, key) => {

      return (
         <Person key={actors.name}>
            <a target="_blank" href={`https://google.com/search?q=${actors.name}`} ><DivImagePerson>
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${actors.profile_path}`} ></img>
               {actors.name} como<br></br>
               <strong>{actors.character}</strong>

            </DivImagePerson>
            </a>
         </Person>
      )
   })
   
   const pafhVerify = (movie) => {
      
         goToDetailsPageTV(navigate, movie.id)
         window.scrollTo(0, 0);
   }

   const relatedTV1 = relatedTV && relatedTV.results.map((similar, key) => {

      return (
         <Person key={similar.id}>
            <DivImagePerson onClick={() => pafhVerify(similar)} >
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${similar.backdrop_path}`} ></img>
               <strong>{similar.name}</strong>
            </DivImagePerson>
          
         </Person>
      )
   })

   return (

      <>
         <Header>Filmes TMDB</Header>
         <Main>
            <Section1 backGround={`https://image.tmdb.org/t/p/original/${serieTV && serieTV.backdrop_path}`} >
               <DivImage>
                  <Image><img src={`https://image.tmdb.org/t/p/w220_and_h330_face${serieTV && serieTV.poster_path}`}></img>
                  </Image>
                  <Info>
                     <div>Diretor {director && director[0] && director[0].hasOwnProperty('name') && director[0].name}</div>
                     <br></br>
                     <div>Lançamento: {serieTV && serieTV.first_air_date}</div>
                     <div>Imdb: {serieTV && serieTV.vote_average}</div>
                  </Info>
               </DivImage>
               <DivOverview>Sinopse<br></br> {serieTV && serieTV.overview}</DivOverview>
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
                  {relatedTV1}
               </ContainerSection2>
            </Section3>
         </Main>

         <Footer>
            Todos os direitos reservados !
         </Footer>
      </>
   )
}

