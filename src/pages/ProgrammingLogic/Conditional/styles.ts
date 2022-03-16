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
  padding-top: 80px;

  strong {
    color: #f5b324;
  }
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

  @media (max-width: 600px) {
    width: 80%;
    p {
      transition: 1.8s all;
      font-size: 1rem;
    }
  }
`;

export const Table = styled.table`
  width: 70%;
  align-self: center;
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

  @media (max-width: 560px) {
    th {
      transition: 1.8s all;
      padding: 1rem 0.8rem;
      font-size: 0.8rem;
    }
    tbody td {
      padding: 1rem 0.5rem;
      font-size: 0.8rem;
    }
  }
`;

export const Pre = styled.pre`
  align-self: center;
  width: 80%;
  background: #26262a;
  padding: 10px 50px 0 0;
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

  @media (max-width: 455px) {
    code {
      font-size: 0.65rem;
    }
  }
`;

export const Lista = styled.div`
  padding-left: 50px;
`;
