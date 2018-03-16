import React from 'react';
import { RootNavigator, setTopLevelNavigator} from './navigation'

export default App = () => (
  <RootNavigator 
    ref={navigatorRef => {
      setTopLevelNavigator(navigatorRef)
    }}
  />
)