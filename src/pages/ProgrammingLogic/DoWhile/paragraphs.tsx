import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const structure = `
do {
  // bloco de código a ser 
  // executado pelo menos uma vez
} while (condição);
`;

const example = `
int numero;

do {
   System.out.println("Digite um número entre 1 e 10: ");
   numero = sc.nextInt();
} while (numero < 1 || numero > 10);

`;

export const paragraphs = [
  <p>
    O <strong>do-while</strong> é uma estrutura de controle de repetição em Java
    que é semelhante ao while. A diferença é que{" "}
    <strong>
      o do-while executa o bloco de código pelo menos uma vez antes de verificar
      a condição de loop
    </strong>
    . Depois que o bloco de código é executado, a condição de loop é verificada
    e o loop é repetido até que a condição seja avaliada como falsa.
  </p>,
  <>
    <p>A sintaxe do do-while é a seguinte:</p>
    <StyledSyntaxHighlighter language="java" style={coldarkDark}>
      {structure.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <strong>
    O bloco de código dentro das chaves será executado pelo menos uma vez,
    independentemente da condição de loop. Depois que o bloco de código for
    executado, a condição será avaliada e o processo será repetido enquanto a
    condição for verdadeira.
  </strong>,
  <p>
    Por exemplo, podemos usar o do-while para solicitar que o usuário insira um
    número entre 1 e 10:
  </p>,
  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
  <p>
    Neste exemplo, o bloco de código dentro das chaves será executado pelo menos
    uma vez, independentemente do valor de numero. Depois que o bloco de código
    for executado, a condição será verificada. Enquanto o valor de numero for
    menor que 1 ou maior que 10, o bloco de código será repetido, solicitando ao
    usuário que insira um novo valor.
  </p>,
  <p>
    É importante lembrar que o{" "}
    <strong>
      {" "}
      do-while é adequado para situações em que é necessário executar o bloco de
      código pelo menos uma vez
    </strong>
    . Caso contrário, o while é uma melhor opção. Além disso, assim como o
    while, é importante ter cuidado ao usar o do-while para evitar loops
    infinitos ou loops que nunca sejam executados.
  </p>,
];
