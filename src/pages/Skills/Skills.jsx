import { TitlePage } from '../../components/TitlePage/TitlePage';
import { Container } from '../../components/Container/Container';
import * as S from './Skills.style';


import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaNodeJs, FaServer
} from 'react-icons/fa';
import {
  SiStyledcomponents, SiMysql, SiRedux,SiTypescript 
} from 'react-icons/si';

import skillsData from '../../data/skillsData.json';

const iconsMap = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  SiTypescript,
  FaReact,
  SiStyledcomponents,
  SiRedux,
  FaServer,
  FaGitAlt,
  SiMysql
};

export const Skills = () => {
  return (
    <Container >
      <S.SkillsContainer className="page-effect">
        <TitlePage title="Habilidades" />
        <S.SkillsGrid>
          {skillsData.map((skill, index) => {
            const IconComponent = iconsMap[skill.icon];
            return (
              <S.SkillCard key={index}>
                <S.IconWrapper>
                  <IconComponent color={skill.color} />
                </S.IconWrapper>
                <S.SkillName>{skill.name}</S.SkillName>
              </S.SkillCard>
            );
          })}
        </S.SkillsGrid>
      </S.SkillsContainer>
    </Container>
  );
};

