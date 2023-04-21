import styled from "styled-components";

export const ContainerStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
`;

export const StyledSection = styled.section`
  width: 60%;

  label {
    width: 100%;
    display: flex;

    border: 1px solid #a2a2a2;
    padding: 8px;
    margin: 10px;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;

    p {
      padding-left: 10px;
      color: ${(props) => props.theme.colors.textSection};
      font: 500 0.9rem "Roboto", sans-serif;
      text-align: justify;
      line-height: 1.4rem;
    }
  }

  h2 {
    text-align: center;
    font: 700 1rem "Roboto", sans-serif;
    color: ${(props) => props.theme.colors.titleSection};
  }

  @media (max-width: 600px) {
    width: 90%;
    p {
      transition: 1.8s all;
      font-size: 0.8rem;
    }
  }
`;
