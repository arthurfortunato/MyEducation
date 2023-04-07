import { Table } from "./styles";

export const paragraphs = [
  `Em programação, condicionais são estruturas de decisões. O código
          executa de uma maneira ou de outra a depender de uma condição, que por
          sua vez será interpretada como verdadeiro ou falso. Esse tipo de dado
          é chamado de booleano e possui valor true or false.`,

  `Uma condição é uma operação lógica que tem como resultado um valor
            booleano.`,
  `Os operados de comparação em Javascript são:`,

  <Table>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Nome</th>
        <th>Exemplo</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{">"}</td>
        <td>Maior</td>
        <td>2 {">"} 0</td>
        <td>true</td>
      </tr>
      <tr>
        <td>{">="}</td>
        <td>Maior ou Igual</td>
        <td>2 {">="} 2</td>
        <td>true</td>
      </tr>
      <tr>
        <td>{"<"}</td>
        <td>Menor</td>
        <td>2 {"<"} 0</td>
        <td>false</td>
      </tr>
      <tr>
        <td>{"<="}</td>
        <td>Menor ou Igual</td>
        <td>2 {"<="} 1</td>
        <td>false</td>
      </tr>
      <tr>
        <td>==</td>
        <td>Igual</td>
        <td>1 == '1'</td>
        <td>true</td>
      </tr>
      <tr>
        <td>===</td>
        <td>Igual em valor e tipo</td>
        <td>1 === '1'</td>
        <td>false</td>
      </tr>
      <tr>
        <td>!=</td>
        <td>Diferente</td>
        <td>1 != 2</td>
        <td>true</td>
      </tr>
      <tr>
        <td>!==</td>
        <td>Diferente em valor ou tipo</td>
        <td>5 !== '5'</td>
        <td>false</td>
      </tr>
    </tbody>
  </Table>,

  `Os operadores lógicos em JavaScript são:`,

  <Table>
    <thead>
      <tr>
        <th>Operador</th>
        <th>Nome</th>
        <th>Exemplo</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{"&&"}</td>
        <td>E</td>
        <td>
          2 {">"} 0 {"&&"} 1!==1
        </td>
        <td>false</td>
      </tr>
      <tr>
        <td>||</td>
        <td>Ou</td>
        <td>
          2 {">"} 0 {"&&"} 1!==1
        </td>
        <td>true</td>
      </tr>
      <tr>
        <td>!</td>
        <td>Não</td>
        <td>!(1===1)</td>
        <td>false</td>
      </tr>
    </tbody>
  </Table>,

  `Os operadores de comparação retornam um booleano a depender do
resultado da comparação. E os operados lógicos fazem operações sobre
valores booleano.`,
  `O operador "&&" só retorna verdadeiro se as
duas condições forem verdadeira.`,

  `Enquanto para o operador "||" basta uma das condições
ser para o resultado ser verdadeiro.`,

  `O operador "!" inverte o valor lógico, ou seja,
verdadeiro vira falso e vice-versa.`,
];
