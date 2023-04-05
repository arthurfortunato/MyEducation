import { Table, Pre } from "./styles";

export const paragraphs = [
  `A estrutura condicional "IF/ELSE" é da seguinte maneira:`,

  <Pre>
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
  </Pre>,

  `A condição deve estar entre parêntesis. Para fim de ilustração o
          resultado condição foi guardada em uma variável (linha 1), porém é
          prática escrever diretamente dentro dos parênteses. Caso a condição
          seja true o código dentro do if é executado, senão o do else é
          executado.`,

  `Ainda é possível fazer estruturas que verifiquem mais de uma condição
          usando o else if:`,

  <Pre>
    <code>
      {`
              if(x > 0){
                console.log("X é positivo")
              }
              else if(x == 0){
                console.log("X é zero")
              }
              else{
                console.log("X é negativo")
              }
          `}
    </code>
  </Pre>,

  `Caso a condição do if for false, é verificado a condição do else if,
          se esta por sua vez for falsa é verificado a condição do próximo else
        if, se houver, senão é executado o else, também se houver.`,
];
