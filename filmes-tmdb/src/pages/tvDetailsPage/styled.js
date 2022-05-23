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
   font-size: 1em;
   box-shadow: inset 0 0 1em black;
   font-family: 'Source Sans Pro', Arial, sans-serif;

   @media (min-width: 300px) {
      font-size: 2em;
  }
  @media (min-width: 500px) {
      font-size: 3em;
  }
  @media (min-width: 500px) {
      font-size: 2.5em;
  }

`

export const Main = styled.main`

   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

`

export const Section1 = styled.section`
   text-align: center;
   width: 100%;
   height: 80%;
   padding: 0.5vh;
   display: flex;
   justify-content: center;
   background: url(${ props => props.backGround });
   background-size: 100%;
   background-repeat: no-repeat;
   color: white;
   padding: 20px;
   text-shadow: 0.1em 0.1em 0.2em black;
   font-size: 1.3vw;
   @media (min-width: 300px) {
      font-size: 1.3vw;
  }
  @media (min-width: 500px) {
      font-size: 1.3vw;
  }
`

export const DivOverview = styled.div`
   width: 50%;

`

export const DivImage = styled.div`
   display: flex;
   align-items: flex-end;
   height: 50%;
   width: 50%;
   `
export const Image = styled.div`
display:flex;
justify-content: center;
align-items: center;
width: 50%;
height: 50%;

img{
   object-fit: cover;
   width: 70%;
   height: 70%;
   box-shadow: 7px 5px 30px black;
   border-radius: 10px;
}
`
export const Info = styled.div`
display:flex;
justify-content: flex-start ;
align-items: flex-start;
flex-direction: column;
width: 50%;
height: 50%;
font-weight: 500;
div{
display:flex;
justify-content: flex-start ;
align-items: flex-start;
flex-direction: column;
}
`




export const Section2 = styled.section`
   flex-direction: column;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 80%;
`

export const Person = styled.div`

   margin: 10px;
   a{
      color: black;
      text-decoration: none;
   }
`

export const DivImagePerson = styled.div`

   box-shadow: 7px 5px 30px black;
   border-radius: 10px;
   width: 100px;
   height: 30%;
   cursor: pointer;
   transition: transform 0.5s;
&:hover{
   transform: scale(1.1);
}


   img{
         width: 100%;
         object-fit: cover;
      }

`

export const ContainerSection2 = styled.div`

margin: 20px;
   text-align: center;
   height: 100%;
   width: 80%;
   padding: 0.5vh;
   display: flex;
   font-weight: 400;
   overflow-y: hidden;
   overflow-x: scroll;
   font-family: 'Source Sans Pro', Arial, sans-serif;
`

export const ContainerSection3 = styled.div`

   margin: 20px;
   text-align: center;
   height: 100%;
   width: 100%;
   padding: 0.5vh;
   display: flex;
   font-weight: 400;
   font-family: 'Source Sans Pro', Arial, sans-serif;
   iframe{
      border-radius: 20px;
   }

`


export const Section3 = styled.section`

   flex-direction: column;
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
