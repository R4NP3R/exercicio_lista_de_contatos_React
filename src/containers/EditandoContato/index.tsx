import { useDispatch } from "react-redux"
import { FormEvent, useState, useEffect } from "react"
import * as S from "./styles"
import { editar } from "../../store/reducers/contatos"
import { useNavigate} from "react-router-dom"
import ContatoClass from "../../models/Contato"

type Props = ContatoClass

export const EditandoContato = ({nome: nomeOriginal, email: emailOriginal,  telefone: telefoneOriginal, fotoperfil, id}: Props) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  // const fotoPadrao = 'https://cdn-icons-png.flaticon.com/512/4675/4675159.png'

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [telefoneOriginal])

  const EditarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      editar({
        nome,
        email,
        telefone,
        fotoperfil,
        id
      }))
    navigate('/')
  }

  return (
      <div>
      <S.Header>
        <S.Separador2>
          <S.FotoDePerfil src={fotoperfil} alt="Foto de Perfil" />
            <p>{nome}</p>
          </S.Separador2>
        <S.Separador3>
          <div>
            <S.BotaoSalvar type="submit" form="formId">Salvar</S.BotaoSalvar>
            </div>
          </S.Separador3>
        </S.Header>
        <S.SectionForm>
          <S.FormInfoContatos id="formId" onSubmit={EditarContato}>
            <S.StyledInput>
            <S.InfoInput
              required
              value={nome}
              onChange={({target}) => setNome(target.value)}
              type="text"
              placeholder="Nome" />
            </S.StyledInput>
          <S.StyledInput>
            <S.InfoInput
              required
              value={email}
              onChange={({target}) => setEmail(target.value)}
              type="email"
              placeholder="E-mail" />
            </S.StyledInput>
          <S.StyledInput>
            <S.PhoneInput
              mask={'(99) 99999-9999'}
              required
              value={telefone}
              onChange={({target}) => setTelefone(target.value)}
              type="text"
              placeholder="Telefone" />
            </S.StyledInput>
        </S.FormInfoContatos>
      </S.SectionForm>
    </div>
    // <div>
    // <S.Header>
    //   <S.Separador2>
    //     <S.FotoDePerfil src={fotoPadrao} alt="Foto de Perfil" />
    //     <p>Nome</p>
    //   </S.Separador2>
    //   <S.Separador3>
    //   <div>
    //   <S.BotaoSalvar type="submit" form="formId">Salvar</S.BotaoSalvar>
    //   </div>
    //   </S.Separador3>
    // </S.Header>
    // <S.SectionForm>
    //   <S.FormInfoContatos id="formId" onSubmit={EditarContato}>
    //     <S.StyledInput>
    //       <S.InfoInput
    //         required
    //         value={Snome}
    //         onChange={({target}) => setSNome(target.value)}
    //         type="text"
    //         placeholder="Nome" />
    //       </S.StyledInput>
    //     <S.StyledInput>
    //       <S.InfoInput
    //         required
    //         value={Semail}
    //         onChange={({target}) => setSEmail(target.value)}
    //         type="email"
    //         placeholder="E-mail" />
    //       </S.StyledInput>
    //     <S.StyledInput>
    //       <S.PhoneInput
    //         mask={'(99) 99999-9999'}
    //         required value={Stelefone}
    //         onChange={({target}) => setSTelefone(target.value)}
    //         type="text"
    //         placeholder="Telefone" />
    //       </S.StyledInput>
    //   </S.FormInfoContatos>
    // </S.SectionForm>
    // </div>
  )
}
