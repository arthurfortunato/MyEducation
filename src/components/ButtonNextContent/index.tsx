import { ButtonHTMLAttributes } from "react";

import { ButtonNextContentStyled } from "./styles";

export const ButtonNextContent = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonNextContentStyled {...props}>{props.children}</ButtonNextContentStyled>;
};
