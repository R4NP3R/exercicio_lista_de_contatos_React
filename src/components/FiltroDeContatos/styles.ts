import styled from "styled-components";
import { Props } from ".";

type CleanProps = Omit<Props, 'quantidade' | 'tipo'>

export const SeparacaoDeContatos = styled.div<CleanProps>`
  background-color: #e8f0fe;
  border-radius: 0px 25px 25px 0px;
  font-size: 16px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  svg {
    color: #1967d2;
  }

  &:hover {
    background-color: #e8f0fe;
  }

  span {
    color: #1967d2;
    height: 16px;
  }
`
