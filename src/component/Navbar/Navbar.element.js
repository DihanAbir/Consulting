import styled from "styled-components";
import { Container } from "../../globalStyle";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #5666;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2 rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 40px;

  ${Container};
`;
export const NavLogo = styled(Link)`
  color: red;
  justify-flex: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-item: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
  color: red;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 91%;
    height: 80vh;
    position: absolute;
    top: 90px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: blue;
  }
`;

export const NavItems = styled.li`
  height: 40px;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid red;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table:

      &:hover{
          color: #4b59f7;
          transition: all 0.3s ease;

      }
  }
`;
