import styled from "styled-components";

export const TrailerComponent = styled.section`
  max-width: 1260px;
  margin: -3rem auto;
  padding: 4rem 8rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    margin: 0px;
    & > iframe {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`;
