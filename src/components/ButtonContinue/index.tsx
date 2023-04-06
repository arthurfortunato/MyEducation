import { ButtonHTMLAttributes, useEffect } from "react";

import { ButtonContinueStyled } from "./styles";

export const ButtonContinue = (
  props: ButtonHTMLAttributes<HTMLButtonElement>
) => {
  useEffect(() => {
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, []);

  return (
    <ButtonContinueStyled {...props}>{props.children}</ButtonContinueStyled>
  );
};
