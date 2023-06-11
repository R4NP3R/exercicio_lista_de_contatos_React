import { BsFillPersonFill } from "react-icons/bs"
import * as S from "./styles"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"

export const FiltroDeContatos = () => {
const { contatos } = useSelector((state: RootReducer) => state)

const contatosQuantidade = () => {
  return contatos.itens.length
}

const quantidade = contatosQuantidade()

  return (
    <S.SeparacaoDeContatos>
      <span><BsFillPersonFill/></span>
      <span>Contatos</span>
      <span>{quantidade}</span>
    </S.SeparacaoDeContatos>

  )
}
