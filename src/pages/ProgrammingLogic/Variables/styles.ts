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
