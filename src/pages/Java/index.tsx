import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Java/introducao.jpg";
import framework from "../../assets/Java/framework.png";
import jvm from "../../assets/Java/jvm.png";
import jdk from "../../assets/Java/jdk.png";
import jdbc from "../../assets/Java/jdbc.jpg";
import maven from "../../assets/Java/maven.jpg";
import springBoot from "../../assets/Java/springBoot.png";

export const Java = () => {
  return (
    <Container>
      <HeaderCards title="Java" />
      <BodyContainerStyled>
        <div>
          <Link to="/java/introduction" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/java/spring" className="link">
            <Card width="350px" height="100px" backgroundImage={framework}>
              <p>2. SPRING FRAMEWORK</p>
            </Card>
          </Link>
          <Link to="/java/jvm" className="link">
            <Card width="350px" height="100px" backgroundImage={jvm}>
              <p>3. JVM</p>
            </Card>
          </Link>
          <Link to="/java/jdk" className="link">
            <Card width="350px" height="100px" backgroundImage={jdk}>
              <p>4. JDK</p>
            </Card>
          </Link>
          <Link to="/java/jdbc" className="link">
            <Card width="350px" height="100px" backgroundImage={jdbc}>
              <p>5. JDBC</p>
            </Card>
          </Link>
          <Link to="/java/maven" className="link">
            <Card width="350px" height="100px" backgroundImage={maven}>
              <p>6. MAVEN</p>
            </Card>
          </Link>
          <Link to="/java/springboot" className="link">
            <Card width="350px" height="100px" backgroundImage={springBoot}>
              <p>7. SPRING BOOT</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
