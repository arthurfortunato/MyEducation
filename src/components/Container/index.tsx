import { ContainerStyled } from "./styles";

export const Container = (props: any) => {
  return <ContainerStyled {...props}>{props.children}</ContainerStyled>;
};
