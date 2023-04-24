import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const example = `
int i = 1;

while (i <= 10) {
   System.out.println(i);
   i++;
}

`;
export const paragraphs = [
  <p>
    O <strong>while</strong> é uma{" "}
    <strong>estrutura de controle de repetição</strong> em Java{" "}
    <strong>
      que permite executar um bloco de código várias vezes enquanto uma condição
      específica é verdadeira
    </strong>
    . O while pode ser usado para executar uma ação repetidamente enquanto uma
    condição for verdadeira, como ler dados de entrada, processar dados ou
    executar cálculos complexos.
  </p>,
  <>
    <p>Por exemplo, podemos usar o while para imprimir os números de 1 a 10:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {example.trim()}
    </StyledSyntaxHighlighter>
  </>,

  <p>
    Neste exemplo, a condição é {"i <= 10"}. O bloco de código dentro das chaves
    será executado enquanto o valor de i for menor ou igual a 10. O programa
    imprimirá os números de 1 a 10 na tela.
  </p>,

  <p>
    É importante ter cuidado ao usar o while, pois se a condição nunca se tornar
    falsa, o loop nunca será interrompido e o programa ficará preso em um loop
    infinito. Para evitar isso, certifique-se de que a condição do while
    eventualmente se torne falsa. Além disso, tenha certeza de que o bloco de
    código dentro do while contém instruções que alteram a condição de loop de
    alguma forma, para evitar um loop infinito ou um loop que nunca seja
    executado.
  </p>,
];
