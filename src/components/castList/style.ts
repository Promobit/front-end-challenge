import styled from "styled-components";

export const CastListComponent = styled.section`
  max-width: 1260px;
  margin: 4rem auto;
  padding: 4rem 8rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    margin: 0px;
  }
`;

export const CastListContent = styled.ul`
  display: flex;
  overflow: auto;

  & > * {
    margin-right: 10px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
`;
export const CardCast = styled.li`
  list-style: none;
  background-color: white;
  padding: 8px;
  border-radius: 5px;

  & > img {
    width: 130px;
    height: 170px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;
