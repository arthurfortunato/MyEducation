import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;

  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.textSection};
    font: 500 2rem "Lato", sans-serif;
    padding-bottom: 20px;
  }

  p {
    color: ${(props) => props.theme.colors.textSection};
    font: 500 1.3rem "Roboto", sans-serif;
    margin: 10px;
    text-align: center;
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
