import { Container } from "./styles";

import { FaDocker } from "react-icons/fa";

export const Docker = () => {
  return (
    <Container>
      <main>
        <div>
          <h1>Docker</h1>
          <FaDocker color="#2496ed" size={"50px"}/>
        </div>

        <p>
          <strong>
            O Docker é uma plataforma de software que simplifica o processo de
            construção, execução, gerenciamento e distribuição de aplicativos.
          </strong>{" "}
          Ele faz isso virtualizando o sistema operacional do computador no qual
          está instalado e sendo executado.
        </p>
      </main>
    </Container>
  );
};
