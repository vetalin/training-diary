import React from 'react'
import * as S from './App.styled'
import { MainPage } from 'components/MainPage/MainPage'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.GlobalStyles/>
      <Paper>
        <S.AppContainer>
          <MainPage/>
        </S.AppContainer>
      </Paper>
    </ThemeProvider>
  )
}
