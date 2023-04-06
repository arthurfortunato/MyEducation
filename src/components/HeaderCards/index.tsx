import { Container, HeaderContainer, ButtonModalStyled } from "./styles";

import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const HeaderCards = (props: { title: string }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <Container>
      <HeaderContainer>
        <h1>{props.title}</h1>
        <ButtonModalStyled onClick={handleBack}>
          <AiOutlineArrowLeft size={30} />
        </ButtonModalStyled>
      </HeaderContainer>
    </Container>
  );
};
