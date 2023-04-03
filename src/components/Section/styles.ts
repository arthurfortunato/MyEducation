import styled from "styled-components";

export const StyledSection = styled.section`
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
