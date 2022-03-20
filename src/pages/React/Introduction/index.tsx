import { Container, Header, Pre, Section } from "./styles";

export const IntroductionReact = () => {
  return (
    <Container>
      <Header>
        <h1>Introdução ao React</h1>
      </Header>

      <Section className="section section__introduction">
        <p>
          O React é uma biblioteca JavaScript declarativa, eficiente e flexível
          para criar interfaces com o usuário. Ele permite compor UIs complexas
          a partir de pequenos e isolados códigos chamados “componentes”.
          <br />
          <br />A meta primária do React é minimizar os erros que ocorrem quando
          os desenvolvedores estão construindo UIs(User Interface). Isto é
          devido ao uso de componentes - autocontidos, partes lógicas de códigos
          que descrevem uma parte da interface do usuário. Estes componentes são
          adicionados para criar uma UI completa e o React concentra muito do
          trabalho de renderizar, proporcionando que se concentre no projeto de
          UI.
          <br />
          <br />
          React não implementa regras restritas no código como convenções ou
          organizações de arquivos. Isto permite que times criem convenções
          próprias que melhor se adequem e para adotar o React do jeito que
          desejar. React pode manusear um botão único, poucas partes da
          interface ou a interface inteira de um app.
        </p>
      </Section>

      <Section className="section section__inicialize">
        <h2>Inicializando o React</h2>
        <p>
          O create-react-app leva apenas um argumento: o nome que você quer dar
          ao seu aplicativo. create-react-app utiliza este nome para criar uma
          nova pasta, e então cria os arquivos necessários para o funcionamento
          do seu aplicativo dentro desta pasta.
        </p>

        <br/>

        <Pre>
          <code>npx create-react-app nome-do-projeto</code>
        </Pre>

        <br/>
        
        <p>
          Isto criará a pasta moz-todo-react, e também faz mais algumas coisas
          dentro desta:
          <br />
          Instala alguns pacotes npm essenciais para a funcionalidade do app.
          <br />
          Escreve scripts para iniciar e servir a aplicação.
          <br />
          Cria a estrutura de arquivos e pastas que define a arquitetura básica
          do aplicativo.
          <br />
          Inicializa o diretório como um repositório git, se você tem o git
          instalado em seu computador.
        </p>
      </Section>
    </Container>
  );
};
