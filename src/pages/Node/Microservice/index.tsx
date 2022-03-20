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

      <Section className="section section__monolithic-architecture">
        <h2>O que é arquitetura monolítica?</h2>
        <p>
          Na arquitetura monolítica há uma dependência entre os serviços de uma
          mesma aplicação. De forma “grosseira” isso é um ‘monolito’.
          <br />
          <br />
          Com a ascensão do desenvolvimento ágil, o modelo de arquitetura
          monolítica passou a não ser mais visto como melhor opção para
          aplicações robustas, uma vez que a alteração de um único serviço pode
          mexer com o funcionamento de outras features dependentes.
          <br />
          <br />
          Por ser muito mais antiga, a arquitetura monolítica ainda é usada por
          uma maior fatia do mercado de desenvolvimento de software. Cenário
          este, que está mudando exponencialmente.
        </p>
      </Section>

      <Section className="section section__api-microservice">
        <h2>A diferença entre API e microsserviços</h2>
        <p>
          Tanto a API como os microsserviços são camadas dentro de um software.
          Muitas vezes os conceitos se sobrepõe, por isso é importante entender
          que a API é uma camada criada para comunicação externa.
          <br />
          <br />
          Ou seja, pode-se dizer que escalar o software por meio de outros
          softwares é um dos seus objetivos.
          <br />
          <br />A API é a camada do meu software responsável pela troca de dados
          entre qualquer outro software externo. Já os microsserviços, que
          também são camadas, tem um intuito diferente: escalar o software
          internamente, facilitando implantação, proteção e manutenção de
          features.
        </p>
      </Section>

      <Section className="section section__why-microservice">
        <h2>Quando e por que usar microsserviços?</h2>
        <h3>Definição clara de domínios</h3>

        <p>
          Se você possui um microsserviço responsável pelo usuário, ele será a
          única referência para mexer em um dado do usuário, ou performar
          qualquer operação sobre ele.
          <br />
          <br />
          Se outro serviço responsável pelo login precisa da informação do
          usuário, ele tem que estritamente buscá-lo a partir do microsserviço
          de usuário.
        </p>

        <h3>Escalabilidade</h3>
        <p>
          Quando quebramos uma aplicação monolítica e grande em várias pequenas,
          possivelmente conseguimos escalá-las de forma separada.
          <br />
          <br />
          Supondo que um serviço de autenticação seja chamado várias vezes
          durante a sessão de um usuário, com certeza o stress sobre ele é
          maior.
          <br />
          <br />
          Com microsserviços, podemos escalar apenas uma parte, ao invés de ter
          que escalar a aplicação como um todo, como ocorre em uma arquitetura
          monolítica.
          <br />
          <br />
          <h3>A diversificação de tecnologia</h3>
          <p>
            Os microsserviços não necessariamente precisam ser escritos usando a
            mesma linguagem de programação.
            <br />
            <br />
            Se cabe o uso de Python em determinado microsserviço, digamos que
            seja algo ligado a processamento de dados, por que não usar?
            <br />
            <br />
          </p>
        </p>
      </Section>
    </Container>
  );
};
