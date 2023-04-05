import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.colors.background_white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background: linear-gradient(90deg, rgba(40,31,185,1) 24%, rgba(0,212,255,1) 100%);
  display: flex;
  align-items: center;

  h1 {
    width: 95%;
    display: flex;
    justify-content: center;
    color: #fff;
  }
`;

export const ButtonModalStyled = styled.button`
  border: 0;
  cursor: pointer;
  background: rgb(40,31,185);
  color: #fff;
  padding-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

`;
