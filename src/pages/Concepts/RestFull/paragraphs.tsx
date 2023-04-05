export const paragraphs = [
  `Client-server: Separação do cliente e do armazenamento de dados(servidor), dessa
  forma, poderemos ter uma portabilidade do nosso sistema, usando o
  REACT para WEB e REACT Native para o smartphone, por exemplo.`,

  `Stateless: Cada requisição que o cliente faz para o servidor, deverá conter
  todas as informações necessárias para o servidor entender e responder
  <strong> (RESPONSE)</strong> a requisição <strong> (REQUEST)</strong>.`,

  `Exemplo: A sessão do usuário deverá ser enviada em todas as
  requisições, para saber se aquele usuário está autenticado e apto a
  usar os serviços, e o servidor não pode lembrar que o cliente foi
  autenticado na requisição anterior.`,

  `Cacheable: As respostas para uma requisição, deverão ser explicitadas ao dizer
  se aquela requisição, pode ou não ser cacheada pelo cliente.`,

  `Layered System: O cliente acessa a um endpoint, sem precisar saber da complexidade,
  de quais passos estão sendo necessários para o servidor responser a
  requisição, ou quais outras camadas o servidor estará lidando, para
  que a requisição seja respondida.`,

  `Code on demand (optional): Dá a possibilidade da nossa aplicação pegar códigos, como o
  javascript, por exemplo, e executar no cliente.`,

  `RESTFUL, é a aplicação dos padrões REST`,
];
