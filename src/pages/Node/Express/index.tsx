import { Container, Header, Pre, Section } from "./styles";

export const Express = () => {
  return (
    <Container>
      <Header>
        <h1>Express</h1>
      </Header>

      <Section className="section section__introduction">
        <h2>Introdução</h2>

        <p>
          O Express é a estrutura web do Node mais popular, e é a biblioteca
          subjacente para uma série de outras estruturas web de Node populares.
          Ele fornece mecanismos para:
        </p>

        <ul>
          <li>
            Escreva manipuladores para solicitações com diferentes verbos HTTP
            em diferentes caminhos de URL (rotas).
          </li>
          <li>
            Integre-se com motores de renderização "ver" para gerar respostas
            inserindo dados em modelos.
          </li>
          <li>
            Defina configurações comuns de aplicativos web, como a porta para
            usar para conexão, e a localização de modelos que são usados para
            renderizar a resposta.
          </li>
          <li>
            Adicione "middleware" de processamento de solicitação adicional em
            qualquer ponto dentro do pipeline de manipulação de solicitações.
          </li>
        </ul>
      </Section>
    </Container>
  );
};
