import { StyledImage } from "./styles";

type ImageProps = {
  width?: string;
  height?: string;
  background?: string;
  src: string;
};

export function ImageCard(props: ImageProps) {
  const { width = "100%", height, background = "#fff", src, ...rest } = props;

  return (
    <StyledImage
      width={width}
      height={height}
      background={background}
      src={src}
      {...rest}
    />
  );
}
