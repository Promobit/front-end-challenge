import styled from "styled-components";

export const MovieListComponent = styled.section`
  max-width: 1260px;
  margin: 0 auto;
  padding: 2rem 8rem;
`;

export const MovieListContent = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
