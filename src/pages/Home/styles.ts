import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
`;

export const CardWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  margin-left: 100px;
  height: 60%;

  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 900px) {
    transition: 1.8s all;
    margin-top: 100px;
    margin-left: 50px;
  }

  @media (max-width: 500px) {
    transition: 1.8s all;
    margin-top: 80px;
    margin-left: 20px;
  }

  @media (max-width: 300px) {
    transition: 1.8s all;
    margin-top: 40px;
    margin-left: 20px;
  }

  @media (max-height: 760px) {
    transition: 1.8s all;
    height: 70%;
  }
`;

export const TopCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 50px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSection};
    font: 700 1rem "Roboto", sans-serif;

    p {
      max-width: 120px;
    }
  }

  .top-bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSection};
    font: 700 1rem "Lato", sans-serif;

    p {
      max-width: 120px;
    }
  }
`;

export const RightCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font: 700 1rem "Lato", sans-serif;

  p {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSection};
    font: 700 1rem "Lato", sans-serif;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.colors.backgroundGradiente};
  display: flex;
`;
