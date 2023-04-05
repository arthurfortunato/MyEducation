import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  height: 100px;
  background: ${({ theme }) => theme.colors.backgroundHeaderContentCards};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundHeaderContentCards};
`;

export const ButtonHeaderStyled = styled.button`
  border: 0;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.backgroundHeaderContentCards};
  color: ${({ theme }) => theme.colors.buttonHeaderContentCards};
  padding-right: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 900px) {
    transition: 1.8s all;
    padding-right: 0px;
  }
`;

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
