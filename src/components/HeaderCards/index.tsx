import { Container, HeaderContainer, ButtonModalStyled} from "./styles";

import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const HeaderCards = (props: { title: string }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <HeaderContainer>
        <ButtonModalStyled onClick={handleBack}>
          <AiOutlineArrowLeft size={30}/>
        </ButtonModalStyled>
        <h1>{props.title}</h1>
      </HeaderContainer>
    </Container>
  );
};
