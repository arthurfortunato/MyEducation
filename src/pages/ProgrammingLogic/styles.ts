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

export const Pre = styled.pre`
  align-self: center;
  width: 80%;
  background: #26262a;
  padding: 10px 80px 0 0;
  font-size: 1rem;
  border-radius: 10px;

  code {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  @media (max-width: 955px) {
    transition: 1.8s all;
    width: 100%;
    code {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 570px) {
    code {
      font-size: 0.57rem;
    }
  }
`;
