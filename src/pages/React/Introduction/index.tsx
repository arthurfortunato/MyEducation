import { Container, Header, Pre, Section } from "./styles";

export const IntroductionReact = () => {
  return (
    <Container>
      <Header>
        <h1>Introdução ao React</h1>
      </Header>

      <Section>
        <p>
          <h2>Inicializando com React</h2>
          O React é uma biblioteca JavaScript declarativa, eficiente e flexível
          para criar interfaces com o usuário. Ele permite compor UIs complexas
          a partir de pequenos e isolados códigos chamados “componentes”.
        </p>
      </Section>
    </Container>
  );
};
