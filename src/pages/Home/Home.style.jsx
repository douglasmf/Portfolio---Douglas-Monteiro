import Styled from 'styled-components';
import { darkTheme } from '../../themes/Themes';

export const HomeContainer = Styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-image: url('/home_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; 
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(1px);
  }
`;

export const Content = Styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    text-align: center;
    h2 {
        font-size: 2rem;
        font-weight: 500;
        letter-spacing: 0.3rem;
        opacity: 0.9;
    }

    h1 {
        font-size: 3.6rem;
        font-weight: 700;
        color: ${darkTheme.colors.primary};
        text-shadow: 0px 0px 8px rgba(0,0,0,0.6);
    }

    @media (min-width: 600px) {
        gap: 1.2rem;
        h2 { font-size: 2.4rem; }
        h1 { font-size: 4.8rem; }
    }

    @media (min-width: 900px) {
        gap: 1.6rem;
        h2 { font-size: 2.8rem; }
        h1 { font-size: 5.6rem; }
    }
`;

export const Typewriter = Styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  min-height: 2.2rem;
  margin-top: 0.4rem;
  color: #fff;
  opacity: 0.9;

  .cursor {
    display: inline-block;
    width: 1ch;
    animation: blink 0.8s infinite;
  }
  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    font-size: 2.2rem;
  }
`;

export const ButtonRow = Styled.div`
  margin-top: 1.6rem;
  display: flex;
  gap: 1.2rem;

  .button-style {
    position: relative;
    overflow: hidden;
  }

  .button-style::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 12px;
    background: linear-gradient(120deg, #ffffff20, #ffffff05);
    opacity: 0;
    transition: opacity .3s ease;
  }

  .button-style:hover::before {
    opacity: 1;
  }

  .button-style.secondary {
    background-color: #444;
  }

  @media (min-width: 600px) {
    margin-top: 2rem;
    gap: 1.6rem;
  }

  @media (min-width: 900px) {
    margin-top: 2.4rem;
    gap: 2rem;
  }
`;
