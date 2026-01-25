import { Link } from 'react-router-dom'
import * as S from './Home.style'
import { useEffect, useState } from 'react'

export const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Desenvolvedor Front-end";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.HomeContainer className="page-effect">
      <S.Content>
        <h2>Seja bem-vindo(a)</h2>
        <h1>Douglas Monteiro</h1>

        <S.Typewriter>
          {typedText}
          <span className="cursor">|</span>
        </S.Typewriter>

        <S.ButtonRow>
          <Link to="/contato" className="button-style">Contato</Link>
          <Link to="/projetos" className="button-style secondary">Projetos</Link>
        </S.ButtonRow>
      </S.Content>
    </S.HomeContainer>
  )
}
