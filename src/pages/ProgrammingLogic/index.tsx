import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/ProgrammingLogicImages/Introducao.jpg";
import operadoresLogicos from "../../assets/ProgrammingLogicImages/OperadoresLogicos.jpg";
import ifElse from "../../assets/ProgrammingLogicImages/IfElse.jpg";
import ternario from "../../assets/ProgrammingLogicImages/OperadorTernario.png";
import Switch from "../../assets/ProgrammingLogicImages/Switch.jpg";

export const ProgrammingLogic = () => {
  return (
    <Container>
      <HeaderCards title="Lógica da Programação" />
      <BodyContainerStyled>
        <div>
          <Link to="/programminglogic/introduction" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/programminglogic/logical-operators" className="link">
            <Card width="350px" height="100px" backgroundImage={operadoresLogicos}>
              <p>2. OPERADORES LÓGICOS</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-if-else" className="link">
            <Card width="350px" height="100px" backgroundImage={ifElse}>
              <p>3. IF ELSE</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-ternary" className="link">
            <Card width="350px" height="100px" backgroundImage={ternario}>
              <p>4. OPERADOR TERNÁRIO</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-switch" className="link">
            <Card width="350px" height="100px" backgroundImage={Switch}>
              <p>5. SWITCH</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
