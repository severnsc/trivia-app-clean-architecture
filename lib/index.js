const interactors = require('./interactors')

const createGameInteractor = interactors.createGameWithQuestions
const answerQuestionInteractor = interactors.answerQuestion
const getGameStatisticsInteractor = interactors.getGameStatistics

module.exports = {
  createGameInteractor,
  answerQuestionInteractor,
  getGameStatisticsInteractor
}