import { restartGame } from '../actions'
import { connect } from 'react-redux'
import Results from '../screens/Results'

const mapStateToProps = state => {
  return {
    totalCorrect: state.viewModel.totalCorrect,
    totalAnswered: state.viewModel.totalAnswered,
    answeredQuestions: state.viewModel.answeredQuestions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    restartGame: () => {
      dispatch(restartGame())
    }
  }
}

const ResultsScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsScreenContainer