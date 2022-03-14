import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #37373c;
  font-family: Lato, Helvetica, sans-serif;
  color: #e1e1e1;
`;

export const Header = styled.header`
  h1 {
    text-align: center;
    font: 700 2.6rem "Lato", sans-serif;
    padding-top: 20px;
    padding-bottom: 10px;
  }
`;

export const Section = styled.section`
  width: 60%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
    font: 500 2rem "Lato", sans-serif;
    padding-bottom: 20px;
  }

  p {
    font: 400 1.3rem "Lato", sans-serif;
    margin: 10px;
    text-align: justify;
    line-height: 1.7rem;
  }
`;

export const Table = styled.table`
  thead tr th:first-child,
  tbody tr td:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }

  th {
    background: #26262a;
    font-weight: normal;
    padding: 1rem 2rem;
  }

  tbody tr {
    opacity: 0.7;
    text-align: center;
  }

  tbody tr:hover {
    opacity: 1;
  }

  tbody td {
    background: #26262a;
    padding: 1rem 2rem;
  }
`;

export const Pre = styled.pre`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 50%;
    background: #26262a;
    padding: 10px 50px 0 0;
    font-size: 1rem;
    border-radius: 10px;

    code {
      padding: 10px 50px 10px 0;
    }
`;

export const Lista = styled.div`
    padding-left: 50px;
`
