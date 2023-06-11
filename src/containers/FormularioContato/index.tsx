import { useDispatch } from "react-redux"
import { FormEvent, useState } from "react"

import * as S from "./styles"
import { adicionar } from "../../store/reducers/contatos"
import { useNavigate } from "react-router-dom"

export const FormularioContato = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const fotoPadrao = 'https://cdn-icons-png.flaticon.com/512/4675/4675159.png'
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const CriarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(adicionar(({
      nome,
      email,
      telefone,
      fotoperfil: fotoPadrao
    })))
    navigate('/')
  }

  return (
    <div>
    <S.Header>
      <S.Separador2>
        <S.FotoDePerfil src={fotoPadrao} alt="Foto de Perfil" />
        <p>Nome</p>
      </S.Separador2>
      <S.Separador3>
      <div>
      <S.BotaoSalvar type="submit" form="formId">Salvar</S.BotaoSalvar>
      </div>
      </S.Separador3>
    </S.Header>
    <S.SectionForm>
      <S.FormInfoContatos id="formId" onSubmit={CriarContato}>
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
          required value={telefone}
          onChange={({target}) => setTelefone(target.value)}
          type="text"
          placeholder="Telefone" />
        </S.StyledInput>
      </S.FormInfoContatos>
    </S.SectionForm>
    </div>
  )
}
