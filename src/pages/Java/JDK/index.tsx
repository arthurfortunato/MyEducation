import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const JDK = () => {
  return (
    <Container>
      <Header title="JDK"/>

      <Section>
        <p>
          <strong>
            O Java Development Kit (JDK) é um conjunto de ferramentas de
            desenvolvimento para a linguagem de programação Java.
          </strong>{" "}
          Ele é composto de diversas ferramentas e utilitários, incluindo o
          compilador de Java, o depurador, o javadoc (gerador de documentação),
          entre outros.
          <br />
          <br />
          <strong>
            O JDK é utilizado por desenvolvedores para criar, compilar e
            executar aplicativos em Java. Ele é necessário para desenvolver
            aplicativos Java, pois contém todas as ferramentas necessárias para
            compilar e executar código Java.
          </strong>
          <br />
          <br />
          Além disso, o JDK é uma plataforma independente, o que significa que
          os aplicativos desenvolvidos nele podem ser executados em qualquer
          plataforma que suporte o Java, desde que a máquina virtual Java (JVM)
          esteja instalada.
          <br />
          <br />O JDK é disponibilizado gratuitamente pela Oracle Corporation,
          que é a mantenedora oficial da linguagem de programação Java.
        </p>
      </Section>

      <Section>
        <h2>JVM x JDK</h2>
        <p>
          A JVM (Java Virtual Machine) e o JDK (Java Development Kit) são duas
          tecnologias importantes na plataforma Java, mas servem propósitos
          diferentes.
          <br />
          <br />
          <strong>
            A JVM é uma máquina virtual que permite a execução de aplicações
            Java em diferentes sistemas operacionais.
          </strong>{" "}
          Ela é responsável por interpretar o código bytecode gerado pela
          compilação do código fonte Java e executá-lo em uma plataforma
          específica.
          <br />
          <br />
          Por outro lado, o JDK é uma coleção de ferramentas de desenvolvimento
          Java que inclui a JVM, bem como outras ferramentas importantes, como o
          compilador javac, o utilitário jar, o debugger jdb e a biblioteca de
          classes padrão Java.{" "}
          <strong>
            O JDK é o que você precisa instalar para desenvolver aplicações Java
            e compilá-las para o formato bytecode que pode ser executado pela
            JVM.
          </strong>
          <br />
          <br />
          Em resumo, a JVM é uma parte importante do sistema Java que permite a
          execução de aplicações Java, enquanto o JDK é uma coleção de
          ferramentas de desenvolvimento Java que inclui a JVM e outras
          ferramentas importantes para desenvolver e executar aplicações Java.
        </p>
      </Section>
    </Container>
  );
};
