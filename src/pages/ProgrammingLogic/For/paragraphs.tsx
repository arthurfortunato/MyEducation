import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const structure = `
for (inicialização; condição; incremento) {
  // bloco de código a ser executado repetidamente
}
`;

const example = `
for (int i = 1; i <= 5; i++) {
  System.out.println(i);
}
`;

const response = `
1
2
3
4
5
`;

export const paragraphs = [
  <p>
    O <strong>for</strong> é uma estrutura de controle de repetição em Java que
    é{" "}
    <strong>
      usada quando sabemos exatamente quantas vezes queremos executar um bloco
      de código
    </strong>
    . É uma estrutura mais compacta e conveniente do que usar um while ou um
    do-while para repetir uma ação várias vezes.
  </p>,
  <>
    <p>A sintaxe do for é a seguinte:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {structure.trim()}
    </StyledSyntaxHighlighter>
  </>,

  <p>
    Digamos que queremos imprimir os números de 1 a 5 na tela. Podemos usar um
    laço for para isso.
  </p>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    A inicialização ocorre na primeira parte do <strong>for: int i = 1;</strong>
    . Aqui, declaramos uma <strong>variável i</strong> e atribuímos a ela o{" "}
    <strong>valor inicial de 1</strong>.
  </p>,
  <p>
    A condição é avaliada na segunda parte do <strong>for: {"i <= 5"};</strong>.
    Enquanto essa condição for verdadeira, o bloco de código dentro do for será
    executado. Nesse caso, enquanto <strong>i for menor ou igual a 5</strong>, o
    laço continuará executando.
  </p>,
  <p>
    O incremento ocorre na terceira parte do <strong>for: i++</strong>. Após
    cada iteração do laço, o valor de <strong>i</strong> é incrementado em{" "}
    <strong>1</strong>. Isso garante que, a cada repetição, o valor de{" "}
    <strong>i</strong> seja atualizado.
  </p>,
  <p>
    Dentro do bloco de código do for, usamos{" "}
    <strong>System.out.println(i);</strong> para imprimir o valor atual de{" "}
    <strong>i</strong> na tela.
  </p>,
  <>
    <p>No exemplo acima, a saída será:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {response.trim()}
    </StyledSyntaxHighlighter>
  </>,
];
