import * as S from './Contact.style'
import { TitlePage } from '../../components/TitlePage/TitlePage'
import {Container} from '../../components/Container/Container'
import { FormContact } from '../../components/FormContact/FormContact'
import { SocialContact } from '../../components/SocialContact/SocialContact'

export const Contact = () => {
  return (
    <Container >
      <S.ContactContainer className="page-effect">
        <TitlePage title="Entre em Contato" />
        <S.ContactContent>
          <FormContact />
          <SocialContact />
        </S.ContactContent>
      </S.ContactContainer>
    </Container>
  )
}

