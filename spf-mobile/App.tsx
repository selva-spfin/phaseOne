import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './src/services/store'
import { PersistGate } from 'redux-persist/integration/react'
import { PaperProvider} from 'react-native-paper';
import Page from './src/pages'
import { LogBox } from 'react-native';

type Props = {}
LogBox.ignoreLogs(['Warning: ...']); // Add specific warnings to ignore

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Page />
      </PersistGate>
    </Provider>
  )
}

export default App