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
  width: 60%;
  h1 {
    text-align: center;
    font: 700 2.6rem "Lato", sans-serif;
    padding-top: 20px;
    padding-bottom: 10px;
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

    ul {
      padding-left: 20px;
    }
  }

  @media (max-width: 600px) {
    width: 90%;
    p {
      transition: 1.8s all;
      font-size: 1rem;
    }
  }
`;