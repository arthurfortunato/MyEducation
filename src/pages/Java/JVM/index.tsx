import { Container, Header, Section } from "./styles";

export const JVM = () => {
  return (
    <Container>
      <Header>
        <h1>JVM</h1>
      </Header>

      <Section className="section section__jvm">
        <p>
          <strong>
            A JVM (Java Virtual Machine) é uma máquina virtual que permite a
            execução de aplicações Java em diferentes sistemas operacionais.
          </strong>{" "}
          A JVM é responsável por interpretar o código bytecode gerado pela
          compilação do código fonte Java e executá-lo em uma plataforma
          específica.
          <br />
          <br />
          A JVM é responsável por diversas tarefas, como gerenciamento de
          memória, verificação de tipos, segurança e gerenciamento de exceções.
          Além disso, a JVM também oferece suporte para recursos avançados, como
          multithreading, serialização e garbage collection.
          <br />
          <br />
          A JVM é composta por três componentes principais: o classloader, o
          interpretador e o mecanismo de gerenciamento de memória. O classloader
          é responsável por carregar as classes Java em memória, o interpretador
          é responsável por interpretar o bytecode Java e o mecanismo de
          gerenciamento de memória gerencia o uso da memória durante a execução
          da aplicação.
          <br />
          <br />
          <strong>
            A JVM é importante porque ela permite que aplicações Java sejam
            executadas em uma ampla variedade de plataformas, sem precisar se
            preocupar com as diferenças entre elas.
          </strong>{" "}
          Isso significa que uma aplicação Java escrita em um sistema
          operacional pode ser facilmente executada em outro, desde que haja uma
          JVM disponível para a plataforma.
        </p>
      </Section>
    </Container>
  );
};
