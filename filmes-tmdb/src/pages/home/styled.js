import styled from "styled-components";
import sheBackGround from '../../assets/sheBackGround.jpg'

export const Header = styled.header`

   text-align: center;
   height: 10vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #001e3c;
   color: white;
   font-weight: 700;
   font-size: 3em;
   box-shadow: inset 0 0 1em black;
   font-family: 'Source Sans Pro', Arial, sans-serif;
`

export const Main = styled.main`

   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
export const ContainerCheck = styled.div`

   background-color: #79bcff;
   border-radius: 10px;
   cursor: pointer;
   margin: 1px;
   padding: 0px 0 0px 10px;
`
export const SenctionFind = styled.section`
   
   display: flex;
   align-items: center;
   justify-content: center;
   width: 80%;

`
export const input = {

   width: '95%',
   height: '80%',
   margin: '10px',
   color: 'primary.main'
}  


export const Section1 = styled.section`
   text-align: center;
   width: 100%;
   height: 100%;
   padding: 0.5vh;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   background-image: url(${sheBackGround});
   background-position: fixed;
`

export const Section2 = styled.section`

   display: flex;
   align-items: center;
   justify-content: center;
   width: 80%;
`

export const ContainerSection2 = styled.div`

   text-align: center;
   height: 84%;
   padding: 0.5vh;
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   align-content: center;
   justify-content: center;
   align-items: center;
   justify-items: normal; 

   @media (min-width: 368px) {
      grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 700px) {
      grid-template-columns: repeat(4, 1fr);
  }

`

export const Image = styled.img`
   width: 100%;
   height: 100%;
   cursor: pointer;
`  

export const DivImage = styled.div`

   height: 80%;
      
  
`  

export const Card = styled.div`


   height: 95%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;
   padding: 0vw;
   border-radius: 0 0 10px 10px;
   transition: transform 0.5s;
&:hover{
   transform: scale(1.1);
}

`

export const InfoCard = styled.div`

   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

   font-weight: 800;
   font-size: 4.5vw;

   @media (min-width: 368px) {
      grid-template-columns: repeat(2, 1fr);
      font-weight: 800;
      font-size: 10px;
  }
  @media (min-width: 700px) {
      grid-template-columns: repeat(4, 1fr);
      font-size: 1.5vw;
      font-weight: 600;
  }

`
export const Data = styled.div`

   font-weight: 400;
   font-size: 2.5vw;

@media (min-width: 368px) {
     
      font-weight: 300;
      font-size: 10px;
  }
  @media (min-width: 700px) {
      
      font-size: 1.0vw;
      font-weight: 200;
  }

`

export const Section3 = styled.section`

   text-align: center;
   height: 10%;
   width: 100%;
   padding: 0.5vh;
   display: flex;
   justify-content: center;
   align-items: center;

`
export const Footer = styled.footer`

   text-align: center;
   background-color:  #001e3c;
   color: white;
   height: 10vh;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

