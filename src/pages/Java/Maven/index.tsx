import { Container, Section } from "./styles";
import { Header } from "../../../components/Header";

export const Maven = () => {
  return (
    <Container>
      <Header title="Maven" />

      <Section className="section section__maven">
        <p>
          <strong>
            O Maven é um gerenciador de build e dependências baseado no conceito
            de project object model (POM). Traduzindo, ele permite configurar as
            dependências dos projetos apontando para os identificadores das
            mesmas num arquivo chamado pom.xml.
          </strong>
          <br />
          <br />
          Dessa forma, você não precisa se preocupar em procurar os arquivos
          jars das bibliotecas para adicioná-los ao classpath do seu projeto.
          Isso é feito pelo Maven, você só precisa se preocupar em informar o
          identificador daquela dependência para que ele saiba quem baixar. Além
          disso, ele gerencia os procedimentos que devem ser executados durante
          o build da sua aplicação. Pode não parecer, mas isso melhora e muito a
          vida do desenvolvedor que irá manter o projeto.
        </p>
      </Section>
    </Container>
  );
};
