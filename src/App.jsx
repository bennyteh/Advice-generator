import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { Div } from './app-styled'
import Card from './card/card'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Card />
      </Div>
    </ThemeProvider>
  )
}

export default App