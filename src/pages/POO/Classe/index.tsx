import { Container, Header, Pre, Section } from "./styles";

export const ClassAndConstructor = () => {
  return (
    <Container>
      <Header>
        <h1>Classe</h1>
      </Header>

      <Section className="section section__class">
        <p>
          <strong>
            Uma classe em Java é uma estrutura que define atributos e métodos
            para descrever um objeto ou entidade do mundo real
          </strong>
          . É a unidade básica de organização e design do código. Uma classe
          define as propriedades (variáveis de instância) e comportamentos
          (métodos) que um objeto desta classe irá ter. Uma classe é definida
          usando a palavra-chave "class" seguida pelo nome da classe.
        </p>
        <br />
        <br />

        <Pre>
          <code>
            {`
              public class Pessoa {
                private String nome;
                private int idade;
                
                public Pessoa(String nome, int idade) {
                  this.nome = nome;
                  this.idade = idade;
                }

                public String getNome() {
                  return nome;
                }

                public int getIdade() {
                  return idade;
                }
            `}
          </code>
        </Pre>
      </Section>
      <Section className="section section__object">
        <h2>Objeto</h2>
        <p>
          A classe é como um molde ou modelo para criar objetos. É uma definição
          que descreve as características (atributos) e comportamentos (métodos)
          de um tipo de objeto.
          <br />
          <br />
          <strong>
            Um objeto, por outro lado, é uma instância da classe. É uma
            representação concreta de um objeto descrito pela classe.
          </strong>{" "}
          Cada objeto tem sua própria cópia dos atributos da classe, bem como
          seus próprios valores para esses atributos.
        </p>
        <br />
        <br />
        <Pre>
          <code>
            {`Pessoa arthur = new Pessoa("Arthur", 30);`}
          </code>
        </Pre>
      </Section>
    </Container>
  );
};
