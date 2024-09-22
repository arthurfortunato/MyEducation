import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import { BodyContainer } from "../../components/BodyContainerStyled";
import { Container } from "../../components/Container";
import introductionImg from "../../assets/Docker/INTRODUCTION.jpg";
import usageImg from "../../assets/Docker/USAGE.jpg";
import commandsImg from "../../assets/Docker/COMMANDS.jpg";
import reactImg from "../../assets/Docker/REACT.jpg";

export const Docker = () => {
  return (
    <Container>
      <HeaderCards title="Docker" />
      <BodyContainer>
        <div>
          <Link to="/docker/introduction" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={introductionImg}
            >
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/docker/usage" className="link">
            <Card width="330px" height="100px" backgroundImage={usageImg}>
              <p>2. USO</p>
            </Card>
          </Link>
          <Link to="/docker/commands" className="link">
            <Card width="330px" height="100px" backgroundImage={commandsImg}>
              <p>3. COMANDOS</p>
            </Card>
          </Link>
          <Link to="/docker/example-react" className="link">
            <Card width="330px" height="100px" backgroundImage={reactImg}>
              <p>4. DOCKERFILE REACT</p>
            </Card>
          </Link>
        </div>
      </BodyContainer>
    </Container>
  );
};
