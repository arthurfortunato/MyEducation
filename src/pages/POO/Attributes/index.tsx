import { Container, Header, Pre, Section } from "./styles";

export const Attributes = () => {
  return (
    <Container>
      <Header>
        <h1>Atributos</h1>
      </Header>

      <Section className="section section__registering-attributes">
        <h2>Restringindo Tipo de Atributos</h2>

        <p>
          <strong>
            Para criar um atributo, basta usar o prefixo this e dar um nome para
            o atributo. Isso se dá porque a tipagem dinâmica do javascript
            também se dá nos atributos. O quer dizer que o tipo do atributo será
            definido pelo tipo do valor colocado nele.
          </strong>
          <br />
          <br />
          Quando fazemos estruturas de dados, algumas vezes esse é o
          comportamento que desejamos, no entanto em outras esse comportamento é
          inadequado. Existem estruturas onde precisamos restringir os tipos dos
          atributos para que a estrutura funcione corretamente.
          <br />
          <br />
          Por exemplo:
          <br />
        </p>

        <Pre>
          <code>
            {`
              class Quadrado{
                constructor(base, altura){
                    this.base = base;
                    this.altura = altura;
                }
          `}
          </code>
        </Pre>

        <p>
          Quando formos adicionar um método para calcular área nessa classe,
          precisamos garantir que os valores de base e altura sejam números ou
          então o cálculo será impossível, lembre-se que nada impede que sejam
          passadas strings por exemplo! Veja:
        </p>

        <Pre>
          <code>
            {`
                const quadrado = new Quadrado(3, 4);

                console.log(quadrado); 
                
                const quadrado2 = new Quadrado('teste', 'teste2');
                
                console.log(quadrado2);
            `}
          </code>
        </Pre>

        <p>
          Ambos funcionam! Para isso, é necessário fazer uma lógica condicional,
          podemos usar isNaN que é uma função que verifica se o valor não é
          número:
        </p>

        <Pre>
          <code>
            {`
             class Quadrado{
                constructor(base, altura){
                    if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números!";
                    this.base = base;
                    this.altura = altura;
                }
             }
         `}
          </code>
        </Pre>

        <p>Assim, nossa classe passa a produzir um erro se mal utilizada.</p>
      </Section>

      <Section className="section section__optional-attributes">
        <h2>Atributos Opcionais</h2>
        <p>
          Podemos ter atributos opcionais em uma classe também, não é
          necessário, mas aconselhável passar todos os valores necessários no
          construtor.
          <br />
          <br />
          Por exemplo, imagine que o quadrado possa ter uma cor, que é opcional.
          <br />
          <br />
          Não colocaremos a cor nos parâmetros do construtor, mas criaremos um
          atributo para ela com o valor "undefined" que significa não definido.
          A cor poderá ser alterada depois de fora da classe.
          <br />
        </p>

        <Pre>
          <code>
            {`
             class Quadrado{
                constructor(base, altura){
                    if(isNaN(base) || isNaN(altura)) {
                      throw "Base e altura precisam ser números!"
                    }
                    this.base = base;
                    this.altura = altura;
                    this.cor = undefined;
                }
             }
          
              const quadrado = new Quadrado(3, 4);

              console.log(quadrado);

              //Quadrado { base: 3, altura: 4, cor: undefined }

              quadrado.cor = 'azul';

              console.log(quadrado);

              //Quadrado { base: 3, altura: 4, cor: 'azul' }
         `}
          </code>
        </Pre>

        <p>
          Observe que diferentemente da base e altura, que podemos validar
          antes, no caso da cor o usuário pode passar o valor que ele quiser e
          não temos como restringir porque não estamos no contexto de método
          como acontece no construtor.
          <br />
          <br />
          Mais para frente veremos como fazer essa restrição usando um conceito
          da POO chamado encapsulamento e métodos de acesso (que no JavaScript
          chamam Accessors). Mas antes, vamos ver como implementar métodos em
          classes.
        </p>
      </Section>
    </Container>
  );
};
