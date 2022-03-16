import { Container, Header, Pre, Section } from "./styles";

export const ClassAndConstructor = () => {
  return (
    <Container>
      <Header>
        <h1>Classe e Construtor</h1>
      </Header>

      <Section className="section section__class-constructor">
        <p>
          <strong>
            Classes são a forma de definir as entidades no nosso sistema. Elas
            são estruturas capazes de dar origem a infinitos objetos de mesmo
            tipo.
          </strong>
          <br />
          <br />
          Para criar uma classe usamos o comando class no JavaScript.
        </p>

        <Pre>
          <code>
            {`
             class < nomedaclasse > {

            }
         `}
          </code>
        </Pre>

        <p>
          <strong>
            O aspecto mais relevante de uma classe é o método construtor, onde
            indicaremos quais são os atributos que a classe possui e quais são
            os valores necessários que precisam ser definidos no momento da
            criação do objeto.
          </strong>
          <br />
          <br />
          A classe é semelhante a uma "planta baixa" que determina a estrutura e
          os comportamentos dos objetos criados por ela. Uma classe Pessoa pode
          indicar que todo objeto tenha um nome, mas não pode indicar qual é
          esse nome, pois ele será diferente para cada objeto Pessoa criado por
          ela.
          <br />
          <br />
          Para criar a classe Pessoa, com nome e idade, as informações
          necessárias devem ser passadas por parâmetros no construtor e
          atribuída em atributos precedidos por this. :
          <br />
        </p>

        <Pre>
          <code>
            {`
              class Pessoa {
                constructor(nome, idade){
                    this.nome = nome;
                    this.idade = idade;
                }
              }
          `}
          </code>
        </Pre>

        <p>Para criar um objeto do tipo Pessoa faremos:</p>

        <Pre>
          <code>
            {`
              const pessoa2 = new Pessoa('Marta', 26);
              console.log(pessoa2); 
              //Veremos no console:
              //Pessoa { nome: 'Marta', idade: 26 }
          `}
          </code>
        </Pre>

        <p>
          <strong>
            É muito recomendado sempre iniciar nomes de classes com letra
            maiúscula
          </strong>
          . Além de manter o código mais organizado, facilita a leitura e
          entendimento uma vez que cria uma distinção clara entre as classes e
          variáveis.
        </p>
      </Section>
    </Container>
  );
};
