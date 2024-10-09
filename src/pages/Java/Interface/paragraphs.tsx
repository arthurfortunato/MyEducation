import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const exampleInterface = `
public interface Animal {
    public void emitirSom();

    public String getTipoAnimal();
}
`;

const exampleDog = `
public class Cachorro implements Animal {
    public void emitirSom() {
      System.out.println("Au au!");
    }

    public String getTipoAnimal() {
      return "Cachorro";
    }
}

`;

export const paragraphs = [
  <p>
    Em Java, uma{" "}
    <strong>
      interface é uma coleção de métodos (sem implementação) e constantes que
      definem um conjunto de comportamentos e funcionalidades que uma classe
      concreta pode fornecer
    </strong>
    .
  </p>,
  <p>
    As <strong>interfaces</strong> são usadas para definir contratos para as
    classes, especificando quais métodos as classes devem implementar, mas não
    como eles devem ser implementados.
  </p>,
  <p>
    As <strong>interfaces</strong> permitem a criação de código mais genérico,
    polimórfico e modular, pois várias classes podem implementar a mesma
    <strong>interface</strong> e, portanto, fornecer a mesma funcionalidade de
    maneira consistente. Além disso, as <strong>interfaces</strong> são usadas
    frequentemente em Java para realizar o acoplamento fraco e reduzir a
    dependência entre classes.
  </p>,

  <p>
    Para implementar uma <strong>interface</strong> em Java, uma classe deve
    declarar explicitamente que está implementando a <strong>interface</strong>{" "}
    e fornecer implementações para todos os métodos definidos na{" "}
    <strong>interface</strong>.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleInterface.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Nesse exemplo, a <strong>interface Animal</strong> define dois métodos:
    <strong> emitirSom()</strong> e <strong>getTipoAnimal()</strong>. A{" "}
    <strong>interface</strong> não fornece nenhuma implementação desses métodos,
    apenas declara sua existência e assinatura. Qualquer classe que implemente a{" "}
    <strong>interface Animal</strong> deve fornecer uma implementação para esses
    dois métodos.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleDog.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Nesse exemplo, a <strong>classe Cachorro</strong> implementa a{" "}
    <strong>interface Animal</strong> e fornece implementações para os métodos
    <strong> emitirSom()</strong> e <strong>getTipoAnimal()</strong>. Isso
    significa que a <strong>classe Cachorro</strong> pode ser tratada como um
    <strong>Animal</strong>, pois implementa todos os métodos definidos na
    <strong>interface</strong>. Por exemplo, um método que recebe um parâmetro
    do tipo <strong>Animal</strong> pode receber uma instância de{" "}
    <strong>Cachorro</strong> como argumento.
  </p>,
];
