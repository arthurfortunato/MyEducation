import { Container } from "./styles";
import congrats from "../../assets/HomeImages/congrats.gif";

export const Correct = () => {
  return (
    <Container>
      <div>
        <img src={congrats} alt="" />
      </div>
    </Container>
  );
};
