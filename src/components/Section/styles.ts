import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    max-width: 700px;
    flex-wrap: wrap;
    text-align: justify;
  }

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.titleSection};
    font: 700 2rem "Nunito", sans-serif;
    padding-bottom: 20px;
  }

  p {
    color: ${(props) => props.theme.colors.textSection};
    font: 500 1.1rem "Roboto", sans-serif;
    margin: 10px;
    text-align: center;
    line-height: 1.7rem;
  }

  img {
   width: 90%;
  }

  @media (max-width: 600px) {
    width: 90%;
    p {
      transition: 1.8s all;
      font-size: 1rem;
    }
  }
`;
