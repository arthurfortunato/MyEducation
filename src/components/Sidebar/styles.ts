import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
`;

export const NavIcon = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 2rem;
  font-size: 2rem;
  height: 80px;
`;

export const NavIconBars = styled(NavIcon)`
  margin-left: 2rem;
`;

export const SidebarNav = styled.nav<{ sidebar: boolean }>`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 1s;
  z-index: 10;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;

/* SubMenu================================================================ */

export const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;

  text-decoration: none;
  font: 400 1.3rem "Lato", sans-serif;
  color: #e1e9fc;
  transition: 0.4s;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  background: #414757;
  height: 60px;

  font: 400 1.2rem "Lato", sans-serif;
  text-decoration: none;
  color: #f5f5f5;
  transition: 0.8s;

  &:hover {
    background: #252831;
    cursor: pointer;
  }
`;
