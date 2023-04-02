import { Container, Header, Pre, Section } from "./styles";

export const AbstractClass = () => {
  return (
    <Container>
      <Header>
        <h1>Abstract Class</h1>
      </Header>

      <Section className="section section__abstract_class">
        <p>
          <strong>
            Em Java, uma classe abstrata é uma classe que não pode ser
            instanciada diretamente e que geralmente é usada como uma classe
            base para outras classes derivadas. Uma classe abstrata pode ter
            métodos abstratos, que são métodos sem implementação, e métodos
            concretos, que têm implementação definida.
          </strong>
          <br />
          <br />
          Para definir uma classe abstrata em Java, é necessário utilizar o
          modificador de acesso "abstract" na declaração da classe. Por exemplo:
        </p>
        <br />
        <br />
        <Pre>
          <code>
            {`
              public abstract class Exemplo {

                public abstract void meuMetodoAbstrato(); 
              }
              
            `}
          </code>
        </Pre>
        <br />
        <br />
        <p>
          Nesse exemplo, a classe "MinhaClasseAbstrata" é declarada como
          abstrata e possui um método abstrato "meuMetodoAbstrato()" que não tem
          implementação. Uma classe que estende essa classe abstrata deve
          implementar todos os métodos abstratos da classe pai ou também ser
          abstrata.
          <br />
          <br />
          Uma classe abstrata pode ser útil para definir uma classe base que
          possui atributos e métodos comuns a outras classes que serão derivadas
          dela, permitindo uma maior modularidade e reutilização de código no
          desenvolvimento de software.
        </p>
        <br />
        <br />
      </Section>

      <Section className="section section__abstract_class">
        <h2>Classe Abstrata x Interface</h2>
        <p>
          Em Java, tanto as classes abstratas quanto as interfaces são usadas
          para definir contratos que as classes concretas devem implementar. No
          entanto, existem algumas diferenças importantes entre elas:
          <br />
          <br />
          <strong>Implementação de métodos</strong>: Uma classe abstrata pode
          ter métodos abstratos e métodos concretos com implementação definida,
          enquanto uma interface só pode ter métodos abstratos, ou seja, sem
          implementação.
          <br />
          <br />
          <strong>Herança</strong>: Uma classe abstrata pode estender outra
          classe abstrata ou implementar uma ou mais interfaces, enquanto uma
          interface só pode estender outras interfaces.
          <br />
          <br />
          <strong>Modificadores de acesso</strong>: Os membros de uma interface
          são públicos e abstratos por padrão, enquanto uma classe abstrata pode
          ter membros com qualquer tipo de modificador de acesso (public,
          protected, private).
          <br />
          <br />
          <strong>Construtores</strong>: Uma classe abstrata pode ter
          construtores, enquanto uma interface não pode.
          <br />
          <br />
          <strong>
            Em geral, as classes abstratas são usadas quando se deseja fornecer
            uma implementação base para um conjunto de classes derivadas e para
            criar relacionamentos de herança. As interfaces, por outro lado, são
            usadas para definir um contrato que as classes devem seguir,
            permitindo que diferentes classes implementem o mesmo conjunto de
            métodos.
          </strong>
          <br />
          <br />
          Em resumo, uma classe abstrata é uma classe base que pode ter
          implementações definidas e pode ser estendida por outras classes,
          enquanto uma interface é um contrato que as classes devem seguir e
          pode ser implementada por várias classes independentes.
        </p>
      </Section>
    </Container>
  );
};
