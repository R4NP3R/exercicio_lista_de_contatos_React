class ContatoClass {
  nome: string
  email: string
  telefone: string
  fotoperfil: string
  id: number

  constructor(
    nome: string,
    email: string,
    telefone: string,
    fotoperfil: string,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.fotoperfil = fotoperfil
    this.id = id
  }
}

export default ContatoClass
