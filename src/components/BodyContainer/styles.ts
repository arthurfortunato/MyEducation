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

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .fade-in {
      animation-name: fadeIn;
      animation-duration: 3s;
      visibility: visible;
    }

    .fade-in.show {
      opacity: 1;
    }
  }
`;
