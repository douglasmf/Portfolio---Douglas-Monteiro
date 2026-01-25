import { useMenu } from '../../context/MenuContext';
import * as S from './Menu.style'

export const Menu = () => {
  const { openMenu, closeMenu } = useMenu();
  return (
    <S.MenuContainer isOpen={openMenu}>
      <S.MenuTopo>
        <button onClick={closeMenu}>X</button>
      </S.MenuTopo>
      <S.MenuItem to="/" onClick={closeMenu}>Inicio</S.MenuItem>
      <S.MenuItem to="/sobre" onClick={closeMenu}>Sobre</S.MenuItem>
      <S.MenuItem to="/habilidades" onClick={closeMenu}>Habilidades</S.MenuItem>
      <S.MenuItem to="/projetos" onClick={closeMenu}>Projetos</S.MenuItem>
      <S.MenuItem to="/contato" onClick={closeMenu}>Contato</S.MenuItem>
    </S.MenuContainer>
  )
}

  