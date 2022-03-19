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
            Escrever manipuladores para solicitações com diferentes verbos HTTP
            em diferentes caminhos de URL (rotas).
          </li>
          <li>
            Integrar com motores de renderização "ver" para gerar respostas
            inserindo dados em modelos.
          </li>
          <li>
            Definir configurações comuns de aplicativos web, como a porta para
            usar para conexão, e a localização de modelos que são usados para
            renderizar a resposta.
          </li>
          <li>
            Adicionar "middleware" de processamento de solicitação adicional em
            qualquer ponto dentro do pipeline de manipulação de solicitações.
          </li>
        </ul>
      </Section>

      <Section className="section section__express-code">
        <h2>Como é o código Express?</h2>
        <p>
          Em um site tradicional orientado por dados, um aplicativo da Web
          aguarda por solicitações HTTP do navegador da Web (ou de outro
          cliente). Quando uma solicitação é recebida, o aplicativo trabalha
          qual ação é necessária com base no padrão de URL e, possivelmente,
          informações associadas contidas em dados ou dados. Dependendo do
          necessário, ele pode então ler ou gravar informações de um banco de
          dados ou executar outras tarefas necessárias para satisfazer a
          solicitação. Em seguida, o aplicativo retornará uma resposta ao
          navegador da Web, muitas vezes criando dinamicamente uma página HTML
          para o navegador ser exibido inserindo os dados recuperados em espaços
          reservados em um modelo HTML.
          <br />
          <br />O Express fornece métodos para especificar qual função é chamada
          para um determinado verbo HTTP (, , , etc.) e padrão de URL ("Rota"),
          e métodos para especificar qual modelo ("visualização") é usado, onde
          os arquivos de modelo estão localizados e qual modelo usar para
          renderizar uma resposta. Você pode usar o Middleware Express para
          adicionar suporte para cookies, sessões e usuários,
          obtenção/parâmetros, etc. Você pode usar qualquer mecanismo de banco
          de dados suportado pelo Node (o Express não define qualquer
          comportamento relacionado ao banco de dados).
        </p>
      </Section>
    </Container>
  );
};
