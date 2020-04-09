<img src="https://i.imgur.com/6q2AiRg.png" width="500">

# Introdução

Seja bem vindo! Obrigado pelo interesse em participar do nosso processo seletivo para dev frontend no [Promobit](https://www.promobit.com.br/).

O objetivo do desafio proposto é permitir uma melhor avaliação das suas habilidades como candidato à vaga de frontend. Este desafio deve ser feito apenas por você, sua implementação poderá ser questionada em testes subsequentes.

## O desafio

Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint  `GET /movie/popular` para realizar a listagem.

Temos insights que nos dizem que os usuários dessa lista costumam ter uma melhor experiência se conseguem fazer um filtro com seu gênero favorito. Portanto, devemos permitir com que filtros de filmes por gênero sejam realizados na listagem. Note que novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, `GET
/genre/movie/list`.

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada sempre que não existir nenhum filtro de gênero ativo.

### Referencias para consulta
* https://developers.themoviedb.org/3/movies/get-popular-movies
* https://developers.themoviedb.org/3/genres/get-movie-list

## Requisitos funcionais

[] - O usuário deve ter acesso a uma listagem dos filmes mais populares do dia

[] - O usuário deve conseguir paginar a lista para encontrar novos filmes

[] - O usuário deve conseguir filtrar os filmes listados por gênero

[] - Ao realizar um filtro, a paginação deve ser desabilitada

[] - O usuário deve conseguir remover o filtro e a paginação deverá voltar a funcionar

## Requisitos não funcionais

[] - O app deverá ser hospedado em um serviço de armazenamento de conteúdo estático, como, por exemplo: [Surge](https://surge.sh/), [Netlify](https://www.netlify.com/), [ZEIT](https://zeit.co/home)

[] - O app deverá ser criado usando uma lib ou framework para construção de UIs moderno, como: [React](https://reactjs.org/), [Vue](https://vuejs.org/), [Preact](https://preactjs.com/)

[] - Na raiz do projeto, será necessário incluir um arquivo `README.md` com as instruções para construir seu projeto localmente

[] - O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge

[] - O app deverá ser responsivo

## Extras

 - Usar um framework para server-side rendering (SSR) ou static generation (SSG) como: [Next.js](https://nextjs.org/), [Gatsby](https://www.gatsbyjs.org/), [Nuxt.js](https://nuxtjs.org/)
 - Aplicar uma solução [CSS-in-JS](https://github.com/MicheleBertoli/css-in-js) ou [CSS Modules](https://github.com/css-modules/css-modules)
 - Escrever ou configurar testes de qualquer tipo para garantir a qualidade do app
 - Implemente outras funcionalidades que você acredite ser útil para o usuário

## Critérios de avaliação

- Boas práticas de desenvolvimento como: testes, design patterns, clean code
- Domínio das ferramentas e linguagens que compõe um app frontend moderno
- Conhecimento em áreas adjacentes ao frontend, como DevSecOps e UX aplicadas ao desafio
- Documentação: explicação para construir o app localmente, histórico e worflow de `git`

## Entrega

Para realizar a entrega do desafio, você deverá enviar um email para devs@promobit.com.br com o título `[Frontend Challenge] Seu nome - desafio finalizado` com o link para seu app e outro para o repósitório com seu código. Exemplo:

https://link-para-o-app

https://github.com/seu-nome/front-end-challenge.git

Não se esqueça de criar um arquivo `README.md` contendo as instruções para construir o app localmente.

## Feedback

No Promobit, valorizamos muito feedbacks. Acreditamos que o feedback é essencial para melhorar, aprender e facilitar processos. Dessa forma, assim que o seu desafio for submetido, prometemos enviar um feedback técnico em até uma semana explicando todos os pontos que acreditamos ser relevantes.

## Dúvidas

Caso haja qualquer dúvida sobre o teste, nos envie um email para devs@promobit.com.br com o título: [Frontend Challengue] O assunto desejado

---
Obrigado e bom desafio!