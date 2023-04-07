import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  `O operador ternário é um operador condicional que avalia uma expressão e retorna um valor com base em se a expressão é verdadeira ou falsa. A sintaxe básica é a seguinte:`,

  <PreCode>
    <code>condição ? valor_se_verdadeiro : valor_se_falso</code>
  </PreCode>,

  `Se a condição for avaliada como verdadeira, o operador ternário retornará o valor_se_verdadeiro, caso contrário, retornará o valor_se_falso.`,
  
  `Aqui está um exemplo simples de como usar o operador ternário em JavaScript para verificar se um número é positivo ou negativo:`,

  <PreCode>
    <code>
      {`
        const num = -5;

        const result = num >= 0 
        ? "positivo" 
        : "negativo";
        
        console.log('O número é $ {result}.');
        
        // O número é negativo.
      `}
    </code>
  </PreCode>
];
