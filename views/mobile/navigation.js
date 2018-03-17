import { StackNavigator, NavigationActions } from 'react-navigation'
import HomeScreenContainer from './src/containers/HomeScreenContainer'
import QuizScreenContainer from './src/containers/QuizScreenContainer'
import Results from './src/screens/Results'

export const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreenContainer,
    navigationOptions: () => ({
      header: null
    })
  },
  Quiz: {
    screen: QuizScreenContainer
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