import { useDispatch } from 'react-redux'

import { BiPencil, BiTrash} from 'react-icons/bi'
import * as S from './styles'
import ContatoClass from '../../models/Contato'
import { remover} from '../../store/reducers/contatos'

type Props = ContatoClass

export const PerfilDoContato = ({email, nome, telefone, fotoperfil, id}: Props) => {
  const dispatch = useDispatch()
  return (
    <S.PerfilContato>
      <S.Separador1>
        <S.Perfil>
          <img src={fotoperfil} alt="" />
          <p>{nome}</p>
        </S.Perfil>
        <S.MeioDeContato>
          <p>{email}</p>
          <p>{telefone}</p>
        </S.MeioDeContato>
        <S.Icones>
          <S.IconeEditar to={`/editando/${id}`}>
          <span>
          <BiPencil/>
          </span>
          </S.IconeEditar>

          <button onClick={() => dispatch(remover(id))}><BiTrash/></button>
        </S.Icones>
      </S.Separador1>
    </S.PerfilContato>
  )
}
