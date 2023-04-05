import styled from 'styled-components';

type ImageProps = {
  width?: string;
  height?: string;
  background?: string;
};

export const StyledImage = styled.img<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
`;