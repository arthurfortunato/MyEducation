import { Container } from "./styles";
import node from "../../assets/NODEJS.png";

export const Node = () => {
  return (
    <Container>
      <main>
        <h1>NODE.JS</h1>

        <p>
          <strong>
            O Node.js é ideal para aplicações multidirecionais que ocorrem em
            tempo real, como chats.{" "}
          </strong>
          Além disso, pode ser usado na transmissão e visualização de dados,
          assim como no acompanhamento das interações da audiência no seu site.
        </p>
        <img src={node} alt="Mapa mental node" />
      </main>
    </Container>
  );
};
