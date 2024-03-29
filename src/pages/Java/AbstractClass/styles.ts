import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background_gray};
  font-family: Lato, Helvetica, sans-serif;
  color: #e1e1e1;
  padding-top: 80px;

  strong {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Pre = styled.pre`
  align-self: center;
  width: 70%;
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
      font-size: 0.7rem;
    }
  }
`;
