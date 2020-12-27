import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    margin: 0;
    padding: 0;
  }
`
export const AppContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
`
