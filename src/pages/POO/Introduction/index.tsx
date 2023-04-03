import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const IntroductionPOO = () => {
  return (
    <Container>
      <Header title="Introdução POO"/>

      <Section>
        <p>
        <strong>A Orientação a Objetos é uma abordagem para a
          programação que se baseia em conceitos como classes, objetos, herança,
          polimorfismo e encapsulamento. Esses conceitos são utilizados para
          modelar o mundo real em uma forma computacional, tornando a
          programação mais clara, organizada e reutilizável.</strong>
          <br />
          <br />A orientação a objetos é um paradigma de programação que se
          baseia no conceito de "objetos".{" "}
          <strong>
            Em vez de lidar com dados e funções de forma separada, a orientação
            a objetos permite que você crie "objetos" que combinam dados e
            funções relacionadas.
          </strong>
          <br />
          <br />
          <strong>Classe:</strong> é uma estrutura que descreve um conjunto de
          objetos com características em comum. É uma definição abstrata que
          contém informações sobre os atributos (variáveis) e métodos (funções)
          que os objetos dessa classe possuem.
          <br />
          <br />
          <strong>Objeto:</strong> é uma instância de uma classe, ou seja, é uma
          entidade concreta criada a partir de uma definição de classe. Cada
          objeto tem seus próprios valores de atributos e pode executar seus
          próprios métodos.
          <br />
          <br />
          <strong>Herança:</strong> é um mecanismo que permite criar uma nova
          classe a partir de uma classe já existente, herdando todos os
          atributos e métodos da classe original e adicionando novos atributos e
          métodos. A classe que é herdada é chamada de superclasse ou classe
          base, enquanto a nova classe é chamada de subclasse ou classe
          derivada.
          <br />
          <br />
          <strong>Polimorfismo:</strong> é a capacidade de um objeto ser tratado
          como se fosse outro tipo de objeto. É possível usar uma mesma
          interface para representar diferentes implementações de uma mesma
          funcionalidade.
          <br />
          <br />
          <strong>Encapsulamento:</strong> é o mecanismo que garante que os
          dados de um objeto só possam ser acessados através de métodos
          específicos, que controlam o acesso aos atributos do objeto. Isso
          garante a integridade dos dados e evita que outros objetos modifiquem
          os dados diretamente.
        </p>
      </Section>
    </Container>
  );
};
