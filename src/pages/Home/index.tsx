import { Link } from "react-router-dom";
import { Card } from "../../components/Card";
import { ImageCard } from "../../components/ImageCard";

import oop from "../../assets/HomeImages/oop.jpeg";
import logica from "../../assets/HomeImages/logica.png";
import java from "../../assets/HomeImages/java.jpeg";
import conceitos from "../../assets/HomeImages/conceitos.jpeg";
import collections from "../../assets/HomeImages/collections.jpeg";
import spring from "../../assets/HomeImages/spring.jpeg";
import newRelic from "../../assets/HomeImages/NEWRELIC.png";
import dockerImg from "../../assets/HomeImages/docker.jpeg";
import mysqlImg from "../../assets/HomeImages/mysql.jpeg";
import awsImg from "../../assets/HomeImages/aws.jpeg";

import { Container, CardWrapper, TopCard, RightCard } from "./styles";
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
                <ImageCard width="100%" height="100%" src={logica} />
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
            <Link to="/collections" className="top-bottom">
              <Card>
                <ImageCard src={collections} />
              </Card>
              <p>5. Coleções</p>
            </Link>
          </TopCard>
          <RightCard>
            <Link to="/annotations" className="middle">
              <Card>
                <ImageCard src={spring} />
              </Card>
              <p>6. Spring Annotations</p>
            </Link>
          </RightCard>
          <TopCard>
            <Link to="/new-relic" className="top">
              <Card>
                <ImageCard src={newRelic} />
              </Card>
              <p>7. New Relic</p>
            </Link>
            <Link to="/docker" className="top-bottom">
              <Card>
                <ImageCard src={dockerImg} />
              </Card>
              <p>8. Docker</p>
            </Link>
          </TopCard>
          <RightCard>
            <Link to="/mysql" className="middle">
              <Card>
                <ImageCard src={mysqlImg} />
              </Card>
              <p>9. MySQL</p>
            </Link>
          </RightCard>
          <TopCard>
            <Link to="/aws" className="top">
              <Card>
                <ImageCard src={awsImg} />
              </Card>
              <p>10. AWS</p>
            </Link>
          </TopCard>
        </div>
      </CardWrapper>
    </Container>
  );
};
