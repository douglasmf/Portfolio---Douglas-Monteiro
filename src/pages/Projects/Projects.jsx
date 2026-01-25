import * as S from './Projects.style'
import { useMedia } from '../../hooks/useMedia';
import { TitlePage } from '../../components/TitlePage/TitlePage';
import { Container } from '../../components/Container/Container';
import { Carousel } from '../../components/CarouselProjects/Carousel';
import ProjectsData from '../../data/projectsData.json';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

export const Projects = () => {

  const media = useMedia();

  return (
    <Container>
      <S.ProjectsContainer className="page-effect">
        <TitlePage title="Projetos" />
        {media === 'SM' ? (
          ProjectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
        <Carousel />
        )}
        
      </S.ProjectsContainer>
    </Container>
  )
}
