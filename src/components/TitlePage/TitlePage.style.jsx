import Styled from 'styled-components';
import {darkTheme} from '../../themes/Themes';

export const TitleStyle = Styled.h1`
  font-size: 3.2rem;
  color: ${darkTheme.colors.primary};
  font-weight: 700;
  letter-spacing: 0.2rem;
  margin-top: 4.8rem;
  margin-bottom: 1.6rem;
  @media (min-width: 600px) {
    font-size: 4rem;
    margin-top: 6.4rem;
    margin-bottom: 2rem;
  }
  @media (min-width: 900px) {
    font-size: 4.8rem;
    margin-top: 8rem;
    margin-bottom: 2.4rem;
  }
`;