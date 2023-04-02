import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  font: 700 3rem "Lato", sans-serif;

  strong {
    color: ${({ theme }) => theme.colors.yellow};
  }
  
  @media(max-width: 920px) {
    transition: 1.8s all;
    font-size: 2.5rem;
  }
  @media(max-width: 790px) {
    font-size: 2rem;
  }
  @media(max-width: 610px) {
    font-size: 1.5rem;
  }
  @media(max-width: 465px) {
    font-size: 1rem;
  }
  @media(max-width: 310px) {
    font-size: 0.8rem;
  }
`