import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  main {
    width: 70%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h1 {
      text-align: center;
      padding-right: 40px;
      font: 700 4rem "Lato", sans-serif;
    }

    p {
      font: 400 1.3rem "Lato", sans-serif;
      margin: 10px;
      text-align: justify;
      line-height: 1.7rem;
    }

    strong {
      color: #2496ed;
    }

    img {
      width: 100%;
      height: 85%;
    }

    @media (max-width: 920px) {
      h1 {
        transition: 1.8s all;
        font-size: 2.5rem;
      }
      p {
        transition: 1.8s all;
        font-size: 1rem;
        text-align: left;
      }
    }

    @media (max-width: 790px) {
      h1 {
        font-size: 2rem;
      }
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
