const interactors = require('./interactors')
const fetch = require('node-fetch')

const createNewGame = () => {
  const questions = interactors.getQuestions(fetch).then(questions)
  const newGame = interactors.newGame(questions, game => {})
  const dtoQuestions = newGame.questions.map(question => ({
      id: question.id,
      category: question.category,
      text: question.text, 
      answers: [...question.incorrectAnswers, question.correctAnswer]
    })
  )
  return Object.assign({}, newGame, {questions: dtoQuestions})
}

const submitAnswer = (gameId, questionId, answer) => {
  const game = interactors.submitAnswer(id => {}, gameId, questionId, answer, game => {})
  const dtoQuestions = game.questions.map(question => ({
      id: question.id,
      category: question.category,
      text: question.text, 
      answers: [...question.incorrectAnswers, question.correctAnswer]
    })
  )
  return Object.assign({}, game, {questions: dtoQuestions})
}

module.exports = {
  createNewGame,
  submitAnswer
}