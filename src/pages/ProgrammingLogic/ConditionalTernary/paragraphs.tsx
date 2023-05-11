import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const structure = `
  condição ? valor_se_verdadeiro : valor_se_falso
`;

const example = `
  const num = -5;

  const result = num >= 0 
  ? "positivo" 
  : "negativo";

  console.log('O número é $ {result}.');

  // O número é negativo.
`;

export const paragraphs = [
  <p>
    <strong>
      O operador ternário é um operador condicional que avalia uma expressão e
      retorna um valor com base em se a expressão é verdadeira ou falsa.{" "}
    </strong>
  </p>,
  <>
    <p>A sintaxe básica é a seguinte:</p>
    <StyledSyntaxHighlighter language="javascript" style={coldarkDark}>
      {structure.trim()}
    </StyledSyntaxHighlighter>
  </>,
  <p>
    Se a condição for avaliada como verdadeira, o operador ternário retornará o
    valor_se_verdadeiro, caso contrário, retornará o valor_se_falso.
  </p>,

  <p>
    Aqui está um exemplo simples de como usar o{" "}
    <strong>operador ternário</strong> para verificar se um número é positivo ou
    negativo:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
];
