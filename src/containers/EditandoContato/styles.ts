import { styled } from "styled-components";
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask'


export const Header = styled.div`
  display: grid;
  grid-template-columns: 574px 1fr;
  max-width: 670px;
  width: 100%;
  font-size: 28px;
  padding-top: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(218,220,224);
  `


export const Botao = styled(Link)`
  font-size: 18px;
  color: black;
`

export const Separador2 = styled.div`
  display: flex;
  align-items: center;
  padding-left: 28px;
`

export const FotoDePerfil = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 99px;
  margin-right: 24px;
`
export const Separador3 = styled.div`
  display:flex;
  justify-content: end;

  div {
    display:flex;
    flex-direction: column-reverse;
  }

`

export const BotaoSalvar = styled.button`
  display: flex;
  justify-content: center;
  padding: 12px 28px;
  text-align: center;
  background-color: rgb(26,115,232);
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`

export const SectionForm = styled.section`
  display: flex;
  justify-content: center;
`

export const FormInfoContatos = styled.form`
  display: flex;

  flex-direction: column;
  width: 490px;
`

export const StyledInput = styled.div`
  border: 1px solid black;
  margin-top: 14px;
  border-radius: 4px;
  input{
    &:focus {
      border: none;
      outline-color: #1A73E8;

    }
  }
`

export const InfoInput = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  padding: 0px 16px;

  &:focus {
    outline-color: none;
  }
`

export const PhoneInput = styled(InputMask)`
  display: block;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  padding: 0px 16px;

  &:focus {
    outline-color: none;
  };
`

