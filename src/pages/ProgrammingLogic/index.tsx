import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/ProgrammingLogicImages/Introducao.jpg";

export const ProgrammingLogic = () => {
  return (
    <Container>
      <HeaderCards title="Lógica da Programação" />
      <BodyContainerStyled>
        <div>
          <Link to="programminglogic/introduction" className="link" >
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>1. Introdução</p>
            </Card>
          </Link>
          <Link to="/programminglogic/logical-operators" className="link" >
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>1. Operadores Lógicos</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional" className="link" >
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>2. Condicionais</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
