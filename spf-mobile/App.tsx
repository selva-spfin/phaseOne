import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/services/store'
import { PersistGate } from 'redux-persist/integration/react'
import { PaperProvider} from 'react-native-paper';
import Page from './src/pages'

type Props = {}

const App = (props: Props) => {
  return (
    <PaperProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Page />
      </PersistGate>
    </Provider>
    </PaperProvider>
  )
}

export default App