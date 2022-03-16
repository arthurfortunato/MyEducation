import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding-top: 80px;

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

  strong {
    color: #f5b324;
  }

    @media (max-width: 920px) {
      h1 {
        transition: 1.8s all;
        font-size: 2.5rem;
      }
      p {
        transition: 1.8s all;
        font-size: 1rem;
        tex-align: left;
      }
    }
    
    @media (max-width: 790px) {
      h1 {
        font-size: 2rem;
      }
      p {
        width: 80%;
      }
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 1.5rem;
      }
    }
 
`;
