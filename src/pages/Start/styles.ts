import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #000;
  opacity: 0.8;

  .link-start {
    text-decoration: none;
    color: #000;
    font: 700 2rem "Nunito", sans-serif;
  }
`;

export const ButtonStart = styled.div`
  width: 150px;
  height: 150px;
  background: yellow;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
  &:active {
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;
