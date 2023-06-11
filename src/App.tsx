import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import { Container, GlobalStyle } from './styles/'
import { BarraLateral } from "./containers/BarraLateral"
import { Header } from './components/Header'
import { store } from './store'
import { FormularioContato } from './containers/FormularioContato'
import { Home } from './pages/Home'
import { EditandoContatos } from './pages/editandoContatos'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <BarraLateral estaEditando={false}/>
      <Home />
      </>
    )
  },
  {
    path: '/adicionar',
    element: (
      <>
      <BarraLateral estaEditando/>
      <FormularioContato />
      </>
    )
  },
  {
    path: '/editando/:id',
    element: (
      <>
      <BarraLateral estaEditando/>
      <EditandoContatos />
      </>
    )
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <Header/>
      <Container>
      <RouterProvider router={rotas}/>
      </Container>
    </Provider>
  )
}

export default App
