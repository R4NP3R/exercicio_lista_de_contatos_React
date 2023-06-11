import { Link } from "react-router-dom";
import { styled } from "styled-components";



export const MenuDeContatos = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  width: 100%;
`

export const Botao = styled(Link)`
  background-color: white;
  border: none;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.302), 0 1px 3px 1px rgba(60,64,67,.149);
  font-size: 14px;
  padding: 14px 32px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3c4043;
  transition: all 0.2s;
  margin: 16px;
  cursor: pointer;
  text-decoration: none;
  height: 48px;

  &:hover {
    box-shadow: 0 3px 4px 0 rgba(60,64,67,.302), 0 3px 5px 3px rgba(60,64,67,.149);
    color: #2962ff;
    background-color: #e8f0fe;

  }

  svg {
    font-size: 24px;
    padding-right: 8px
  }
`


