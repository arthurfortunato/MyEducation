import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
  font-family: Lato, Helvetica, sans-serif;
`;

export const BodyContainerStyled = styled.body`
  max-width: 1050px;
  margin: 40px;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
  align-self: center;

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
      }
    }
  }
`;
