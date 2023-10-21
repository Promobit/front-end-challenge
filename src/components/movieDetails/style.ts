import styled from "styled-components";
import theme from "../../theme/theme";

export const MovieDetailsComponent = styled.section`
  background-color: ${theme.colors.secondary};
`;

export const MovieDetailsContent = styled.div`
  max-width: 1260px;
  max-height: 500px;
  margin: 0 auto;
  padding: 4rem 8rem;
  display: flex;

  & > * {
    margin: 0px 1rem;
  }

  @media (max-width: 600px) {
    padding: 3rem 1rem;
    display: block;
    margin: 0px;
    max-height: 100vh;
    text-align: center;

    & > img {
      margin-bottom: 1rem;
    }
  }
`;

export const MovieInfo = styled.p`
  color: ${theme.colors.textWhite};
  margin-top: 10px;
  text-align: start;
`;

export const MovieImage = styled.img`
  width: 380px;
  height: 500px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 186px;
    height: 250px;
  }
`;

export const SubTitle = styled.h4`
  color: ${theme.colors.textWhite};
  font-weight: 700;
  margin-top: 30px;
  text-align: start;
`;

export const CustomText = styled.p`
  color: ${theme.colors.textGray};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5%;
  margin-top: 10px;
  text-align: start;
`;

export const CreditJobsContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: 80px;
  }
`;
export const CreditsJobs = styled.div`
  line-height: 0.2;
`;
