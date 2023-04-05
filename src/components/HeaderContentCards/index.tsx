import {
  Container,
  HeaderContainer,
  ButtonHeaderStyled,
  LoadingContainer,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { LoadingBar } from "../Loading";

export const HeaderContentCards = ({ loadingProgress, backRoute }: any) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(backRoute);
  };

  return (
    <Container>
      <HeaderContainer>
        <LoadingContainer>
          <LoadingBar loadingProgress={loadingProgress} />
        </LoadingContainer>
        <ButtonHeaderStyled onClick={handleBack}>
          <AiOutlineClose size={25} />
        </ButtonHeaderStyled>
      </HeaderContainer>
    </Container>
  );
};
