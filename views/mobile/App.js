import React from 'react';
import Home from './src/screens/Home'
import { createGame } from './compose'

export default App = () => (
  <Home createGame={createGame} />
)