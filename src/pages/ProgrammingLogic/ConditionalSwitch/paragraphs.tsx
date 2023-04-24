import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const example = `
  switch (expressão) {
  case valor1:
    // código a ser executado caso expressão 
          seja igual a valor1
    break;
  case valor2:
    // código a ser executado caso expressão 
          seja igual a valor2
    break;
  case valor3:
    // código a ser executado caso expressão
          seja igual a valor3
    break;
  default:
    // código a ser executado caso nenhum 
          dos casos anteriores seja verdadeiro
  }
`;
export const paragraphs = [
  <p>
    A condicional <strong>switch</strong> é uma estrutura de controle de fluxo
    que permite avaliar uma expressão e executar diferentes ações dependendo do
    valor dessa expressão.{" "}
    <strong>
      É frequentemente usada quando há muitas opções possíveis para um valor
      específico e uma série de ações que precisam ser tomadas com base em cada
      opção
    </strong>
    .
  </p>,
  <p>A estrutura básica da condicional switch é a seguinte:</p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {example.trim()}
  </StyledSyntaxHighlighter>,
];
