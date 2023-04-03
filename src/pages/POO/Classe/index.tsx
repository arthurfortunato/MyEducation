import { Container, Pre } from "./styles";
import { Link } from "react-router-dom";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const ClassAndConstructor = () => {
  return (
    <Container>
      <Header title="Classe" />

      <Section>
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

      <Section>
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
            {`
              Pessoa arthur = new Pessoa("Arthur", 30);
            `}
          </code>
        </Pre>
      </Section>
      <Link className="link" to="/poo/polymorphism">
        Go to Polymorphism
      </Link>
    </Container>
  );
};
