import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import * as S from "./SocialContact.style";

export const SocialContact = () => {
  return (
    <S.SocialContainer>
      <S.Block>
        <S.Subtitle>
          <FaEnvelope />
          Email para contato
        </S.Subtitle>
        <S.Email>douglasmonteiro1995@hotmail.com</S.Email>
      </S.Block>

      <S.Block>
        <S.Subtitle>Adicione nas redes</S.Subtitle>

        <S.LinkItem href="https://github.com/douglasmf" target="_blank">
          <FaGithub />
          GitHub
        </S.LinkItem>

        <S.LinkItem href="https://www.linkedin.com/in/douglas-monteiro-421b90300/" target="_blank">
          <FaLinkedin />
          LinkedIn
        </S.LinkItem>
      </S.Block>
    </S.SocialContainer>
  );
};
