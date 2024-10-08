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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      opacity: 1;
      z-index: -1;
      border-radius: 10px;
      overflow: hidden;
    `}
`;
