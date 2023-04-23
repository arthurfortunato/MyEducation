import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introducao from "../../assets/Collections/INTRODUCTION.jpg"
import interfaces from "../../assets/Collections/INTERFACESIMG.jpg"
import implementations from "../../assets/Collections/IMPLEMENTATIONS.jpg"
import list from "../../assets/Collections/LISTIMG.jpg"
import set from "../../assets/Collections/SET.jpg"
import queue from "../../assets/Collections/QUEUE.jpg"
import map from "../../assets/Collections/MAPIMG.jpg"

export const Collections = () => {
  return (
    <Container>
      <HeaderCards title="Coleções" />
      <BodyContainerStyled>
        <div>
          <Link to="/collections/introduction" className="link">
            <Card width="330px" height="100px" backgroundImage={introducao}>
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/collections/interfaces" className="link">
            <Card width="330px" height="100px" backgroundImage={interfaces}>
              <p>2. INTERFACES</p>
            </Card>
          </Link>
          <Link to="/collections/implementations" className="link">
            <Card width="330px" height="100px" backgroundImage={implementations}>
              <p>3. IMPLEMENTAÇÕES</p>
            </Card>
          </Link>
          <Link to="/collections/list" className="link">
            <Card width="330px" height="100px" backgroundImage={list}>
              <p>4. LIST</p>
            </Card>
          </Link>
          <Link to="/collections/set" className="link">
            <Card width="330px" height="100px" backgroundImage={set}>
              <p>5. SET</p>
            </Card>
          </Link>
          <Link to="/collections/queue" className="link">
            <Card width="330px" height="100px" backgroundImage={queue}>
              <p>6. QUEUE</p>
            </Card>
          </Link>
          <Link to="/collections/map" className="link">
            <Card width="330px" height="100px" backgroundImage={map}>
              <p>7. MAP</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
