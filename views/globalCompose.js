const core = require('../lib')
const opentdbAdapter = require('../adapters/opentdbAdapter')

const createGameWithQuestions = core.createGameInteractor(opentdbAdapter.fetchQuestions)

module.exports = {
  createGameWithQuestions
}