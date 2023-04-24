import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introductionImg from "../../assets/ProgrammingLogicImages/INTRODUCTION.jpg";
import logicalOperatorsImg from "../../assets/ProgrammingLogicImages/LOGICALOPERATORS.jpg";
import ifElseImg from "../../assets/ProgrammingLogicImages/IF.jpg";
import ternaryImg from "../../assets/ProgrammingLogicImages/TERNARY.jpg";
import switchImg from "../../assets/ProgrammingLogicImages/SWITCHIMG.jpg";
import whileImg from "../../assets/ProgrammingLogicImages/WHILE.jpg";

export const ProgrammingLogic = () => {
  return (
    <Container>
      <HeaderCards title="Lógica da Programação" />
      <BodyContainerStyled>
        <div>
          <Link to="/programminglogic/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introductionImg}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/programminglogic/logical-operators" className="link">
            <Card width="330px" height="100px" backgroundImage={logicalOperatorsImg}>
              <p>2. OPERADORES LÓGICOS</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-if-else" className="link">
            <Card width="330px" height="100px" backgroundImage={ifElseImg}>
              <p>3. IF ELSE</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-ternary" className="link">
            <Card width="330px" height="100px" backgroundImage={ternaryImg}>
              <p>4. OPERADOR TERNÁRIO</p>
            </Card>
          </Link>
          <Link to="/programminglogic/conditional-switch" className="link">
            <Card width="330px" height="100px" backgroundImage={switchImg}>
              <p>5. SWITCH</p>
            </Card>
          </Link>
          <Link to="/programminglogic/while" className="link">
            <Card width="330px" height="100px" backgroundImage={whileImg}>
              <p>6. WHILE</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
