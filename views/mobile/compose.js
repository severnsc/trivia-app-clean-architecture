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

export const createGame = createGamePresenter(createGameAsync)
export const answerQuestion = answerQuestionPresenter(dispatchAnswerQuestion, dispatchGetGameStatistics)