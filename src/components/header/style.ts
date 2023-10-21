import styled from "styled-components";
import theme from "../../theme/theme";

export const HeaderComponent = styled.nav`
  background-color: ${theme.colors.primary};
  padding: 14px;
`;

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
