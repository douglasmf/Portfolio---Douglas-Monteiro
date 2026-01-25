import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";
import { useMenu } from "../../context/MenuContext";
import { Link } from "react-router-dom";

export const MenuContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 28rem;
  padding: 1.6rem;
  background-color: ${darkTheme.colors.darkPrimary};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: .8rem;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  @media (min-width: 600px) {
    width: 32rem;
    padding: 2.4rem;
    gap: 1.2rem;
  }
  @media (min-width: 900px) {
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
    justify-content: center;  
    width: 40rem;
    height: 8.0rem;
    gap: 2.4rem;
    box-shadow: none;
    background-color: transparent;
  }
`;

export const MenuTopo = styled.div`
  display: flex;
  height: 6.4rem;
  width: 100%;
  button{
    border: none;
    background: transparent;
    height: 4.8rem;
    width: 4.8rem;
    font-size: 2.4rem;
    color: ${darkTheme.colors.text};
    background-color: transparent;
    cursor: pointer;
  }
  @media (min-width: 900px) {
    display: none;}
`;

export const MenuItem = styled(Link)`
  color: ${darkTheme.colors.text};
  text-decoration: none;
  height: 4.8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  @media (min-width: 600px) {
    height: 5.6rem;
    font-size: 1.6rem;
  }
  @media (min-width: 900px) { 
    width: auto;
    height: auto;
    transition: color 0.3s ease;
    &:hover {
      color: ${darkTheme.colors.primary};
    } 
  }
`;
