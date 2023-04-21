import styled from "styled-components";

export const ButtonNextContentStyled = styled.button`
  margin: 20px;
  background: linear-gradient(
    90deg,
    rgba(40, 31, 185, 1) 24%,
    rgba(0, 212, 255, 1) 100%
  );
  padding: 12px 65px;
  border-radius: 99px;
  border: none;
  cursor: pointer;

  font: 700 1rem "Lato", sans-serif;
  color: #fff;

  transition: 1.8s all;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: translateY(4px);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation-name: fadeIn;
  animation-duration: 4s;
  z-index: 10;
`;
