import styled from "styled-components";
import theme from "../../theme/theme";

export const MovieFilterComponent = styled.section`
  background-color: ${theme.colors.secondary};
`;

export const MovieFilterContent = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 4rem 8rem;
  text-align: center;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    text-align: start;
  }
`;

export const TitleComponent = styled.h1`
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const GenreList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 600px) {
    justify-content: start;
  }
`;
