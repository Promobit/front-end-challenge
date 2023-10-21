import styled from "styled-components";

export const RecommendationsComponent = styled.section`
  max-width: 1260px;
  margin: 4rem auto;
  padding: 4rem 8rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    margin: 0px;
  }
`;

export const RecommendationsContent = styled.div`
  display: flex;
  overflow: auto;

  & > a {
    text-decoration: none;
  }

  & > * {
    margin-right: 20px;
    flex-grow: 1;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`;
