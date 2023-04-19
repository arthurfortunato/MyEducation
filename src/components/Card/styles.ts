import styled, { css } from "styled-components";

interface IContainer {
  width: string;
  height: string;
  background?: string;
  noShadow: boolean;
  src?: string;
  backgroundImage?: string;
  opacity: number;
}

export const ContainerStyled = styled.div<IContainer>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ background }) => background};
  ${({ noShadow }) =>
    !noShadow &&
    css`
      box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
    `}
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      opacity: 0.8;
      z-index: -1;
    `}
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  animation: pulse 1.2s infinite ease-in-out;
  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0.6;
    }
  }
`;