import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 920px) {
    height: 100%;
  }

  main {
    width: 90%;
    h1 {
      text-align: center;
      padding-top: 20px;
      font: 700 4rem "Lato", sans-serif;
    }

    p {
      font: 400 1.3rem "Lato", sans-serif;
      padding: 10px 20px 0 20px;
      text-align: justify;
      line-height: 1.7rem;
    }

    strong {
      color: #f5b324;
    }

    img {
      width: 100%;
      height: 85%;
    }

    @media (max-width: 920px) {
      height: 100%;
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

    @media (max-width: 500px) {
      h1 {
        font-size: 1.5rem;
      }
    }
  }
`;
