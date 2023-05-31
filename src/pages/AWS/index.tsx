import { Container, BodyContainerStyled } from "./styles";
import { Card } from "../../components/Card";
import { HeaderCards } from "../../components/HeaderCards";
import { Link } from "react-router-dom";

import cloudComputingImg from "../../assets/AWS/CLOUDCOMPUTING.jpg";
import awsCloudIntroductionImg from "../../assets/AWS/AWSCLOUDINTRODUCTION.jpg";
import deploymentsModelsImg from "../../assets/AWS/DEPLOYMENTSMODELS.jpg";
import ec2Img from "../../assets/AWS/EC2.jpg";
import ec2InstanceImg from "../../assets/AWS/EC2INSTANCE.jpg";
import elbImg from "../../assets/AWS/ELB.jpg";

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
              <p>2. AWS Cloud Introduction</p>
            </Card>
          </Link>
          <Link to="deployments-models" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={deploymentsModelsImg}
            >
              <p>3. Deployments Models</p>
            </Card>
          </Link>
          <Link to="ec2" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={ec2Img}
            >
              <p>4. EC2</p>
            </Card>
          </Link>
          <Link to="ec2-instance" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={ec2InstanceImg}
            >
              <p>5. EC2 INSTANCE TYPES</p>
            </Card>
          </Link>
          <Link to="elb" className="link">
            <Card
              width="330px"
              height="100px"
              backgroundImage={elbImg}
            >
              <p>6. ELB</p>
            </Card>
          </Link>
        </div>
      </BodyContainerStyled>
    </Container>
  );
};
