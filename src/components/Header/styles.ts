import { styled} from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: center;
  height: 60px;

  svg {
    font-size: 25px;
    color: #b0b0b0;
    cursor: pointer;
    margin-left: 16px;
  }
`

export const Tittle = styled.h1`
  font-size: 32px;
  color: #4a4a4a;
  padding: 0rem 2rem;

  svg {
    color: blue;
  }
`

export const HeaderForm = styled.form`
  background-color: #f1f3f4;
  display:flex;
  width: 680px;
  align-items: center;
  border-radius: 8px;
  color: #202124;
  svg {
    margin: 0px 12px;
    color: #5f6368;
  }


`

export const SearchInput = styled.input`
  display: flex;
  height: 3rem;
  width:100%;
  border: none;
  font-size: 16px;
  background-color: #f1f3f4;
  border-radius: 8px;
`

export const MenuHamburguer = styled.button`
  background-color: transparent;
  border: transparent;

`

