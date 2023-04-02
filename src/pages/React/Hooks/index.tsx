import { Container, Section } from "./styles";
import { Header } from "../../../components/Header";

export const Hooks = () => {
  return (
    <Container>
      <Header title="React Hooks"/>

      <Section>
        <p>
          Resumidamente, Hooks é uma nova proposta que irá nos permitir utilizar
          estado, ciclo de vida, entre outras funcionalidades, sem a necessidade
          de escrevermos componentes com classe.
          <br />
          <br />
          Os Hooks resolvem uma grande variedade de problemas encontrados
          durante o desenvolvimento de componentes. Por exemplo:
          <br />
          <br />
          Reutilização de lógica de estado entre components;
          <br />
          Wrapper Hell (HOC, Render props — React DevTools);
          <br />
          Componentes complexos e difíceis de se compreender;
          <br />
          Componentes contendo grandes responsabilidades;
          <br />
          Confusão ao utilizar classes (this, classes)
        </p>
      </Section>

      <Section>
        <h2>useState</h2>
        <p>
          Cria uma variável que é monitorada pelo componente, ou seja, toda vez
          que essa variável muda o valor, o componente é remontado em tela com
          as novas informações daquela variável.
          <br />
          <br />O valor que se passa para o useState como parâmetro é o valor
          inicial da variável. Se tiver utilizando Typescript, é aconselhável
          passar para o useState através do uso de Generics {`<>`} a tipagem.
          <br />
          <br />O useState retorna duas informações, e pegamos essas informações
          pegando com a desestruturação do próprio javascript [ ]. O useState
          retorna um array, a primeira informação é a variável, e a segunda
          informação é uma função para atualizar a variável.
          <br />
          <br />
          Por que atualizar a variável? O React utiliza por baixo dos panos um
          conceito chamado de imutabilidade, e na imutabilidade não é alterado
          diretamente o valor da variável, a gente repõe o valor da variável, a
          gente substitui o valor da variável.
        </p>
      </Section>

      <Section>
        <h2>useEffect</h2>
        <p>
          O hook useEffect nos auxilia a lidar com os side-effects (efeitos
          colaterais) e podemos usá-los também como ciclo de vida do componente.
          <br />
          <br />O useEffect() recebe como primeiro parâmetro uma função que será
          executada assim que o componente renderizar. Então é um ótimo lugar
          para fazer requisições. Tem a capacidade de monitorar a variação de
          alguma informação dentro do nosso componente.
        </p>
      </Section>
    </Container>
  );
};
