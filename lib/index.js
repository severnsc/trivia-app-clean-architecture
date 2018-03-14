const interactors = require('./interactors')
const entities = require('./entities')

const createGameInteractor = interactors.createGameWithQuestions
const answerQuestionInteractor = interactors.answerQuestion
const getGameStatisticsInteractor = interactors.getGameStatistics
const createQuestionEntity = entities.createQuestion

module.exports = {
  createGameInteractor,
  answerQuestionInteractor,
  getGameStatisticsInteractor,
  createQuestionEntity
}