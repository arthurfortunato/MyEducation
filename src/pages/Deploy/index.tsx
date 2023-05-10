import { Container, BodyContainerStyled } from "./styles";
import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introductionImg from "../../assets/Deploy/INTRODUCTION.jpg";
import flyJavaImg from "../../assets/Deploy/FLYDEPLOYJAVA.jpg";

export const Deploy = () => {
  return (
    <Container>
      <HeaderCards title="Deploy" />
      <BodyContainerStyled>
        <div>
          <Link to="/deploy/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introductionImg}>
              <p>1. FLY.IO</p>
            </Card>
          </Link>
          <Link to="/deploy/fly-java" className="link">
            <Card width="330px" height="100px" backgroundImage={flyJavaImg}>
              <p>2. FLY.IO DEPLOY JAVA</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
