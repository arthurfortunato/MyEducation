import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Annotations/INTRODUCTION.jpg";
import annotations from "../../assets/Annotations/ANNOTATIONS.jpg";
import stereotypes from "../../assets/Annotations/STEREOTYPES.jpg";
import autowired from "../../assets/Annotations/AUTOWIRED.jpg";
import constructor from "../../assets/Annotations/CONSTRUCTOR.jpg";
import qualifier from "../../assets/Annotations/QUALIFIER.jpg";
import value from "../../assets/Annotations/VALUE.jpg";
import configuration from "../../assets/Annotations/CONFIGURATION.jpg";
import scan from "../../assets/Annotations/SCAN.jpg";

export const Annotations = () => {
  return (
    <Container>
      <HeaderCards title="Spring Annotations" />
      <BodyContainerStyled>
        <div>
          <Link to="/annotations/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/annotations/spring-annotations" className="link">
            <Card width="330px" height="100px" backgroundImage={annotations}>
              <p>2. ANNOTATIONS</p>
            </Card>
          </Link>
          <Link to="/annotations/stereotypes" className="link">
            <Card width="330px" height="100px" backgroundImage={stereotypes}>
              <p>3. STEREOTYPES</p>
            </Card>
          </Link>
          <Link to="/annotations/core-beans-autowired" className="link">
            <Card width="330px" height="100px" backgroundImage={autowired}>
              <p>4. CORE BEANS @Autowired</p>
            </Card>
          </Link>
          <Link to="/annotations/autowired-constructor" className="link">
            <Card width="330px" height="100px" backgroundImage={constructor}>
              <p>5. @Autowired vs Constructor</p>
            </Card>
          </Link>
          <Link to="/annotations/core-beans-qualifier" className="link">
            <Card width="330px" height="100px" backgroundImage={qualifier}>
              <p>6. @Qualifier</p>
            </Card>
          </Link>
          <Link to="/annotations/core-beans-value" className="link">
            <Card width="330px" height="100px" backgroundImage={value}>
              <p>7. @Value</p>
            </Card>
          </Link>
          <Link to="/annotations/core-context-configuration" className="link">
            <Card width="330px" height="100px" backgroundImage={configuration}>
              <p>8. @Configuration</p>
            </Card>
          </Link>
          <Link to="/annotations/core-context-scan" className="link">
            <Card width="330px" height="100px" backgroundImage={scan}>
              <p>9. @ComponentScan</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
