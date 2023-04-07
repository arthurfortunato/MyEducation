import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  `A condicional switch é uma estrutura de controle de fluxo que permite avaliar uma expressão e executar diferentes ações dependendo do valor dessa expressão. É frequentemente usada quando há muitas opções possíveis para um valor específico e uma série de ações que precisam ser tomadas com base em cada opção.`,
  `A estrutura básica da condicional switch é a seguinte:`,

  <PreCode>
    <code>
      {`
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
      `}
    </code>
  </PreCode>,
];
