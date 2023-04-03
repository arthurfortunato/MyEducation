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
