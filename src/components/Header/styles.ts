import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.colors.backgroundGradiente};
  display: flex;
  justify-content: flex-end;
  align-items: center;


  h1 {
    color: #fff;
    font: 400 1.8rem "Delicious Handrawn", sans-serif;
    padding-right: 30px;
  }
`;
