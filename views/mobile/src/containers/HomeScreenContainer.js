import { createGameAsync } from '../actions'
import { connect } from 'react-redux'
import Home from '../screens/Home'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    createGame: () => {
      dispatch(createGameAsync())
    }
  }
}

const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeScreenContainer