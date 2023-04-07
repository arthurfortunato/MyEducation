import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  `A condicional if-else é uma instrução condicional que permite que um programa faça uma escolha entre duas opções diferentes com base em uma condição booleana. O if testa a condição e, se ela for verdadeira, executa um bloco de código específico, caso contrário, executa um bloco de código diferente especificado pelo else.`,
  `A estrutura condicional "IF/ELSE" é da seguinte maneira:`,

  <PreCode>
    <code>
      {`
          let condicao = x > 0; 

          if(condicao) {
            console.log("X é maior do que zero")
          }
          else {
            console.log("X é menor ou igual a que zero")
          }
          `}
    </code>
  </PreCode>,

  `A condição deve estar entre parêntesis. Para fim de ilustração o
          resultado condição foi guardada em uma variável (linha 1), porém é
          prática escrever diretamente dentro dos parênteses. Caso a condição
          seja true o código dentro do if é executado, senão o do else é
          executado.`,

  `Ainda é possível fazer estruturas que verifiquem mais de uma condição
          usando o else if:`,

  <PreCode>
    <code>
      {`
        if(x > 0) {
          console.log("X é positivo")
        } else if(x == 0) {
            console.log("X é zero")
        } else {
            console.log("X é negativo")
        }
      `}
    </code>
  </PreCode>,

  `Caso a condição do if for false, é verificado a condição do else if,
          se esta por sua vez for falsa é verificado a condição do próximo else
        if, se houver, senão é executado o else, também se houver.`,
];
