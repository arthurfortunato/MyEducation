import { BodyContainerStyled } from "./styles";

export const BodyContainer = (props: any) => {
  return <BodyContainerStyled {...props}>{props.children}</BodyContainerStyled>;
};
