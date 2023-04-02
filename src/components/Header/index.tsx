import { HeaderStyled } from "./styles";

export function Header(props: { title: string }) {
  return (
    <HeaderStyled>
      <h1>{props.title}</h1>
    </HeaderStyled>
  );
}
