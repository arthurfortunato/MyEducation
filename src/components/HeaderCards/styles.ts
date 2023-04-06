import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.colors.backgroundContainerContents};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background: ${({theme}) => theme.colors.backgroundGradiente};
  display: flex;
  align-items: center;

  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
  }

  @media(max-width: 400px) {
    h1 {
      margin-left: 50px;
    }
  }
`;

export const ButtonModalStyled = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
  color: #fff;
  padding-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

`;
