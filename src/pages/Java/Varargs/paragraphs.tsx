import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const exampleWithoutVarargs = `
public class ExemploSemVarargs {
    public static void main(String[] args) {
        int[] numeros = {1, 2, 3};
        somar(numeros);  // Passa um array explicitamente
    }

    public static int somar(int[] numeros) {
        int total = 0;
        for (int num : numeros) {
            total += num;
        }
        return total;
    }
}

`;

const exampleVarargs = `
public class ExemploComVarargs {
    public static void main(String[] args) {
        somar(1, 2, 3);  // Passa múltiplos argumentos sem precisar de array
    }

    public static int somar(int... numeros) {
        int total = 0;
        for (int num : numeros) {
            total += num;
        }
        return total;
    }
}

`;

export const paragraphs = [
  <p>
    O recurso <strong>varargs (variadic arguments)</strong> em Java{" "}
    <strong>
      permite que você passe um número variável de argumentos para um método
    </strong>
    . Isso é útil quando você não sabe, no momento de escrever o código, quantos
    argumentos serão passados. O varargs simplifica bastante os casos em que,
    sem esse recurso, você teria que usar um array ou sobrecarregar o método
    várias vezes para aceitar diferentes quantidades de parâmetros.
  </p>,
  <p>
    A sintaxe do <strong>varargs</strong> usa três pontos <strong>(...)</strong>{" "}
    logo após o tipo do argumento, indicando que o método pode receber zero ou
    mais parâmetros daquele tipo. O compilador trata os parâmetros recebidos
    como se fossem um array do tipo especificado.
  </p>,
  <p>
    Antes da introdução dos <strong>varargs</strong>, era necessário passar um
    array explicitamente ou criar múltiplas versões do método para lidar com
    diferentes números de argumentos:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleWithoutVarargs.trim()}
  </StyledSyntaxHighlighter>,

  <p>
    Com <strong>varargs</strong>, o método pode aceitar múltiplos argumentos
    diretamente, tornando o código mais limpo e fácil de entender:
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {exampleVarargs.trim()}
  </StyledSyntaxHighlighter>,

  <h3>Regras e Limitações</h3>,

  <ul>
    <li>
      <strong>Apenas um varargs por método:</strong> Um método só pode ter um
      único parâmetro varargs.
      <strong>Errado:</strong> public void exemplo(int... a, int... b)
    </li>
    <li>
      <strong>O varargs deve ser o último parâmetro:</strong> Se um método tem
      múltiplos parâmetros, o varargs deve vir por último. <br></br>
      <strong>Correto</strong>: public void exemplo(int x, String... y){" "}
      <br></br>
      <strong>Errado</strong>: public void exemplo(String... y, int x)
    </li>
    <li>
      <strong>Varargs com zero argumentos:</strong> Você pode chamar um método
      com varargs sem passar nenhum argumento. Neste caso, o varargs será
      tratado como um array vazio.
    </li>
  </ul>,

  <h3>Vantagens do Varargs</h3>,
  <p>
    <strong>Flexibilidade:</strong> Permite que você escreva métodos que aceitem
    diferentes quantidades de parâmetros, sem precisar sobrecarregar o método
    várias vezes.
  </p>,
  <p>
    <strong>Código mais limpo:</strong> Evita a necessidade de criar arrays
    explicitamente ou de sobrecarregar métodos.
  </p>,

  <h3>Desvantagens e Cuidados</h3>,

  <p>
    <strong>Custo de desempenho:</strong> Embora não seja geralmente
    significativo, o uso de varargs implica na criação de um array internamente,
    o que pode ter um impacto em termos de desempenho quando usado em métodos
    que são chamados com frequência ou com grandes quantidades de dados.
  </p>,

  <p>
    <strong>Clareza do código:</strong> Se um método usa varargs, pode não ser
    óbvio para quem lê o código quantos parâmetros devem ser passados, o que
    pode levar a confusão.
  </p>,

  <h3>Conclusão</h3>,

  <p>
    O <strong>varargs</strong> é um recurso muito útil para métodos que precisam
    ser flexíveis no número de argumentos. Ele simplifica o código e evita a
    necessidade de sobrecarga de métodos, mantendo a legibilidade e a manutenção
    mais fáceis. Contudo, deve ser usado com cuidado, principalmente em métodos
    críticos ou de alta performance.
  </p>,
];
