import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  div {
    width: 100%;
    height: 400px;
    background: #fff;
    img {
      width: 300px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`;
