import { Container, Header, Pre, Section } from "./styles";
import { AiOutlineCaretRight } from "react-icons/ai";

export const Methods = () => {
  return (
    <Container>
      <Header>
        <h1>Métodos</h1>
      </Header>

      <Section className="section section__methods">
        <p>
          <strong>
            Métodos dão aos nossos objetos o poder de executar códigos, ou seja,
            um comportamento
          </strong>
          . Tudo o que você aprendeu em lógica de programação até o momento pode
          ser utilizado dentro dos métodos (e somente dentro dos métodos) quando
          estamos no contexto orientado a objetos.
          <br />
          <br />
          <strong>
            {" "}
            Métodos são computacionalmente idênticos às funções. Chamamos de
            métodos e não funções por dois motivos:
          </strong>
          <br />
        </p>

        <p>
          <AiOutlineCaretRight color={"#f5b324"} />
          Por estar no contexto POO e no interior de uma classe.
        </p>
        <p>
          <AiOutlineCaretRight color={"#f5b324"} />
          Por ele poder manipular o estado interno de um objeto.
        </p>

        <p>
          Leia "estado" acima como o conjunto de valores dos atributos.
          <br />
          <br />
          <strong>
            Para declarar um método em uma classe basta fazer, após o
            construtor, uma função sem usar a palavra function usamos apenas o
            nome. Também não podemos usar arrow functions nesse contexto por
            conta do mesmo problema com (this.) que tivemos nos objetos.
          </strong>
        </p>

        <Pre>
          <code>
            {`
                 class Quadrado{
                    constructor(base, altura){
                        if(isNaN(base) || isNaN(altura)) {
                          throw "Base e altura precisam ser números"
                        }
                        this.base = base;
                        this.altura = altura;
                        this.cor = undefined;
                    }
                    calcularArea() {
                        return this.base * this.altura;
                    }
                  }
              
                  const quadrado = new Quadrado(3, 4);
                  console.log(quadrado);
                  //Quadrado { base: 3, altura: 4, cor: undefined }
                  console.log(quadrado.calcularArea());
                  //12
            `}
          </code>
        </Pre>

        <p>
          <strong>
            Métodos podem ler ou alterar o estado interno do objeto, assim como
            podem fazer qualquer computação com os valores dos atributos e até
            mesmo chamar outros métodos do mesmo objeto.
          </strong>
          <br />
          <br />
          Alguns métodos podem até criar outros objetos ou funções, dependendo
          da necessidade. Alguns padrões como Factory dependem dessa capacidade.
          Imagine por exemplo uma classe de configuração onde você coloca vários
          dados e no final ela te devolve uma função que abre uma conexão com um
          banco de dados usando os dados fornecidos.
          <br />
          <br />
          No entanto, se métodos estiverem fazendo computações independentes de
          qualquer informação pertencente ao objeto, existe grandes chances de
          que eles estejam no lugar errado. Nesse caso, eles poderíam estar em
          outro objeto ou no próprio script como uma função.
          <br />
          <br />
          Vejamos alguns exemplos do que métodos podem fazer com a classe
          Quadrado:
          <br />
        </p>

        <Pre>
          <code>
            {`
              class Quadrado{
                constructor(base, altura){
                  if(isNaN(base) || isNaN(altura)) {
                    throw "Base e altura precisam ser números"
                  }
                  this.base = base;
                  this.altura = altura;
                  this.cor = undefined;
                }
                calcularArea() {
                  return this.base * this.altura;
                }
                duplicarParaDireita(){
                  this.base = this.base * 2;
                }
                duplicarParaBaixo(){
                  this.altura = this.altura * 2;
                }
                imprimir(){
                  return <div style='width:{this.base}px;
                  height:{this.altura}px;
                  background-color:{this.cor || "blue"}'>
                  </div>;
                }
              }
                const quadrado = new Quadrado(3, 4);
                console.log(quadrado);
                //Quadrado { base: 3, altura: 4, cor: undefined }
                console.log(quadrado.calcularArea());
                //12
                
                quadrado.duplicarParaBaixo();
                console.log(quadrado);
                //Quadrado { base: 3, altura: 8, cor: undefined }
                
                quadrado.duplicarParaDireita();
                console.log(quadrado);
                //Quadrado { base: 6, altura: 8, cor: undefined }
                
                console.log(quadrado.imprimir());
                //<div 
                  style='width:6px;
                  height:8px;
                  background-color:blue'>
                  </div>
          `}
          </code>
        </Pre>
      </Section>
    </Container>
  );
};
