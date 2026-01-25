import styled from "styled-components";
import { darkTheme } from "../../themes/Themes"; 

export const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 600px) {
    gap: 20px;
  }

  @media (min-width: 900px) {
    max-width: 480px;
  }
`;

export const InputStyle = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 2px solid ${darkTheme.colors.secondary};
  font-size: 1.5rem;
  outline: none;
  color: ${darkTheme.colors.text};
  background-color: transparent;
  transition: 0.2s ease;

  &:focus {
    border-color: ${darkTheme.colors.secondaryLight};
  }

  @media (min-width: 600px) {
    font-size: 1.6rem;
    padding: 16px;
  }
`;

export const TextareaStyle = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 2px solid ${darkTheme.colors.secondary};
  resize: none;
  font-size: 1.5rem;
  outline: none;
  color: ${darkTheme.colors.text};
  background-color: transparent;
  transition: 0.2s ease;

  &:focus {
    border-color: ${darkTheme.colors.secondaryLight};
  }

  @media (min-width: 600px) {
    font-size: 1.6rem;
    height: 160px;
  }
`;

export const ButtonSubmit = styled.input`
  margin-top: 8px;
  padding: 14px 20px;
  border-radius: 12px;
  border: 2px solid ${darkTheme.colors.primary};
  background-color: transparent;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: ${darkTheme.colors.primary};
    border-color: ${darkTheme.colors.primaryDark};
  }

  @media (min-width: 600px) {
    font-size: 1.7rem;
    padding: 16px 22px;
  }
`;
