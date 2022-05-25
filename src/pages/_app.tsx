import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { InstitutionProvider } from '../contexts/Institution'


import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <InstitutionProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </InstitutionProvider>
  )
}

export default MyApp
