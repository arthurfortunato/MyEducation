import { Container, Section } from "./styles";
import docker01 from "../../../assets/docker01.png";
import { Header } from "../../../components/Header";

export const IntroductionDocker = () => {
  return (
    <Container>
      <Header title="Introdução"/>

      <Section className="section section__introduction">
        <h2>O que é Docker?</h2>
        <p>
          Ele permite que os usuários{" "}
          <strong>
            criem ambientes independentes e isolados para iniciar e implantar
            seus aplicativos
          </strong>
          . Esses ambientes são chamados de <strong>contêineres</strong>.
          <br />
          <br />
          Isso permitirá que o desenvolvedor execute um contêiner em qualquer
          máquina.
          <br />
          <br />
          Com o Docker,{" "}
          <strong>não há mais problemas de dependência ou compilação</strong>.
          Tudo que você precisa fazer é iniciar seu contêiner e seu aplicativo
          será iniciado imediatamente.
          <br />
          <br />
          O Docker é um programa open source desenvolvido pela Docker Inc. com a
          linguagem de programação GO.
          <br />
          <br />
          Sua primeira edição foi lançada em 13 de março de 2013 e, desde seu
          lançamento, se tornou um software importantíssimo no mundo do
          desenvolvimento de tecnologia.
          <br />
          <br />
          Podemos dizer que{" "}
          <strong>
            as palavras chaves para o Docker são: construir, entregar e rodar em
            qualquer ambiente (build, ship and run anywhere)
          </strong>
          .
        </p>
        <img
          src={docker01}
          alt="Gráfico que representa a arquitetura de Docker"
        />
      </Section>
    </Container>
  );
};
