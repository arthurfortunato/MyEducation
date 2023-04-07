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

export const Pre = styled.pre`
  align-self: center;
  background: ${({theme}) => theme.colors.backgroundPreCode};
  padding: 10px 50px 0 0;
  font-size: 1rem;
  border-radius: 10px;

  code {
    color: ${({theme}) => theme.colors.textPreCode};
    display: flex;
    text-align: start;
    padding: 10px;
  }

  @media (max-width: 955px) {
    transition: 1.8s all;
    width: 100%;
    code {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 455px) {
    code {
      font-size: 0.65rem;
    }
  }
`;

