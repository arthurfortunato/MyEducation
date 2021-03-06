import { Container, Header, Pre, Section } from "./styles";

export const IntroductionPOO = () => {
  return (
    <Container>
      <Header>
        <h1>Introdução POO</h1>
      </Header>

      <Section className="section section__abstract-types">
        <h2>Tipos Abstratos de Dados</h2>
        <p>
          Enquanto estudamos lógica de programação trabalhamos com os tipos já
          presentes na linguagem de programação que escolhemos. O que{" "}
          <strong>
            a programação orientada a objetos nos permite fazer, é criar novos
            tipos na linguagem. Chamamos esses tipos de TAD (Tipos Abstratos de
            Dados)
          </strong>
          .
          <br />
          <br />
          Esses novos tipos podem ser usados como estruturas de dados, sendo a
          composição de um ou mais tipos já existentes na linguagem, para
          representar algo mais complexo,{" "}
          <strong>
            cada tipo usado para armazenar valores é chamado de atributo. E
            também podem conter comportamentos, chamados métodos, que nada mais
            são do que funções que permitem a alteração e leitura dos dados ou
            interagir com o ambiente externo ao TAD
          </strong>
          .
          <br />
          <br />
          Usamos os TADs para mapear de forma computacional as entidades (reais
          ou abstratas) que fazem parte de um problema que desejamos resolver.
          Assim, temos uma visão mais realista do problema, utilizamos o mesmo
          vocabulário do processo real e temos entidades no código que são
          compatíveis com o que vemos na realidade do problema.
          <br />
          <br />
          Imagine que precisamos fazer uma agenda, que deve guardar nome,
          telefone e email de um número arbitrário de pessoas. Com o que
          conhecemos até o momento, teríamos que fazer 3 vetores, um para o
          nome, um para o telefone e um para o email. Quando inserirmos um
          contato, precisaremos adicionar os dados nos três vetores, e garantir
          que eles estejam no mesmo índice, pois a posição dos dados deve ser a
          mesma nos três vetores para podermos agrupá-los como um contato.
          Observe que não temos o conceito do contato em lugar nenhum, tampouco
          o conceito de agenda, tudo está solto no programa e a ligação dos
          dados é extremamente frágil (basta errar o índice e o nome de um vai
          aparecer como o telefone de outro).
          <br />
          <br />
          Em POO (programação orientada a objeto) faríamos diferente, usaríamos
          entidades que pertencem ao domínio com a nomenclatura utilizada no
          problema real.
          <br />
          <br />
          Faríamos então uma entidade (usaremos esse nome por enquanto) chamada
          Agenda, que será um TAD. Faremos também um TAD para o Contato, que
          conterá nome, email e telefone. A agenda se comportará como uma lista
          de Contatos, contendo métodos que permitam adicionar e remover
          Contatos, assim como buscar pelo nome. Assim, centralizamos toda
          informação do contato em uma única entidade o que acaba com as chances
          de misturar os dados. E a entidade Agenda tem a responsabilidade de
          manipular os contatos centralizando as operações que o sistema pode
          fazer.
          <br />
          <br />
          O que é importante já perceber é que é muito mais claro falar de uma
          Agenda que é uma Lista de Contatos, do que falar de três vetores de
          informação onde os índices seriam os contatos, sem que exista nada
          chamado contato ou agenda no código.
          <br />
          <br />
          <strong>
            Essa é a ideia da POO, aproximar o código da "vida real", mapeando
            processos usando o mesmo vocabulário que é usado na "vida real" e
            dividindo responsabilidades entre entidades diferentes para não
            acumular todo o código em um único programa enorme que faz tudo.
          </strong>
          <br />
          <br />
          Criar TADs não é difícil, e os conceitos que você vai precisar são
          análogos ao de variáveis e funções, que já vimos na lógica de
          programação.
          <br />
          <br />
          No entanto, faremos uma mudança de paradigma de programação, então
          vamos sair de um mundo linear onde o código roda linha a linha, para
          um onde os códigos estão dentro das entidades e são elas que executam
          as funcionalidades do sistema.
          <br />
          <br />
        </p>
      </Section>

      <Section className="section section__object">
        <h2>Criando Objetos</h2>

        <p>
          Normalmente em uma linguagem orientada a objetos, é necessário criar
          uma classe antes de poder criar objetos. No entanto, como JavaScript é
          uma linguagem dinâmica e a orientação a objetos é suportada, mas não é
          o paradigma principal de programação nessa linguagem, é possível criar
          objetos sem criar classes.
          <br />
          <br />
          Isso é útil para quando vamos fazer um único objeto, usado em um
          determinado lugar, mas não precisaremos reaproveitá-lo em outras
          partes do sistema.
          <br />
          <br />
          Para criar objetos sem classes, o JavaScript se vale de uma notação de
          criação de objetos, depois veremos que é quase idêntico ao JSON, que é
          uma representação textual do objeto.
          <br />
          <br />
          Essa notação é extremamente simples e concisa.{" "}
          <strong>
            Um objeto é denotado pela abertura de chaves, os atributos são pares
            chave-valor separados por dois pontos (:) e os métodos são funções
          </strong>
          .
          <br />
          <br />
          Por exemplo:
          <br />
        </p>

        <Pre>
          <code>
            {`
                const pessoa1 = { nome : "Carlos", idade : 20 };

                const quadrado = { 
                    base : 10, 
                    altura : 10, 
                    calcularArea : function() => { 
                      return this.base * this.altura; 
                    }
                };
          `}
          </code>
        </Pre>
        <br />
        <p>
          Observe que{" "}
          <strong>
            para nos referirmos a um atributo ou método do objeto de dentro dele
            mesmo, precisamos usar o prefixo this para saber que é algo que
            pertence ao objeto e não alguma variável declarada previamente
          </strong>
          .
          <br />
          Podemos inclusive criar objetos dentro de objetos ou mesmo vetores sem
          problemas:
          <br />
        </p>

        <Pre>
          <code>
            {`
                const agenda = {
                  contatos : [
                      {
                        nome : 'contato1', 
                        telefone : 'telefone1', 
                        email : 'email1@teste.com'
                      },
                      {
                        nome : 'contato2', 
                        telefone : 'telefone2', 
                        email : 'email2@teste.com'
                      },
                      {
                        nome : 'contato3', 
                        telefone : 'telefone3', 
                        email : 'email3@teste.com'
                      },
                      {
                        nome : 'contato4', 
                        telefone : 'telefone4', 
                        email : 'email4@teste.com'}
                  ],

                  adicionar : function(contato) { 
                    this.contatos.push(contato) 
                  };
              }
          `}
          </code>
        </Pre>

        <p>
          É simples escrever objetos assim e extremamente comum no javascript,
          no entanto, para escrever estruturas reutilizáveis é necessário usar
          classes.
        </p>
      </Section>
    </Container>
  );
};
