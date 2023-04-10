import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { ImageCard } from "../../components/ImageCard";

import oop from "../../assets/HomeImages/OOP.gif";
import logica from "../../assets/HomeImages/LOGICA.jpg";
import java from "../../assets/HomeImages/JAVA.gif";
import conceitos from "../../assets/HomeImages/CONCEITOS.gif";

import {
  Container,
  CardWrapper,
  TopCard,
  RightCard,
} from "./styles";
import { useState } from "react";
import { Header } from "../../components/Header";

export const Home = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event: any) => {
    setIsDragging(true);
    setStartX(event.pageX - event.currentTarget.offsetLeft);
    setScrollLeft(event.currentTarget.scrollLeft);
  };

  const handleMouseMove = (event: any) => {
    if (!isDragging) return;
    const x = event.pageX - event.currentTarget.offsetLeft;
    const distance = x - startX;
    event.currentTarget.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <Container>
      <Header title="Aprende aí" />
      <CardWrapper>
        <div
          style={{
            display: "flex",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            overflowX: "scroll",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <TopCard>
            <Link to="/concepts" className="top">
              <Card>
                <ImageCard src={conceitos} />
              </Card>
              <p>1. Conceitos</p>
            </Link>
            <Link to="/programminglogic" className="top-bottom">
              <Card>
                <ImageCard src={logica} />
              </Card>
              <p>2. Lógica da Programação</p>
            </Link>
          </TopCard>
          <RightCard>
            <Link to="/poo" className="middle">
              <Card>
                <ImageCard src={oop} />
              </Card>
              <p>3. Orientação a Objetos</p>
            </Link>
          </RightCard>

          <TopCard>
            <Link to="/java" className="top">
              <Card>
                <ImageCard src={java} />
              </Card>
              <p>4. Java</p>
            </Link>
          </TopCard>
        </div>
      </CardWrapper>
    </Container>
  );
};
