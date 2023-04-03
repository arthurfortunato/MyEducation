import { Container, Pre } from "./styles";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";

export const Filter = () => {
  return (
    <Container>
      <Header title="Filter"/>

      <Section>
        <p>
          Filter é uma função de alta ordem semelhante ao map, a diferença é que
          <strong> o objetivo do filter é filtrar elementos do vetor. Portanto a função
          passada deve receber o elemento e retornar um booleano. Se retorna
          true o elemento será mantido, senão retirado.</strong>
          <br />
          <br />
          Como exemplo, suponha que temos um vetor numérico e queremos somente
          os pares:
        </p>
        <br />
        <Pre>
          <code>
            {`
           const vetor = [1,2,3,4,5,6,7,8,9,10];

           const pares = vetor.filter(x => x % 2 === 0);
         `}
          </code>
        </Pre>

        <p>
          Note que estamos passando a função x {`=>`} x % 2 === 0 para o filter.
          Ele recebe um elemento x do vetor e retorna true se o resto da divisão
          por dois é zero.
          <br />
          <br />
          Um outro exemplo é retirar elementos maior do que um valor limite:
        </p>

        <br />

        <Pre>
          <code>
            {`
           const vetor = [10,4,5,6,2,7,3,8,9,1];

           const vetor2 = vetor.filter(x => x < 8);
         `}
          </code>
        </Pre>

        <p>No exemplo acima filtramos os elementos maiores ou iguais a oito.</p>
      </Section>
    </Container>
  );
};
