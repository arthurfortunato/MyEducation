import { Container } from "./styles";
import { Header } from "../../../components/Header";
import { BiRightArrow } from "react-icons/bi";
import { Section } from "../../../components/Section";

export const Concepts = () => {
  return (
    <Container>
      <Header title="Conceitos"/>
      
      <Section >
        <h2>API</h2>
        <p>
          A sigla API deriva da expressão inglesa Application Programming
          Interface que, traduzida para o português, pode ser compreendida como
          uma interface de programação de aplicação. Ou seja, API é um conjunto
          de normas que possibilita a comunicação entre plataformas através de
          uma série de padrões e protocolos.
          <br />
          <br />
          Por meio de APIs, desenvolvedores podem criar novos softwares e
          aplicativos capazes de se comunicar com outras plataformas. Por
          exemplo: caso um desenvolvedor queira criar um aplicativo de fotos
          para Android, ele poderá ter acesso à câmera do celular através da API
          do sistema operacional, sem ter a necessidade de criar uma nova
          interface de câmera do zero. O mesmo acontece com aplicativos que
          utilizam os serviços de mapas por meio da API do Google Maps ou,
          ainda, nas integrações entre apps, como o Spotify e o Instagram, que
          possibilita compartilhar faixas nos Stories. Uma API nada mais é do
          que um código programável que permite que dois softwares diferentes
          comuniquem-se entre si.
          <br />
          <br />
          As APIs são construídas por dois elementos diferentes. O primeiro é
          uma especificação que descreve como a informação é trocada entre os
          programas. O segundo é um software de interface, escrito
          especificamente para esse propósito e publicado para ser utilizado.
        </p>
      </Section>

      <Section>
        <h2>REST</h2>
        <p>
          É um acrônimo para Representational State Transfer (transferência de
          Estado Representativo).
          <br />
          <br />
          Será feita a transferência de dados de uma maneira simbólica,
          figurativa, representativa, de maneira didática.
          <br />
          <br />
          A transferência de dados é feita, geralmente, usando o protocolo HTTP.
          <br />
          <br />
          O Rest, delimita algumas obrigações nessas transferências de dados.
          <br />
          <br />
          Resources seria então, uma entidade, um objeto.
        </p>
      </Section>

      <Section >
        <h2>Necessidades para ser RESTFUL</h2>
        <p>
          <strong>
            <BiRightArrow />
            _Client-server_
          </strong>
          : Separação do cliente e do armazenamento de dados(servidor), dessa
          forma, poderemos ter uma portabilidade do nosso sistema, usando o
          REACT para WEB e REACT Native para o smartphone, por exemplo;
          <br />
          <br />
          <strong>
            <BiRightArrow />
            _Stateless_
          </strong>
          : Cada requisição que o cliente faz para o servidor, deverá conter
          todas as informações necessárias para o servidor entender e responder
          <strong> (RESPONSE)</strong> a requisição <strong> (REQUEST)</strong>.
          <br />
          Exemplo: A sessão do usuário deverá ser enviada em todas as
          requisições, para saber se aquele usuário está autenticado e apto a
          usar os serviços, e o servidor não pode lembrar que o cliente foi
          autenticado na requisição anterior.
          <br />
          <br />
          <strong>
            <BiRightArrow /> _Cacheable_
          </strong>
          : As respostas para uma requisição, deverão ser explicitadas ao dizer
          se aquela requisição, pode ou não ser cacheada pelo cliente.
          <br />
          <br />
          <strong>
            <BiRightArrow /> _layered System_
          </strong>
          : O cliente acessa a um endpoint, sem precisar saber da complexidade,
          de quais passos estão sendo necessários para o servidor responser a
          requisição, ou quais outras camadas o servidor estará lidando, para
          que a requisição seja respondida.
          <br />
          <br />
          <strong>
            <BiRightArrow /> _Code on demand (optional)_
          </strong>
          : Dá a possibilidade da nossa aplicação pegar códigos, como o
          javascript, por exemplo, e executar no cliente;
          <br />
          <br />
          <strong>RESTFUL, é a aplicação dos padrões REST</strong>
        </p>
      </Section>

      <Section >
        <h2>
          Códigos de status de respostas <strong>HTTP</strong>
        </h2>
        <p>
          <strong>1. </strong>Respostas de informação <strong>(100-199)</strong>
          ,
          <br />
          <strong>2. </strong>Respostas de sucesso <strong>(200-299)</strong>,
          <br />
          <strong>3. </strong>Redirecionamentos <strong>(300-399)</strong>,
          <br />
          <strong>4. </strong>Erros do cliente <strong>(400-499)</strong>,
          <br />
          <strong>5. </strong>Erros do servidor <strong>(500-599)</strong>.
        </p>
      </Section>
    </Container>
  );
};
