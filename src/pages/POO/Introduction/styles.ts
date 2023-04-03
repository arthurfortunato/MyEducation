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
  padding-top: 80px;

  strong {
    color: #f5b324;
  }
`;

export const Pre = styled.pre`
  align-self: center;
  width: 80%;
  background: #26262a;
  padding: 10px 80px 0 0;
  font-size: 0.8rem;
  border-radius: 10px;

  code {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px 0 10px 20px;
  }

  @media (max-width: 1070px) {
    transition: 1.8s all;
    width: 100%;
    code {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 815px) {
    code {
      font-size: 0.6rem;
    }
  }
`;
