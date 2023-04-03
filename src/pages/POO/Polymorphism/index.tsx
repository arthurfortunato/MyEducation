import { Container, Pre } from "./styles";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const Polymorphism = () => {
  return (
    <Container>
      <Header title="Polimorfismo"/>

      <Section>
        <p>
          O <strong>Polimorfismo</strong> é uma técnica da Orientação a Objetos
          que permite tratar objetos de diferentes tipos de forma genérica, como
          se fossem do mesmo tipo. Isto é possível através do uso de interfaces
          e referências a objetos.
          <br />
          <br />
          Por exemplo, considera uma classe Animal e suas subclasses Gato e
          Cachorro. Se tivermos uma lista de animais, podemos chamar o método
          `fazerBarulho` de cada objeto da lista, sem importar se o objeto é do
          tipo Gato ou Cachorro. O método correto será chamado automaticamente,
          dependendo do tipo do objeto.
        </p>
        <br />
        <br />
        <Pre>
          <code>
            {
              `class Animal {
                public void fazerBarulho() {
                  System.out.println("Barulho genérico");
                }
              }
            `}
          </code>
        </Pre>
        <br />
        <br />
        <Pre>
          <code>
            {
              `class Cachorro extends Animal {
                public void fazerBarulho() {
                  System.out.println("Au Au");
                }
              }
            `}
          </code>
        </Pre>
        <br />
        <br />
        <Pre>
          <code>
            {
              `class Gato extends Animal {
                public void fazerBarulho() {
                  System.out.println("Miau");
                }
              }
            `}
          </code>
        </Pre>
        <br />
        <br />
        <Pre>
          <code>
            {
              `public class Main {
                public static void main(String[] args) {
                  Animal[] animais = new Animal[2];
                  animais[0] = new Cachorro();
                  animais[1] = new Gato();

                  for (Animal animal : animais) {
                    animal.fazerBarulho();
                  }
                }
              }
            `}
          </code>
        </Pre>
      </Section>
    </Container>
  );
};
