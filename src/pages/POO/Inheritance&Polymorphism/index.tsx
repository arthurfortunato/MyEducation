import { Container, Header, Pre, Section } from "./styles";

export const InheritanceAndPolymorphism = () => {
  return (
    <Container>
      <Header>
        <h1>Herança e Polimorfismo</h1>
      </Header>

      <Section className="section section__heritage">
        <h2>Herança</h2>

        <p>
          JavaScript tem o conceito de herança como a maioria das linguagens de
          programação orientadas a objetos. Que é criar uma nova classe que
          herda os atributos e métodos de uma classe pai. A nova classe, por sua
          vez, é chamada de classe filha.
          <br />
          <br />
          A sintaxe para fazermos herança em JavaScript é a mesma utilizada em
          Java, ou seja, a palavra extends denota a herança e a palavra super
          refere-se a super classe que foi herdada.
          <br />
        </p>

        <Pre>
          <code>
            {`
             class Pessoa{
              constructor(nome, idade){
                  this.nome = nome;
                  this.idade = idade;
              }
            }
          
            class Cidadao extends Pessoa{
                constructor(nome, idade, cpf, rg){
                    super(nome, idade);
                    this.cpf = cpf;
                    this.rg = rg;
                }
            }
          `}
          </code>
        </Pre>

        <p>
          No exemplo, a classe Cidadao herda a classe Pessoa. Usamos super como
          método para invocar o construtor da super classe Pessoa e deixar que
          ele atribua o nome e a idade.
          <br />
          <br />
          Podemos, por meio do super. acessar qualquer atributo ou método da
          super classe.
          <br />
        </p>
      </Section>

      <Section className="section section__polymorphism">
        <h2>Polimorfismo</h2>

        <p>
          Polimorfismo é uma conceito vindo do grego poli morfos, que significa
          "múltiplas formas".
          <br />
          <br />
          Ele se aplica na orientação a objetos no uso de Herança e na
          implementação de interfaces (que não é possível em JavaScript).
          <br />
          <br />
          Quando fazemos herança, nossa classe passa a ter vários tipos, assim
          como os objetos criados por ela.
          <br />
          <br />
          Os tipos são: O tipo da própria classe, denotado pelo mesmo nome da
          classe e o tipo de qualquer super classe que ela herde.
          <br />
          <br />
          No exemplo, Cidadao é Cidadao e Pessoa. Veja que usamos o verbo ser
          aqui "Cidadao É Cidadao e É Pessoa. Essa é uma boa regra para validar
          herança inclusive, quando você não puder dizer que a sub classe É a
          super classe, ela não será candidata para herança.
          <br />
          <br />
          Em linguagens dinâmicas, o polimorfismo de classes e objetos não é tão
          imprescindível e necessário como acontece em linguagens estáticas. No
          entanto, você sempre poderá verificar se um objeto tem um determinado
          tipo usando instanceof.
          <br />
        </p>

        <Pre>
          <code>
            {`
                  const cidadao = new Cidadao('teste', 20, '00000', '11111');

                  console.log( cidadao instanceof Cidadao, 
                    //true cidadao instanceof
                  Pessoa //true );
            `}
          </code>
        </Pre>

        <p>
          Essa técnica é muito usada quando um objeto de determinado tipo deve
          ser passado por parâmetro para uma função ou método por exemplo.
          <br />
          <br />
          Usando instanceof podemos validar se o que nos foi passado é de fato
          um objeto da classe que esperamos. Em linguagens dinâmicas, quando
          criamos bibliotecas para outras pessoas usarem, esse tipo de validação
          é praticamente obrigatório para não termos problemas com tipos
          indevidos.
          <br />
        </p>
      </Section>
    </Container>
  );
};
