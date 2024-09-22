import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";
import { BodyContainer } from "../../components/BodyContainerStyled";
import { Container } from "../../components/Container";
import introducao from "../../assets/NewRelic/INTRODUCTION.jpg";
import apm from "../../assets/NewRelic/APM.jpg";

export const NewRelic = () => {
  return (
    <Container>
      <HeaderCards title="New Relic" />
      <BodyContainer>
        <div>
          <Link to="/new-relic/introduction" className="link">
            <Card backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/new-relic/apm" className="link">
            <Card backgroundImage={apm}>
              <p>2. APM</p>
            </Card>
          </Link>
        </div>
      </BodyContainer>
    </Container>
  );
};
