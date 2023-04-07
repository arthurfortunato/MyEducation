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

export const Table = styled.table`
  width: 100%;

  thead tr th:first-child,
  tbody tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  th {
    background: ${({ theme }) => theme.colors.backgroundTable};
    font-weight: normal;
    color: ${({ theme }) => theme.colors.textPreCode};
    padding: 0.5rem 2rem;
  }

  tbody tr {
    opacity: 0.7;
    text-align: center;
  }

  tbody tr:hover {
    opacity: 1;
  }

  tbody td {
    background: ${({ theme }) => theme.colors.backgroundTable};
    padding: 0.5rem 3rem;
    color: ${({ theme }) => theme.colors.textPreCode};
    font-size: 0.8rem;
  }

  @media (max-width: 560px) {
    th {
      transition: 1.8s all;
      padding: 0.5rem 0.5rem;
      font-size: 0.8rem;
    }
    tbody td {
      padding: 0.5rem 0.5rem;
      font-size: 0.7rem;
    }
  }
`;
