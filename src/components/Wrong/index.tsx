import { Container } from "./styles";
import wrong from "../../assets/HomeImages/wrong.gif";

export const Wrong = () => {
  return (
    <Container>
      <div>
        <img src={wrong} alt="" />
      </div>
    </Container>
  );
};
