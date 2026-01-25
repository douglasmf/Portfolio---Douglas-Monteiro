import * as S from './Container.style';

export const Container = (props) => {
  return (
    <S.Container className={props.class}>{props.children}</S.Container>
  )
}
