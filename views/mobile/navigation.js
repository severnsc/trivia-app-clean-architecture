import { StackNavigator, NavigationActions } from 'react-navigation'
import Home from './src/screens/Home'
import Quiz from './src/screens/Quiz'
import Results from './src/screens/Results'

export const RootNavigator = StackNavigator({
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

let _navigator;

export const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
}

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    })
  );
}

export const navigateToHome = () => navigate('Home', {})
export const navigateToQuiz = () => navigate('Quiz', {})
export const navigateToResults = () => navigate('Results', {})