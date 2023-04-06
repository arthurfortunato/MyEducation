import { ButtonHTMLAttributes } from "react";

import { ButtonContinueStyled } from "./styles";

export const ButtonContinue = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <ButtonContinueStyled {...props}>{props.children}</ButtonContinueStyled>
  );
};
