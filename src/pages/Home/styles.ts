import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
`;

export const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items:center;
  margin-left: 100px;


  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 900px) {
    transition: 1.8s all;
    margin-left: 50px;
  }

  @media (max-width: 500px) {
    transition: 1.8s all;
    margin-left: 20px;
  }

  @media (max-width: 300px) {
    transition: 1.8s all;
    margin-left: 20px;
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
    color: ${({ theme }) => theme.colors.titleSection};
    font: 700 0.8rem "Roboto", sans-serif;

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
    color: ${({ theme }) => theme.colors.titleSection};
    font: 700 0.8rem "Roboto", sans-serif;
    margin-top: 70px;
    p {
      padding-left: 25px;
      max-width: 120px;
    }
  }
`;

export const RightCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 40px 0px 50px;

  .middle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.titleSection};
    font: 700 0.8rem "Roboto", sans-serif;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.colors.backgroundGradiente};
  display: flex;
`;
