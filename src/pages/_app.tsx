import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthenticationProvider } from '../contexts/Authentication'
import { InstitutionProvider } from '../contexts/Institution'


import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthenticationProvider>
      <InstitutionProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </InstitutionProvider>
    </AuthenticationProvider>
  )
}

export default MyApp
