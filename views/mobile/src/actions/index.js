import { createGame, answerQuestion } from '../../compose'
import { navigateToQuiz } from '../../navigation'

export const TOGGLE_LOADING = "TOGGLE_LOADING"
export const UPDATE_VIEW_MODEL = "UPDATE_VIEW_MODEL"

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING
  }
}

export const updateViewModel = viewModel => {
  return {
    type: UPDATE_VIEW_MODEL,
    viewModel
  }
}

//Async actions

export const createGameAsync = () => {
  return dispatch => {
    navigateToQuiz()
    dispatch(toggleLoading())
    createGame().then(gameModel => {
      dispatch(updateViewModel(gameModel))
      dispatch(toggleLoading())
    })
  }
}

export const submitAnswer = answer => {
  return (dispatch, getState) => {
    const answerModel = {
      gameId: getState().viewModel.id,
      questionId: getState().viewModel.currentQuestionModel.id,
      value: answer
    }
    const gameModel = answerQuestion(answerModel)
    dispatch(updateViewModel(gameModel))
  }
}