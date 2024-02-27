import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context'
import {
  CustomerProvider,
  CustomerConsumer,
} from 'src/contexts/customers-context'
import { LeadProvider, LeadConsumer } from 'src/contexts/lead-context'
import { Provider } from 'react-redux';
import { useNProgress } from 'src/hooks/use-nprogress'
import { createTheme } from 'src/theme'
import { createEmotionCache } from 'src/utils/create-emotion-cache'
import 'simplebar-react/dist/simplebar.min.css'
import './index.css'
import { store } from 'src/redux/store'

const clientSideEmotionCache = createEmotionCache()

const SplashScreen = () => null

const App = props => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  useNProgress()

  const getLayout = Component.getLayout ?? (page => page)

  const theme = createTheme()

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title></title>
        <meta name="viewport"
content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
        <AuthProvider>
          <CustomerProvider>
            <LeadProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthConsumer>
                  {auth =>
                    auth.isLoading ? (
                      <SplashScreen />
                    ) : (
                      getLayout(<Component {...pageProps} />)
                    )
                  }
                </AuthConsumer>
              </ThemeProvider>
            </LeadProvider>
          </CustomerProvider>
        </AuthProvider>
        </Provider>
      </LocalizationProvider>
    </CacheProvider>
  )
}

export default App
