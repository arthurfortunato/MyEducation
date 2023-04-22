import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/ProgrammingLogicImages/INTRODUCTION.jpg";
import operadoresLogicos from "../../assets/ProgrammingLogicImages/LOGICALOPERATORS.jpg";
import ifElse from "../../assets/ProgrammingLogicImages/IFELSE.jpg";
import ternario from "../../assets/ProgrammingLogicImages/TERNARY.jpg";
import Switch from "../../assets/ProgrammingLogicImages/SWITCH.jpg";

export const ProgrammingLogic = () => {
  return (
    <Container>
      <HeaderCards title="Lógica da Programação" />
      <BodyContainerStyled>
        <div>
          <Link to="/programminglogic/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/programminglogic/logical-operators" className="link">
            <Card width="330px" height="100px" backgroundImage={operadoresLogicos}>
              <p>2. OPERADORES LÓGICOS</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-if-else" className="link">
            <Card width="330px" height="100px" backgroundImage={ifElse}>
              <p>3. IF ELSE</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-ternary" className="link">
            <Card width="330px" height="100px" backgroundImage={ternario}>
              <p>4. OPERADOR TERNÁRIO</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-switch" className="link">
            <Card width="330px" height="100px" backgroundImage={Switch}>
              <p>5. SWITCH</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
