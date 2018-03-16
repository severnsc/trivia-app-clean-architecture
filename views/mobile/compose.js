import { createGameWithQuestions } from '../globalCompose'

import {
  createGameAdapter,
  getGameByIdAdapter,
  updateGameAdapter
} from '../../adapters/testStorageAdapter'

import {
  answerQuestionInteractor,
  getGameStatisticsInteractor
} from '../../lib'

import {
  createGamePresenter,
  answerQuestionPresenter
} from './presenter'

const createGameAsync = createGameWithQuestions(createGameAdapter)
const dispatchAnswerQuestion = answerQuestionInteractor(getGameByIdAdapter)(updateGameAdapter)
const dispatchGetGameStatistics = getGameStatisticsInteractor(getGameByIdAdapter)

const createGame = createGamePresenter(createGameAsync)
const answerQuestion = answerQuestionPresenter(dispatchAnswerQuestion, dispatchGetGameStatistics)

module.exports = {
  createGame,
  answerQuestion
}