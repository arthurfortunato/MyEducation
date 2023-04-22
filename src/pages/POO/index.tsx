import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Poo/INTRODUCTION.jpg";
import classe from "../../assets/Poo/CLASS.jpg";
import heranca from "../../assets/Poo/INHERITANCE.jpg";
import encapsulamento from "../../assets/Poo/ENCAPSULATION.jpg";
import polimorfismo from "../../assets/Poo/POLYMORPHISM.jpg";

export const POO = () => {
  return (
    <Container>
      <HeaderCards title="Orientação a Objetos" />
      <BodyContainerStyled>
        <div>
          <Link to="/poo/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/poo/class" className="link">
            <Card width="330px" height="100px" backgroundImage={classe}>
              <p>2. CLASSE E OBJETO</p>
            </Card>
          </Link>
          <Link to="/poo/polymorphism" className="link">
            <Card width="330px" height="100px" backgroundImage={polimorfismo}>
              <p>3. POLIMORFISMO</p>
            </Card>
          </Link>
          <Link to="/poo/inheritance" className="link">
            <Card width="330px" height="100px" backgroundImage={heranca}>
              <p>4. HERANÇA</p>
            </Card>
          </Link>
          <Link to="/poo/encapsulation" className="link">
            <Card width="330px" height="100px" backgroundImage={encapsulamento}>
              <p>5. ENCAPSULAMENTO</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
