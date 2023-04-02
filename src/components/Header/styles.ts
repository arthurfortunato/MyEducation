import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 60%;
  h1 {
    text-align: center;
    font: 700 2.6rem "Lato", sans-serif;
    padding-top: 20px;
    padding-bottom: 10px;
  }

  @media (max-width: 600px) {
    transition: 1.8s all;
    width: 80%;
  }
`;