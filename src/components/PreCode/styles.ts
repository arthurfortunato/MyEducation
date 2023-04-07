import styled from "styled-components";

export const Pre = styled.pre`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.backgroundPreCode};
  padding: 10px 50px 0 0;
  font: 500 1rem "Roboto", sans-serif;
  border-radius: 10px;

  code {
    color: ${({ theme }) => theme.colors.textPreCode};
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
    padding: 10px 20px 0 0;
    code {
      font-size: 0.65rem;
    }
  }
`;
