import { Container, Header, Section } from "./styles";

export const JDBC = () => {
  return (
    <Container>
      <Header>
        <h1>JDBC</h1>
      </Header>

      <Section className="section section__jdbc">
        <p>
          <strong>
            O JDBC é uma API — Application Programming Interface — do Java que
            contém uma série de classes e interfaces para realizar a comunicação
            entre uma aplicação desenvolvida em Java e o banco de dados
            utilizado por ela.
          </strong>{" "}
          É um recurso antigo do Java, pois está disponível desde a versão 1.1
          do JDK — Java Development Kit —, que foi lançada em 1997.
          <br />
          <br />
          <strong>
            Na prática, o JDBC funciona como uma ponte, ou seja, é uma camada
            intermediária entre a aplicação e o banco de dados.{" "}
          </strong>
          Ele realiza a interpretação e a conversão dos comandos necessários
          para a manipulação do banco de dados, de acordo com as características
          de cada um.
          <br />
          <br />É importante dizer que é preciso utilizar o driver JDBC de
          acordo com a base de dados utilizada, ou seja, se formos utilizar um
          banco MySQL, devemos usar o JDBC apropriado para ele. Por isso, cada
          empresa desenvolvedora de banco de dados disponibiliza o seu próprio
          driver para ser utilizado no Java.
        </p>
      </Section>
    </Container>
  );
};
