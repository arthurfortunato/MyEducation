import { useState } from "react";
import { ContainerStyled, Skeleton } from "./styles";

interface CardProps {
  width?: string;
  children?: React.ReactNode;
  height?: string;
  noShadow?: boolean;
  background?: string;
  backgroundImage?: string;
  opacity?: number;
}

export const Card = ({
  width = "170px",
  children,
  height = "170px",
  noShadow = false,
  background = "#fff",
  backgroundImage,
  opacity = 1,
}: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <ContainerStyled
      width={width}
      height={height}
      noShadow={noShadow}
      background={background}
      backgroundImage={backgroundImage}
      opacity={opacity}
      style={{
        backgroundImage: imageLoaded ? `url(${backgroundImage})` : "none",
      }}
    >
      {!imageLoaded && <Skeleton />}
      <img
        src={backgroundImage}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setImageLoaded(true)}
      />
      {children}
    </ContainerStyled>
  );
};
