import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const classAnimal = `
  class Animal {
    public void fazerBarulho() {
      System.out.println("Barulho genérico");
    }
  }
`;

const classCachorro = `
  class Cachorro extends Animal {
    public void fazerBarulho() {
      System.out.println("Au Au");
    }
}
`;

const classGato = `
  class Gato extends Animal {
    public void fazerBarulho() {
      System.out.println("Miau");
    }
  }
`;

const classMain = `
  public class Main {
    public static void main(String[] args) {
      Animal[] animais = new Animal[2];
      animais[0] = new Cachorro();
      animais[1] = new Gato();

      for (Animal animal : animais) {
        animal.fazerBarulho();
      }
    }
  }
`;

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

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classAnimal.trim()}
  </StyledSyntaxHighlighter>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classCachorro.trim()}
  </StyledSyntaxHighlighter>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classGato.trim()}
  </StyledSyntaxHighlighter>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classMain.trim()}
  </StyledSyntaxHighlighter>,
];
