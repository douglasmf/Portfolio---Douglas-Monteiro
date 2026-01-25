import { useState } from 'react';
import * as S from './Header.style'
import { FaBars } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useMenu } from "../../context/MenuContext";
import { Container } from '../../components/Container/Container';
export const Header = () => {
  const { toggleMenu } = useMenu();
  return (
    <S.HeaderContainer>
      <Container>
        <S.HeaderContent>
          <S.ButtonMenu onClick={toggleMenu}>
            <FaBars />
          </S.ButtonMenu>
          <S.Title>Douglas Monteiro</S.Title>
          <S.SocialIcons>
            <a href="https://github.com/douglasmf" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/douglas-monteiro-421b90300" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </S.SocialIcons>
        </S.HeaderContent>
      </Container>

    </S.HeaderContainer>
  )
}
