import styled from "styled-components";
import theme from "../../../theme/theme";

export const PaginationComponent = styled.nav`
  max-width: 1260px;
  margin: 0 auto;
  padding-bottom: 2rem;
  text-align: center;
`;

export const PaginationButton = styled.a`
  color: ${theme.colors.primary};
  font-weight: 700;
  margin: 10px 20px;

  & > * {
    text-decoration: none;
  }
`;
