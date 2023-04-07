import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  `O Polimorfismo é uma técnica da Orientação a Objetos
que permite tratar objetos de diferentes tipos de forma genérica, como
se fossem do mesmo tipo. Isto é possível através do uso de interfaces
e referências a objetos.`,

  `Por exemplo, considera uma classe Animal e suas subclasses Gato e
Cachorro. Se tivermos uma lista de animais, podemos chamar o método
"fazerBarulho" de cada objeto da lista, sem importar se o objeto é do
tipo Gato ou Cachorro. O método correto será chamado automaticamente,
dependendo do tipo do objeto.`,

  <PreCode>
    <code>
      {`class Animal {
      public void fazerBarulho() {
        System.out.println("Barulho genérico");
      }
    }
  `}
    </code>
  </PreCode>,

  <PreCode>
    <code>
      {`class Cachorro extends Animal {
      public void fazerBarulho() {
        System.out.println("Au Au");
      }
    }
  `}
    </code>
  </PreCode>,

  <PreCode>
    <code>
      {`class Gato extends Animal {
         public void fazerBarulho() {
           System.out.println("Miau");
         }
       }
     `}
    </code>
  </PreCode>,

  <PreCode>
    <code>
      {`public class Main {
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
  </PreCode>,
];
