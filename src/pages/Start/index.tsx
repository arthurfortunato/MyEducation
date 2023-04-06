import { Link } from "react-router-dom";
import { Container, ButtonStart } from "./styles";

export const Start = () => {
  return (
    <Container>
      <Link to="/home" className="link-start">
        <ButtonStart>Start</ButtonStart>
      </Link>
    </Container>
  );
};
