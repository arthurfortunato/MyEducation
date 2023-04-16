import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Annotations/introducao.png";

export const Annotations = () => {
  return (
    <Container>
      <HeaderCards title="Spring Annotations" />
      <BodyContainerStyled>
        <div>
          <Link to="/annotations/introduction" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/annotations/spring-annotations" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>2. SPRING ANNOTATIONS</p>
            </Card>
          </Link>
          <Link to="/annotations/stereotypes" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>3. STEREOTYPES</p>
            </Card>
          </Link>
          <Link to="/annotations/core-beans-autowired" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>4. Core Beans @Autowired</p>
            </Card>
          </Link>
          <Link to="/annotations/autowired-constructor" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>5. @Autowired vs Constructor</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
