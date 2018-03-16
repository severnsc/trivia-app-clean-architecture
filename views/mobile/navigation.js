import { StackNavigator } from 'react-navigation'
import Home from './src/screens/Home'
import Quiz from './src/screens/Quiz'
import Results from './src/screens/Results'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  },
  Quiz: {
    screen: Quiz
  },
  Results: {
    screen: Results,
    navigationOptions: () => ({
      header: null
    })
  },
},
{
  initialRouteName: 'Home'
})

export default RootNavigator