import { Container, Header, Section } from "./styles";

export const Microservice = () => {
  return (
    <Container>
      <Header>
        <h1>Microservice</h1>
      </Header>

      <Section className="section section__microservice">
        <h2>O que são Microsserviços?</h2>
        <p>
          Quando alguém fala em microsserviços, está falando basicamente em uma
          arquitetura. A Arquitetura de Microsserviços.
          <br />
          <br />
          Com eles, as aplicações são desmembradas em componentes mínimos e
          independentes.
          <br />
          <br />
          Diferentemente da abordagem tradicional monolítica em que toda a
          aplicação é criada como um único bloco, os microsserviços são
          componentes separados que trabalham juntos para realizar as mesmas
          tarefas.
          <br />
          <br />
          Cada um dos componentes ou processos é um microsserviços. A vertente
          da arquitetura de microsserviços valoriza a granularidade e, claro,
          uma aplicação bem mais leve.
        </p>
      </Section>
    </Container>
  );
};
