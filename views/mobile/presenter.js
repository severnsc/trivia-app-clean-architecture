const compose = require('./compose')
const globalViewModel = require('../globalViewModel')

const createGame = async () => {
  const game = await compose.createGame()
  const currentQuestion = game.questions[0]
  const answers = [
    ...currentQuestion.incorrectAnswers,
    currentQuestion.correctAnswer
  ]
  const currentQuestionNumber = 1
  const currentQuestionModel = globalViewModel.currentQuestion(
    currentQuestion.category,
    currentQuestion.text,
    answers,
    currentQuestionNumber
  )
  const gameModel = globalViewModel.game(game.id, currentQuestionModel)
  return gameModel
}

createGame().then(res => console.log(res))

module.exports = {
  createGame
}