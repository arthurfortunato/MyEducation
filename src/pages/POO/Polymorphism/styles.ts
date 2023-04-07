import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
`;

export const BodyContainerStyled = styled.body`
  max-width: 1050px;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
  align-self: center;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;