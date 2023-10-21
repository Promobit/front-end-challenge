# Promobit Frontend Challenge

<img src="https://i.imgur.com/6q2AiRg.png" width="500">

![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![styled](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> Status: Finished :white_check_mark:

<img width="100%" alt="image" src="https://github.com/RafaelSilva-si/promobit-front-end-challenge/assets/77937182/dfd66366-df2d-4c4b-91d6-3ed3fecec26d">


## O desafio

[Acesse o desafio](https://github.com/Promobit/front-end-challenge) <br>
O desafio foi concluído com sucesso! Utilizei a API gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) na versão 3 para criar uma listagem dos filmes mais populares do dia. Consultei o endpoint [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para obter os dados necessários.

Ao clicar em um filme da lista, implementei outra página que exibe os detalhes completos do filme escolhido. Para acessar informações adicionais sobre o filme, fiz uso do endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Para garantir a melhor experiência do usuário, adicionei a funcionalidade de paginação à lista de filmes.

O  [layout do figma](https://www.figma.com/file/rM7WPqhLY9ObnGzSCeWLxB/Teste-Front-End) sugerido foi seguido à risca, respeitando a composição, fontes e cores. Embora não tenha buscado a perfeição em pixels, garanti que o resultado final fosse visualmente agradável e intuitivo para o usuário.


## Requisitos funcionais

* [x] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

* [x] O usuário deve conseguir paginar a lista para encontrar novos filmes

* [x] O usuário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

* [x] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa


## Requisitos não funcionais

* [x] O app deverá ser criado usando [React](https://reactjs.org/)

* [x] Na raiz do projeto, será necessário incluir um arquivo `README.md` com as instruções para construir seu projeto localmente. Opcionalmente você pode detalhar as razões pelas escolhas de ferramentas e técnicas aplicadas ao desafio.

* [x] O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

* [x] O app deverá ser responsivo

## Extras

Os insights obtidos indicam que os usuários da lista apreciam a capacidade de filtrar os filmes por seus gêneros favoritos, o que proporciona uma experiência mais gratificante. Com base nisso, implementei a funcionalidade de filtros de filmes por gênero na listagem.

Para viabilizar essa funcionalidade, consultei o endpoint [`GET /genre/movie/list`](https://developers.themoviedb.org/3/genres/get-movie-list). para obter uma lista dos gêneros disponíveis que podem ser utilizados como opções de filtro.

Assim, os usuários agora têm a opção de refinar a lista de filmes de acordo com seus gostos pessoais, proporcionando uma experiência mais personalizada e alinhada com suas preferências.

Todas as mudanças foram implementadas de forma a manter a usabilidade intuitiva e agradável para o usuário, conforme as diretrizes fornecidas no desafio.


* [x] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
* [x] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
* [x] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos

## Diferenciais

- Boas práticas de desenvolvimento como: html semântico, componentização, design patterns, clean code
- Domínio das ferramentas e linguagens que compõe um app de frontend moderno
- Documentação: explicação para construir o app localmente, histórico e workflow de git

## Instalação com Docker

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Em um terminal rode o comando `docker compose -f docker-compose.yml up`
4. Acesse http://localhost:3000/.

## Instalação Normal

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências com o comando: `npm install`.
4. Inicie o aplicativo com o comando: `npm start`.

   ![1627616883421](https://user-images.githubusercontent.com/77937182/157932279-c8aad7d0-0778-43c0-be52-b7e175d56835.gif)
