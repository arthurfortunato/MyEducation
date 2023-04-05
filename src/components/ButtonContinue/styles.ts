import styled from "styled-components";

export const ButtonContinueStyled = styled.button`
  margin: 20px;
  color: ${({theme}) => theme.colors.textButtonContinue};
  font: 700 1rem "Lato", sans-serif;
  cursor: pointer;
  border: 0;
  background: ${({theme}) => theme.colors.backgroundButtonContinue};
`;
