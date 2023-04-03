import { Container } from "./styles";
import { FaDocker } from "react-icons/fa";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const Architecture = () => {
  return (
    <Container>
      <Header title="Arquitetura do Docker"/>
      
      <Section>
        <h2>Principais Componentes</h2>
        <p>
          Os principais componentes da arquitetura envolvem:
          <br />
          <br />
          <strong>
            <FaDocker /> Docker
          </strong>{" "}
          para Mac, Linux e Windows – versões que permitem instalar e executar
          containers nos sistemas operacionais de forma isolada.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Daemon
          </strong>{" "}
          – Software que roda na máquina onde o Docker está instalado. Usuário
          não interage diretamente com o daemon.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Client
          </strong>{" "}
          – CLI ou REST API que aceita comandos do usuário e repassa estes
          comandos ao Docker daemon.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Image
          </strong>{" "}
          – É um template. Uma imagem contém todos os dados e metadados
          necessários para executar containers a partir de uma imagem.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Container
          </strong>{" "}
          – Detém tudo que é necessário para uma aplicação ser executada. Cada
          container é criado a partir de uma imagem. Cada container é uma
          aplicação isolada independente.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Engine
          </strong>{" "}
          – Usado para criar imagens e containers.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Registry
          </strong>{" "}
          – Uma coleção de imagens hospedadas e rotuladas que juntas permitem a
          criação do sistema de arquivos de um container. Um registro pode ser
          público ou privado.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Hub
          </strong>{" "}
          – Este é um registro usado para hospedar e baixar diversas imagens.
          Pode ser visto como uma plataforma SAAS de compartilhamento e
          gerenciamento de imagens.
          <br />
          <br />
          <strong>
            <FaDocker /> Dockerfile
          </strong>{" "}
          – Um arquivo texto contendo uma sintax simples para criação de novas
          imagens.
          <br />
          <br />
          <strong>
            <FaDocker /> Docker Compose
          </strong>{" "}
          – Usado para definir aplicações usando diversos containers.
          <br/>
          <br/>
          <strong>
            <FaDocker /> Docker Swarm 
          </strong>{" "}
          – É uma ferramenta que permite o agrupamento (clustering) de Containers Docker.
        </p>
      </Section>
    </Container>
  );
};
