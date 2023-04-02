import { Container, Section } from "./styles";
import { FaDocker } from "react-icons/fa";
import { Header } from "../../../components/Header";

export const AdvantagesAndDisadvantages = () => {
  return (
    <Container>
      <Header title="Vantagens e Desvantagens"/>

      <Section className="section section__advantages">
        <h2>Vantagens</h2>
        <p>
          O Docker não é um sistema operacional completo numa máquina
          virtual.
          <br />
          <br />
          O Docker só compartilhará os recursos da máquina host para executar
          seus ambientes.
          <br />
          <br />
          É uma ferramenta que pode realmente mudar o dia a dia de um
          desenvolvedor, com inúmeros benefícios:
          <br />
          <br />
          <strong>
            <FaDocker /> O Docker é rápido.{" "}
          </strong>{" "}
          Ao contrário de uma máquina virtual, seu aplicativo inicializa em
          alguns segundos e para com a mesma rapidez.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker é multiplataforma.
          </strong>{" "}
          Você pode iniciar seu contêiner em qualquer sistema. Os contêineres
          podem ser construídos e excluídos mais rápido do que em uma máquina
          virtual.
          <br />
          <br />
          <strong>
            <FaDocker /> Não há mais dificuldades em configurar seu ambiente de
            trabalho.
          </strong>{" "}
          Depois que seu Docker estiver configurado, você nunca mais terá que
          reinstalar suas dependências manualmente mesmo se mudar seu
          computador.
          <br />
          <br />
          <strong>
            <FaDocker /> Você mantém seu espaço de trabalho limpo.
          </strong>{" "}
          Cada um de seus ambientes será isolado e você pode excluí-los a
          qualquer momento, sem impactar o resto.
          <br />
          <br />
          <strong>
            <FaDocker /> É mais fácil implantar seu projeto no servidor para
            colocá-lo online.
          </strong>{" "}
        </p>
      </Section>

      <Section className="section section__disadvantages">
        <h2>Desvantagens</h2>
        <p>
          Bom, nenhum software é perfeito e sempre apresenta alguma limitação,
          então vejamos a seguir algumas das principais críticas de
          desenvolvedores:
          <br />
          <br />
          <strong>
            <FaDocker />
          </strong>{" "}
          Há uma tonelada de solicitações de recursos para upgrade que ainda
          estão em andamento (como capacidade de autorregistro e autoinspeção de
          contêineres, cópia de arquivos do host para o contêiner e muito mais).
          <br />
          <br />
          <strong>
            <FaDocker />
          </strong>{" "}
          Há momentos em que um container fica inativo, então depois disso, ele
          precisa de uma estratégia de backup e recuperação, embora existam
          várias soluções, mas que não são automatizadas ou nem muito escaláveis
          ainda.
          <br />
          <br />
          <strong>
            <FaDocker />
          </strong>{" "}
          Em comparação com as máquinas virtuais, os contêineres Docker oferecem
          menos sobrecarga, mas não sobrecarga zero.
          <br />
          <br />
          <strong>
            <FaDocker />
          </strong>{" "}
          O principal problema é que se um aplicativo projetado para ser
          executado em um contêiner do Docker no Windows, ele não pode ser
          executado no Linux ou vice-versa. No entanto, as máquinas virtuais não
          estão sujeitas a essa limitação.
          <br />
          <br />
          <strong>
            <FaDocker />
          </strong>{" "}
          Podemos dizer que, para aplicativos que requerem interfaces ricas, o
          Docker não é uma boa solução.
          <br />
          <br />
          <strong>
            Resumidamente, é preciso avaliar os riscos de segurança específicos
            do Docker para garantir que você poderá lidar com eles antes de
            mover as cargas de trabalho para o Docker.
          </strong>
        </p>
      </Section>
    </Container>
  );
};
