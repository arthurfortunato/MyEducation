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

  ul {
    padding-left: 30px;
  }
  ul li {
    padding: 10px;
  }
`;