import { Container, BodyContainerStyled } from "./styles";

import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import api from "../../assets/ConceptsImages/API.jpg";
import rest from "../../assets/ConceptsImages/REST.jpg";
import restFul from "../../assets/ConceptsImages/RESTFUL.jpg";
import statusCode from "../../assets/ConceptsImages/STATUSCODE.jpg";
import versioning from "../../assets/ConceptsImages/VERSIONAMENTO.jpg";
import quizz from "../../assets/ConceptsImages/QUIZZ.jpg";

export const Concepts = () => {
  return (
    <Container>
      <HeaderCards title="Conceitos" />
      <BodyContainerStyled>
        <div>
          <Link to="/concepts/api" className="link">
            <Card width="330px" height="100px" backgroundImage={api}>
              <p>1. API</p>
            </Card>
          </Link>
          <Link to="/concepts/rest" className="link">
            <Card width="330px" height="100px" backgroundImage={rest}>
              <p>2. REST</p>
            </Card>
          </Link>
          <Link to="/concepts/rest-full" className="link">
            <Card width="330px" height="100px" backgroundImage={restFul}>
              <p>3. RESTFUL</p>
            </Card>
          </Link>
          <Link to="/concepts/status-code" className="link">
            <Card width="330px" height="100px" backgroundImage={statusCode}>
              <p>4. STATUS CODE</p>
            </Card>
          </Link>
          <Link to="/concepts/versioning" className="link">
            <Card width="330px" height="100px" backgroundImage={versioning}>
              <p>5. Versionamento Semântico</p>
            </Card>
          </Link>
          <Link to="/concepts/quizz" className="link">
            <Card width="330px" height="100px" backgroundImage={quizz}>
              <p>6. Quizz</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
