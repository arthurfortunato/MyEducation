import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const estrutura = `
if (condição) {
  // bloco de código a ser executado 
  // se a condição for verdadeira
} else {
  // bloco de código a ser executado 
  // se a condição for falsa
}
`;
const example = `
int numero = -5;

if (numero > 0) {
   System.out.println("O número é positivo.");
} else {
   System.out.println("O número é negativo.");
}

`;

export const paragraphs = [
  <p>
    A condicional <strong>if-else</strong> é uma estrutura de controle em Java
    que permite executar um bloco de código se uma condição for verdadeira e
    outro bloco de código se a condição for falsa.
  </p>,
  <p>A sintaxe da condicional if-else em Java é a seguinte:</p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {estrutura.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    A condição é uma expressão booleana que pode ser avaliada como verdadeira ou
    falsa. Se a condição for verdadeira, o bloco de código dentro das chaves
    após o "if" será executado. Caso contrário, o bloco de código dentro das
    chaves após o "else" será executado.
  </p>,

  <p>
    Por exemplo, podemos usar a condicional if-else para verificar se um número
    é positivo ou negativo:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Neste exemplo, a condição é <strong>{"numero > 0"}</strong>. Se o número for
    maior que 0, o bloco de código dentro das chaves após o "if" será executado
    e o programa imprimirá "O número é positivo.". Se o número for menor ou
    igual a 0, o bloco de código dentro das chaves após o "else" será executado
    e o programa imprimirá "O número é negativo.".
  </p>,
];
