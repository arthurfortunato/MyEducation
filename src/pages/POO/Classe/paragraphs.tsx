import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
 
const classExample = `
public class Pessoa {
  private String nome;
  private int idade;
  
  public Pessoa(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
  }

  public String getNome() {
    return nome;
  }

  public int getIdade() {
    return idade;
  }
`;

const objectExample = `
Pessoa arthur = new Pessoa("Arthur", 30);
`;
export const paragraphs = [
  `Uma classe em Java é uma estrutura que define atributos e métodos
  para descrever um objeto ou entidade do mundo real.`,

  `É a unidade básica de organização e design do código. Uma classe
  define as propriedades (variáveis de instância) e comportamentos
  (métodos) que um objeto desta classe irá ter. Uma classe é definida
  usando a palavra-chave "class" seguida pelo nome da classe.`,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {classExample.trim()}
  </StyledSyntaxHighlighter>,

  `A classe é como um molde ou modelo para criar objetos. É uma definição
  que descreve as características (atributos) e comportamentos (métodos)
  de um tipo de objeto.`,

  `Um objeto, por outro lado, é uma instância da classe. É uma
  representação concreta de um objeto descrito pela classe.`,

  `Cada objeto tem sua própria cópia dos atributos da classe, bem como
  seus próprios valores para esses atributos.`,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {objectExample.trim()}
  </StyledSyntaxHighlighter>,
];
