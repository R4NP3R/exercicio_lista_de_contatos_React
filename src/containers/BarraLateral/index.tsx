import { GrAdd } from 'react-icons/gr'
import { Botao, MenuDeContatos} from './styles'
import { FiltroDeContatos } from '../../components/FiltroDeContatos'
import { BsArrowLeft } from 'react-icons/bs'

type Props = {
  estaEditando: boolean
}

export const BarraLateral = ({estaEditando}: Props) => {

  return (
    <>
    {estaEditando ? (
      <>
      <Botao to='/'>
          <BsArrowLeft/>
          Voltar
        </Botao>
      </>
    ) : (
      <>
        <MenuDeContatos>
          <Botao to='/adicionar'>
            <GrAdd/>
            Criar Contato
          </Botao>
          <nav>
            <ul>
              <li>
                <FiltroDeContatos/>
              </li>
            </ul>
          </nav>
        </MenuDeContatos>
      </>
    )}
    </>
  )
}
