import { PreCode } from "../../../components/PreCode";

export const paragraphs = [
  `O encapsulamento é um conceito fundamental da programação orientada a
 objetos e é amplamente utilizado em Java.`,

  `O encapsulamento é a técnica de esconder os detalhes de
 implementação de um objeto, expondo apenas os aspectos necessários para outros objetos ou partes
 do programa.`,

  `Em JAVA o encapsulamento é implementado através do uso de modificadores de
 acesso como "private", "protected" e "public".`,

  `Atributos e métodos com modificador "private" são acessíveis apenas
 dentro da classe que os define, enquanto atributos e métodos com
 modificador "public" são acessíveis de qualquer lugar.`,

  `O encapsulamento é importante porque permite a construção de
 objetos mais robustos e seguros, pois ele protege os dados e
 comportamentos de um objeto de acesso inadequado ou modificação por
 parte de outras partes do programa. Além disso, o encapsulamento
 permite que a implementação de um objeto seja alterada sem afetar
 outras partes do programa, o que facilita a manutenção e a evolução do
 software.`,

 <PreCode>
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
</PreCode>
 
];
