import { Container, Section } from "./styles";
import { Header } from "../../../components/Header";

export const SpringBoot = () => {
  return (
    <Container>
      <Header title="Spring Boot"/>

      <Section className="section section__springboot">
        <p>
          Spring Boot é um framework da plataforma Spring que permite a criação
          de aplicativos Java prontos para produção com rapidez e facilidade.
          Ele fornece uma estrutura completa e pronta para uso para construir
          aplicativos Java com configuração mínima e sem a necessidade de
          configuração manual.
          <br />
          <br />
          Com o Spring Boot, os desenvolvedores podem criar aplicativos Java que
          se integram facilmente com tecnologias modernas, como serviços em
          nuvem, microsserviços e API's REST. Além disso, o Spring Boot fornece
          uma ampla gama de recursos, como autoconfiguração, monitoramento e
          gerenciamento de dependências, que permitem que os desenvolvedores
          criem aplicativos robustos com muito menos esforço.
        </p>
      </Section>

      <Section className="section section__pom">
        <h2>POM</h2>
        <p>
          <strong>
            O arquivo pom.xml é um arquivo de configuração do Apache Maven que é
            usado para definir as dependências do projeto, além de outras
            configurações.
          </strong>
          <br />
          <br />
          No contexto de um projeto Spring Boot, o arquivo pom.xml é usado para
          gerenciar as dependências e versões do Spring Boot, bem como de outras
          bibliotecas e estruturas de suporte necessárias para a construção do
          projeto.
          <br />
          <br />O Maven é usado para automatizar tarefas comuns de construção,
          como compilação, empacotamento e implantação, e o arquivo pom.xml é
          essencial para especificar as dependências e configurações do projeto
          necessárias para essas tarefas. Em suma, o arquivo pom.xml é essencial
          para construir e executar um projeto Spring Boot com o Maven.
        </p>
      </Section>

      <Section className="section section__properties">
        <h2>Application Properties</h2>
        <p>
          <strong>
            O arquivo application.properties ou application.yml é um arquivo de
            configuração do Spring Boot que é usado para definir propriedades de
            configuração para o aplicativo. Essas propriedades podem ser usadas
            para personalizar o comportamento do aplicativo Spring Boot e para
            configurar componentes específicos do aplicativo.
          </strong>
          <br />
          <br />
          O arquivo application.properties é um arquivo de texto simples que
          contém pares de chave-valor que definem as propriedades de
          configuração do aplicativo. Por exemplo, uma propriedade com a chave
          "server.port" define a porta em que o servidor de aplicativos do
          Spring Boot é executado. O arquivo application.yml usa a sintaxe YAML
          para definir as propriedades de configuração do aplicativo e oferece
          mais flexibilidade para definir valores mais complexos, como listas e
          mapas.
          <br />
          <br />
          Algumas das propriedades comuns definidas no arquivo
          application.properties ou application.yml incluem:
          <br />
          <br />
          Configurações de banco de dados, como a URL de conexão, nome do
          usuário e senha. Configurações de servidor, como a porta e o contexto
          do servidor da web. Configurações de segurança, como o nome de usuário
          e a senha de um usuário padrão. Configurações de log, como o nível de
          log e o arquivo de saída. Em suma, o arquivo application.properties ou
          application.yml é essencial para configurar e personalizar o
          comportamento do aplicativo Spring Boot e seus componentes. As
          propriedades definidas nesse arquivo são usadas pelo Spring Boot
          durante a execução do aplicativo para definir como os componentes
          devem ser configurados e comportar.
        </p>
      </Section>

      <Section className="section section__jpa">
        <h2>Spring Data JPA</h2>
        <p>
          <strong>
            A diferença entre o Spring Data JPA e o JPA (Java Persistence API) é
            que o JPA é uma especificação da linguagem Java para acessar bancos
            de dados relacionais e persistir objetos Java como registros em
            tabelas.
          </strong>
          É uma API padrão para acessar bancos de dados e fornece uma forma
          consistente de realizar operações de persistência, como inserir,
          atualizar, excluir e recuperar dados.
          <br />
          <br />
          <strong>
            Já o Spring Data JPA é uma biblioteca construída sobre o JPA que
            oferece abstrações e soluções comuns para o desenvolvimento de
            aplicações que usam bancos de dados relacionais.{" "}
          </strong>
          Ele facilita o desenvolvimento de aplicações que lidam com dados,
          aumentando a produtividade e a consistência do código, além de
          fornecer suporte para vários provedores de persistência JPA.
          <br />
          <br />
          Em resumo, o JPA é uma API para acessar bancos de dados relacionais e
          persistir objetos Java, enquanto o Spring Data JPA é uma biblioteca
          construída sobre o JPA que fornece abstrações e soluções para tornar o
          desenvolvimento de aplicações que usam bancos de dados mais fácil e
          eficiente.
        </p>
      </Section>

      <Section className="section section__hibernate">
        <h2>Hibernate</h2>
        <p>
          <strong>
            O Hibernate é um framework de mapeamento objeto-relacional (ORM) que
            implementa a JPA (Java Persistence API). Ele fornece uma maneira
            fácil e eficiente de mapear objetos Java para tabelas de um banco de
            dados relacional e vice-versa, permitindo que o desenvolvedor
            trabalhe com objetos Java em vez de lidar diretamente com as tabelas
            do banco de dados.
          </strong>
          <br />
          <br />
          O Spring Data JPA é uma camada de abstração de persistência de dados
          que simplifica o processo de acesso a um banco de dados relacional
          usando a JPA. Ele oferece recursos adicionais, como métodos de
          consulta dinâmica e gerenciamento de transações, além de recursos do
          Spring Framework, como injeção de dependência e programação orientada
          a aspectos.
          <br />
          <br />
          <strong>
            Uma das principais diferenças entre o Hibernate e o Spring Data JPA
            é que o Hibernate é um framework ORM completo, enquanto o Spring
            Data JPA é uma camada de abstração adicionada ao topo do Hibernate
            (ou de outra implementação JPA). Isso significa que o Spring Data
            JPA usa o Hibernate (ou outra implementação JPA) como provedor JPA
            subjacente, mas fornece recursos adicionais para simplificar o
            processo de acesso a dados.
          </strong>
          <br />
          <br />
          O Spring Data JPA também fornece recursos adicionais em relação ao
          Hibernate, como métodos de consulta dinâmica que podem ser definidos
          com base no nome do método, suporte a paginamento e ordenação de
          resultados, e suporte a vários provedores JPA.
          <br />
          <br />
          Em resumo, o Hibernate é um framework ORM completo que implementa a
          JPA e fornece recursos avançados de persistência de dados, enquanto o
          Spring Data JPA é uma camada de abstração de persistência de dados que
          adiciona recursos adicionais, como métodos de consulta dinâmica e
          gerenciamento de transações, ao topo do Hibernate (ou outra
          implementação JPA).
        </p>
      </Section>
    </Container>
  );
};
