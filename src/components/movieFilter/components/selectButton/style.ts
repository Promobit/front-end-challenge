import styled from "styled-components";
import theme from "../../../../theme/theme";

interface Props {
  selected?: number;
}

export const SelectButtonComponent = styled.button<Props>`
  background-color: ${({ selected }) =>
    selected ? theme.colors.hover : theme.colors.textWhite};
  padding: 8px 16px;
  border: none;
  margin: 5px 5px;
  border-radius: 3px;
  color: ${({ selected }) =>
    selected ? theme.colors.textWhite : theme.colors.textDark};
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const CloseButtonComponent = styled.button`
  margin-left: 10px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & > * {
    width: 16px;
  }
`;
