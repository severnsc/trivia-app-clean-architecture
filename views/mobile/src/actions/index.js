import {
  createGame,
  answerQuestion,
  createAnswerModel
} from '../../compose'

import {
  navigateToQuiz,
  navigateToResults,
  resetNav
} from '../../navigation'

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
  return (dispatch, getState) => {
    dispatch(toggleLoading())
    navigateToQuiz()
    createGame().then(gameModel => {
      dispatch(updateViewModel(gameModel))
      dispatch(toggleLoading())
    })
  }
}

export const submitAnswer = answer => {
  return (dispatch, getState) => {
    const gameId = getState().viewModel.id
    const questionId = getState().viewModel.currentQuestionModel.id
    const answerModel = createAnswerModel(gameId, questionId, answer)
    const gameModel = answerQuestion(answerModel)
    dispatch(toggleLoading())
    dispatch(updateViewModel(gameModel))
    if (gameModel.complete){
      navigateToResults()
    }else{
      dispatch(toggleLoading())
    }
  }
}

export const restartGame = () => {
  return dispatch => {
    resetNav()
    dispatch(toggleLoading())
  }
}