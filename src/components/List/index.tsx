
import { ListStyled } from "./styles";

export const List = (props: any) => {
  return (
    <ListStyled {...props}>{props.children}</ListStyled>
  );
};
