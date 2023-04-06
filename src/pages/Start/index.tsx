import { Link, useNavigate } from "react-router-dom";
import { Container, ButtonStart } from "./styles";

export const Start = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const fullScreenEnabled =
      document.fullscreenEnabled ||
      (document as any).webkitFullscreenEnabled ||
      (document as any).mozFullScreenEnabled ||
      (document as any).msFullscreenEnabled ||
      false;

    if (isMobile && fullScreenEnabled) {
      document.documentElement.requestFullscreen();
    }

    navigate("/home")
  };
  
  return (
    <Container>
      <Link to="/home" className="link-start">
        <ButtonStart>Start</ButtonStart>
      </Link>
    </Container>
  );
};
