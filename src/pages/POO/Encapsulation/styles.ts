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
    width: 90%;
    p {
      transition: 1.8s all;
      font-size: 1rem;
    }
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
      font-size: 0.57rem;
    }
  }
`;
