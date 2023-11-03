FROM node
WORKDIR /src
EXPOSE 3000
ENV REACT_APP_API_URL=https://api.themoviedb.org/3/
ENV REACT_APP_API_KEY=570d27d4670f4450c14d7d4a317d46e3
COPY package*.json .
RUN npm install
COPY . .
CMD [ "npm","run","start" ]