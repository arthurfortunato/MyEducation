import { Container, BodyContainerStyled } from "./styles";
import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import introductionImg from "../../assets/MySQL/INTRODUCTION.jpg";
import databaseImg from "../../assets/MySQL/DATABASE.jpg";
import tableImg from "../../assets/MySQL/TABLE.jpg";
import insertImg from "../../assets/MySQL/INSERT.jpg";

export const MySQL = () => {
  return (
    <Container>
      <HeaderCards title="MySQL" />
      <BodyContainerStyled>
        <div>
          <Link to="/mysql/introduction" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={introductionImg}
            >
              <p>1. INTRODUÇÃO</p>
            </Card>
          </Link>
          <Link to="/mysql/create-database" className="link">
            <Card width="330px" height="100px" backgroundImage={databaseImg}>
              <p>2. CRIAR DATABASE</p>
            </Card>
          </Link>
          <Link to="/mysql/create-table" className="link">
            <Card width="330px" height="100px" backgroundImage={tableImg}>
              <p>3. CRIAR TABELA</p>
            </Card>
          </Link>
          <Link to="/mysql/insert" className="link">
            <Card width="330px" height="100px" backgroundImage={insertImg}>
              <p>4. INSERT</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
