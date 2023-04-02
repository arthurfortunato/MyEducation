import { Container, Pre, Section } from "./styles";
import { Header } from "../../../components/Header"; 

export const Interface = () => {
  return (
    <Container>
      <Header title="Interface"/>

      <Section className="section section__interface">
        <p>
          Em Java, uma{" "}
          <strong>
            interface é uma coleção de métodos (sem implementação) e constantes
            que definem um conjunto de comportamentos e funcionalidades que uma
            classe concreta pode fornecer
          </strong>
          .
          <br />
          <br />
          As interfaces são usadas para definir contratos para as classes,
          especificando quais métodos as classes devem implementar, mas não como
          eles devem ser implementados.
          <br />
          <br />
          <strong>
            As interfaces permitem a criação de código mais genérico,
            polimórfico e modular, pois várias classes podem implementar a mesma
            interface e, portanto, fornecer a mesma funcionalidade de maneira
            consistente
          </strong>
          . Além disso, as interfaces são usadas frequentemente em Java para
          realizar o acoplamento fraco e reduzir a dependência entre classes.
          Para implementar uma interface em Java, uma classe deve declarar
          explicitamente que está implementando a interface e fornecer
          implementações para todos os métodos definidos na interface.
        </p>
        <br />
        <br />
        <Pre>
          <code>
            {`
              public interface Animal {
                public void emitirSom();

                public String getTipoAnimal();
              }
            `}
          </code>
        </Pre>
        <br />
        <br />
        <p>
          Nesse exemplo, a interface Animal define dois métodos: emitirSom() e
          getTipoAnimal(). A interface não fornece nenhuma implementação desses
          métodos, apenas declara sua existência e assinatura. Qualquer classe
          que implemente a interface Animal deve fornecer uma implementação para
          esses dois métodos.
        </p>

        <br />
        <br />

        <Pre>
          <code>
            {`
              public class Cachorro implements Animal {
                public void emitirSom() {
                  System.out.println("Au au!");
                }
              }

              public String getTipoAnimal() {
                return "Cachorro";
              }
            `}
          </code>
        </Pre>

        <br />
        <br />

        <p>
          Nesse exemplo, a classe Cachorro implementa a interface Animal e
          fornece implementações para os métodos emitirSom() e getTipoAnimal().
          Isso significa que a classe Cachorro pode ser tratada como um Animal,
          pois implementa todos os métodos definidos na interface. Por exemplo,
          um método que recebe um parâmetro do tipo Animal pode receber uma
          instância de Cachorro como argumento.
        </p>
      </Section>
    </Container>
  );
};
