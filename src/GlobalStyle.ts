import { createGlobalStyle } from "styled-components";
import theme from "./theme/theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    color: ${theme.colors.textWhite};
    font-size: 34px;
    line-height: 35px;
    font-weight: 700;
  }

  h2 {
    color: ${theme.colors.textDark};
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
  }

  h3 {
    color: ${theme.colors.textLight};
    font-size: 12px;
    line-height: 20px;
    font-weight: 700;
  }

  .filter_label {
    font-size: 12px;
    color: ${theme.colors.textWhite};
    font-weight: 700;
    text-transform: uppercase;
    margin: 10px 0px;
  }
`;

export default GlobalStyle;
