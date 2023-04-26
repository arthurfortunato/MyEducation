import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/NewRelic/INTRODUCTION.jpg";
import apm from "../../assets/NewRelic/APM.jpg";

export const NewRelic = () => {
  return (
    <Container>
      <HeaderCards title="New Relic" />
      <BodyContainerStyled>
        <div>
          <Link to="/new-relic/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/new-relic/apm" className="link">
            <Card width="330px" height="100px" backgroundImage={apm}>
              <p>2. APM</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
