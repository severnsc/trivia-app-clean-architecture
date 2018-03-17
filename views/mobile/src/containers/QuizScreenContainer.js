import { submitAnswer } from '../actions'
import { connect } from 'react-redux'
import Quiz from '../screens/Quiz'

const mapStateToProps = state => {
  return {
    loading: state.loading,
    category: state.viewModel.currentQuestionModel.questionCategory,
    questionText: state.viewModel.currentQuestionModel.questionText,
    answers: state.viewModel.currentQuestionModel.answers,
    questionNumber: state.viewModel.currentQuestionModel.questionNumber
  }
}

const mapDispatchToProps = dispatch => {
  return {
    answerQuestion: answer => {
      dispatch(submitAnswer)
    }
  }
}

const QuizScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default QuizScreenContainer