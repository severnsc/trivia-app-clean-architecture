import { StackNavigator, NavigationActions } from 'react-navigation'
import HomeScreenContainer from './src/containers/HomeScreenContainer'
import QuizScreenContainer from './src/containers/QuizScreenContainer'
import ResultsScreenContainer from './src/containers/ResultsScreenContainer'

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
    screen: ResultsScreenContainer,
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

const navigate = routeName => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName
    })
  );
}

export const resetNav = () => {
  _navigator.dispatch(
    NavigationActions.popToTop()
  )
}

export const navigateToHome = () => navigate('Home')
export const navigateToQuiz = () => navigate('Quiz')
export const navigateToResults = () => navigate('Results')