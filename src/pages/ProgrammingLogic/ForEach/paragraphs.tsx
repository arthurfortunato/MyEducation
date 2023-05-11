import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const structure = `
for (tipo elemento : coleção) {
  // bloco de código a ser executado para cada elemento
}
`;

const example = `
int[] numeros = {1, 2, 3, 4, 5};

for (int numero : numeros) {
    System.out.println(numero);
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
    O laço <strong>for each</strong>, também conhecido como "enhanced for loop"
    ou "for-each loop",{" "}
    <strong>
      é uma forma simplificada de percorrer os elementos de uma coleção (como
      arrays, listas ou conjuntos) em Java
    </strong>
    . Ele foi introduzido no Java 5 para facilitar a iteração sobre essas
    estruturas de dados.
  </p>,
  <>
    <p>A sintaxe do for each é a seguinte:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {structure.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <>
    <p>
      Suponha que temos um array de números e queremos imprimir cada um deles na
      tela. Usando o laço <strong>for each</strong>, podemos fazer isso de forma
      simples.
    </p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {example.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Declaramos um array de inteiros chamado numeros e inicializamos com alguns
    valores.
  </p>,
  <p>
    No laço <strong>for each</strong>, especificamos o tipo de elemento que
    queremos iterar (no nosso caso, int) e uma variável de iteração chamada
    numero.
  </p>,
  <p>
    A coleção que estamos percorrendo é o array numeros. Para cada iteração do
    laço, a variável numero assume o valor do próximo elemento do array. Dentro
    do bloco de código do <strong>for each</strong>, usamos
    <strong> System.out.println(numero)</strong>; para imprimir o valor atual de
    numero na tela.
  </p>,
  <>
    <p>No exemplo acima, a saída será:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {response.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    O laço <strong>for each</strong> percorreu todos os elementos do array
    numeros e imprimiu cada um deles na tela. Uma vantagem do laço{" "}
    <strong>for each</strong> é que ele é mais conciso e elimina a necessidade
    de usar um índice separado para acessar os elementos de uma coleção. Ele
    também é mais seguro em termos de evitar erros relacionados a índices fora
    dos limites da coleção.
  </p>,
  <p>
    No entanto, o laço <strong>for each</strong> não permite acessar ou
    modificar diretamente o índice dos elementos da coleção. Se você precisar do
    índice, pode considerar usar um laço for tradicional.
  </p>,
];
