import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AuthenticationProvider } from '../contexts/Authentication'
import { InstitutionProvider } from '../contexts/Institution'
import { InstitutionsProvider } from '../contexts/Institutions'
import { UsersProvider } from '../contexts/Users'


import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthenticationProvider>
      <UsersProvider>
        <InstitutionsProvider>
          <InstitutionProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
              <GlobalStyle />
            </ThemeProvider>
          </InstitutionProvider>
        </InstitutionsProvider>
      </UsersProvider> 
    </AuthenticationProvider>
  )
}

export default MyApp
