import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import { BodyContainer } from "../../components/BodyContainerStyled";
import { Container } from "../../components/Container";
import introducao from "../../assets/Poo/INTRODUCTION.jpg";
import classe from "../../assets/Poo/CLASS.jpg";
import heranca from "../../assets/Poo/INHERITANCE.jpg";
import encapsulamento from "../../assets/Poo/ENCAPSULATION.jpg";
import polimorfismo from "../../assets/Poo/POLYMORPHISM.jpg";

export const POO = () => {
  return (
    <Container>
      <HeaderCards title="Orientação a Objetos" />
      <BodyContainer>
        <div>
          <Link to="/poo/introduction" className="link">
            <Card backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/poo/class" className="link">
            <Card backgroundImage={classe}>
              <p>2. CLASSE E OBJETO</p>
            </Card>
          </Link>
          <Link to="/poo/polymorphism" className="link">
            <Card backgroundImage={polimorfismo}>
              <p>3. POLIMORFISMO</p>
            </Card>
          </Link>
          <Link to="/poo/inheritance" className="link">
            <Card backgroundImage={heranca}>
              <p>4. HERANÇA</p>
            </Card>
          </Link>
          <Link to="/poo/encapsulation" className="link">
            <Card backgroundImage={encapsulamento}>
              <p>5. ENCAPSULAMENTO</p>
            </Card>
          </Link>
        </div>
      </BodyContainer>
    </Container>
  );
};
