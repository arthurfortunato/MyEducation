import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Collections/collectionsIntroducao.jpg"
import interfaces from "../../assets/Collections/interfaces.jpg"
import implementations from "../../assets/Collections/implementationsCard.jpg"

export const Collections = () => {
  return (
    <Container>
      <HeaderCards title="Coleções" />
      <BodyContainerStyled>
        <div>
          <Link to="/collections/introduction" className="link">
            <Card width="350px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/collections/interfaces" className="link">
            <Card width="350px" height="100px" backgroundImage={interfaces}>
              <p>2. INTERFACES</p>
            </Card>
          </Link>
          <Link to="/collections/implementations" className="link">
            <Card width="350px" height="100px" backgroundImage={implementations}>
              <p>3. IMPLEMENTAÇÕES</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
