import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const exampleGenerics = `
public class Caixa<T> {
    private T item;

    public void adicionarItem(T item) {
        this.item = item;
    }

    public T getItem() {
        return item;
    }
}
`;

const exampleBox = `
Caixa<String> caixaDeStrings = new Caixa<>();
caixaDeStrings.adicionarItem("Livro");
String item = caixaDeStrings.getItem();
`;

export const paragraphs = [
  <p>
    <strong>Generics</strong> é um recurso introduzido no Java que{" "}
    <strong>
      permite que classes, interfaces e métodos sejam parametrizados com tipos
    </strong>
    . Isso significa que você pode criar uma classe ou método que funcione com
    diferentes tipos de dados, mantendo a segurança de tipo durante a
    compilação. O principal objetivo dos <strong>generics</strong> é oferecer
    <strong>
      reutilização de código e verificar a consistência dos tipos em tempo de
      compilação
    </strong>
    , evitando erros relacionados a tipos.
  </p>,
  <p>
    Antes dos <strong>Generics</strong>, você teria que usar o tipo{" "}
    <strong>Object</strong> para criar estruturas de dados que suportassem
    diferentes tipos. No entanto, isso forçava o uso de casting ao recuperar os
    objetos e não prevenia erros de tipo em tempo de compilação. Com{" "}
    <strong>Generics</strong>, você pode especificar o tipo de dado que uma
    classe ou método aceitará, eliminando a necessidade de casting explícito e
    garantindo a segurança de tipo.
  </p>,
  <p>
    O uso de Generics é indicado pelo operador <strong>{"<>"}</strong>, onde
    você define o tipo. Por exemplo:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleGenerics.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Neste exemplo, <strong>T</strong> é um tipo genérico. Quando você criar uma
    instância da classe Caixa, você poderá especificar qual será o tipo de{" "}
    <strong>T</strong>.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleBox.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Aqui, o tipo <strong>T</strong> é substituído por <strong>String</strong>. O
    compilador garante que apenas <strong>String</strong> pode ser adicionado à{" "}
    <strong>{"Caixa<String>"}</strong>, prevenindo erros.
  </p>,

  <h3>Benefícios dos Generics</h3>,

  <ul>
    <li>
      <strong>Reutilização de código:</strong> Você pode criar classes e métodos
      que funcionam com diferentes tipos sem precisar duplicar o código.
    </li>
    <li>
      <strong>Segurança de tipo em tempo de compilação:ă</strong> O Java
      verifica o tipo em tempo de compilação, o que ajuda a evitar erros de
      tipo, como tentar adicionar um Integer a uma lista de String.
    </li>
    <li>
      <strong>Remoção de casting:</strong> Com Generics, não há necessidade de
      fazer casting ao recuperar objetos, já que o tipo é conhecido.
    </li>
  </ul>,

  <p>
    <strong>Generics</strong> em Java permite escrever código flexível e
    reutilizável, enquanto ainda mantém a segurança de tipo em tempo de
    compilação. Ele é amplamente utilizado em coleções como List, Set, Map, e em
    APIs que requerem tipos diferentes dependendo da aplicação.
  </p>,
];
