import { useParams } from "react-router-dom"
import { EditandoContato } from "../../containers/EditandoContato"
import { useSelector } from "react-redux"
import { RootReducer } from "../../store"


export const EditandoContatos = () => {

  const {itens} = useSelector((state: RootReducer) => state.contatos)

  const {id} = useParams()
  return (
    <>
    {itens.filter(c => c.id === Number(id))
      .map(c =>
        <EditandoContato
        email={c.email}
        fotoperfil={c.fotoperfil}
        id={c.id}
        nome={c.nome}
        telefone={c.telefone}
        />
    )}
    </>
  )
}
