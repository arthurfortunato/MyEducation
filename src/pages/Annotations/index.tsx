import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Annotations/introducao.png";
import annotations from "../../assets/Annotations/annotations.png";
import stereotypes from "../../assets/Annotations/springboot.jpg";
import autowired from "../../assets/Annotations/autowired.png";
import constructor from "../../assets/Annotations/constructor.png";
import qualifier from "../../assets/Annotations/qualifier.png";

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
          <Link to="/annotations/introducao-annotations" className="link">
            <Card width="350px" height="100px" backgroundImage={annotations}>
              <p>2. INTRODUÇÃO ANNOTATIONS</p>
            </Card>
          </Link>
          <Link to="/annotations/stereotypes" className="link">
            <Card width="350px" height="100px" backgroundImage={stereotypes}>
              <p>3. STEREOTYPES</p>
            </Card>
          </Link>
          <Link to="/annotations/core-beans-autowired" className="link">
            <Card width="350px" height="100px" backgroundImage={autowired}>
              <p>4. Core Beans @Autowired</p>
            </Card>
          </Link>
          <Link to="/annotations/autowired-constructor" className="link">
            <Card width="350px" height="100px" backgroundImage={constructor}>
              <p>5. @Autowired vs Constructor</p>
            </Card>
          </Link>
          <Link to="/annotations/core-beans-qualifier" className="link">
            <Card width="350px" height="100px" backgroundImage={qualifier}>
              <p>6.Core Beans @Qualifier</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
