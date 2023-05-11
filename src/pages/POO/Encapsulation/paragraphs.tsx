import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const encapsulationExample = `
  @Getter
  public class ContaBancaria {
    private int numero;
    private double saldo;
  }

  public ContaBancaria(int numero) {
    this.numero = numero;
    this.saldo = 0;
  }

  publit void depositar(double valor) {
    saldo += valor;
  }

  public void sacar(double valor) {
    if(valor <= saldo) {
      saldo -= valor;
    } else {
      System.out.println("Saldo insuficiente.");
    }
  }
`;
export const paragraphs = [
  <p>
    O <strong>encapsulamento</strong> é um conceito fundamental da programação
    orientada a objetos e é amplamente utilizado em Java.
  </p>,

  <strong>
    O encapsulamento é a técnica de esconder os detalhes de implementação de um
    objeto, expondo apenas os aspectos necessários para outros objetos ou partes
    do programa.
  </strong>,

  <p>
    Em JAVA o <strong>encapsulamento</strong> é implementado através do uso de{" "}
    <strong>modificadores de acesso</strong> como{" "}
    <strong>"private", "protected" e "public"</strong>.
  </p>,

  <p>
    Atributos e métodos com modificador <strong>"private"</strong> são
    acessíveis apenas dentro da classe que os define, enquanto atributos e
    métodos com modificador <strong>"public"</strong> são acessíveis de qualquer
    lugar.
  </p>,

  <p>
    O <strong>encapsulamento</strong> é importante porque permite a construção
    de objetos mais robustos e seguros, pois ele protege os dados e
    comportamentos de um objeto de acesso inadequado ou modificação por parte de
    outras partes do programa. Além disso, o <strong>encapsulamento</strong>{" "}
    permite que a implementação de um objeto seja alterada sem afetar outras
    partes do programa, o que facilita a manutenção e a evolução do software.
  </p>,

  <StyledSyntaxHighlighter language="java" style={coldarkDark}>
    {encapsulationExample.trim()}
  </StyledSyntaxHighlighter>,
];
