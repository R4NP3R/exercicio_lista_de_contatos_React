import { HeaderForm, SearchInput, StyledHeader, Tittle } from "./styles"
import {AiOutlineSearch } from 'react-icons/ai'
import {BsPeopleFill } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { pesquisa } from "../../store/reducers/filtros"

export const Header = () => {
  const dispatch = useDispatch()
  const {termo} = useSelector((state: RootReducer) => state.filtroDeBusca)

  return (
    <StyledHeader>
    <Tittle><BsPeopleFill/> Contatos</Tittle>
    <HeaderForm action="sub">
      <AiOutlineSearch/>
      <SearchInput
      type="text"
      placeholder="Pesquisa"
      value={termo}
      onChange={evento => dispatch(pesquisa(evento.target.value))}/>
    </HeaderForm>
    </StyledHeader>
  )
}
