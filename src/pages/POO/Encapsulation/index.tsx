import { Container, Header, Pre, Section } from "./styles";

export const Encapsulation = () => {
  return (
    <Container>
      <Header>
        <h1>Encapsulamento</h1>
      </Header>

      <Section className="section section__encapsulation">
        <p>
          O encapsulamento é um conceito fundamental da programação orientada a
          objetos e é amplamente utilizado em Java.{" "}
          <strong>
            O encapsulamento é a técnica de esconder os detalhes de
            implementação de um objeto
          </strong>
          , expondo apenas os aspectos necessários para outros objetos ou partes
          do programa.
          <br />
          <br />
          Em Java,{" "}
          <strong>
            o encapsulamento é implementado através do uso de modificadores de
            acesso como "private", "protected" e "public".
          </strong>
          Atributos e métodos com modificador "private" são acessíveis apenas
          dentro da classe que os define, enquanto atributos e métodos com
          modificador "public" são acessíveis de qualquer lugar.
          <br />
          <br />O encapsulamento é importante porque permite a construção de
          objetos mais robustos e seguros, pois ele protege os dados e
          comportamentos de um objeto de acesso inadequado ou modificação por
          parte de outras partes do programa. Além disso, o encapsulamento
          permite que a implementação de um objeto seja alterada sem afetar
          outras partes do programa, o que facilita a manutenção e a evolução do
          software.
        </p>

        <br />
        <br />

        <Pre>
          <code>
            {`
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
            `}
          </code>
        </Pre>
      </Section>
    </Container>
  );
};
