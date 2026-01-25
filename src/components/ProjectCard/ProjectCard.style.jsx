import styled from 'styled-components';
import { darkTheme } from '../../themes/Themes';

export const Card = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 32px;
  transition: transform 0.3s ease;
  border: 2px solid ${darkTheme.colors.primary};
  display: flex;
  flex-direction: column; /* Garante que imagem e info fiquem em sequência */
  background-color: #121212; /* Fundo sólido para garantir legibilidade */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 130px; /* Reduzido para não dominar o card */
  object-fit: cover;
  object-position: top;
  /* Removido border-radius individual para casar com o topo do card */
`;

// O Overlay agora é opcional, pois o texto não está mais sobre a imagem.
// Se quiser manter um efeito escurecido na imagem, use-o aqui.
export const Overlay = styled.div`
  display: none; /* Desativado para priorizar a clareza da imagem */
`;

export const Info = styled.div`
  /* Removido position absolute */
  padding: 20px;
  color: ${darkTheme.colors.text};
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #1a1a1a; /* Cor levemente diferente do card para destacar */
`;

export const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${darkTheme.colors.primary}; /* Título com cor de destaque */
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  color: #ccc; /* Cor cinza clara para melhor leitura no escuro */
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${darkTheme.colors.primary};
  color: #fff;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;