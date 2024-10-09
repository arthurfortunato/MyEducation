import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import { BodyContainer } from "../../components/BodyContainerStyled";
import { Container } from "../../components/Container";
import introducao from "../../assets/Java/INTRODUCTION.jpg";
import framework from "../../assets/Java/SPRINGFRAMEWORK.jpg";
import jvm from "../../assets/Java/JVM.jpg";
import jdk from "../../assets/Java/JDK.jpg";
import jdbc from "../../assets/Java/JDBCIMG.jpg";
import maven from "../../assets/Java/MAVENIMG.jpg";
import springBoot from "../../assets/Java/SPRINGBOOT.jpg";

export const Java = () => {
  return (
    <Container>
      <HeaderCards title="Java" />
      <BodyContainer>
        <div>
          <Link to="/java/introduction" className="link">
            <Card backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/java/spring" className="link">
            <Card backgroundImage={framework}>
              <p>2. SPRING FRAMEWORK</p>
            </Card>
          </Link>
          <Link to="/java/jvm" className="link">
            <Card backgroundImage={jvm}>
              <p>3. JVM</p>
            </Card>
          </Link>
          <Link to="/java/jdk" className="link">
            <Card backgroundImage={jdk}>
              <p>4. JDK</p>
            </Card>
          </Link>
          <Link to="/java/jdbc" className="link">
            <Card backgroundImage={jdbc}>
              <p>5. JDBC</p>
            </Card>
          </Link>
          <Link to="/java/maven" className="link">
            <Card backgroundImage={maven}>
              <p>6. MAVEN</p>
            </Card>
          </Link>
          <Link to="/java/springboot" className="link">
            <Card backgroundImage={springBoot}>
              <p>7. SPRING BOOT</p>
            </Card>
          </Link>
          <Link to="/java/generics" className="link">
            <Card background="#000">
              <p>8. GENERICS</p>
            </Card>
          </Link>
          <Link to="/java/varargs" className="link">
            <Card background="#000">
              <p>9. VARARGS</p>
            </Card>
          </Link>
        </div>
      </BodyContainer>
    </Container>
  );
};
