import { Container, Section } from "./styles";
import orm01 from "../../../assets/orm01.png";
import orm02 from "../../../assets/orm02.png";
import { Header } from "../../../components/Header";

export const ORM = () => {
  return (
    <Container>
      <Header title="ORM" />

      <Section>
        <p>
          <strong>
            ORM (Object Relational Mapper) é uma técnica de mapeamento objeto
            relacional que permite fazer uma relação dos objetos com os dados
            que os mesmos representam.
          </strong>
          <br />
          <br />
        </p>

        <img src={orm01} alt="" />
        <br />
        <br />

        <p>
          Tudo começa como mostrado na Figura acima.{" "}
          <strong>
            Existem dois mundos: o relacional e o orientado a objetos
          </strong>
          .
          <br />
          <br />
          No <strong>mundo relacional</strong> prevalecem princípios matemáticos
          com a finalidade de armazenar e gerenciar corretamente os dados, de
          forma segura e se trabalha com a linguagem SQL que é utilizada para{" "}
          <strong>
            dizer ao bando de dados "O QUE?" fazer e não como fazer
          </strong>
          .
          <br />
          <br />
          Já no{" "}
          <strong>
            mundo orientado a objeto trabalhamos com classes e métodos, ou seja,
            trabalhamos fundamentados na engenharia de software e seus
            princípios que no dizem "COMO" fazer. O ORM é justamente, a ponte
            entre estes dos mundos, ou seja, é ele quem vai permitir que você
            armazene os seus objetos no banco de dados.
          </strong>{" "}
          <br />
          <br />
          Para isto precisamos fazer um mapeamento dos seus objetos para as
          tabelas do banco de dados.
          <br />
          <br />
        </p>

        <img src={orm02} alt="" />

        <br />
        <br />

        <p>
          A Figura acima nos traz a ideia de como o ORM trabalha.{" "}
          <strong>
            Ele faz o mapeamento da sua classe para o banco de dados e cada ORM
            tem suas particularidades para gerar o SQL referente a inserção do
            objeto que corresponde a uma tabela no banco de dados e realizar a
            operação. Utilizando um ORM, também se ganha produtividade, pois
            deixa-se de escrever os comando SQL para deixar que o próprio ORM,
            faça isto por voê.
          </strong>
        </p>
      </Section>
    </Container>
  );
};
