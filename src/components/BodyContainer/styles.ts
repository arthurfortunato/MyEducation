import styled from "styled-components";

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

    .fade-in {
      opacity: 0;
      transition: opacity 1.5s ease-in-out;
    }

    .fade-in.show {
      opacity: 1;
    }
  }
`;