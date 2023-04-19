import { ContainerStyled } from "./styles";

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
  return (
    <ContainerStyled
      width={width}
      height={height}
      noShadow={noShadow}
      background={background}
      backgroundImage={backgroundImage}
      opacity={opacity}
    >
      <img src={backgroundImage} loading="lazy" alt="background cards"/>
      {children}
    </ContainerStyled>
  );
};
