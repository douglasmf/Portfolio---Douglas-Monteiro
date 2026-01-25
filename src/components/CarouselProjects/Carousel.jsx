import { useState, useEffect } from 'react';
import * as S from './Carousel.style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import projectsData from '../../data/projectsData.json';
import { FaGlobe, FaGithub } from 'react-icons/fa';

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  // Efeito para a transição de texto
  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex < projectsData.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const project = projectsData[currentIndex];

  return (
    <S.CarouselContainer>
      <S.ArrowButton onClick={prevSlide} disabled={currentIndex === 0} position="left">
        <FiChevronLeft />
      </S.ArrowButton>

      <S.ProjectCard>
        {/* AREA DA IMAGEM: Esta parte desliza */}
        <S.ImageWrapper>
          <S.ImageTrack style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projectsData.map((proj, idx) => (
              <S.ImageContainer>
                <S.ProjectImage 
                  key={idx} 
                  src={proj.image} 
                  alt={proj.title} 
                />
              </S.ImageContainer>
            ))}
          </S.ImageTrack>
        </S.ImageWrapper>

        {/* AREA DE INFORMAÇÃO: Fundo e botões fixos, texto com fade */}
        <S.ProjectInfo>
          <S.AnimatedContent className={isChanging ? 'changing' : ''}>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
            
            <S.TagList>
              {project.tags?.map((tag, i) => (
                <S.Tag key={i}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </S.AnimatedContent>

          {/* Botões sempre fixos no fundo do card */}
          <S.ButtonGroup>
            <S.ProjectButton  href={project.site} target="_blank">
              <FaGlobe /> Site
            </S.ProjectButton>
            <S.ProjectButton destaque href={project.repo} target="_blank">
              <FaGithub /> Repositório
            </S.ProjectButton>
          </S.ButtonGroup>
        </S.ProjectInfo>
      </S.ProjectCard>

      <S.ArrowButton onClick={nextSlide} disabled={currentIndex === projectsData.length - 1} position="right">
        <FiChevronRight />
      </S.ArrowButton>
    </S.CarouselContainer>
  );
};