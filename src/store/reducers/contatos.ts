import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContatoClass from "../../models/Contato";

type ContatoState = {
  itens: ContatoClass[]
}

const initialState: ContatoState = {
  itens: [
    {
      nome: 'Rafael Silva Santos',
      email:'ssrafa.2014@gmail.com',
      telefone: '(11) 94805-9983',
      fotoperfil: 'https://media.licdn.com/dms/image/D4D03AQGnNZhqiPqXDA/profile-displayphoto-shrink_800_800/0/1695396507672?e=1721865600&v=beta&t=sXUmCjy27b77nk7BLxcgA524QPl_kTap0R5LeyaDU4U',
      id: 1
    },
    {
      nome: 'Maicon Kuster',
      email:'ssmaicon.98@gmail.com',
      telefone: '(11) 95346-7684',
      fotoperfil: 'https://cdn-icons-png.flaticon.com/512/4675/4675159.png',
      id: 2
    },
    {
      nome: 'Pires Pereira',
      email:'pires14@gmail.com',
      telefone: '(11) 93568-4692',
      fotoperfil: 'https://cdn-icons-png.flaticon.com/512/4675/4675159.png',
      id: 3
    },
  ]
}

export const ContatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((contato) => contato.id !== action.payload)
    },
    adicionar: (state, action: PayloadAction<Omit<ContatoClass, 'id'>>) => {
      const NumeroExiste = state.itens.find((contato) => contato.telefone === action.payload.telefone)
      const EmailExiste = state.itens.find((contato) => contato.email.toLowerCase() === action.payload.email.toLowerCase())

      if (NumeroExiste) {
        alert('Já existe um contato com esse número')
      } if (EmailExiste) {
        alert('Já existe um contato com esse email')
      } else {
        const ultimaTarefa = state.itens[state.itens.length -1]

        const novaTarefa = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }

        state.itens.push(novaTarefa)
      }
    },
    editar: (state, action: PayloadAction<ContatoClass>) => {
      const ContatoIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id)

      if (ContatoIndex >= 0) {
        state.itens[ContatoIndex] = action.payload
      }
    }
  }
})


export const { remover, adicionar, editar } = ContatosSlice.actions
export const ContatoReducer = ContatosSlice.reducer
