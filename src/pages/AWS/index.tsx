import { Container, BodyContainerStyled } from "./styles";
import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import cloudComputingImg from "../../assets/AWS/CLOUDCOMPUTING.jpg";
import awsCloudIntroductionImg from "../../assets/AWS/AWSCLOUDINTRODUCTION.jpg";

export const AWS = () => {
  return (
    <Container>
      <HeaderCards title="AWS" />
      <BodyContainerStyled>
        <div>
          <Link to="cloud-computing" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={cloudComputingImg}
            >
              <p>1. Cloud Computing</p>
            </Card>
          </Link>
          <Link to="cloud-introduction" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={awsCloudIntroductionImg}
            >
              <p>1. AWS Cloud Introduction</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
