import { TitlePage } from '../../components/TitlePage/TitlePage';
import { Container } from '../../components/Container/Container';
import * as S from './About.style';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';

export const About = () => {
  return (
    <Container>
      <S.AboutContent className="page-effect">
        <TitlePage title="Sobre Mim" />
        <S.AboutSection>
          <S.ProfileArea>
            <S.AboutImage
              src="/perfil.png"
              alt="Douglas Monteiro"
            />
            <S.ProfileName>Douglas Monteiro</S.ProfileName>
            

            <S.SocialButtons>
              <S.IconButton
                href="https://github.com/douglasmf"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <FaGithub />
              </S.IconButton>
              <S.IconButton
                href="https://www.linkedin.com/in/douglas-monteiro-421b90300/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin />
              </S.IconButton>
            </S.SocialButtons>
            <S.IconButton href="/curriculo.pdf" target="_blank" className="curriculo">
              <HiOutlineDocumentText />
              <span>Currículo</span>
            </S.IconButton>
          </S.ProfileArea>

          <S.TextContent>
            <S.Text>
              Olá, me chamo Douglas Monteiro, sou natural de Gravataí-RS e estou cursando Análise e Desenvolvimento de Sistemas pela Uninter. Tenho como objetivo me tornar um desenvolvedor fullstack, expandindo meus conhecimentos tanto no front quanto no back-end. No momento, estou focado em front-end, buscando criar interfaces modernas e funcionais, além de aprender novas tecnologias que possam contribuir nos projetos que participo.
            </S.Text>
            <S.Text>
              Minhas principais habilidades envolvem HTML, CSS, JavaScript e React. Estou sempre aberto a explorar novas ferramentas e frameworks que possam agregar valor aos projetos. Atualmente, estou em busca da minha primeira oportunidade para aplicar e expandir meus conhecimentos.
            </S.Text>
          </S.TextContent>
        </S.AboutSection>
      </S.AboutContent>
    </Container>
  );
};
