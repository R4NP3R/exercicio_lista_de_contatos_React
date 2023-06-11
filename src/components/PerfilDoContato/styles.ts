import styled from "styled-components";
import { Link } from 'react-router-dom'

export const PerfilContato = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  transition: all .2s;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-right: 12px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }

  svg {
    font-size: 20px;
    margin-left: 12px;
    display: none;
    transition: all .2 ease-in;
  }

  &:hover {
    background-color: #f5f5f5;

    div {
      &:nth-child(2) {
        display: none;
      }
    }

    svg {
    display: block;
    cursor: pointer;
    }
  }
`
export const Separador1 = styled.div`
  display: grid;
  grid-template-columns: 290px 1fr;
  justify-content: space-between;
  width: 100%;
`

export const Perfil = styled.div`
  display: flex;
  align-items: center;
`

export const MeioDeContato = styled.div`
  display: grid;
  grid-template-columns: 248px 105px;
  align-items: center;
  width: 100%;
`

export const Icones = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;

  button {
    background-color: transparent;
    border: none;
  }
`

export const IconeEditar = styled(Link)`
  color: black;

`
