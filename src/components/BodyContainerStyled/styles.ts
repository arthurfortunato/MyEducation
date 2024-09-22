import styled from "styled-components";

export const BodyContainerStyled = styled.div`
  max-width: 1050px;
  margin: 40px auto; /* Centraliza o container */
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
  display: flex; /* Adiciona display flex */
  flex-direction: column; /* Alinha itens na coluna */
  align-items: center; /* Centraliza horizontalmente */

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .link {
      text-decoration: none;
      p {
        color: #fff;
        font: 700 1rem "Lato", sans-serif;
        align-self: flex-start;
        margin-left: 20px;
      }
    }
  }
`;
