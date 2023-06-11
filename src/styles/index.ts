import {createGlobalStyle, styled} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', 'sans-serif';
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 280px 670px 1fr;
`
