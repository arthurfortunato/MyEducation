import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const example = `
@Getter @Setter
public class Animal {
  private String nome;
  private int idade;
  
  public Animal(String nome, int idade) {
      this.nome = nome;
      this.idade = idade;
  }
}

@Getter @Setter
public class Gato extends Animal {
  private String raca;
  
  public Gato(String nome, int idade, String raca) {
      super(nome, idade);
      this.raca = raca;
  }
}

//exemplo
Gato meuGato = new Gato("Mia", 2, "Siamês");
System.out.println("Meu gato " + 
meuGato.getNome() + 
" é da raça " 
+ meuGato.getRaca());
`;

export const paragraphs = [
  <strong>
    A Herança é um mecanismo da Orientação a Objetos que permite que uma classe
    (chamada classe filha ou subclasse) herde as propriedades e métodos de outra
    classe (chamada classe pai ou superclasse).
  </strong>,

  <p>
    Dessa forma, é possível reutilizar código e organizar de forma hierárquica
    as classes de acordo com suas semelhanças.
  </p>,

  <p>
    Por exemplo, considere as <strong>classes Animal e Gato</strong>. A{" "}
    <strong>classe Animal</strong> pode ter as propriedades{" "}
    <strong>nome</strong> e <strong>idade</strong>, enquanto a{" "}
    <strong>classe Gato</strong> pode ter a propriedade <strong>raça</strong>. A
    classe <strong>Gato</strong> pode herdar as propriedades da classe{" "}
    <strong>Animal</strong>, e adicionar a propriedade <strong>raça</strong>.
    Assim, todas as informações de um gato podem ser representadas por sua
    classe.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
];
