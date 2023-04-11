import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const example = `
  public class Professor extends Pessoa {
    private String disciplina;
    
    public Professor(String nome, int idade, 
        String disciplina) {
          
      super(nome, idade);
      this.disciplina = disiplina;
    }

    public String getDisciplina() {
      return disciplina;
    }
  }
`;

export const paragraphs = [
  `A Herança é um mecanismo da Orientação a Objetos que permite que uma
  classe (chamada classe filha ou subclasse) herde as propriedades e
  métodos de outra classe (chamada classe pai ou superclasse).`,

  `Dessa forma, é possível reutilizar código e organizar de forma
  hierárquica as classes de acordo com suas semelhanças.`,

  `Por exemplo, considere as classes Animal e Gato. A classe Animal pode
  ter as propriedades nome e idade, enquanto a classe Gato pode ter a
  propriedade raça. A classe Gato pode herdar as propriedades da classe
  Animal, e adicionar a propriedade raça. Assim, todas as informações de
  um gato podem ser representadas por sua classe.`,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
];
