import { useSelector } from "react-redux"

import { PerfilDoContato } from "../../components/PerfilDoContato"
import * as S from "./styles"
import { RootReducer } from "../../store"


export const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtroDeBusca)

  const PesquisaContatos = () => {
    return itens.filter((contato) => contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0)
  }

  const QuantidadeContatos = () => {
    return (
      itens.length
    )
  }

  const contatos = QuantidadeContatos()

  return (
    <S.ContainerContatos>
      <S.HeaderContatos>
        <ul>
          <li>
            Nome
          </li>
          <li>
            E-mail
          </li>
          <li>
            Telefone
          </li>
        </ul>
      </S.HeaderContatos>
      <S.QuantidadeContatos>
        Contatos
        <span>({contatos})</span>
      </S.QuantidadeContatos>
      {PesquisaContatos().map(c =>
      <li key={c.id}>
        <PerfilDoContato
        nome={c.nome}
        email={c.email}
        telefone={c.telefone}
        fotoperfil={c.fotoperfil}
        id={c.id}
      />
      </li>)}
    </S.ContainerContatos>
  )
}
