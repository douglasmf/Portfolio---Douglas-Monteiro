import { FaGlobe, FaGithub } from 'react-icons/fa';
import * as S from './ProjectCard.style';

export const ProjectCard = ({ project }) => {
  return (
    <S.Card>
      <S.Image src={project.image} alt={project.title} />
      <S.Info>
        <S.Title>{project.title}</S.Title>
        <S.Description>{project.description}</S.Description>
        <S.ButtonGroup>
          <S.Button href={project.site} target="_blank" rel="noopener noreferrer">
            <FaGlobe />
            <span>Site</span>
          </S.Button>
          <S.Button href={project.repo} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Repositório</span>
          </S.Button>
        </S.ButtonGroup>
      </S.Info>
    </S.Card>
  );
};
