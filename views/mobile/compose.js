const globalCompose = require('../globalCompose')
const testStorageAdapter = require('../../adapters/testStorageAdapter')
const core = require('../../lib')

const createGameAdapter = testStorageAdapter.createGame
const getGameById = testStorageAdapter.getGameById
const updateGame = testStorageAdapter.updateGame

const createGame = globalCompose.createGameWithQuestions(createGameAdapter)
const answerQuestion = core.answerQuestionInteractor(getGameById)(updateGame)
const getGameStatistics = core.getGameStatisticsInteractor(getGameById)

module.exports = {
  createGame,
  answerQuestion,
  getGameStatistics
}