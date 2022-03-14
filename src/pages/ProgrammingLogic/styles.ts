import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font: 700 5rem "Lato", sans-serif;
  }

  p {
    width: 60%;
    font: 400 1.3rem "Lato", sans-serif;
    margin: 10px;
    text-align: justify;
    line-height: 1.7rem;
  }

    @media (max-width: 920px) {
      h1 {
        transition: 1.8s all;
        font-size: 2.5rem;
      }
      p {
        transition: 1.8s all;
        font-size: 1rem;
      }
    }
    @media (max-width: 790px) {
      h1 {
        font-size: 2rem;
      }
    }
    @media (max-width: 610px) {
      h1 {
        font-size: 1.5rem;
      }
    }
    @media (max-width: 465px) {
      h1 {
        font-size: 1rem;
      }
    }
    @media (max-width: 310px) {
      h1 {
        font-size: 0.8rem;
      }
    }
`;
