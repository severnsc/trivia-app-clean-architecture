import React from 'react';
import { RootNavigator, setTopLevelNavigator} from './navigation'
import { Provider } from 'react-redux'
import store from './src/reducers'

export default App = () => (
  <Provider store={store}>
    <RootNavigator 
      ref={navigatorRef => {
        setTopLevelNavigator(navigatorRef)
      }}
    />
  </Provider>
)